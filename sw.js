// ========== DAIRY MANAGER — SERVICE WORKER ==========
// Version: v6.0 (Full Network-First — no version bump needed)

const CACHE_NAME = 'dairy-manager-net-first';
const RUNTIME_CACHE = 'dairy-runtime-net-first';

// Files to cache on install (offline fallback)
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
        console.log('[SW] Precached all files');
      }).catch(function(err) {
        console.warn('[SW] Precache error:', err);
        return Promise.resolve();
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

// ========== FETCH — FULL NETWORK FIRST ==========
self.addEventListener('fetch', function(event) {
  const url = new URL(event.request.url);
  
  // Skip non-GET requests
  if (event.request.method !== 'GET') return;
  
  // Skip chrome-extension / non-http protocols
  if (!url.protocol.startsWith('http')) return;
  
  // ===== Firebase / Google — Network only, no cache =====
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
  
  // ===== Everything else — NETWORK FIRST =====
  // HTML, JS, JSON, CSS, images, manifest — সব network first
  event.respondWith(
    fetch(event.request).then(function(response) {
      // Success → cache-এ update করি (offline fallback-এর জন্য)
      if (response && response.status === 200 && response.type !== 'opaque') {
        try {
          const responseToCache = response.clone();
          caches.open(RUNTIME_CACHE).then(function(cache) {
            cache.put(event.request, responseToCache);
          });
        } catch(e) {
          console.warn('[SW] Cache put failed:', e);
        }
      }
      return response;
    }).catch(function(err) {
      // Network fail → cache fallback (offline)
      console.log('[SW] Network failed, using cache:', url.pathname);
      return caches.match(event.request).then(function(cached) {
        if (cached) return cached;
        
        // HTML navigation হলে index.html fallback
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
        
        // কিছুই না পেলে
        return new Response('Offline', { 
          status: 503, 
          statusText: 'Offline',
          headers: { 'Content-Type': 'text/plain' }
        });
      });
    })
  );
});

console.log('[SW] Service Worker loaded — FULL NETWORK FIRST');