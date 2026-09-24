// ========== DAIRY MANAGER — SERVICE WORKER ==========
// Version: v4.0 (updated with First Aid + offline support)

const CACHE_NAME = 'dairy-manager-v4';
const RUNTIME_CACHE = 'dairy-runtime-v4';

// Files to cache on install
const PRECACHE_URLS = [
  './',
  './index.html',
  './first-aid-data.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './farm-photo.jpg',
  './my-photo.jpg'
];

// ========== INSTALL ==========
self.addEventListener('install', function(event) {
  console.log('[SW] Installing v4...');
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(PRECACHE_URLS).then(function() {
        console.log('[SW] Precached all files');
      }).catch(function(err) {
        console.warn('[SW] Precache error:', err);
        // Even if some files fail, continue
        return Promise.resolve();
      });
    }).then(function() {
      return self.skipWaiting();
    })
  );
});

// ========== ACTIVATE ==========
self.addEventListener('activate', function(event) {
  console.log('[SW] Activating v4...');
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
  
  // Skip non-GET requests
  if (event.request.method !== 'GET') return;
  
  // Skip chrome-extension or other protocols
  if (!url.protocol.startsWith('http')) return;
  
  // Firebase / Google Analytics — network first, no cache
  if (url.hostname.includes('gstatic.com') || 
      url.hostname.includes('google-analytics.com') ||
      url.hostname.includes('firebase') ||
      url.hostname.includes('googletagmanager.com')) {
    event.respondWith(
      fetch(event.request).catch(function() {
        // Offline — return empty response (Firebase/gtag will handle gracefully)
        return new Response('', { status: 200, statusText: 'Offline' });
      })
    );
    return;
  }
  
  // App files — cache first, then network
  event.respondWith(
    caches.match(event.request).then(function(cachedResponse) {
      if (cachedResponse) {
        return cachedResponse;
      }
      
      // Not in cache — fetch from network and cache
      return fetch(event.request).then(function(response) {
        // Don't cache bad responses
        if (!response || response.status !== 200 || response.type === 'error') {
          return response;
        }
        
        // Cache successful responses
        const responseToCache = response.clone();
        caches.open(RUNTIME_CACHE).then(function(cache) {
          cache.put(event.request, responseToCache);
        });
        
        return response;
      }).catch(function() {
        // Network failed — if navigation request, return index.html
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
        // Otherwise return a fallback
        return new Response('Offline', { status: 503, statusText: 'Offline' });
      });
    })
  );
});

// ========== MESSAGE (for skipWaiting) ==========
self.addEventListener('message', function(event) {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

console.log('[SW] Service Worker loaded');
