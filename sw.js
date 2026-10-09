// ========== DAIRY MANAGER — SERVICE WORKER ==========
// Version: v7.0 — HTML Network-First, Data Day-Cache

const CACHE_NAME = 'dairy-manager-v7';
const RUNTIME_CACHE = 'dairy-runtime-v7';
const DATA_CACHE = 'dairy-data-v7';

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
          if (cacheName !== CACHE_NAME && 
              cacheName !== RUNTIME_CACHE && 
              cacheName !== DATA_CACHE) {
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
  
  // Skip non-GET
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
  
  // ===== HTML — Network First (always) =====
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
  
  // ===== Data files (JS/JSON) — Day Cache =====
  const isData = url.pathname.endsWith('.js') || url.pathname.endsWith('.json');
  
  if (isData) {
    event.respondWith(dayCacheStrategy(event.request));
    return;
  }
  
  // ===== Other (images, css) — Cache First =====
  event.respondWith(
    caches.match(event.request).then(function(cached) {
      if (cached) return cached;
      return fetch(event.request).then(function(response) {
        if (response && response.status === 200) {
          const responseToCache = response.clone();
          caches.open(RUNTIME_CACHE).then(function(cache) {
            cache.put(event.request, responseToCache);
          });
        }
        return response;
      }).catch(function() {
        return new Response('Offline', { status: 503 });
      });
    })
  );
});

// ===== DAY CACHE STRATEGY =====
// প্রতিদিন একবার নতুন version check করে — বাকি সময় cache থেকে দ্রুত serve
async function dayCacheStrategy(request) {
  const cache = await caches.open(DATA_CACHE);
  const cachedResponse = await cache.match(request);
  
  // আজকের date — cache key হিসেবে ব্যবহার করি
  const today = new Date().toISOString().split('T')[0];
  const dateKey = 'day-' + today + '-' + request.url;
  
  // আজ কি cache update করেছি?
  const dayCache = await caches.open(DATA_CACHE);
  const todayCheck = await dayCache.match(dateKey);
  
  if (todayCheck && cachedResponse) {
    // আজ already update করা হয়েছে → cache থেকে serve
    console.log('[SW] Day cache hit:', request.url);
    return cachedResponse;
  }
  
  // আজ এখনো update করা হয়নি → network থেকে আনি
  try {
    const response = await fetch(request);
    if (response && response.status === 200) {
      // Data cache-এ save
      cache.put(request, response.clone());
      // আজকের date marker save
      cache.put(dateKey, new Response('updated'));
    }
    return response;
  } catch(e) {
    // Network fail → cache থেকে
    if (cachedResponse) return cachedResponse;
    return new Response('Offline', { status: 503 });
  }
}

console.log('[SW] Service Worker loaded — v7 Day Cache');