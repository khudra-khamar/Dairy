// firebase-messaging-sw.js - Lifetime Valid Token - B5R8JXHU Style - V109.1 FINAL
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCsdwJmEeZg0wa-OpKyccI7sbHk9fTXb6Q",
  authDomain: "dairy-manager-1.firebaseapp.com",
  projectId: "dairy-manager-1",
  storageBucket: "dairy-manager-1.firebasestorage.app",
  messagingSenderId: "724466410200",
  appId: "1:724466410200:web:14f91a33287e95d8b1edad",
  measurementId: "G-ETEEL2QSNY"
});

const messaging = firebase.messaging();
const VAPID_KEY = "BBXUSqS5IwIpfm5zuvGJwxLjJNmu-5bVq1VQ28JvHSbZ-TJGN0Mj_bNJSFLsq_qPTaold9ifAa3HqA69y4FzzKg";

messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || payload.data?.title || '🐄 Dairy Alert';
  const options = {
    body: payload.notification?.body || payload.data?.body || 'New Task Pending',
    icon: '/icon-192.png',
    badge: '/badge.png',
    data: payload.data,
    requireInteraction: true,
    vibrate: [200, 100, 200]
  };
  self.registration.showNotification(title, options);
});

self.addEventListener('pushsubscriptionchange', async (event) => {
  event.waitUntil((async () => {
    try {
      const newToken = await messaging.getToken({ vapidKey: VAPID_KEY });
      if (newToken) {
        const db = await new Promise((resolve, reject) => {
          const req = indexedDB.open('fcmBackup', 1);
          req.onupgradeneeded = () => req.result.createObjectStore('tokens');
          req.onsuccess = () => resolve(req.result);
          req.onerror = () => reject(req.error);
        });
        const tx = db.transaction('tokens', 'readwrite');
        tx.objectStore('tokens').put({token: newToken, time: Date.now()}, 'latest');
      }
    } catch (err) {}
  })());
});

self.addEventListener('periodicsync', (event) => {
  if (event.tag === 'fcm-token-refresh') {
    event.waitUntil(messaging.getToken({ vapidKey: VAPID_KEY }).then(()=>{}));
  }
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});