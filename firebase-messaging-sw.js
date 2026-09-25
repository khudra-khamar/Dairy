// ========== FIREBASE MESSAGING SERVICE WORKER ==========
// Handles background push notifications

importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Firebase Config
firebase.initializeApp({
  apiKey: "AIzaSyCsdwJmEeZg0wa-OpKyccl7sbHk9fTXb6Q",
  authDomain: "dairy-manager-1.firebaseapp.com",
  projectId: "dairy-manager-1",
  storageBucket: "dairy-manager-1.firebasestorage.app",
  messagingSenderId: "724466410200",
  appId: "1:724466410200:web:14f91a33287e95d8b1edad",
  measurementId: "G-ETEEL2QSNY"
});

const messaging = firebase.messaging();

// Background message handler
messaging.onBackgroundMessage(function(payload) {
  console.log('[FCM-SW] Background message received:', payload);
  
  const notificationTitle = payload.notification?.title || '🐄 Dairy Manager';
  const notificationOptions = {
    body: payload.notification?.body || 'New alert!',
    icon: './icon-192.png',
    badge: './icon-192.png',
    tag: payload.data?.tag || 'dairy-alert',
    data: payload.data || {},
    vibrate: [200, 100, 200],
    requireInteraction: true
  };
  
  return self.registration.showNotification(notificationTitle, notificationOptions);
});

// Notification click — open app
self.addEventListener('notificationclick', function(event) {
  console.log('[FCM-SW] Notification clicked:', event);
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

console.log('[FCM-SW] Firebase Messaging Service Worker loaded');

