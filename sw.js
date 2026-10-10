 // ========== DAIRY MANAGER — SERVICE WORKER ==========
// Version: v8.0 — Hybrid Strategy

const CACHE_NAME = 'dairy-manager-v8';
const RUNTIME_CACHE = 'dairy-runtime-v8';

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

// ========== INSTALL ==========
self.addEventListener('install', function(event) {
  console.log('[SW] Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(PRECACHE_URLS).then(function() {
        console.log('[SW] Precached');
      }).catch(function(err) {
        console.warn('[SW] Precache error:', err);
      });
    }).then(function() {
      return self.skipWaiting();
    })
  );
});

// ========== MESSAGE ==========
self.addEventListener('message', function(event) {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// ========== ACTIVATE ==========
self.addEventListener('activate', function(event) {
  console.log('[SW] Activating...');
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME && cacheName !== RUNTIME_CACHE) {
            console.log('[SW] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(function() {
      return self.clients.claim();
    })
  );
});

// ========== FETCH ==========
self.addEventListener('fetch', function(event) {
  const url = new URL(event.request.url);
  
  if (event.request.method !== 'GET') return;
  if (!url.protocol.startsWith('http')) return;
  
  // Firebase / Google — network only
  if (url.hostname.includes('gstatic.com') || 
      url.hostname.includes('google-analytics.com') ||
      url.hostname.includes('firebase') ||
      url.hostname.includes('googletagmanager.com') ||
      url.hostname.includes('googleapis.com') ||
      url.hostname.includes('identitytoolkit')) {
    event.respondWith(
      fetch(event.request).catch(function() {
        return new Response('', { status: 200, statusText: 'Offline' });
      })
    );
    return;
  }
  
  // ===== HTML / Navigation — Network First =====
  const isHTML = event.request.mode === 'navigate' || 
                 url.pathname.endsWith('.html') ||
                 url.pathname.endsWith('/') ||
                 url.pathname === '/Dairy' ||
                 url.pathname === '/Dairy/';
  
  if (isHTML) {
    event.respondWith(
      fetch(event.request).then(function(response) {
        if (response && response.status === 200) {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then(function(cache) {
            cache.put(event.request, responseToCache);
          });
        }
        return response;
      }).catch(function() {
        return caches.match(event.request).then(function(cached) {
          return cached || caches.match('./index.html');
        });
      })
    );
    return;
  }
  
  // ===== JS / JSON / CSS / Images — Cache First + Background Update =====
  event.respondWith(
    caches.match(event.request).then(function(cachedResponse) {
      // Background-এ নতুন version check (stale-while-revalidate)
      const fetchPromise = fetch(event.request).then(function(networkResponse) {
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(RUNTIME_CACHE).then(function(cache) {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      }).catch(function() {
        return null;
      });
      
      // Cache থাকলে সাথে সাথে দেখাই (background-এ update হবে)
      return cachedResponse || fetchPromise;
    })
  );
});

console.log('[SW] Service Worker loaded — v8 Hybrid');