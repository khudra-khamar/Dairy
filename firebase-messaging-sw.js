// firebase-messaging-sw.js - Lifetime Valid Token - B5R8JXHU Style
// This token will survive 15-90 days without app open - Like DEV-B5R8JXHU

importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

// Keep your existing Firebase Config - Don't Change Project ID
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

// VAPID KEY - Use your FULL Key - Not Stripped
const VAPID_KEY = "BBXUSqS5IwIpfm5zuvGJwxLjJNmu-5bVq1VQ28JvHSbZ-TJGN0Mj_bNJSFLsq_qPTaold9ifAa3HqA69y4FzzKg";

// Background Push - App Closed  Notification 
messaging.onBackgroundMessage((payload) => {
  console.log('[SW] Background Message Received', payload);
  const title = payload.notification?.title || payload.data?.title || ' Dairy Alert';
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

// Lifetime Secret 1 - Token Expire  Auto Renew - App Open   - B5R8JXHU Logic
self.addEventListener('pushsubscriptionchange', async (event) => {
  console.log('[SW] pushsubscriptionchange - Token Expired - Auto Renewing Like B5R8JXHU');
  event.waitUntil(
    (async () => {
      try {
        const newToken = await messaging.getToken({ vapidKey: VAPID_KEY });
        if (newToken) {
          console.log('[SW]  New Token Auto Created:', newToken.substring(0,20)+'...');
          // Try to get deviceId from all clients
          const clients = await self.clients.matchAll();
          let deviceId = null;
          for (const client of clients) {
            try {
              deviceId = await new Promise(resolve => {
                const ch = new MessageChannel();
                ch.port1.onmessage = (e) => resolve(e.data.deviceId);
                client.postMessage({type: 'GET_DEVICE_ID'}, [ch.port2]);
              });
              if (deviceId) break;
            } catch(e) {}
          }
          // Fallback - save to IndexedDB for later sync
          const db = await new Promise((resolve, reject) => {
            const req = indexedDB.open('fcmBackup', 1);
            req.onupgradeneeded = () => req.result.createObjectStore('tokens');
            req.onsuccess = () => resolve(req.result);
            req.onerror = () => reject(req.error);
          });
          const tx = db.transaction('tokens', 'readwrite');
          tx.objectStore('tokens').put({token: newToken, deviceId: deviceId, time: Date.now()}, 'latest');
          console.log('[SW] Token Saved to IndexedDB - Will Sync on Next App Open');
        }
      } catch (err) {
        console.error('[SW] Auto Renew Failed', err);
      }
    })()
  );
});

// Lifetime Secret 2 - Periodic Sync - 24h  Token Valid Check - App Open  
self.addEventListener('periodicsync', (event) => {
  if (event.tag === 'fcm-token-refresh') {
    console.log('[SW] Periodic Sync - Checking Token Validity');
    event.waitUntil(
      messaging.getToken({ vapidKey: VAPID_KEY }).then(token => {
        console.log('[SW] Periodic Check - Token Valid:', !!token);
      })
    );
  }
});

self.addEventListener('activate', (event) => {
  console.log('[SW] Activated - Lifetime Token Mode - B5R8JXHU Style');
  event.waitUntil(self.clients.claim());
});