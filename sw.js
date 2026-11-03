// ========== DAIRY MANAGER — SINGLE SERVICE WORKER v9.0 ==========
// Merged: Cache + FCM Background Push + Topic Support

const CACHE_NAME = 'dairy-manager-v9';
const RUNTIME_CACHE = 'dairy-runtime-v9';

const PRECACHE_URLS = [
  './',
  './index.html',
  './first-aid-data.js',
  './feed-data.js',
  './symptom-data.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './farm-photo.jpg',
  './my-photo.jpg'
];

// Firebase for SW
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCsdwJmEeZg0wa-OpKyccl7sbHk9fTXb6Q",
  authDomain: "dairy-manager-1.firebaseapp.com",
  projectId: "dairy-manager-1",
  storageBucket: "dairy-manager-1.firebasestorage.app",
  messagingSenderId: "724466410200",
  appId: "1:724466410200:web:14f91a33287e95d8b1edad"
});

const messaging = firebase.messaging();
const VAPID_KEY = "BBXUSqS5IwIpfm5zuvGJwxLjJNmu-5bVq1VQ28JvHSbZ-TJGN0Mj_bNJSFLsq_qPTaold9ifAa3HqA69y4FzzKg";

messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || payload.data?.title || "Dairy Manager";
  const body = payload.notification?.body || payload.data?.body || "🐄 New Alert";
  const options = {
    body: body,
    icon: '/icon-192.png',
    badge: '/badge-72.png',
    data: payload.data || {},
    tag: "dairy-alerts-group",
    renotify: true,
    requireInteraction: true,
    vibrate: [200, 100, 200]
  };
  return self.registration.showNotification(title, options);
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({type: 'window', includeUncontrolled: true}).then((clientList) => {
      for (let client of clientList) {
        if (client.url.includes('khudra-khamar.github.io') || client.url.includes('dairy-manager-1')) {
          if ('focus' in client) return client.focus();
        }
      }
      if (clients.openWindow) return clients.openWindow('/Dairy/');
    })
  );
});

// ========== INSTALL ==========
self.addEventListener('install', function(event) {
  console.log('[SW v9] Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(PRECACHE_URLS).catch(function(err) {
        console.warn('[SW] Precache error:', err);
      });
    }).then(function() {
      return self.skipWaiting();
    })
  );
});

// MESSAGE
self.addEventListener('message', function(event) {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// ACTIVATE
self.addEventListener('activate', function(event) {
  console.log('[SW v9] Activating...');
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME && cacheName !== RUNTIME_CACHE) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(function() {
      return self.clients.claim();
    })
  );
});

// FETCH - Hybrid
self.addEventListener('fetch', function(event) {
  const url = new URL(event.request.url);
  if (event.request.method !== 'GET') return;
  if (!url.protocol.startsWith('http')) return;
  if (url.hostname.includes('gstatic.com') || url.hostname.includes('firebase') || url.hostname.includes('googleapis.com') || url.hostname.includes('identitytoolkit')) {
    event.respondWith(fetch(event.request).catch(() => new Response('', { status: 200 })));
    return;
  }
  const isHTML = event.request.mode === 'navigate' || url.pathname.endsWith('.html') || url.pathname.endsWith('/') || url.pathname === '/Dairy' || url.pathname === '/Dairy/';
  if (isHTML) {
    event.respondWith(
      caches.match(event.request).then(function(cached) {
        const fetchPromise = fetch(event.request).then(function(response) {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(c => c.put(event.request, clone));
          }
          return response;
        }).catch(() => cached);
        return cached || fetchPromise;
      })
    );
    return;
  }
  event.respondWith(
    caches.match(event.request).then(function(cachedResponse) {
      const fetchPromise = fetch(event.request).then(function(networkResponse) {
        if (networkResponse && networkResponse.status === 200) {
          const clone = networkResponse.clone();
          caches.open(RUNTIME_CACHE).then(c => c.put(event.request, clone));
        }
        return networkResponse;
      }).catch(() => null);
      return cachedResponse || fetchPromise;
    })
  );
});

console.log('[SW] Single SW v9 loaded — Cache + FCM');
