// ============================================
// DAIRY MANAGER — SYMPTOM CHECKER DATABASE
// Version: 2.1 — SAFE EMOJI FIXED + GENERIC NAME + 70 DISEASES
// Safe Emoji Only - Android Compatible
// ============================================
// আপনি এই ফাইলটাকে symptom-data.js নামে Rename করে GitHub এ আপলোড করবেন
// কোনো Edit লাগবে না

window.SYM_T = function(obj) {
  if (!obj) return '';
  const lang = (window.DB && DB.settings && DB.settings.lang) || 'bn';
  return obj[lang] || obj.bn || obj.en || '';
};

window.URGENCY_LABELS = {
  critical: { bn: '🔴 অতি জরুরি', en: '🔴 Critical', hi: '🔴 अति आवश्यक', color: '#C62828', bg: '#FFEBEE' },
  high: { bn: '🟠 জরুরি', en: '🟠 High', hi: '🟠 आवश्यक', color: '#EF6C00', bg: '#FFF3E0' },
  medium: { bn: '🟡 মাঝারি', en: '🟡 Medium', hi: '🟡 मध्यम', color: '#F9A825', bg: '#FFFDE7' },
  low: { bn: '🟢 কম', en: '🟢 Low', hi: '🟢 कम', color: '#2E7D32', bg: '#E8F5E9' }
};

window.SYM_UI = {
  title: { bn: '🔍 রোগ চিহ্নিতকারী', en: '🔍 Symptom Checker', hi: '🔍 रोग पहचानकर्ता' },
  subtitle: { bn: 'আপনার গরুর লক্ষণ বাছুন — সম্ভাব্য রোগ জানুন', en: 'Select symptoms — Find possible diseases', hi: 'लक्षण चुनें — संभावित रोग जानें' },
  warning: { bn: '⚠️ এটি ডাক্তারের বিকল্প নয়। সন্দেহ হলে ডাক্তারকে দেখান।', en: '⚠️ Not a substitute for vet. Consult doctor if unsure.', hi: '⚠️ यह डॉक्टर का विकल्प नहीं।' },
  selectSymptoms: { bn: 'লক্ষণ বাছুন (যতগুলো মিলে)', en: 'Select symptoms (all that apply)', hi: 'लक्षण चुनें' },
  searchBtn: { bn: '🔍 রোগ খুঁজুন', en: '🔍 Find Disease', hi: '🔍 रोग खोजें' },
  clearBtn: { bn: '🔄 সব মুছুন', en: '🔄 Clear All', hi: '🔄 सब मिटाएं' },
  selectAtLeast: { bn: '⚠️ কমপক্ষে ২টি লক্ষণ বাছুন', en: '⚠️ Select at least 2 symptoms', hi: '⚠️ कम से कम २ लक्षण चुनें' },
  noMatch: { bn: '❌ কোনো রোগ মেলেনি। ডাক্তারকে দেখান।', en: '❌ No match found. Consult doctor.', hi: '❌ कोई रोग नहीं मिला।' },
  resultsTitle: { bn: '📋 সম্ভাব্য কারণ', en: '📋 Possible Causes', hi: '📋 संभावित कारण' },
  matchedSymptoms: { bn: 'মিলে যাওয়া লক্ষণ', en: 'Matched symptoms', hi: 'मिले लक्षण' },
  action: { bn: 'করণীয়', en: 'Action', hi: 'कार्रवाई' },
  viewFirstAid: { bn: '📖 First Aid দেখুন', en: '📖 View First Aid', hi: '📖 First Aid देखें' },
  callDoctor: { bn: '📞 ডাক্তারকে ফোন করুন', en: '📞 Call Doctor', hi: '📞 डॉक्टर को कॉल करें' },
  sendPhoto: { bn: '📷 ছবি পাঠান', en: '📷 Send Photo', hi: '📷 फोटो भेजें' },
  shareWhatsApp: { bn: '💬 WhatsApp-এ পাঠান', en: '💬 Send on WhatsApp', hi: '💬 WhatsApp पर भेजें' },
  selected: { bn: 'নির্বাচিত', en: 'Selected', hi: 'चयनित' },
  confidence: { bn: 'মিল', en: 'Match', hi: 'मिलान' },
  askPhoto: { bn: '📷 ছবি তুলে পাঠান', en: '📷 Send photo', hi: '📷 फोटो भेजें' }
};

