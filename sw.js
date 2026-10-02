// ========== DAIRY MANAGER — SERVICE WORKER ==========
// Version: v5.0 (updated with Feed Guide + Admin features)

const CACHE_NAME = 'dairy-manager-v19';
const RUNTIME_CACHE = 'dairy-runtime-v19';

// Files to cache on install
const PRECACHE_URLS = [
  './',
  './index.html',
  './first-aid-data.js',
  './feed-data.js',
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
    })
}).then(function() {
  return self.skipWaiting();
})
  );
});

// ========== MESSAGE (Auto-Update Notification) ==========
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
  
  // Skip non-GET requests
  if (event.request.method !== 'GET') return;
  
  // Skip chrome-extension or other protocols
  if (!url.protocol.startsWith('http')) return;
  
  // Firebase / Google — network only, no cache
  if (url.hostname.includes('gstatic.com') || 
      url.hostname.includes('google-analytics.com') ||
      url.hostname.includes('firebase') ||
      url.hostname.includes('googletagmanager.com')) {
    event.respondWith(
      fetch(event.request).catch(function() {
        return new Response('', { status: 200, statusText: 'Offline' });
      })
    );
    return;
  }
  
  // ===== HTML / Navigation — NETWORK FIRST =====
  // HTML সবসময় নতুন version check করে — পুরনো cache ব্যবহার করে না
  const isHTML = event.request.mode === 'navigate' || 
                 url.pathname.endsWith('.html') ||
                 url.pathname.endsWith('/') ||
                 url.pathname === '/Dairy' ||
                 url.pathname === '/Dairy/';
  
  if (isHTML) {
    event.respondWith(
      fetch(event.request).then(function(response) {
        // নতুন version পেলে cache-ও update করি
        if (response && response.status === 200) {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then(function(cache) {
            cache.put(event.request, responseToCache);
          });
        }
        return response;
      }).catch(function() {
        // Network fail → cache fallback
        return caches.match(event.request).then(function(cached) {
          return cached || caches.match('./index.html');
        });
      })
    );
    return;
  }
  
  // ===== Other assets — CACHE FIRST =====
  event.respondWith(
    caches.match(event.request).then(function(cachedResponse) {
      if (cachedResponse) {
        return cachedResponse;
      }
      
      return fetch(event.request).then(function(response) {
        if (!response || response.status !== 200 || response.type === 'error') {
          return response;
        }
        
        const responseToCache = response.clone();
        caches.open(RUNTIME_CACHE).then(function(cache) {
          cache.put(event.request, responseToCache);
        });
        
        return response;
      }).catch(function() {
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
        return new Response('Offline', { status: 503, statusText: 'Offline' });
      });
    })
  );
});

// ========== MESSAGE (for skipWaiting) ==========


console.log('[SW] Service Worker loaded');
