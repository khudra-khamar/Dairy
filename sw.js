// ========== DAIRY MANAGER — SERVICE WORKER v9 - Unified + FCM ==========
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

// Firebase for background push - import inside SW
try {
  importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
  importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');
  firebase.initializeApp({
    apiKey: "AIzaSyCsdwJmEeZg0wa-OpKyccl7sbHk9fTXb6Q",
    authDomain: "dairy-manager-1.firebaseapp.com",
    projectId: "dairy-manager-1",
    storageBucket: "dairy-manager-1.firebasestorage.app",
    messagingSenderId: "724466410200",
    appId: "1:724466410200:web:14f91a33287e95d8b1edad"
  });
  const messaging = firebase.messaging();
  
  // Background push - App বন্ধ থাকলেও 5-6 AM এ আসবে
  messaging.onBackgroundMessage(function(payload) {
    console.log('[SW v9] Background push:', payload);
    // Always show notification - fix old bug where return early blocked
    let title = '🐄 Dairy Manager';
    let body = 'আপনার গবাদি পশুর Alert আছে';
    let url = '/Dairy/';
    
    if (payload.notification) {
      title = payload.notification.title || title;
      body = payload.notification.body || body;
    }
    if (payload.data) {
      if (payload.data.title) title = payload.data.title;
      if (payload.data.body) body = payload.data.body;
      if (payload.data.url) url = payload.data.url;
    }
    
    const options = {
      body: body,
      icon: './icon-192.png',
      badge: './icon-192.png',
      data: { url: url, ...payload.data },
      vibrate: [200, 100, 200],
      tag: 'dairy-alert-v9',
      requireInteraction: true,
      renotify: true
    };
    return self.registration.showNotification(title, options);
  });
  console.log('[SW v9] FCM Background handler ready');
} catch(e) {
  console.warn('[SW v9] FCM import failed:', e.message);
}

self.addEventListener('install', function(event) {
  console.log('[SW v9] Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(PRECACHE_URLS).catch(function(err){
        console.warn('[SW v9] Precache error:', err);
      });
    }).then(function() {
      return self.skipWaiting();
    })
  );
});

self.addEventListener('message', function(event) {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('activate', function(event) {
  console.log('[SW v9] Activating...');
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME && cacheName !== RUNTIME_CACHE) {
            console.log('[SW v9] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(function() {
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', function(event) {
  const url = new URL(event.request.url);
  if (event.request.method !== 'GET') return;
  if (!url.protocol.startsWith('http')) return;
  
  if (url.hostname.includes('gstatic.com') || 
      url.hostname.includes('google-analytics.com') ||
      url.hostname.includes('firebase') ||
      url.hostname.includes('googletagmanager.com') ||
      url.hostname.includes('googleapis.com') ||
      url.hostname.includes('identitytoolkit')) {
    event.respondWith(fetch(event.request).catch(function(){
      return new Response('', { status: 200 });
    }));
    return;
  }
  
  const isHTML = event.request.mode === 'navigate' || 
                 url.pathname.endsWith('.html') ||
                 url.pathname.endsWith('/') ||
                 url.pathname === '/Dairy' ||
                 url.pathname === '/Dairy/';
  
  if (isHTML) {
    event.respondWith(
      caches.match(event.request).then(function(cached) {
        const fetchPromise = fetch(event.request).then(function(response) {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(function(cache){ cache.put(event.request, clone); });
          }
          return response;
        }).catch(function(){ return cached; });
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
          caches.open(RUNTIME_CACHE).then(function(cache){ cache.put(event.request, clone); });
        }
        return networkResponse;
      }).catch(function(){ return null; });
      return cachedResponse || fetchPromise;
    })
  );
});

self.addEventListener('notificationclick', function(event) {
  console.log('[SW v9] Notification clicked');
  event.notification.close();
  const urlToOpen = event.notification.data?.url || '/Dairy/';
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function(clientList) {
      for (let i = 0; i < clientList.length; i++) {
        const client = clientList[i];
        if (client.url.includes('/Dairy/') && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(urlToOpen);
      }
    })
  );
});

console.log('[SW v9] Service Worker loaded - Unified + FCM');
