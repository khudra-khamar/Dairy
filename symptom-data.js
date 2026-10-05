// ============================================
// DAIRY MANAGER — SYMPTOM CHECKER DATABASE
// Version: 1.0 — Complete 3-Language
// ============================================

// ============================================
// TRANSLATION HELPER
// ============================================
window.SYM_T = function(obj) {
  if (!obj) return '';
  const lang = (window.DB && DB.settings && DB.settings.lang) || 'bn';
  return obj[lang] || obj.bn || obj.en || '';
};

// ============================================
// URGENCY LABELS (৩ ভাষায়)
// ============================================
window.URGENCY_LABELS = {
  critical: {
    bn: '🚨 অতি জরুরি',
    en: '🚨 Critical',
    hi: '🚨 अति आवश्यक',
    color: '#C62828',
    bg: '#FFEBEE'
  },
  high: {
    bn: '⚠️ জরুরি',
    en: '⚠️ High',
    hi: '⚠️ आवश्यक',
    color: '#EF6C00',
    bg: '#FFF3E0'
  },
  medium: {
    bn: '🔶 মাঝারি',
    en: '🔶 Medium',
    hi: '🔶 मध्यम',
    color: '#F9A825',
    bg: '#FFFDE7'
  },
  low: {
    bn: '🟢 কম',
    en: '🟢 Low',
    hi: '🟢 कम',
    color: '#2E7D32',
    bg: '#E8F5E9'
  }
};

// ============================================
// UI LABELS (৩ ভাষায়)
// ============================================
window.SYM_UI = {
  title: {
    bn: '🔍 রোগ চিহ্নিতকারী',
    en: '🔍 Symptom Checker',
    hi: '🔍 रोग पहचानकर्ता'
  },
  subtitle: {
    bn: 'আপনার গরুর লক্ষণ বাছুন — সম্ভাব্য রোগ জানুন',
    en: 'Select symptoms — Find possible diseases',
    hi: 'लक्षण चुनें — संभावित रोग जानें'
  },
  warning: {
    bn: '⚠️ এটি ডাক্তারের বিকল্প নয়। সন্দেহ হলে ডাক্তারকে দেখান।',
    en: '⚠️ Not a substitute for vet. Consult doctor if unsure.',
    hi: '⚠️ यह डॉक्टर का विकल्प नहीं। संदेह हो तो डॉक्टर को दिखाएं।'
  },
  selectSymptoms: {
    bn: 'লক্ষণ বাছুন (যতগুলো মিলে)',
    en: 'Select symptoms (all that apply)',
    hi: 'लक्षण चुनें (जितने लागू हों)'
  },
  searchBtn: {
    bn: '🔍 রোগ খুঁজুন',
    en: '🔍 Find Disease',
    hi: '🔍 रोग खोजें'
  },
  clearBtn: {
    bn: '🔄 সব মুছুন',
    en: '🔄 Clear All',
    hi: '🔄 सब मिटाएं'
  },
  selectAtLeast: {
    bn: '⚠️ কমপক্ষে ২টি লক্ষণ বাছুন',
    en: '⚠️ Select at least 2 symptoms',
    hi: '⚠️ कम से कम २ लक्षण चुनें'
  },
  noMatch: {
    bn: '❌ কোনো রোগ মেলেনি। ডাক্তারকে দেখান।',
    en: '❌ No match found. Consult doctor.',
    hi: '❌ कोई रोग नहीं मिला। डॉक्टर को दिखाएं।'
  },
  resultsTitle: {
    bn: '📋 সম্ভাব্য কারণ',
    en: '📋 Possible Causes',
    hi: '📋 संभावित कारण'
  },
  matchedSymptoms: {
    bn: 'মিলে যাওয়া লক্ষণ',
    en: 'Matched symptoms',
    hi: 'मिले लक्षण'
  },
  action: {
    bn: 'করণীয়',
    en: 'Action',
    hi: 'कार्रवाई'
  },
  viewFirstAid: {
    bn: '📖 First Aid দেখুন',
    en: '📖 View First Aid',
    hi: '📖 First Aid देखें'
  },
  callDoctor: {
    bn: '📞 ডাক্তারকে ফোন করুন',
    en: '📞 Call Doctor',
    hi: '📞 डॉक्टर को कॉल करें'
  },
  sendPhoto: {
    bn: '📷 ছবি পাঠান',
    en: '📷 Send Photo',
    hi: '📷 फोटो भेजें'
  },
  shareWhatsApp: {
    bn: '💬 WhatsApp-এ পাঠান',
    en: '💬 Send on WhatsApp',
    hi: '💬 WhatsApp पर भेजें'
  },
  selected: {
    bn: 'নির্বাচিত',
    en: 'Selected',
    hi: 'चयनित'
  },
  confidence: {
    bn: 'মিল',
    en: 'Match',
    hi: 'मिलान'
  },
  askPhoto: {
    bn: '📷 ছবি তুলে পাঠান — ডাক্তার দেখে উত্তর দেবেন',
    en: '📷 Send photo — doctor will reply',
    hi: '📷 फोटो भेजें — डॉक्टर जवाब देंगे'
  }
};

