/* ============================================================
   firebase-messaging-sw.js
   Dairy Manager — Background Notification Handler
   Version: 2026-10-11-v2 (fresh rebuild)
   ============================================================ */

// Firebase 8.10.1 compat (আপনার প্রজেক্টের version)
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Firebase config — MUST match index.html
firebase.initializeApp({
  apiKey: "AIzaSyCsdwJmEeZg0wa-OpKyccl7sbHk9fTXb6Q",
  authDomain: "dairy-manager-1.firebaseapp.com",
  projectId: "dairy-manager-1",
  storageBucket: "dairy-manager-1.appspot.com",
  messagingSenderId: "724466410200",
  appId: "1:724466410200:web:14f91a33287e95d8b1edad"
});

var messaging = firebase.messaging();

/* ------------------------------------------------------------
   Background Message Handler
   App বন্ধ / background-এ থাকলে এই handler চলে
   ------------------------------------------------------------ */
messaging.onBackgroundMessage(function (payload) {
  console.log('[firebase-messaging-sw] Background message received:', payload);

  var notification = payload.notification || {};
  var data = payload.data || {};

  var title = notification.title || data.title || 'Dairy Manager';
  var body  = notification.body  || data.body  || 'আপনার জন্য নতুন তথ্য আছে';
  var icon  = notification.icon  || data.icon  || './icon-192.png';
  var badge = './icon-192.png';
  var clickUrl = data.url || './index.html';

  var options = {
    body: body,
    icon: icon,
    badge: badge,
    vibrate: [200, 100, 200],
    tag: data.tag || 'dairy-alert',
    requireInteraction: true,
    data: {
      url: clickUrl,
      timestamp: Date.now(),
      deviceId: data.deviceId || ''
    },
    actions: [
      { action: 'open', title: 'খুলুন' },
      { action: 'close', title: 'বন্ধ' }
    ]
  };

  return self.registration.showNotification(title, options);
});

/* ------------------------------------------------------------
   Notification Click — App খুলবে
   ------------------------------------------------------------ */
self.addEventListener('notificationclick', function (event) {
  event.notification.close();

  // "বন্ধ" বাটন চাপলে কিছুই করবে না
  if (event.action === 'close') return;

  var targetUrl = (event.notification.data && event.notification.data.url)
    ? event.notification.data.url
    : './index.html';

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true })
      .then(function (clientList) {
        // যদি app আগে থেকে খোলা থাকে → focus করবে
        for (var i = 0; i < clientList.length; i++) {
          var client = clientList[i];
          if ('focus' in client) {
            client.navigate(targetUrl);
            return client.focus();
          }
        }
        // না থাকলে নতুন window খুলবে
        if (clients.openWindow) {
          return clients.openWindow(targetUrl);
        }
      })
  );
});

/* ------------------------------------------------------------
   Push event (fallback — যদি FCM auto-handler miss করে)
   ------------------------------------------------------------ */
self.addEventListener('push', function (event) {
  if (!event.data) return;
  // FCM auto-handler normally এটা handle করে,
  // তাই এখানে কিছু করছি না — duplicate notification এড়াতে
});

/* ------------------------------------------------------------
   Install & Activate — দ্রুত active হওয়ার জন্য
   ------------------------------------------------------------ */
self.addEventListener('install', function (event) {
  console.log('[firebase-messaging-sw] Installing...');
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  console.log('[firebase-messaging-sw] Activated');
  event.waitUntil(self.clients.claim());
});