/* ============================================================
   sw.js
   Dairy Manager — Main Service Worker
   Caching (Hybrid) + FCM Push Notifications (merged)
   Version: 2026-11-06-v10 (Offline Support Fixed)
   ============================================================ */

const CACHE_NAME = 'dairy-v10-2026-11-06';
const DATA_CACHE = 'dairy-data-v10';

/* ---------- Static assets (first install-এ cache হবে) ---------- */
const STATIC_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './farm-photo.jpg',
  './my-photo.jpg',
  './first-aid-data.js',
  './feed-data.js',
  './symptom-data.js',
  './privacy-policy.html',
  // 👇 ফায়ারবেসের স্ক্রিপ্টগুলো ক্যাশে রাখার জন্য যোগ করা হলো
  'https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js',
  'https://www.gstatic.com/firebasejs/8.10.1/firebase-analytics.js',
  'https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js',
  'https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js',
  'https://www.gstatic.com/firebasejs/8.10.1/firebase-auth.js'
];

/* ============================================================
   FCM — Firebase Messaging
   ============================================================ */
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyCsdwJmEeZg0wa-OpKyccl7sbHk9fTXb6Q",
  authDomain: "dairy-manager-1.firebaseapp.com",
  projectId: "dairy-manager-1",
  storageBucket: "dairy-manager-1.appspot.com",
  messagingSenderId: "724466410200",
  appId: "1:724466410200:web:14f91a33287e95d8b1edad"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log('[sw.js] BG message:', payload);
  const n = payload.notification || {};
  const d = payload.data || {};

  return self.registration.showNotification(
    n.title || d.title || 'Dairy Manager',
    {
      body: n.body || d.body || 'আপনার জন্য নতুন তথ্য আছে',
      icon: n.icon || d.icon || './icon-192.png',
      badge: './icon-192.png',
      vibrate: [200, 100, 200],
      tag: d.tag || 'dairy-alert',
      requireInteraction: true,
      data: {
        url: d.url || './index.html',
        deviceId: d.deviceId || '',
        timestamp: Date.now()
      },
      actions: [
        { action: 'open', title: 'খুলুন' },
        { action: 'close', title: 'বন্ধ' }
      ]
    }
  );
});

self.addEventListener('notificationclick', function (event) {
  event.notification.close();
  if (event.action === 'close') return;
  const targetUrl = (event.notification.data && event.notification.data.url) || './index.html';

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (list) {
      for (const c of list) {
        if ('focus' in c) {
          if ('navigate' in c) c.navigate(targetUrl);
          return c.focus();
        }
      }
      if (clients.openWindow) return clients.openWindow(targetUrl);
    })
  );
});

/* ============================================================
   Install — skipWaiting + assets pre-cache
   ============================================================ */
self.addEventListener('install', function (event) {
  console.log('[sw.js] Installing v10...');
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return Promise.all(
        STATIC_ASSETS.map(function (url) {
          // cross-origin (gstatic) ফাইলগুলো ক্যাশে করার জন্য mode: 'cors' দরকার হতে পারে
          return fetch(url, { mode: 'cors' }).then(function(res) {
             if(res.ok) return cache.put(url, res);
          }).catch(function (e) {
            console.warn('[sw.js] cache miss:', url, e);
          });
        })
      );
    })
  );
});

/* ============================================================
   Activate — পুরনো cache পরিষ্কার
   ============================================================ */
self.addEventListener('activate', function (event) {
  console.log('[sw.js] Activated v10');
  event.waitUntil(
    caches.keys().then(function (names) {
      return Promise.all(
        names.map(function (name) {
          if (name !== CACHE_NAME && name !== DATA_CACHE) {
            console.log('[sw.js] Deleting old cache:', name);
            return caches.delete(name);
          }
        })
      );
    }).then(function () {
      return self.clients.claim();
    })
  );
});

/* ============================================================
   Fetch — Hybrid
   HTML → Network-first | Data/JS/CSS/Images → Cache-first
   Firebase scripts → Cache-first (Offline support)
   ============================================================ */
self.addEventListener('fetch', function (event) {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  const isFirebase = url.href.includes('gstatic.com');

  // ফায়ারবেসের রিকোয়েস্ট বাদে বাকি সব ক্রস-অরিজিন রিকোয়েস্ট বাদ দেব
  if (url.origin !== self.location.origin && !isFirebase) return;

  const accept = req.headers.get('accept') || '';
  const isHTML  = accept.includes('text/html');
  const isData  = /\.(js|json)$/.test(url.pathname);
  const isAsset = /\.(css|png|jpg|jpeg|svg|woff2?|ttf)$/.test(url.pathname);

  if (isHTML) {
    event.respondWith(
      fetch(req).then(function (res) {
        const copy = res.clone();
        caches.open(CACHE_NAME).then(function (c) { c.put(req, copy); });
        return res;
      }).catch(function () {
        return caches.match(req).then(function (r) {
          return r || caches.match('./index.html');
        });
      })
    );
  } else if (isData || isAsset || isFirebase) {
    // ফায়ারবেস স্ক্রিপ্ট হলে প্রথমে ক্যাশে খুঁজবে, না পেলে নেটওয়ার্ক থেকে আনবে
    event.respondWith(
      caches.match(req).then(function (cached) {
        if (cached) return cached;
        return fetch(req).then(function (res) {
          const copy = res.clone();
          caches.open(DATA_CACHE).then(function (c) { c.put(req, copy); });
          return res;
        });
      })
    );
  }
});

self.addEventListener('message', function (event) {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});