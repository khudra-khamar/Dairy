// ========== FIREBASE MESSAGING SERVICE WORKER v9 - Fixed ==========
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

messaging.onBackgroundMessage(function(payload) {
  console.log('[FCM-SW v9] Background:', payload);
  // FIXED: Always show, don't return early
  let title = payload.notification?.title || payload.data?.title || '🐄 Dairy Manager';
  let body = payload.notification?.body || payload.data?.body || 'আপনার গবাদি পশুর Alert আছে';
  const options = {
    body: body,
    icon: './icon-192.png',
    badge: './icon-192.png',
    tag: 'dairy-alert-v9',
    data: payload.data || {},
    vibrate: [200, 100, 200],
    requireInteraction: true,
    renotify: true
  };
  return self.registration.showNotification(title, options);
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  const urlToOpen = event.notification.data?.url || '/Dairy/';
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function(list) {
      for (let i = 0; i < list.length; i++) {
        if (list[i].url.includes('/Dairy/') && 'focus' in list[i]) return list[i].focus();
      }
      return clients.openWindow(urlToOpen);
    })
  );
});

console.log('[FCM-SW v9] Loaded - Fixed early return bug');