// ============================================
// SYMPTOM LIST — ৩০টি লক্ষণ
// ============================================
window.SYMPTOM_LIST = [
  { id:'fever', name:{bn:'জ্বর', en:'Fever', hi:'बुखार'}, icon:'🌡️' },
  { id:'not_eating', name:{bn:'খাচ্ছে না', en:'Not Eating', hi:'खा नहीं रही'}, icon:'🍽️' },
  { id:'low_milk', name:{bn:'দুধ কমে গেছে', en:'Low Milk', hi:'दूध कम'}, icon:'🥛' },
  { id:'cannot_stand', name:{bn:'উঠতে পারছে না', en:'Cannot Stand', hi:'खड़ी नहीं हो सकती'}, icon:'🛏️' },
  { id:'cold_ears', name:{bn:'কান ঠান্ডা', en:'Cold Ears', hi:'ठंडे कान'}, icon:'❄️' },
  { id:'diarrhea', name:{bn:'ডায়রিয়া', en:'Diarrhea', hi:'दस्त'}, icon:'💧' },
  { id:'constipation', name:{bn:'কোষ্ঠকাঠিন্য', en:'Constipation', hi:'कब्ज'}, icon:'🚫' },
  { id:'cough', name:{bn:'কাশি', en:'Cough', hi:'खांसी'}, icon:'😷' },
  { id:'nasal_discharge', name:{bn:'নাক দিয়ে পানি', en:'Nasal Discharge', hi:'नाक से पानी'}, icon:'💦' },
  { id:'swollen_udder', name:{bn:'ওলান ফোলা', en:'Swollen Udder', hi:'थन में सूजन'}, icon:'🫧' },
  { id:'clotted_milk', name:{bn:'দুধে চাকা', en:'Clotted Milk', hi:'दूध में गांठ'}, icon:'🥛' },
  { id:'painful_milking', name:{bn:'দুধ দিতে ব্যথা', en:'Painful Milking', hi:'दूध में दर्द'}, icon:'😣' },
  { id:'swollen_joint', name:{bn:'পা ফোলা', en:'Swollen Joint', hi:'जोड़ में सूजन'}, icon:'🦵' },
  { id:'lame', name:{bn:'খোঁড়া', en:'Limping', hi:'लंगड़ापन'}, icon:'🦶' },
  { id:'mouth_sores', name:{bn:'মুখে ঘা', en:'Mouth Sores', hi:'मुंह में छाले'}, icon:'👄' },
  { id:'salivation', name:{bn:'লালা ঝরছে', en:'Salivation', hi:'लार बहना'}, icon:'💧' },
  { id:'skin_problem', name:{bn:'চামড়ায় সমস্যা', en:'Skin Problem', hi:'त्वचा की समस्या'}, icon:'🩹' },
  { id:'hair_loss', name:{bn:'চুল পড়ছে', en:'Hair Loss', hi:'बाल झड़ना'}, icon:'💇' },
  { id:'breathing_difficulty', name:{bn:'শ্বাস কষ্ট', en:'Breathing Difficulty', hi:'सांस की तकलीफ'}, icon:'😰' },
  { id:'bloat', name:{bn:'পেট ফুলে গেছে', en:'Bloat', hi:'पेट फूलना'}, icon:'🎈' },
  { id:'recent_calving', name:{bn:'সদ্য প্রসব করেছে', en:'Recent Calving', hi:'हाल ही में ब्याया'}, icon:'🍼' },
  { id:'pregnant', name:{bn:'গর্ভবতী', en:'Pregnant', hi:'गर्भवती'}, icon:'🤰' },
  { id:'blood_in_urine', name:{bn:'প্রস্রাবে রক্ত', en:'Blood in Urine', hi:'पेशाब में खून'}, icon:'🩸' },
  { id:'blood_in_milk', name:{bn:'দুধে রক্ত', en:'Blood in Milk', hi:'दूध में खून'}, icon:'🩸' },
  { id:'weight_loss', name:{bn:'ওজন কমছে', en:'Weight Loss', hi:'वजन घटना'}, icon:'📉' },
  { id:'eye_problem', name:{bn:'চোখে সমস্যা', en:'Eye Problem', hi:'आंख की समस्या'}, icon:'👁️' },
  { id:'nervous', name:{bn:'অস্থির', en:'Restless', hi:'बेचैन'}, icon:'😰' },
  { id:'convulsion', name:{bn:'খিঁচুনি', en:'Convulsion', hi:'दौरा'}, icon:'⚡' },
  { id:'anemia', name:{bn:'রক্তশূন্যতা', en:'Anemia', hi:'खून की कमी'}, icon:'🩸' },
  { id:'retained_placenta', name:{bn:'গর্ভফুল পড়েনি', en:'Retained Placenta', hi:'जेर नहीं गिरा'}, icon:'⚠️' }
    { id:'retained_placenta', name:{bn:'গর্ভফুল পড়েনি', en:'Retained Placenta', hi:'जेर नहीं गिरा'}, icon:'⚠️' },
  { id:'navel_swelling', name:{bn:'নাভি ফুলে গেছে', en:'Navel Swelling', hi:'नाभि में सूजन'}, icon:'🩹' },
  { id:'uterus_out', name:{bn:'জরায়ু বেরিয়ে এসেছে', en:'Uterus Prolapsed', hi:'गर्भाशय बाहर'}, icon:'⚠️' },
  { id:'abortion', name:{bn:'গর্ভপাত হয়েছে', en:'Abortion', hi:'गर्भपात'}, icon:'💔' },
  { id:'warts', name:{bn:'চামড়ায় আঁচিল', en:'Warts on Skin', hi:'त्वचा पर मस्से'}, icon:'🩹' },
  { id:'tick_lice', name:{bn:'উকুন/মাকড়ি', en:'Ticks/Lice', hi:'चिचड़ी/जूँ'}, icon:'🐛' },
  { id:'ringworm_patch', name:{bn:'দাদ (গোল ছোপ)', en:'Ringworm Patches', hi:'दाद (गोल धब्बे)'}, icon:'🔴' },
  { id:'sudden_collapse', name:{bn:'হঠাৎ পড়ে গেছে', en:'Sudden Collapse', hi:'अचानक गिर पड़ी'}, icon:'💥' },
  { id:'staggering', name:{bn:'টলমল করছে', en:'Staggering', hi:'लड़खड़ाहट'}, icon:'😵' },
  { id:'muscle_twitching', name:{bn:'পেশী কাঁপছে', en:'Muscle Twitching', hi:'मांसपेशी कांपना'}, icon:'⚡' },
  { id:'snake_bite', name:{bn:'সাপে কেটেছে', en:'Snake Bite', hi:'सांप ने काटा'}, icon:'🐍' },
  { id:'udder_edema', name:{bn:'ওলান ফোলা (প্রসবের আগে)', en:'Udder Edema (Before Calving)', hi:'थन सूजन (प्रसव से पहले)'}, icon:'🫧' },
  { id:'dental_problem', name:{bn:'দাঁতের সমস্যা', en:'Dental Problem', hi:'दांत की समस्या'}, icon:'🦷' },
  { id:'foul_breath', name:{bn:'মুখে দুর্গন্ধ', en:'Foul Breath', hi:'मुंह से बदबू'}, icon:'😷' },
  { id:'dark_urine', name:{bn:'গাঢ় প্রস্রাব', en:'Dark Urine', hi:'गहरा पेशाब'}, icon:'🩸' },
  { id:'swollen_leg', name:{bn:'পা ফুলে গেছে', en:'Swollen Leg', hi:'पैर में सूजन'}, icon:'🦵' },
  { id:'foul_smell', name:{bn:'দুর্গন্ধ বের হচ্ছে', en:'Foul Smell', hi:'बदबू आ रही है'}, icon:'⚠️' }
];


