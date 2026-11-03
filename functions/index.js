// functions/index.js - Dairy Manager Push - Cloud Functions v2 - Topic Based
const {onSchedule} = require('firebase-functions/v2/scheduler');
const {onRequest} = require('firebase-functions/v2/https');
const admin = require('firebase-admin');
admin.initializeApp();

// Morning 5:30 AM IST = 00:00 UTC
exports.sendMorning5AM = onSchedule({schedule: '0 0 * * *', timeZone: 'Asia/Kolkata', region: 'asia-south1'}, async (event) => {
  const payload = {
    topic: 'all_users',
    notification: {
      title: '☀️ সকালের ডিউটি - দুধের হিসাব',
      body: 'গাভীর দুধ ও খাবারের হিসাব এখনই লিখে নিন।'
    },
    data: {
      type: 'morning_5am',
      click_action: '/Dairy/'
    }
  };
  const res = await admin.messaging().send(payload);
  console.log('5AM sent:', res);
  return res;
});

// Morning 7:30 AM IST = 02:00 UTC
exports.sendMorning7AM = onSchedule({schedule: '0 2 * * *', timeZone: 'Asia/Kolkata', region: 'asia-south1'}, async (event) => {
  const payload = {
    topic: 'all_users',
    notification: {
      title: '🔔 হিট / ভ্যাকসিন চেক',
      body: 'আজ কোন গাভীর হিট, PD বা ভ্যাকসিন আছে দেখে নিন।'
    },
    data: {
      type: 'morning_7am',
      click_action: '/Dairy/'
    }
  };
  const res = await admin.messaging().send(payload);
  console.log('7AM sent:', res);
  return res;
});

// Admin Broadcast - Called from admin-v2.html
exports.sendAdminBroadcast = onRequest({region: 'asia-south1', cors: true}, async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }
  // Simple secret check - use your secret
  const {title, message, secret} = req.body;
  if (secret !== 'dairy-admin-2026-secret') {
    return res.status(403).json({success: false, error: 'Invalid secret'});
  }
  if (!title || !message) {
    return res.status(400).json({success: false, error: 'Title and Message required'});
  }
  try {
    const payload = {
      topic: 'all_users',
      notification: {title: title, body: message},
      data: {type: 'admin_broadcast', click_action: '/Dairy/'}
    };
    const response = await admin.messaging().send(payload);
    console.log('Admin broadcast sent:', response);
    // Save history
    await admin.firestore().collection('notifHistory').add({
      title: title,
      message: message,
      sentAt: admin.firestore.FieldValue.serverTimestamp(),
      topic: 'all_users',
      messageId: response,
      sentBy: 'admin'
    });
    return res.json({success: true, sent: 'all_users topic', messageId: response});
  } catch(e) {
    console.error('Broadcast error:', e);
    return res.status(500).json({success: false, error: e.message});
  }
});
        
