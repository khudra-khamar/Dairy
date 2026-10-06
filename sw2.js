// ========== DAIRY MANAGER — SERVICE WORKER v27.1 (Step 1 Fix) ==========
// Fixes: No auto-reload loop on refresh, no exit modal on update check

const CACHE_NAME = 'dairy-manager-v27-1';
const RUNTIME_CACHE = 'dairy-runtime-v27-1';

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

// INSTALL - NO auto skipWaiting to prevent reload loop
self.addEventListener('install', function(event) {
  console.log('[SW] Installing v27.1 - No auto skipWaiting');
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(PRECACHE_URLS).catch(function(err) {
        console.warn('[SW] Precache error:', err);
      });
    })
    // NO skipWaiting here - only on manual update
  );
});

// MESSAGE - Manual update only
self.addEventListener('message', function(event) {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    console.log('[SW] Manual SKIP_WAITING received');
    self.skipWaiting();
  }
});

// ACTIVATE
self.addEventListener('activate', function(event) {
  console.log('[SW] Activating v27.1...');
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

// FETCH
self.addEventListener('fetch', function(event) {
  const url = new URL(event.request.url);
  if (event.request.method !== 'GET') return;
  if (!url.protocol.startsWith('http')) return;
  
  // Firebase - network only
  if (url.hostname.includes('gstatic.com') || 
      url.hostname.includes('firebase') ||
      url.hostname.includes('google')) {
    return; // Let browser handle
  }
  
  // HTML - Network first, but no auto cache update that triggers reload loop
  const isHTML = event.request.mode === 'navigate' || url.pathname.endsWith('.html') || url.pathname === '/' || url.pathname.endsWith('/Dairy') || url.pathname.endsWith('/Dairy/');
  
  if (isHTML) {
    event.respondWith(
      fetch(event.request).then(function(response) {
        if (response && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(function(cache) { cache.put(event.request, clone); });
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
  
  // Other - Cache first
  event.respondWith(
    caches.match(event.request).then(function(cached) {
      if (cached) return cached;
      return fetch(event.request).then(function(response) {
        if (!response || response.status !== 200) return response;
        const clone = response.clone();
        caches.open(RUNTIME_CACHE).then(function(cache) { cache.put(event.request, clone); });
        return response;
      });
    })
  );
});