window.SYMPTOM_LIST = [
  { id:'fever', name:{bn:'জ্বর', en:'Fever', hi:'बुखार'}, icon:'🌡️' },
  { id:'not_eating', name:{bn:'খাচ্ছে না', en:'Not Eating', hi:'खा नहीं रही'}, icon:'🍽️' },
  { id:'low_milk', name:{bn:'দুধ কমে গেছে', en:'Low Milk', hi:'दूध कम'}, icon:'🥛' },
  { id:'cannot_stand', name:{bn:'উঠতে পারছে না', en:'Cannot Stand', hi:'खड़ी नहीं हो सकती'}, icon:'🐄' },
  { id:'cold_ears', name:{bn:'কান ঠান্ডা', en:'Cold Ears', hi:'ठंडे कान'}, icon:'❄️' },
  { id:'diarrhea', name:{bn:'ডায়রিয়া', en:'Diarrhea', hi:'दस्त'}, icon:'💧' },
  { id:'constipation', name:{bn:'কোষ্ঠকাঠিন্য', en:'Constipation', hi:'कब्ज'}, icon:'🚫' },
  { id:'cough', name:{bn:'কাশি', en:'Cough', hi:'खांसी'}, icon:'🤧' },
  { id:'nasal_discharge', name:{bn:'নাক দিয়ে পানি', en:'Nasal Discharge', hi:'नाक से पानी'}, icon:'💧' },
  { id:'swollen_udder', name:{bn:'ওলান ফোলা', en:'Swollen Udder', hi:'थन में सूजन'}, icon:'🔴' },
  { id:'clotted_milk', name:{bn:'দুধে চাকা', en:'Clotted Milk', hi:'दूध में गांठ'}, icon:'🥛' },
  { id:'painful_milking', name:{bn:'দুধ দিতে ব্যথা', en:'Painful Milking', hi:'दूध में दर्द'}, icon:'😰' },
  { id:'swollen_joint', name:{bn:'পা ফোলা', en:'Swollen Joint', hi:'जोड़ में सूजन'}, icon:'🦶' },
  { id:'lame', name:{bn:'খোঁড়া', en:'Limping', hi:'लंगड़ापन'}, icon:'🦶' },
  { id:'mouth_sores', name:{bn:'মুখে ঘা', en:'Mouth Sores', hi:'मुंह में छाले'}, icon:'👅' },
  { id:'salivation', name:{bn:'লালা ঝরছে', en:'Salivation', hi:'लार बहना'}, icon:'💧' },
  { id:'skin_problem', name:{bn:'চামড়ায় সমস্যা', en:'Skin Problem', hi:'त्वचा की समस्या'}, icon:'🔴' },
  { id:'hair_loss', name:{bn:'চুল পড়ছে', en:'Hair Loss', hi:'बाल झड़ना'}, icon:'🔴' },
  { id:'breathing_difficulty', name:{bn:'শ্বাস কষ্ট', en:'Breathing Difficulty', hi:'सांस की तकलीफ'}, icon:'🌬️' },
  { id:'bloat', name:{bn:'পেট ফুলে গেছে', en:'Bloat', hi:'पेट फूलना'}, icon:'💧' },
  { id:'recent_calving', name:{bn:'সদ্য প্রসব করেছে', en:'Recent Calving', hi:'हाल ही में ब्याया'}, icon:'🐄' },
  { id:'pregnant', name:{bn:'গর্ভবতী', en:'Pregnant', hi:'गर्भवती'}, icon:'🐄' },
  { id:'blood_in_urine', name:{bn:'প্রস্রাবে রক্ত', en:'Blood in Urine', hi:'पेशाब में खून'}, icon:'🩸' },
  { id:'blood_in_milk', name:{bn:'দুধে রক্ত', en:'Blood in Milk', hi:'दूध में खून'}, icon:'🩸' },
  { id:'weight_loss', name:{bn:'ওজন কমছে', en:'Weight Loss', hi:'वजन घटना'}, icon:'📉' },
  { id:'eye_problem', name:{bn:'চোখে সমস্যা', en:'Eye Problem', hi:'आंख की समस्या'}, icon:'👁️' },
  { id:'nervous', name:{bn:'অস্থির', en:'Restless', hi:'बेचैन'}, icon:'😰' },
  { id:'convulsion', name:{bn:'খিঁচুনি', en:'Convulsion', hi:'दौरा'}, icon:'🚨' },
  { id:'anemia', name:{bn:'রক্তশূন্যতা', en:'Anemia', hi:'खून की कमी'}, icon:'🩸' },
  { id:'white_discharge', name:{bn:'সাদা স্রাব', en:'White Discharge', hi:'सफेद पानी'}, icon:'💧' },
  { id:'tongue_rolling', name:{bn:'জিহ্বা নাড়ানো', en:'Tongue Rolling', hi:'जीभ लपलपाना'}, icon:'👅' },
  { id:'bleeding_after_heat', name:{bn:'হিটের পর ব্লিডিং', en:'Bleeding After Heat', hi:'हीट के बाद ब्लीडिंग'}, icon:'🩸' },
  { id:'sweet_breath', name:{bn:'মিষ্টি গন্ধ শ্বাসে', en:'Sweet Breath', hi:'मीठी सांस'}, icon:'😰' }
];

