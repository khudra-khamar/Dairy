// ============================================
// DAIRY MANAGER — FEED NUTRITION DATABASE
// ICAR / NRC standard values
// ============================================

window.FEED_DATABASE = [
  // ============ GREEN FODDER (সবুজ ঘাস) ============
  { id:'napier', name:{bn:'নেপিয়ার ঘাস',en:'Napier Grass',hi:'नेपियर घास'}, category:'green', dm:20, cp:7, tdn:52, me:7.5, fiber:28, ca:0.4, p:0.2, fat:2.5 },
  { id:'co3_napier', name:{bn:'CO-3 নেপিয়ার',en:'CO-3 Napier',hi:'CO-3 नेपियर'}, category:'green', dm:22, cp:10, tdn:56, me:8.2, fiber:26, ca:0.4, p:0.25, fat:2.5 },
{ id:'co4_napier', name:{bn:'CO-4 নেপিয়ার',en:'CO-4 Napier',hi:'CO-4 नेपियर'}, category:'green', dm:21, cp:11, tdn:58, me:8.5, fiber:24, ca:0.45, p:0.28, fat:2.8 },
{ id:'super_napier', name:{bn:'সুপার নেপিয়ার',en:'Super Napier',hi:'सुपर नेपियर'}, category:'green', dm:20, cp:11, tdn:58, me:8.5, fiber:24, ca:0.45, p:0.28, fat:2.8 },
{ id:'king_napier', name:{bn:'কিং নেপিয়ার',en:'King Napier',hi:'किंग नेपियर'}, category:'green', dm:22, cp:12, tdn:60, me:9.0, fiber:23, ca:0.5, p:0.3, fat:3.0 },
{ id:'dwarf_napier', name:{bn:'ডোয়ার্ফ নেপিয়ার',en:'Dwarf Napier',hi:'ड्वार्फ नेपियर'}, category:'green', dm:18, cp:10, tdn:58, me:8.2, fiber:24, ca:0.45, p:0.28, fat:2.8 },
  { id:'hybrid_napier', name:{bn:'হাইব্রিড নেপিয়ার',en:'Hybrid Napier',hi:'हाइब्रिड नेपियर'}, category:'green', dm:22, cp:9, tdn:55, me:8.0, fiber:26, ca:0.4, p:0.25, fat:2.5 },
  { id:'maize_fodder', name:{bn:'ভুট্টার সবুজ',en:'Maize Fodder',hi:'मक्का का चारा'}, category:'green', dm:20, cp:8, tdn:60, me:9.0, fiber:25, ca:0.3, p:0.25, fat:2.5 },
  { id:'sorghum', name:{bn:'জোয়ার',en:'Sorghum',hi:'ज्वार'}, category:'green', dm:22, cp:8, tdn:55, me:8.5, fiber:28, ca:0.4, p:0.25, fat:2.5 },
  { id:'lucerne', name:{bn:'আলফালফা',en:'Lucerne',hi:'ल्यूसर्न'}, category:'green', dm:25, cp:18, tdn:60, me:8.5, fiber:25, ca:1.5, p:0.25, fat:3.0 },
  { id:'berseem', name:{bn:'বারসিম',en:'Berseem',hi:'बरसीम'}, category:'green', dm:18, cp:17, tdn:58, me:8.3, fiber:22, ca:1.4, p:0.25, fat:3.0 },
  { id:'cowpea', name:{bn:'বরবটি',en:'Cowpea',hi:'लोबिया'}, category:'green', dm:20, cp:16, tdn:58, me:8.3, fiber:24, ca:1.0, p:0.3, fat:2.5 },
  { id:'para_grass', name:{bn:'প্যারা ঘাস',en:'Para Grass',hi:'पैरा घास'}, category:'green', dm:20, cp:6, tdn:50, me:7.2, fiber:30, ca:0.3, p:0.2, fat:2.5 },

  // ============ DRY FODDER (শুকনো) ============
  { id:'rice_straw', name:{bn:'ধানের খড়',en:'Rice Straw',hi:'धान का पुआल'}, category:'dry', dm:90, cp:4, tdn:42, me:6.0, fiber:32, ca:0.3, p:0.08, fat:1.5 },
  { id:'wheat_straw', name:{bn:'গমের খড়',en:'Wheat Straw',hi:'गेहूं का पुआल'}, category:'dry', dm:90, cp:3.5, tdn:40, me:5.8, fiber:35, ca:0.3, p:0.07, fat:1.5 },
  { id:'maize_stover', name:{bn:'ভুট্টার খোসা',en:'Maize Stover',hi:'मक्का का डंठल'}, category:'dry', dm:88, cp:5, tdn:48, me:6.8, fiber:30, ca:0.4, p:0.1, fat:1.5 },
  { id:'hay', name:{bn:'শুকনো ঘাস',en:'Hay',hi:'सूखी घास'}, category:'dry', dm:88, cp:8, tdn:52, me:7.5, fiber:28, ca:0.5, p:0.2, fat:2.0 },

  // ============ CONCENTRATES (দানাদার) ============
  { id:'maize_grain', name:{bn:'ভুট্টা দানা',en:'Maize Grain',hi:'मक्का दाना'}, category:'concentrate', dm:88, cp:9, tdn:85, me:13.5, fiber:2, ca:0.02, p:0.3, fat:4.0 },
  { id:'wheat_bran', name:{bn:'গমের ভুসি',en:'Wheat Bran',hi:'गेहूं की चोकर'}, category:'concentrate', dm:88, cp:14, tdn:70, me:11.0, fiber:10, ca:0.15, p:1.1, fat:4.0 },
  { id:'rice_polish', name:{bn:'চালের কুঁড়া',en:'Rice Polish',hi:'चावल की भूसी'}, category:'concentrate', dm:90, cp:11, tdn:75, me:12.0, fiber:10, ca:0.1, p:1.4, fat:12.0 },
  { id:'mustard_cake', name:{bn:'সরিষার খৈল',en:'Mustard Cake',hi:'सरसों की खली'}, category:'concentrate', dm:90, cp:32, tdn:72, me:11.0, fiber:12, ca:0.6, p:1.0, fat:8.0 },
  { id:'groundnut_cake', name:{bn:'চিনাবাদামের খৈল',en:'Groundnut Cake',hi:'मूंगफली की खली'}, category:'concentrate', dm:92, cp:42, tdn:75, me:11.5, fiber:12, ca:0.2, p:0.6, fat:7.0 },
  { id:'soybean_meal', name:{bn:'সয়াবিন মিল',en:'Soybean Meal',hi:'सोयाबीन मील'}, category:'concentrate', dm:90, cp:44, tdn:80, me:12.5, fiber:7, ca:0.3, p:0.65, fat:2.0 },
  { id:'sesame_cake', name:{bn:'তিলের খৈল',en:'Sesame Cake',hi:'तिल की खली'}, category:'concentrate', dm:90, cp:35, tdn:70, me:11.0, fiber:12, ca:2.0, p:1.3, fat:7.0 },
  { id:'coconut_cake', name:{bn:'নারকেলের খৈল',en:'Coconut Cake',hi:'नारियल की खली'}, category:'concentrate', dm:90, cp:20, tdn:70, me:11.0, fiber:15, ca:0.3, p:0.6, fat:7.0 },

  // ============ LEGUMES (ডাল) ============
  { id:'chickpea', name:{bn:'ছোলা',en:'Chickpea',hi:'चना'}, category:'legume', dm:88, cp:20, tdn:80, me:12.5, fiber:8, ca:0.2, p:0.35, fat:5.0 },
  { id:'lentil', name:{bn:'মসুর ডাল',en:'Lentil',hi:'मसूर दाल'}, category:'legume', dm:88, cp:24, tdn:78, me:12.0, fiber:5, ca:0.2, p:0.4, fat:1.5 },
  { id:'pea', name:{bn:'মটর',en:'Pea',hi:'मटर'}, category:'legume', dm:88, cp:22, tdn:78, me:12.0, fiber:6, ca:0.1, p:0.4, fat:1.5 },

  // ============ BYPRODUCTS ============
  { id:'molasses', name:{bn:'চিটাগুড়',en:'Molasses',hi:'शीरा'}, category:'byproduct', dm:75, cp:5, tdn:65, me:10.5, fiber:0, ca:1.0, p:0.1, fat:0 },
  { id:'brewers_grain', name:{bn:'ব্রিউয়ার্স গ্রেইন',en:"Brewer's Grain",hi:'ब्रुअर्स ग्रेन'}, category:'byproduct', dm:25, cp:25, tdn:65, me:10.5, fiber:15, ca:0.3, p:0.5, fat:6.0 },
  { id:'veg_waste', name:{bn:'সবজির বর্জ্য',en:'Vegetable Waste',hi:'सब्जी का कचरा'}, category:'byproduct', dm:15, cp:12, tdn:50, me:7.5, fiber:20, ca:0.5, p:0.3, fat:1.0 },

  // ============ BALANCED FEED (ব্যালান্সড ফিড) ============
{ 
  id:'balanced_feed_20', 
  name:{bn:'ব্যালান্সড ফিড (CP ২০%)',en:'Balanced Feed (CP 20%)',hi:'बैलेंस्ड फीड (CP 20%)'}, 
  category:'concentrate', 
  dm:88, cp:20, tdn:72, me:11.5, fiber:12, ca:0.8, p:0.6, fat:3.5,
  description:{bn:'মার্কেটে পাওয়া balanced cattle feed',en:'Marketed balanced cattle feed',hi:'बाजार में उपलब्ध बैलेंस्ड फीड'}
},
{ 
  id:'balanced_feed_22', 
  name:{bn:'ব্যালান্সড ফিড (CP ২২%)',en:'Balanced Feed (CP 22%)',hi:'बैलेंस्ड फीड (CP 22%)'}, 
  category:'concentrate', 
  dm:88, cp:22, tdn:74, me:12.0, fiber:11, ca:0.9, p:0.65, fat:4.0,
  description:{bn:'উচ্চ প্রোটিন balanced feed — দুগ্ধদান গরুর জন্য',en:'High protein balanced feed — for milking cows',hi:'उच्च प्रोटीन बैलेंस्ड फीड — दूध देने वाली गाय के लिए'}
},

// ============ MINERALS (খনিজ) ============
  { 
    id:'mineral_mix', 
    name:{bn:'সাধারণ মিনারেল মিশ্রণ',en:'Common Mineral Mixture',hi:'साधारण खनिज मिश्रण'}, 
    category:'mineral', 
    dm:95, cp:0, tdn:0, me:0, fiber:0, fat:0,
    ca:20, p:12,
    description:{bn:'নিয়মিত ব্যবহারের জন্য',en:'For regular use',hi:'नियमित उपयोग के लिए'}
  },
  { 
    id:'premium_chelated_mineral', 
    name:{bn:'প্রিমিয়াম চেলেটেড মিনারেল',en:'Premium Chelated Mineral',hi:'प्रीमियम चेलेटेड मिनरल'}, 
    category:'mineral', 
    dm:95, cp:0, tdn:0, me:0, fiber:0, fat:0,
    ca:0, p:0,
    minerals: {
      zinc: 7000,
      manganese: 14000,
      copper: 1200,
      iron: 600,
      cobalt: 600,
      iodine: 10,
      selenium: 100,
      chromium: 350,
      magnesium: 8000,
      sulphur: 6000
    },
    vitamins: {
      a: 350,
      d: 1250,
      e: 286
    },
    chelated: true,
    dose: {
      bn: 'গরু: ৩০ গ্রাম/দিন\nবাছুর: ১৫ গ্রাম/দিন',
      en: 'Cow: 30g/day\nCalf: 15g/day',
      hi: 'गाय: 30 ग्राम/दिन\nबछड़ा: 15 ग्राम/दिन'
    },
    description:{bn:'চেলেটেড ফর্ম — উচ্চ শোষণক্ষমতা',en:'Chelated form — high absorption',hi:'चेलेटेड रूप — उच्च अवशोषण'}
  },
  { 
    id:'salt', 
    name:{bn:'লবণ',en:'Salt',hi:'नमक'}, 
    category:'mineral', 
    dm:100, cp:0, tdn:0, me:0, fiber:0, fat:0,
    ca:0, p:0,
    description:{bn:'সাধারণ খাবার লবণ',en:'Common table salt',hi:'साधारण नमक'}
  },
  { 
    id:'dcp', 
    name:{bn:'ডিসিপি (DCP)',en:'DCP',hi:'डीसीपी'}, 
    category:'mineral', 
    dm:98, cp:0, tdn:0, me:0, fiber:0, fat:0,
    ca:22, p:18,
    description:{bn:'ক্যালসিয়াম-ফসফরাস সাপ্লিমেন্ট',en:'Calcium-Phosphorus supplement',hi:'कैल्शियम-फॉस्फोरस' }
  },
  { 
    id:'limestone', 
    name:{bn:'চুনাপাথর গুঁড়ো',en:'Limestone Powder',hi:'चूना पत्थर पाउडर'}, 
    category:'mineral', 
    dm:100, cp:0, tdn:0, me:0, fiber:0, fat:0,
    ca:38, p:0,
    description:{bn:'ক্যালসিয়ামের প্রধান উৎস',en:'Main calcium source',hi:'मुख्य कैल्शियम स्रोत'}
  }
];