// ============================================
// DISEASE DATABASE — ২৫টি রোগ (৩ ভাষায়)
// ============================================
window.DISEASE_DB = [

  // ১. মিল্ক ফিভার
  {
    id: 'milk_fever',
    name: { bn:'মিল্ক ফিভার', en:'Milk Fever', hi:'मिल्क फीवर' },
    icon: '🚨',
    urgency: 'critical',
    symptoms: ['cannot_stand', 'cold_ears', 'low_milk', 'recent_calving', 'not_eating'],
    min_match: 3,
    first_aid_id: 'milk_fever',
    action: {
      bn: 'প্রসবের ৩ দিনের মধ্যে হলে সাথে সাথে ডাক্তার ডাকুন। ক্যালসিয়াম ইনজেকশন লাগতে পারে।',
      en: 'Call doctor immediately if within 3 days of calving. Calcium injection may be needed.',
      hi: 'प्रसव के ३ दिन के भीतर तुरंत डॉक्टर बुलाएं। कैल्शियम इंजेक्शन की जरूरत हो सकती है।'
    }
  },

  // ২. ম্যাস্টাইটিস
  {
    id: 'mastitis',
    name: { bn:'ম্যাস্টাইটিস (ওলান প্রদাহ)', en:'Mastitis', hi:'मास्टाइटिस (थन प्रदाह)' },
    icon: '⚠️',
    urgency: 'high',
    symptoms: ['swollen_udder', 'clotted_milk', 'painful_milking', 'fever', 'low_milk', 'blood_in_milk'],
    min_match: 2,
    first_aid_id: 'mastitis',
    action: {
      bn: 'আক্রান্ত ওলান থেকে দুধ আলাদা করুন। পরিষ্কার রাখুন। অ্যান্টিবায়োটিকের জন্য ডাক্তার দেখান।',
      en: 'Separate milk from affected quarter. Keep clean. Consult vet for antibiotics.',
      hi: 'प्रभावित थन का दूध अलग करें। साफ रखें। एंटीबायोटिक के लिए डॉक्टर।'
    }
  },

  // ৩. কিটোসিস
  {
    id: 'ketosis',
    name: { bn:'কিটোসিস', en:'Ketosis', hi:'कीटोसिस' },
    icon: '⚠️',
    urgency: 'high',
    symptoms: ['low_milk', 'not_eating', 'weight_loss', 'recent_calving', 'nervous'],
    min_match: 3,
    first_aid_id: 'ketosis',
    action: {
      bn: 'প্রসবের ২-৬ সপ্তাহের মধ্যে বেশি হয়। গ্লুকোজ ও প্রোটিন দিন। ডাক্তার দেখান।',
      en: 'Common 2-6 weeks after calving. Give glucose & protein. Consult vet.',
      hi: 'प्रसव के २-६ सप्ताह बाद आम। ग्लूकोज और प्रोटीन दें। डॉक्टर।'
    }
  },

  // ৪. FMD (ক্ষুরারোগ)
  {
    id: 'fmd',
    name: { bn:'ক্ষুরারোগ (FMD)', en:'Foot & Mouth Disease', hi:'खुरपका-मुंहपका रोग' },
    icon: '🚨',
    urgency: 'critical',
    symptoms: ['mouth_sores', 'salivation', 'fever', 'lame', 'not_eating', 'low_milk'],
    min_match: 3,
    first_aid_id: 'fmd',
    action: {
      bn: 'অত্যন্ত সংক্রামক! সাথে সাথে সরকারি পশু চিকিৎসককে জানান। সুস্থ পশু আলাদা রাখুন।',
      en: 'Highly contagious! Inform govt vet immediately. Isolate healthy animals.',
      hi: 'अत्यधिक संक्रामक! तुरंत सरकारी पशु चिकित्सक को बताएं। स्वस्थ पशुओं को अलग रखें।'
    }
  },

  // ৫. HS (গলাফুলা)
  {
    id: 'hs',
    name: { bn:'গলাফুলা (HS)', en:'Hemorrhagic Septicemia (HS)', hi:'गलाघोंटू (HS)' },
    icon: '🚨',
    urgency: 'critical',
    symptoms: ['fever', 'breathing_difficulty', 'swollen_joint', 'salivation', 'not_eating'],
    min_match: 3,
    first_aid_id: 'hs',
    action: {
      bn: 'বর্ষার আগে টিকা দিন। আক্রান্ত হলে সাথে সাথে ডাক্তার ডাকুন। অত্যন্ত দ্রুত মৃত্যু হয়।',
      en: 'Vaccinate before monsoon. Call vet immediately. Very quick death.',
      hi: 'मानसून से पहले टीका लगाएं। तुरंत डॉक्टर बुलाएं। बहुत जल्दी मृत्यु।'
    }
  },

  // ৬. BQ (কালাজ্বর)
  {
    id: 'bq',
    name: { bn:'কালাজ্বর (BQ)', en:'Black Quarter (BQ)', hi:'काली बीमारी (BQ)' },
    icon: '🚨',
    urgency: 'critical',
    symptoms: ['fever', 'swollen_joint', 'lame', 'not_eating', 'breathing_difficulty'],
    min_match: 3,
    first_aid_id: 'bq',
    action: {
      bn: 'মাংসপেশি ফুলে যায় ও ফসফস শব্দ হয়। সাথে সাথে চিকিৎসা শুরু করুন।',
      en: 'Muscle swelling with crackling sound. Start treatment immediately.',
      hi: 'मांसपेशी में सूजन और फड़फड़ाहट। तुरंत इलाज शुरू करें।'
    }
  },

  // ৭. পিপিআর (ছাগল)
  {
    id: 'ppr',
    name: { bn:'পিপিআর (ছাগল)', en:'PPR (Goat Plague)', hi:'पीपीआर (बकरी प्लेग)' },
    icon: '⚠️',
    urgency: 'high',
    symptoms: ['fever', 'diarrhea', 'nasal_discharge', 'mouth_sores', 'not_eating'],
    min_match: 3,
    first_aid_id: 'ppr',
    action: {
      bn: 'ছাগলের সংক্রামক রোগ। পশুচিকিৎসকের পরামর্শে চিকিৎসা ও টিকা দিন।',
      en: 'Contagious goat disease. Treat and vaccinate with vet advice.',
      hi: 'बकरी की संक्रामक बीमारी। डॉक्टर की सलाह पर इलाज और टीका।'
    }
  },

  // ৮. ব্লোট (পেট ফোলা)
  {
    id: 'bloat',
    name: { bn:'ব্লোট (পেট ফোলা)', en:'Bloat', hi:'पेट फूलना' },
    icon: '🚨',
    urgency: 'critical',
    symptoms: ['bloat', 'breathing_difficulty', 'nervous', 'not_eating'],
    min_match: 2,
    first_aid_id: 'bloat',
    action: {
      bn: 'জীবন সংশয়ী অবস্থা! বাম দিকে পেট ফুলে যায়। সাথে সাথে ডাক্তার।',
      en: 'Life-threatening! Left side bloats. Call vet immediately.',
      hi: 'जानलेवा! बाईं ओर पेट फूलता है। तुरंत डॉक्टर।'
    }
  },

  // ৯. কৃমির সমস্যা
  {
    id: 'worm_infestation',
    name: { bn:'কৃমির সমস্যা', en:'Worm Infestation', hi:'कीड़े की समस्या' },
    icon: '🪱',
    urgency: 'medium',
    symptoms: ['weight_loss', 'diarrhea', 'low_milk', 'anemia', 'hair_loss'],
    min_match: 3,
    first_aid_id: 'deworming',
    action: {
      bn: 'কৃমিনাশক খাওয়ান প্রতি ৩ মাসে। অ্যালবেঞ্জল বা ফেনবেঞ্জল ব্যবহার করুন।',
      en: 'Give dewormer every 3 months. Use Albendazole or Fenbendazole.',
      hi: 'हर ३ महीने में कृमिनाशक दें। अल्बेंडाजोल या फेनबेंडाजोल।'
    }
  },

  // ১০. থাইলেরিয়া
  {
    id: 'theileriosis',
    name: { bn:'থাইলেরিয়া', en:'Theileriosis', hi:'थाइलेरिया' },
    icon: '⚠️',
    urgency: 'high',
    symptoms: ['fever', 'swollen_joint', 'weight_loss', 'low_milk', 'breathing_difficulty', 'anemia'],
    min_match: 3,
    first_aid_id: 'theileriosis',
    action: {
      bn: 'মাকড়ি টিকির মাধ্যমে ছড়ায়। বুটালেক্স বা বুপারভাকুয়োন দরকার। ডাক্তার দেখান।',
      en: 'Spread by tick bite. Needs Buparvaquone. Consult vet.',
      hi: 'टिक काटने से फैलता है। बुपारवाक्वोन चाहिए। डॉक्टर।'
    }
  },

  // ১১. বেবিসিওসিস
  {
    id: 'babesiosis',
    name: { bn:'বেবিসিওসিস', en:'Babesiosis', hi:'बेबेसियोसिस' },
    icon: '⚠️',
    urgency: 'high',
    symptoms: ['fever', 'blood_in_urine', 'anemia', 'low_milk', 'not_eating'],
    min_match: 3,
    first_aid_id: 'babesiosis',
    action: {
      bn: 'প্রস্রাবে রক্ত — টিক জন্মানো রোগ। ডিমিনাজিন ইনজেকশন দরকার।',
      en: 'Blood in urine — tick-borne. Needs Diminazene injection.',
      hi: 'पेशाब में खून — टिक जनित। डिमिनाज़ीन इंजेक्शन चाहिए।'
    }
  },

  // ১২. বাছুরের ডায়রিয়া
  {
    id: 'calf_diarrhea',
    name: { bn:'বাছুরের ডায়রিয়া', en:'Calf Diarrhea', hi:'बछड़े का दस्त' },
    icon: '⚠️',
    urgency: 'critical',
    symptoms: ['diarrhea', 'not_eating', 'low_milk', 'fever', 'weight_loss'],
    min_match: 3,
    first_aid_id: 'calf_diarrhea',
    action: {
      bn: 'বাছুরের জন্য অত্যন্ত বিপজ্জনক! ORS দিন, ডাক্তার ডাকুন। পানি শূন্যতা মারাত্মক।',
      en: 'Critical for calves! Give ORS, call vet. Dehydration is fatal.',
      hi: 'बछड़े के लिए घातक! ORS दें, डॉक्टर बुलाएं। पानी की कमी जानलेवा।'
    }
  },

  // ১৩. নিউমোনিয়া
  {
    id: 'pneumonia',
    name: { bn:'নিউমোনিয়া', en:'Pneumonia', hi:'निमोनिया' },
    icon: '⚠️',
    urgency: 'high',
    symptoms: ['cough', 'breathing_difficulty', 'fever', 'nasal_discharge', 'not_eating'],
    min_match: 3,
    first_aid_id: 'pneumonia',
    action: {
      bn: 'শীতকালে বেশি হয়। দ্রুত অ্যান্টিবায়োটিক চিকিৎসা দরকার। বাতাস চলাচল রাখুন।',
      en: 'Common in winter. Needs quick antibiotics. Ensure ventilation.',
      hi: 'सर्दी में आम। जल्दी एंटीबायोटिक। हवा आने-जाने दें।'
    }
  },

  // ১৪. শ্বাসতন্ত্রের সংক্রমণ
  {
    id: 'respiratory',
    name: { bn:'শ্বাসতন্ত্রের সংক্রমণ', en:'Respiratory Infection', hi:'श्वसन संक्रमण' },
    icon: '⚠️',
    urgency: 'medium',
    symptoms: ['cough', 'nasal_discharge', 'fever', 'low_milk'],
    min_match: 2,
    first_aid_id: 'respiratory',
    action: {
      bn: 'প্রাথমিক অবস্থায় চিকিৎসা। ধুলাবালি ও ঠান্ডা বাতাস এড়ান।',
      en: 'Treat early. Avoid dust and cold wind.',
      hi: 'जल्दी इलाज। धूल और ठंडी हवा से बचाएं।'
    }
  },

  // ১৫. বদহজম
  {
    id: 'indigestion',
    name: { bn:'বদহজম', en:'Indigestion', hi:'अपच' },
    icon: '⚠️',
    urgency: 'low',
    symptoms: ['not_eating', 'bloat', 'low_milk', 'constipation'],
    min_match: 2,
    first_aid_id: 'indigestion',
    action: {
      bn: 'ফিড পরিবর্তন করলে হতে পারে। ২৪ ঘণ্টা উপোস রাখুন। পানি দিন।',
      en: 'May happen from feed change. Fast for 24 hours. Give water.',
      hi: 'चारा बदलने से हो सकता है। २४ घंटे उपवास। पानी दें।'
    }
  },

  // ১৬. অ্যাসিডোসিস
  {
    id: 'acidosis',
    name: { bn:'অ্যাসিডোসিস', en:'Acidosis', hi:'अम्लता' },
    icon: '⚠️',
    urgency: 'medium',
    symptoms: ['not_eating', 'diarrhea', 'nervous', 'low_milk', 'bloat'],
    min_match: 3,
    first_aid_id: 'acidosis',
    action: {
      bn: 'অতিরিক্ত দানাদার খাওয়ালে হয়। বেকিং সোডা দিন। ফিড কমিয়ে ঘাস বাড়ান।',
      en: 'From too much concentrate. Give baking soda. Reduce feed, add fodder.',
      hi: 'अधिक दाना खाने से। बेकिंग सोडा दें। दाना कम, चारा बढ़ाएं।'
    }
  },

  // ১৭. গর্ভফুল পড়েনি (RP)
  {
    id: 'rp',
    name: { bn:'গর্ভফুল পড়েনি (RP)', en:'Retained Placenta', hi:'जेर रुकना' },
    icon: '⚠️',
    urgency: 'high',
    symptoms: ['retained_placenta', 'recent_calving', 'fever', 'not_eating', 'low_milk'],
    min_match: 2,
    first_aid_id: 'rp',
    action: {
      bn: '২৪ ঘণ্টা পরেও না পড়লে ডাক্তার ডাকুন। টানাটানি করবেন না।',
      en: 'Call vet if not expelled in 24 hours. Do not pull.',
      hi: '२४ घंटे बाद भी न गिरे तो डॉक्टर बुलाएं। खींचें नहीं।'
    }
  },

  // ১৮. মেট্রাইটিস
  {
    id: 'metritis',
    name: { bn:'মেট্রাইটিস (জরায়ু প্রদাহ)', en:'Metritis', hi:'गर्भाशय प्रदाह' },
    icon: '⚠️',
    urgency: 'high',
    symptoms: ['recent_calving', 'fever', 'not_eating', 'low_milk', 'diarrhea'],
    min_match: 3,
    first_aid_id: 'metritis',
    action: {
      bn: 'প্রসবের পর জরায়ুতে সংক্রমণ। দুর্গন্ধযুক্ত স্রাব হয়। ডাক্তার দেখান।',
      en: 'Uterine infection after calving. Foul discharge. Consult vet.',
      hi: 'प्रसव के बाद संक्रमण। बदबूदार स्राव। डॉक्टर को दिखाएं।'
    }
  },

  // ১৯. টিম্পানাইটিস
  {
    id: 'tympany',
    name: { bn:'টিম্পানাইটিস', en:'Tympany', hi:'टिम्पैनाइटिस' },
    icon: '🚨',
    urgency: 'critical',
    symptoms: ['bloat', 'breathing_difficulty', 'nervous', 'not_eating'],
    min_match: 2,
    first_aid_id: 'bloat',
    action: {
      bn: 'সবুজ ঘাস বেশি খেলে হয় — সাথে সাথে ডাক্তার। দেরি করলে মৃত্যু।',
      en: 'From excess green fodder — call vet immediately. Delay is fatal.',
      hi: 'अधिक हरा चारा — तुरंत डॉक्टर। देर जानलेवा।'
    }
  },

  // ২০. ঘাস টিটানি
  {
    id: 'hypomag',
    name: { bn:'ঘাস টিটানি', en:'Grass Tetany', hi:'घास टिटनी' },
    icon: '🚨',
    urgency: 'critical',
    symptoms: ['nervous', 'convulsion', 'cannot_stand', 'recent_calving', 'not_eating'],
    min_match: 3,
    first_aid_id: 'hypomag',
    action: {
      bn: 'ম্যাগনেসিয়াম কমে গেলে — স্যালাইন দিন, ডাক্তার ডাকুন। দ্রুত পদক্ষেপ।',
      en: 'Low magnesium — give saline, call vet. Act quickly.',
      hi: 'मैग्नीशियम की कमी — सलाइन दें, डॉक्टर बुलाएं।'
    }
  },

  // ২১. ব্রুসেলোসিস
  {
    id: 'brucellosis',
    name: { bn:'ব্রুসেলোসিস', en:'Brucellosis', hi:'ब्रुसेलोसिस' },
    icon: '🚨',
    urgency: 'critical',
    symptoms: ['recent_calving', 'retained_placenta', 'low_milk', 'weight_loss'],
    min_match: 3,
    first_aid_id: 'brucellosis',
    action: {
      bn: 'মানুষেরও হতে পারে! সতর্ক থাকুন। দুধ ফুটিয়ে খান। ডাক্তার দেখান।',
      en: 'Can affect humans! Be careful. Boil milk. Consult vet.',
      hi: 'मनुष्यों को भी हो सकता है! सावधान। दूध उबालें। डॉक्टर।'
    }
  },

  // ২২. আইবিডি
  {
    id: 'ibd',
    name: { bn:'আইবিডি (সংক্রামক)', en:'IBD (Infectious)', hi:'आईबीडी (संक्रामक)' },
    icon: '⚠️',
    urgency: 'high',
    symptoms: ['fever', 'cough', 'nasal_discharge', 'not_eating', 'low_milk'],
    min_match: 3,
    first_aid_id: 'ibd',
    action: {
      bn: 'ভাইরাসজনিত। টিকা দিন, ডাক্তার দেখান। সংক্রামক।',
      en: 'Viral. Vaccinate, consult vet. Contagious.',
      hi: 'वायरल। टीका लगाएं, डॉक्टर को दिखाएं। संक्रामक।'
    }
  },

  // ২৩. চর্মরোগ
  {
    id: 'skin_disease',
    name: { bn:'চর্মরোগ', en:'Skin Disease', hi:'त्वचा रोग' },
    icon: '⚠️',
    urgency: 'medium',
    symptoms: ['skin_problem', 'hair_loss', 'nervous', 'weight_loss'],
    min_match: 2,
    first_aid_id: 'skin',
    action: {
      bn: 'ছত্রাক/পোকা হতে পারে। পরিষ্কার রাখুন, ডাক্তারের পরামর্শ নিন।',
      en: 'Fungal or parasitic. Keep clean, consult vet.',
      hi: 'फंगल या परजीवी। साफ रखें, डॉक्टर से सलाह लें।'
    }
  },

  // ২৪. চোখের সংক্রমণ
  {
    id: 'eye_infection',
    name: { bn:'চোখের সংক্রমণ', en:'Eye Infection', hi:'आंख का संक्रमण' },
    icon: '⚠️',
    urgency: 'medium',
    symptoms: ['eye_problem', 'fever', 'not_eating'],
    min_match: 2,
    first_aid_id: 'eye',
    action: {
      bn: 'মাছি থেকে ছড়ায়, পরিষ্কার পানি দিয়ে ধুয়ে দিন। ডাক্তার দেখান।',
      en: 'Spread by flies. Wash with clean water. Consult vet.',
      hi: 'मक्खियों से फैलता है। साफ पानी से धोएं। डॉक्टर।'
    }
  },

  // ২৫. পেট ব্যথা
  {
    id: 'stomach_pain',
    name: { bn:'পেট ব্যথা', en:'Stomach Pain', hi:'पेट दर्द' },
    icon: '⚠️',
    urgency: 'medium',
    symptoms: ['not_eating', 'nervous', 'bloat', 'constipation'],
    min_match: 2,
    first_aid_id: 'stomach',
    action: {
      bn: 'কৃমি বা বদহজম হতে পারে। ২৪ ঘণ্টা খাওয়া বন্ধ রাখুন, পানি দিন।',
      en: 'Could be worms or indigestion. Fast 24 hours, give water.',
      hi: 'कीड़े या अपच हो सकता है। २४ घंटे उपवास, पानी दें।'
    }
  }
  
    {
    id: 'stomach_pain',
    name: { bn:'পেট ব্যথা', en:'Stomach Pain', hi:'पेट दर्द' },
    icon: '⚠️',
    urgency: 'medium',
    symptoms: ['not_eating', 'nervous', 'bloat', 'constipation'],
    min_match: 2,
    first_aid_id: 'stomach',
    action: {
      bn: 'কৃমি বা বদহজম হতে পারে। ২৪ ঘণ্টা খাওয়া বন্ধ রাখুন, পানি দিন।',
      en: 'Could be worms or indigestion. Fast 24 hours, give water.',
      hi: 'कीड़े या अपच हो सकता है। २४ घंटे उपवास, पानी दें।'
    }
  },

  // ============================================
  // নতুন ১৫টি রোগ (২৬-৪০)
  // ============================================

  // ২৬. পা পচা (Foot Rot)
  {
    id: 'foot_rot',
    name: { bn:'পা পচা', en:'Foot Rot', hi:'पैर सड़न' },
    icon: '🦶',
    urgency: 'high',
    symptoms: ['lame', 'swollen_leg', 'fever', 'not_eating', 'foul_smell', 'low_milk'],
    min_match: 2,
    first_aid_id: 'foot_rot',
    action: {
      bn: 'পা পরিষ্কার পানিতে ধুয়ে পচা অংশ পরিষ্কার করুন। অ্যান্টিসেপটিক লাগান। বর্ষায় বেশি হয়। ডাক্তার দেখান।',
      en: 'Wash foot with clean water, clean rotting area. Apply antiseptic. Common in monsoon. Consult vet.',
      hi: 'पैर को साफ पानी से धोएं, सड़ा हिस्सा साफ करें। एंटीसेप्टिक लगाएं। डॉक्टर को दिखाएं।'
    }
  },

  // ২৭. কষ্টপ্রসব (Dystocia)
  {
    id: 'dystocia',
    name: { bn:'কষ্টপ্রসব (বাছুর আটকে গেছে)', en:'Dystocia (Difficult Calving)', hi:'कठिन प्रसव' },
    icon: '🚨',
    urgency: 'critical',
    symptoms: ['pregnant', 'recent_calving', 'nervous', 'not_eating', 'bloat'],
    min_match: 2,
    first_aid_id: 'dystocia',
    action: {
      bn: '২ ঘণ্টার বেশি প্রসব ব্যথা হলে সাথে সাথে ডাক্তার ডাকুন। নিজে জোর করে টানবেন না — জরায়ু ছিঁড়ে যেতে পারে।',
      en: 'Call vet immediately if labor >2 hours. Do not pull forcefully — uterus may tear.',
      hi: '२ घंटे से अधिक प्रसव पीड़ा हो तो तुरंत डॉक्टर बुलाएं। जोर से खींचें नहीं।'
    }
  },

  // ২৮. জরায়ু বেরিয়ে আসা (Uterine Prolapse)
  {
    id: 'prolapse',
    name: { bn:'জরায়ু বেরিয়ে আসা', en:'Uterine Prolapse', hi:'गर्भाशय बाहर आना' },
    icon: '🚨',
    urgency: 'critical',
    symptoms: ['uterus_out', 'recent_calving', 'nervous', 'foul_smell', 'not_eating'],
    min_match: 2,
    first_aid_id: 'prolapse',
    action: {
      bn: 'অতি জরুরি! জীবনের ঝুঁকি। পরিষ্কার কাপড় দিয়ে ঢেকে রাখুন। সাথে সাথে ডাক্তার ডাকুন। নিজে ঠেলবেন না।',
      en: 'Extremely urgent! Life-threatening. Cover with clean cloth. Call vet immediately. Do not push.',
      hi: 'अत्यंत आवश्यक! जानलेवा। साफ कपड़े से ढकें। तुरंत डॉक्टर बुलाएं।'
    }
  },

  // ২৯. গর্ভপাত (Abortion)
  {
    id: 'abortion',
    name: { bn:'গর্ভপাত', en:'Abortion', hi:'गर्भपात' },
    icon: '🚨',
    urgency: 'high',
    symptoms: ['abortion', 'pregnant', 'fever', 'not_eating', 'foul_smell', 'retained_placenta'],
    min_match: 2,
    first_aid_id: 'abortion',
    action: {
      bn: 'গর্ভফুল পড়েছে কিনা দেখুন। ডাক্তারকে জানান। সংক্রামক রোগ (ব্রুসেলোসিস) হতে পারে — সতর্ক থাকুন।',
      en: 'Check if placenta passed. Inform vet. Could be Brucellosis — be careful.',
      hi: 'जेर गिरा या नहीं देखें। डॉक्टर को बताएं। संक्रामक रोग हो सकता है।'
    }
  },

  // ৩০. উকুন/মাকড়ি (Ticks/Lice)
  {
    id: 'tick_lice',
    name: { bn:'উকুন/মাকড়ি', en:'Ticks/Lice Infestation', hi:'चिचड़ी/जूँ' },
    icon: '🐛',
    urgency: 'medium',
    symptoms: ['tick_lice', 'nervous', 'hair_loss', 'skin_problem', 'anemia', 'weight_loss'],
    min_match: 2,
    first_aid_id: 'tick',
    action: {
      bn: 'বাটাভেট বা সাইপারমেথ্রিন স্প্রে করুন। ২১ দিন পর আবার। গোয়ালঘর পরিষ্কার রাখুন।',
      en: 'Apply Butavate or Cypermethrin spray. Repeat after 21 days. Keep shed clean.',
      hi: 'बटावेट या साइपरमेथ्रिन स्प्रे करें। २१ दिन बाद दोहराएं।'
    }
  },

  // ৩১. দাদ (Ringworm)
  {
    id: 'ringworm',
    name: { bn:'দাদ (চর্মরোগ)', en:'Ringworm', hi:'दाद (त्वचा रोग)' },
    icon: '🔴',
    urgency: 'low',
    symptoms: ['ringworm_patch', 'skin_problem', 'hair_loss'],
    min_match: 2,
    first_aid_id: 'ringworm',
    action: {
      bn: 'ছত্রাকনাশক মলম লাগান। মানুষেরও হতে পারে — হাত ধুয়ে নিন। ৭-১০ দিনে সারে।',
      en: 'Apply antifungal ointment. Can affect humans — wash hands. Heals in 7-10 days.',
      hi: 'एंटीफंगल मरहम लगाएं। मनुष्यों को भी हो सकता है — हाथ धोएं।'
    }
  },

  // ৩২. নাইট্রেট বিষক্রিয়া (Nitrate Poisoning)
  {
    id: 'nitrate_poison',
    name: { bn:'নাইট্রেট বিষক্রিয়া', en:'Nitrate Poisoning', hi:'नाइट्रेट विषाक्तता' },
    icon: '🚨',
    urgency: 'critical',
    symptoms: ['breathing_difficulty', 'sudden_collapse', 'staggering', 'nervous', 'diarrhea'],
    min_match: 2,
    first_aid_id: 'nitrate',
    action: {
      bn: 'সবুজ ঘাস/সার বেশি খেলে হয়। সাথে সাথে ডাক্তার! মিথিলিন ব্লু ইনজেকশন দরকার।',
      en: 'From excess green fodder/fertilizer. Call vet immediately! Methylene blue injection needed.',
      hi: 'अधिक हरा चारा/खाद से। तुरंत डॉक्टर! मिथिलीन ब्लू इंजेक्शन चाहिए।'
    }
  },

  // ৩৩. ইউরিয়া বিষক্রিয়া (Urea Poisoning)
  {
    id: 'urea_poison',
    name: { bn:'ইউরিয়া বিষক্রিয়া', en:'Urea Poisoning', hi:'यूरिया विषाक्तता' },
    icon: '🚨',
    urgency: 'critical',
    symptoms: ['sudden_collapse', 'muscle_twitching', 'breathing_difficulty', 'bloat', 'nervous', 'excessive_salivation'],
    min_match: 2,
    first_aid_id: 'urea',
    action: {
      bn: 'বেশি ইউরিয়া খেলে ৩০-৬০ মিনিটে মৃত্যু হতে পারে। সাথে সাথে ডাক্তার! ২ লিটার ভিনেগার + ২ লিটার পানি খাওয়ান।',
      en: 'Excess urea can kill in 30-60 min. Call vet! Give 2L vinegar + 2L water.',
      hi: 'अधिक यूरिया से ३०-६० मिनट में मृत्यु। तुरंत डॉक्टर! २ लीटर सिरका + २ लीटर पानी दें।'
    }
  },

  // ৩৪. সাপে কাটা (Snake Bite)
  {
    id: 'snake_bite',
    name: { bn:'সাপে কাটা', en:'Snake Bite', hi:'सांप का काटना' },
    icon: '🐍',
    urgency: 'critical',
    symptoms: ['snake_bite', 'sudden_collapse', 'breathing_difficulty', 'staggering', 'not_eating'],
    min_match: 2,
    first_aid_id: 'snakebite',
    action: {
      bn: 'কাটার জায়গা নড়াচড়া করবেন না। শক্ত করে বাঁধবেন না। পশুকে শান্ত রাখুন। সাথে সাথে ডাক্তার। এন্টিভেনম দরকার।',
      en: 'Do not move bite area. Do not tie tightly. Keep animal calm. Call vet immediately for antivenom.',
      hi: 'काटने की जगह न हिलाएं। कसकर न बांधें। पशु को शांत रखें। तुरंत डॉक्टर।'
    }
  },

  // ৩৫. আঁচিল (Warts)
  {
    id: 'warts',
    name: { bn:'আঁচিল', en:'Warts', hi:'मस्से' },
    icon: '🩹',
    urgency: 'low',
    symptoms: ['warts', 'skin_problem'],
    min_match: 2,
    first_aid_id: 'warts',
    action: {
      bn: 'সাধারণত নিজে থেকে সারে। ছড়াতে থাকলে ডাক্তার দেখান। ভিটামিন A দিতে পারেন।',
      en: 'Usually heals on its own. Consult vet if spreading. Vitamin A may help.',
      hi: 'आमतौर पर अपने आप ठीक हो जाते हैं। फैलने पर डॉक्टर।'
    }
  },

  // ৩৬. ওলান ফোলা - প্রসবের আগে (Udder Edema)
  {
    id: 'udder_edema',
    name: { bn:'ওলান ফোলা (প্রসবের আগে)', en:'Udder Edema (Pre-calving)', hi:'थन सूजन (प्रसव से पहले)' },
    icon: '🫧',
    urgency: 'medium',
    symptoms: ['udder_edema', 'swollen_udder', 'pregnant', 'recent_calving'],
    min_match: 2,
    first_aid_id: 'edema',
    action: {
      bn: 'প্রসবের আগে স্বাভাবিক। বেশি খাওয়া কমান। হাঁটাচলা বাড়ান। প্রসবের পর নিজে থেকে কমে যাবে।',
      en: 'Normal before calving. Reduce feed. Increase walking. Will decrease after calving.',
      hi: 'प्रसव से पहले सामान्य। भोजन कम करें। चलना बढ़ाएं।'
    }
  },

  // ৩৭. নাভি পচা - বাছুর (Navel Ill)
  {
    id: 'navel_ill',
    name: { bn:'বাছুরের নাভি পচা', en:'Navel Ill (Calf)', hi:'बछड़े की नाभि सड़न' },
    icon: '🩹',
    urgency: 'high',
    symptoms: ['navel_swelling', 'fever', 'not_eating', 'swollen_joint', 'lame'],
    min_match: 2,
    first_aid_id: 'navel',
    action: {
      bn: 'নাভি পরিষ্কার রাখুন, আয়োডিন লাগান। জ্বর থাকলে ডাক্তার দেখান। সংক্রমণ রক্তে যেতে পারে।',
      en: 'Keep navel clean, apply iodine. Consult vet if fever. Infection can spread to blood.',
      hi: 'नाभि साफ रखें, आयोडीन लगाएं। बुखार हो तो डॉक্টर को दिखाएं।'
    }
  },

  // ৩৮. দুধ না নামা (Milk Let Down)
  {
    id: 'milk_letdown',
    name: { bn:'দুধ না নামা (Let-down)', en:'Milk Let Down Failure', hi:'दूध न आना' },
    icon: '🥛',
    urgency: 'medium',
    symptoms: ['low_milk', 'painful_milking', 'nervous', 'recent_calving'],
    min_match: 2,
    first_aid_id: 'letdown',
    action: {
      bn: 'নিজে শান্ত থাকুন, গাভীকে আরামদায়ক পরিবেশ দিন। গরম কাপড় দিয়ে ওলান মুছুন। অক্সিটোসিন ইনজেকশনের জন্য ডাক্তার দেখান।',
      en: 'Stay calm, give cow comfortable environment. Massage udder with warm cloth. Consult vet for oxytocin.',
      hi: 'शांत रहें, गाय को आरामदायक वातावरण दें। गर्म कपड़े से थन मलें। डॉक्टर से ऑक्सीटोसिन।'
    }
  },

  // ৩৯. দাঁতের সমস্যা (Dental Problem)
  {
    id: 'dental_problem',
    name: { bn:'দাঁতের সমস্যা', en:'Dental Problem', hi:'दांत की समस्या' },
    icon: '🦷',
    urgency: 'medium',
    symptoms: ['dental_problem', 'not_eating', 'weight_loss', 'foul_breath', 'salivation', 'low_milk'],
    min_match: 2,
    first_aid_id: 'dental',
    action: {
      bn: 'নরম খাবার দিন। ডাক্তার দিয়ে দাঁত পরীক্ষা করান। ধারালো দাঁত কেটে দিতে হতে পারে।',
      en: 'Give soft feed. Get teeth examined by vet. Sharp teeth may need filing.',
      hi: 'नरम चारा दें। डॉक्टर से दांत जांच कराएं।'
    }
  },

  // ৪০. ব্রঙ্কাইটিস (Bronchitis)
  {
    id: 'bronchitis',
    name: { bn:'ব্রঙ্কাইটিস', en:'Bronchitis', hi:'ब्रोंकाइटिस' },
    icon: '🫁',
    urgency: 'medium',
    symptoms: ['cough', 'breathing_difficulty', 'fever', 'nasal_discharge', 'not_eating'],
    min_match: 3,
    first_aid_id: 'bronchitis',
    action: {
      bn: 'শ্বাসনালীর সংক্রমণ। শীতকালে বেশি। বাতাস চলাচল রাখুন। ডাক্তারের পরামর্শে অ্যান্টিবায়োটিক।',
      en: 'Airway infection. Common in winter. Ensure ventilation. Antibiotics as per vet.',
      hi: 'श्वासनली संक्रमण। सर्दी में आम। हवा आने-जाने दें। डॉक्टर की सलाह पर एंटीबायोटिक।'
    }
  }

];


console.log('✅ Symptom Database Loaded:');
console.log('   🩺 Symptoms:', window.SYMPTOM_LIST.length);
console.log('   🦠 Diseases:', window.DISEASE_DB.length);
console.log('   🌐 Languages: bn, en, hi');