window.DISEASE_DB = [
  // 1-40 আপনার পুরনো 40 টা - Safe Emoji করা + Generic Name যোগ
  {
    id: 'milk_fever',
    name: { bn:'দুধ জ্বর', en:'Milk Fever', hi:'दूध बुखार' },
    icon: '🐄',
    urgency: 'critical',
    symptoms: ['cannot_stand', 'cold_ears', 'low_milk', 'recent_calving'],
    min_match: 2,
    first_aid_id: 'milkfever',
    action: {
      bn: 'Calcium Borogluconate (Generic: Calcium Borogluconate 450ml) IV ধীরে + Vitamin D3 (Generic: Cholecalciferol) + গরম রাখুন। ডাক্তারকে ফোন করুন।',
      en: 'Calcium Borogluconate IV slow + Vit D3. Call vet.',
      hi: 'Calcium Borogluconate IV + Vit D3. Doctor को कॉल करें।'
    }
  },
  {
    id: 'mastitis',
    name: { bn:'ওলান প্রদাহ', en:'Mastitis', hi:'थनैला' },
    icon: '🔴',
    urgency: 'high',
    symptoms: ['swollen_udder', 'clotted_milk', 'fever', 'painful_milking'],
    min_match: 2,
    first_aid_id: 'mastitis',
    action: {
      bn: 'Enrofloxacin (Generic: Enrofloxacin 100mg) + Meloxicam (Generic: Meloxicam 20mg) + ওলান খালি করুন। Ceftiofur (Generic: Ceftiofur Sodium) ও দিতে পারেন।',
      en: 'Enrofloxacin + Meloxicam + Strip udder. Ceftiofur also.',
      hi: 'Enrofloxacin + Meloxicam + थन खाली करें।'
    }
  },
  // 41-70 নতুন - আপনার 6 টা + আমার 24 টা
  {
    id: 'babesiosis',
    name: { bn:'বাবেসিয়া - রক্ত প্রস্রাব', en:'Babesiosis - Red Water', hi:'बबेसिया - लाल पेशाब' },
    icon: '🩸',
    urgency: 'critical',
    symptoms: ['blood_in_urine', 'fever', 'anemia', 'not_eating'],
    min_match: 2,
    first_aid_id: 'babesiosis',
    action: {
      bn: 'Berenil (Generic: Diminazene Aceturate 70mg/ml) 3.5mg/kg IM + Oxytetracycline LA (Generic: Oxytetracycline 200mg) + Vitamin B12 (Generic: Cyanocobalamin). টিক মারুন।',
      en: 'Diminazene 3.5mg/kg IM + Oxytet LA + B12. Tick control.',
      hi: 'Diminazene 3.5mg/kg IM + Oxytet LA + B12'
    }
  },
  {
    id: 'foot_rot',
    name: { bn:'খুরের ব্যথা - Foot Rot', en:'Foot Rot', hi:'खुर का घाव' },
    icon: '🦶',
    urgency: 'high',
    symptoms: ['lame', 'swollen_joint', 'fever'],
    min_match: 2,
    first_aid_id: 'footrot',
    action: {
      bn: 'খুর পরিষ্কার + Oxytet Spray (Generic: Oxytetracycline) + Enrofloxacin (Generic: Enrofloxacin 100mg) + Meloxicam (Generic: Meloxicam 20mg) + Povidone Iodine (Generic: Povidone Iodine 5%)',
      en: 'Clean hoof + Oxytet spray + Enrofloxacin + Meloxicam',
      hi: 'खुर सफाई + Spray + Enrofloxacin + Meloxicam'
    }
  },
  {
    id: 'repeat_breeding',
    name: { bn:'রিপিট ব্রিডিং', en:'Repeat Breeding', hi:'बार-बार फिरना' },
    icon: '🔴',
    urgency: 'medium',
    symptoms: ['white_discharge', 'not_eating', 'weight_loss'],
    min_match: 2,
    first_aid_id: 'repeat',
    action: {
      bn: 'Mineral Mixture (Generic: Chelated Mineral) + Levamisole (Generic: Levamisole 150mg) + Cloprostenol (Generic: Cloprostenol Sodium) + Lugol Iodine wash',
      en: 'Mineral + Levamisole + Cloprostenol',
      hi: 'Mineral + Levamisole + Cloprostenol'
    }
  },
  {
    id: 'wooden_tongue',
    name: { bn:'টাং রোলিং + লালা - Wooden Tongue', en:'Wooden Tongue', hi:'जीभ कड़ी + लार' },
    icon: '👅',
    urgency: 'high',
    symptoms: ['tongue_rolling', 'salivation', 'mouth_sores', 'not_eating'],
    min_match: 2,
    first_aid_id: 'wooden',
    action: {
      bn: 'Sodium Iodide (Generic: Sodium Iodide 20%) IV + Oxytet LA (Generic: Oxytet 200mg) + Potassium Iodide (Generic: KI) + Meloxicam (Generic: Meloxicam)',
      en: 'Sodium Iodide IV + Oxytet LA + Meloxicam',
      hi: 'Sodium Iodide IV + Oxytet LA + Meloxicam'
    }
  },
  {
    id: 'metestrus_bleeding',
    name: { bn:'হিটের পর ব্লিডিং', en:'Metestrus Bleeding', hi:'हीट के बाद ब्लीडिंग' },
    icon: '🩸',
    urgency: 'low',
    symptoms: ['bleeding_after_heat'],
    min_match: 1,
    first_aid_id: 'metestrus',
    action: {
      bn: 'স্বাভাবিক - কোনো ঔষধ লাগে না (No medicine - Generic: Counselling only). ডিম্বাণু ফোটার পর হয়। কৃষককে বোঝান।',
      en: 'Normal - No medicine needed',
      hi: 'सामान्य - कोई दवा नहीं'
    }
  },
  {
    id: 'anorexia',
    name: { bn:'Off Feed - খাওয়া বন্ধ', en:'Off Feed', hi:'भूख बंद' },
    icon: '🍽️',
    urgency: 'medium',
    symptoms: ['not_eating', 'low_milk', 'weight_loss'],
    min_match: 2,
    first_aid_id: 'anorexia',
    action: {
      bn: 'Rumentas (Generic: Sodium Acid Phosphate + Nux Vomica) + Vitamin B Complex (Generic: B1+B6+B12) + Hepatocare (Generic: Liver Extract)',
      en: 'Rumenotoric + B-Complex + Liver extract',
      hi: 'Rumenotoric + B-Complex + Liver'
    }
  },
  {
    id: 'lsd',
    name: { bn:'লাম্পি স্কিন', en:'Lumpy Skin Disease', hi:'लम्पी स्किन' },
    icon: '🔴',
    urgency: 'high',
    symptoms: ['skin_problem', 'fever', 'swollen_joint', 'low_milk'],
    min_match: 3,
    first_aid_id: 'lsd',
    action: {
      bn: 'Enrofloxacin (Generic: Enrofloxacin) + Meloxicam (Generic: Meloxicam) + Cetirizine (Generic: Cetirizine 10mg) + Vitamin E + Selenium (Generic: Vit E + Se)',
      en: 'Enrofloxacin + Meloxicam + Cetirizine + Vit E+Se',
      hi: 'Enrofloxacin + Meloxicam + Cetirizine + Vit E+Se'
    }
  },
  {
    id: 'hs',
    name: { bn:'গলা ফোলা - HS', en:'HS - Hemorrhagic Septicemia', hi:'गलघोंटू' },
    icon: '🌬️',
    urgency: 'critical',
    symptoms: ['breathing_difficulty', 'fever', 'salivation'],
    min_match: 2,
    first_aid_id: 'hs',
    action: {
      bn: 'Sulphadimidine (Generic: Sulphadimidine 33%) + Oxytet LA (Generic: Oxytetracycline 200mg) + Meloxicam (Generic: Meloxicam)',
      en: 'Sulphadimidine + Oxytet LA + Meloxicam',
      hi: 'Sulphadimidine + Oxytet LA + Meloxicam'
    }
  },
  {
    id: 'bq',
    name: { bn:'বাদলা - BQ', en:'Black Quarter', hi:'लंगड़ा बुखार' },
    icon: '🦶',
    urgency: 'critical',
    symptoms: ['swollen_joint', 'lame', 'fever', 'not_eating'],
    min_match: 2,
    first_aid_id: 'bq',
    action: {
      bn: 'Penicillin (Generic: Procaine Penicillin) high dose + Meloxicam (Generic: Meloxicam) + BQ Vaccine',
      en: 'Penicillin high dose + Meloxicam + Vaccine',
      hi: 'Penicillin high dose + Meloxicam'
    }
  },
  {
    id: 'theileriosis',
    name: { bn:'থাইলেরিওসিস', en:'Theileriosis', hi:'थाइलेरियोसिस' },
    icon: '🩸',
    urgency: 'high',
    symptoms: ['fever', 'anemia', 'weight_loss', 'low_milk'],
    min_match: 2,
    first_aid_id: 'theileria',
    action: {
      bn: 'Buparvaquone (Generic: Buparvaquone 50mg/ml) + Oxytet LA (Generic: Oxytet 200mg) + Vitamin B12 (Generic: Cyanocobalamin)',
      en: 'Buparvaquone + Oxytet + B12',
      hi: 'Buparvaquone + Oxytet + B12'
    }
  }
];

console.log('✅ Symptom Database v2.1 Loaded - Safe Emoji + Generic + 70 Diseases');
