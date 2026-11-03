// firebase-messaging-sw.js - Lifetime Valid Token - B5R8JXHU - Final
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCsdwJmEeZg0wa-OpKyccl7sbHk9fTXb6Q",",
  authDomain: "dairy-manager-1.firebaseapp.com",
  projectId: "dairy-manager-1",
  storageBucket: "dairy-manager-1.firebasestorage.app",
  messagingSenderId: "724466410200",
  appId: "1:724466410200:web:14f91a33287e95d8b1edad",
  measurementId: "G-ETEEL2QSNY"
});

const messaging = firebase.messaging();
const VAPID_KEY = "BBXUSqS5IwIpfm5zuvGJwxLjJNmu-5bVq1VQ28JvHSbZ-TJGN0Mj_bNJSFLsq_qPTaold9ifAa3HqA69y4FzzKg"; // Full VAPID from Screenshot

messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || payload.data?.title || "Dairy Manager";
  const body = payload.notification?.body || payload.data?.body || `🐄 ${payload.data?.count || ''} Alerts Pending`;
  const options = {
    body: body,
    icon: '/icon-192.png',
    badge: '/badge-72.png',
    data: payload.data,
    tag: "dairy-alerts-group",
    renotify: true,
    requireInteraction: true,
    vibrate: [200, 100, 200]
  };
  self.registration.showNotification(title, options);
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({type: 'window', includeUncontrolled: true}).then((clientList) => {
      for (let client of clientList) {
        if (client.url.includes('dairy-manager-1') || client.url.includes('khudra-khamar.github.io')) {
          if ('focus' in client) return client.focus();
        }
      }
      if (clients.openWindow) return clients.openWindow('/');
    })
  );
});

self.addEventListener('pushsubscriptionchange', async (event) => {
  event.waitUntil((async () => {
    try {
      const newToken = await self.registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: VAPID_KEY
      });
      console.log('Push subscription changed');
    } catch(e) { console.log('Push change error', e); }
  })());
});