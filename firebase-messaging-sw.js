// ========== FIREBASE MESSAGING SERVICE WORKER ==========
// Handles background push notifications - V108 Auto Renew Fix

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

// Helper - VAPID Key Convert
function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');
  const rawData = atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

// Background message handler
messaging.onBackgroundMessage(function(payload) {
  console.log('[FCM-SW] Background message received:', payload);
  
  let title = '🐄 Dairy Manager';
  let body = 'New alert!';
  
  if (payload.notification) {
    title = payload.notification.title || title;
    body = payload.notification.body || body;
  } else if (payload.data) {
    title = payload.data.title || title;
    body = payload.data.body || payload.data.message || body;
  }

  const notificationOptions = {
    body: body,
    icon: './icon-192.png',
    badge: './icon-192.png',
    vibrate: [200, 100, 200],
    data: payload.data || {}
  };
  
  return self.registration.showNotification(title, notificationOptions);
});

// Notification click — open app
self.addEventListener('notificationclick', function(event) {
  console.log('[FCM-SW] Notification clicked:', event);
  event.notification.close();
  
  const urlToOpen = '/Dairy/';
  
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

// === AUTO RENEW - Fix Permission Denied - V108 ===
self.addEventListener('pushsubscriptionchange', async function(event) {
  console.log('[FCM-SW] Push subscription changed - Auto renewing');
  try {
    const vapidKey = '[STRIPPED 86 bytes]';
    event.waitUntil(
      (async () => {
        const newSub = await self.registration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: urlBase64ToUint8Array(vapidKey)
        });
        console.log('[FCM-SW] New subscription auto created:', newSub);
        // Notify main app to refresh FCM token
        const allClients = await clients.matchAll({ includeUncontrolled: true });
        allClients.forEach(c => c.postMessage({ type: 'FCM_SUBSCRIPTION_CHANGED' }));
      })()
    );
  } catch (e) {
    console.error('[FCM-SW] Subscription renewal failed', e);
  }
});

console.log('[FCM-SW] Firebase Messaging Service Worker loaded successfully (v108 Auto Renew)');