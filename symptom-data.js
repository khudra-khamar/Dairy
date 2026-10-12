// DAIRY MANAGER - FINAL SEPARATED - Farmer vs Vet
// Farmer: action only (First Aid) - No dose, No generic, No homeo bracket
// Vet: treatment + homeo bracket + 130 medicines

window.SYM_T = function(obj) {
  if (!obj) return '';
  var lang = (window.DB && DB.settings && DB.settings.lang) || 'bn';
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
  subtitle: { bn: 'আপনার গরুর লক্ষণ বাছুন — সম্ভাব্য রোগ জানুন', en: 'Select symptoms — Find possible diseases', hi: 'लक्षण चुनें' },
  warning: { bn: '⚠️ এটি ডাক্তারের বিকল্প নয়। সন্দেহ হলে ডাক্তারকে দেখান।', en: '⚠️ Not a substitute for vet.', hi: '⚠️ डॉक्टर का विकल्प नहीं।' },
  selectSymptoms: { bn: 'লক্ষণ বাছুন (যতগুলো মিলে)', en: 'Select symptoms', hi: 'लक्षण चुनें' },
  searchBtn: { bn: '🔍 রোগ খুঁজুন', en: '🔍 Find Disease', hi: '🔍 रोग खोजें' },
  clearBtn: { bn: '🔄 সব মুছুন', en: '🔄 Clear All', hi: '🔄 सब मिटाएं' },
  selectAtLeast: { bn: '⚠️ কমপক্ষে ২টি লক্ষণ বাছুন', en: '⚠️ Select at least 2', hi: '⚠️ कम से कम २' },
  noMatch: { bn: '❌ কোনো রোগ মেলেনি। ডাক্তারকে দেখান।', en: '❌ No match. Consult doctor.', hi: '❌ कोई रोग नहीं।' },
  resultsTitle: { bn: '📋 সম্ভাব্য কারণ', en: '📋 Possible Causes', hi: '📋 संभावित कारण' },
  matchedSymptoms: { bn: 'মিলে যাওয়া লক্ষণ', en: 'Matched Symptoms', hi: 'मिले हुए लक्षण' }
};

window.SYMPTOM_LIST = [
  { id:"fever", icon:"🌡️", name:{ bn:"জ্বর", en:"Fever", hi:"Fever" } },
  { id:"not_eating", icon:"🍽️", name:{ bn:"না খাওয়া", en:"Not eating", hi:"Not eating" } },
  { id:"lameness", icon:"🦶", name:{ bn:"খোঁড়ানো", en:"Lameness", hi:"Lameness" } },
  { id:"mouth_lesion", icon:"👅", name:{ bn:"মুখে ঘা", en:"Mouth lesion", hi:"Mouth lesion" } },
  { id:"bloody_diarrhea", icon:"🩸", name:{ bn:"রক্ত আমাশা", en:"Bloody diarrhea", hi:"Bloody diarrhea" } },
  { id:"red_urine", icon:"🔴", name:{ bn:"লাল প্রস্রাব", en:"Red urine", hi:"Red urine" } },
  { id:"watery_diarrhea", icon:"💧", name:{ bn:"পাতলা পায়খানা", en:"Watery diarrhea", hi:"Watery diarrhea" } },
  { id:"cough", icon:"🌬️", name:{ bn:"কাশি", en:"Cough", hi:"Cough" } },
  { id:"nasal_discharge", icon:"🤧", name:{ bn:"নাক দিয়ে পানি", en:"Nasal discharge", hi:"Nasal discharge" } },
  { id:"swollen_udder", icon:"🐄", name:{ bn:"ওলান ফোলা", en:"Swollen udder", hi:"Swollen udder" } },
  { id:"drop_milk", icon:"🥛", name:{ bn:"দুধ কমে যাওয়া", en:"Drop in milk", hi:"Drop in milk" } },
  { id:"bloat", icon:"🎈", name:{ bn:"পেট ফোলা", en:"Bloat", hi:"Bloat" } },
  { id:"dehydration", icon:"💦", name:{ bn:"পানিশূন্যতা", en:"Dehydration", hi:"Dehydration" } },
  { id:"abortion", icon:"🐮", name:{ bn:"গর্ভপাত", en:"Abortion", hi:"Abortion" } },
  { id:"retained_placenta", icon:"🐮", name:{ bn:"ফুল আটকে", en:"Retained placenta", hi:"Retained placenta" } },
  { id:"infertility", icon:"❌", name:{ bn:"গরম না হওয়া", en:"Infertility", hi:"Infertility" } },
  { id:"skin_lesion", icon:"🩹", name:{ bn:"চামড়ায় ঘা", en:"Skin lesion", hi:"Skin lesion" } },
  { id:"hair_loss", icon:"🧑‍🦲", name:{ bn:"লোম পড়া", en:"Hair loss", hi:"Hair loss" } },
  { id:"tick_infestation", icon:"🪲", name:{ bn:"উকুন/আটালি", en:"Tick infestation", hi:"Tick infestation" } },
  { id:"mange", icon:"🤕", name:{ bn:"চুলকানি", en:"Mange, Itching", hi:"Mange, Itching" } },
  { id:"weakness", icon:"😴", name:{ bn:"দুর্বলতা", en:"Weakness", hi:"Weakness" } },
  { id:"weight_loss", icon:"⚖️", name:{ bn:"ওজন কমা", en:"Weight loss", hi:"Weight loss" } },
  { id:"pale_mucous", icon:"⚪", name:{ bn:"ফ্যাকাসে", en:"Pale mucous", hi:"Pale mucous" } },
  { id:"jaundice", icon:"🟡", name:{ bn:"জন্ডিস", en:"Jaundice", hi:"Jaundice" } },
  { id:"constipation", icon:"🚫", name:{ bn:"কোষ্ঠকাঠিন্য", en:"Constipation", hi:"Constipation" } },
  { id:"vomiting", icon:"🤮", name:{ bn:"বমি", en:"Vomiting", hi:"Vomiting" } },
  { id:"salivation", icon:"💧", name:{ bn:"লালা পড়া", en:"Excessive salivation", hi:"Excessive salivation" } },
  { id:"swollen_joints", icon:"🦵", name:{ bn:"জয়েন্ট ফোলা", en:"Swollen joints", hi:"Swollen joints" } },
  { id:"eye_discharge", icon:"👁️", name:{ bn:"চোখে পানি", en:"Eye discharge", hi:"Eye discharge" } },
  { id:"difficulty_breathing", icon:"😮‍💨", name:{ bn:"শ্বাসকষ্ট", en:"Difficulty breathing", hi:"Difficulty breathing" } },
  { id:"foul_discharge", icon:"🤢", name:{ bn:"দুর্গন্ধ যুক্ত স্রাব", en:"Foul discharge", hi:"Foul discharge" } },
  { id:"low_temp", icon:"❄️", name:{ bn:"তাপমাত্রা কম", en:"Low temperature", hi:"Low temperature" } },
  { id:"swollen_neck", icon:"🦒", name:{ bn:"গলা ফোলা", en:"Swollen neck", hi:"Swollen neck" } },
  { id:"swollen_muscle", icon:"🦵", name:{ bn:"মাংস ফোলা", en:"Swollen muscle", hi:"Swollen muscle" } },
  { id:"swollen_lymph", icon:"🔵", name:{ bn:"লিম্ফ নোড ফোলা", en:"Swollen lymph node", hi:"Swollen lymph node" } },
  { id:"acetone_breath", icon:"👃", name:{ bn:"এসিটোন গন্ধ", en:"Acetone breath", hi:"Acetone breath" } },
  { id:"tetany", icon:"⚡", name:{ bn:"খিঁচুনি", en:"Tetany", hi:"Tetany" } },
  { id:"nervous", icon:"🧠", name:{ bn:"স্নায়বিক লক্ষণ", en:"Nervous signs", hi:"Nervous signs" } },
  { id:"bleeding", icon:"🩸", name:{ bn:"রক্তপাত", en:"Bleeding", hi:"Bleeding" } },
  { id:"swelling", icon:"🟣", name:{ bn:"ফোলা", en:"Swelling", hi:"Swelling" } },
  { id:"maggot", icon:"🪱", name:{ bn:"পোকা", en:"Maggot", hi:"Maggot" } },
  { id:"foul_smell", icon:"🤢", name:{ bn:"দুর্গন্ধ", en:"Foul smell", hi:"Foul smell" } },
  { id:"low_milk", icon:"🥛", name:{ bn:"দুধ কম", en:"Low milk", hi:"Low milk" } },
  { id:"irregular_heat", icon:"🔄", name:{ bn:"অনিয়মিত গরম", en:"Irregular heat", hi:"Irregular heat" } },
  { id:"not_cycling", icon:"⭕", name:{ bn:"সাইকেল না হওয়া", en:"Not cycling", hi:"Not cycling" } },
  { id:"pica", icon:"🧱", name:{ bn:"মাটি খাওয়া", en:"Pica", hi:"Pica" } },
  { id:"pot_belly", icon:"🐷", name:{ bn:"পেট বড়", en:"Pot belly", hi:"Pot belly" } },
  { id:"circular_hair_loss", icon:"⭕", name:{ bn:"গোল দাগ", en:"Circular hair loss", hi:"Circular hair loss" } },
  { id:"hard_swelling", icon:"🪨", name:{ bn:"শক্ত ফোলা", en:"Hard swelling", hi:"Hard swelling" } },
  { id:"abdominal_pain", icon:"🤕", name:{ bn:"পেট ব্যথা", en:"Abdominal pain", hi:"Abdominal pain" } },
  { id:"paralysis", icon:"♿", name:{ bn:"পক্ষাঘাত", en:"Paralysis", hi:"Paralysis" } },
  { id:"aggression", icon:"😡", name:{ bn:"আক্রমণাত্মক", en:"Aggression", hi:"Aggression" } },
  { id:"third_eyelid_protrusion", icon:"👁️", name:{ bn:"৩য় পাতা বের হওয়া", en:"Third eyelid protrusion", hi:"Third eyelid protrusion" } },
  { id:"bleeding_from_orifices", icon:"🩸", name:{ bn:"ছিদ্র দিয়ে রক্ত", en:"Bleeding from orifices", hi:"Bleeding from orifices" } },
  { id:"skin_nodules", icon:"🔴", name:{ bn:"চামড়ায় গুটি", en:"Skin nodules", hi:"Skin nodules" } },
  { id:"shivering", icon:"🥶", name:{ bn:"কাঁপুনি", en:"Shivering", hi:"Shivering" } },
  { id:"hard_dung", icon:"💩", name:{ bn:"শক্ত গোবর", en:"Hard dung", hi:"Hard dung" } },
  { id:"sunken_eye", icon:"👁️", name:{ bn:"চোখ ঢুকে যাওয়া", en:"Sunken eye", hi:"Sunken eye" } },
  { id:"uterine_prolapse", icon:"🐄", name:{ bn:"জরায়ু বের হওয়া", en:"Uterine prolapse", hi:"Uterine prolapse" } },
  { id:"vaginal_prolapse", icon:"🐄", name:{ bn:"যোনি বের হওয়া", en:"Vaginal prolapse", hi:"Vaginal prolapse" } },
  { id:"dystocia", icon:"🐮", name:{ bn:"প্রসব আটকে", en:"Dystocia", hi:"Dystocia" } },
  { id:"swollen_foot", icon:"🦶", name:{ bn:"পা ফোলা", en:"Swollen foot", hi:"Swollen foot" } },
  { id:"swollen_navel", icon:"🐮", name:{ bn:"নাভি ফোলা", en:"Swollen navel", hi:"Swollen navel" } },
  { id:"swollen_jaw", icon:"🦷", name:{ bn:"চোয়াল ফোলা", en:"Swollen jaw", hi:"Swollen jaw" } },
  { id:"swollen_tongue", icon:"👅", name:{ bn:"জিহ্বা ফোলা", en:"Swollen tongue", hi:"Swollen tongue" } },
  { id:"hard_tongue", icon:"👅", name:{ bn:"জিহ্বা শক্ত", en:"Hard tongue", hi:"Hard tongue" } },
  { id:"sudden_death", icon:"💀", name:{ bn:"হঠাৎ মৃত্যু", en:"Sudden death", hi:"Sudden death" } },
  { id:"straining", icon:"😣", name:{ bn:"কোঁথ দেওয়া", en:"Straining", hi:"Straining" } },
  { id:"chronic_diarrhea", icon:"💩", name:{ bn:"পুরাতন ডায়রিয়া", en:"Chronic diarrhea", hi:"Chronic diarrhea" } },
  { id:"bottle_jaw", icon:"🐄", name:{ bn:"গলায় পানি", en:"Bottle jaw", hi:"Bottle jaw" } },
];

window.DISEASE_DB = [
  {
    id:"off_feed", icon:"🍽️", name:{ bn:"Off Feed - খাওয়া বন্ধ", en:"Off Feed", hi:"Off Feed" },
    symptoms:["not_eating","low_milk","weight_loss"],
    urgency:"medium",
    action:{ bn:"গরম জল + বিট লবণ 50g + Rumentas দিন, ২ ঘন্টায় না খেলে Vet কে ফোন করুন", en:"Warm water + salt + Rumentas, call vet if not eating in 2h", hi:"Warm water + salt + Rumentas, call vet if not eating in 2h" },
    treatment:["Rumentas Bolus 1 bolus PO","Vitamin B Complex 10ml IM","Hepatocare 10ml IM"],
    homeo:{ remedy:"Nux vomica 200", dose:"15 drops with water, 2 times daily, 3 days", bn:"Nux vomica ২০০ - ১৫ ফোঁটা জলে, দিনে ২ বার, ৩ দিন", en:"15 drops with water, 2 times daily, 3 days" }
  },
  {
    id:"bloat", icon:"🎈", name:{ bn:"পেট ফোলা - Bloat", en:"Bloat", hi:"Bloat" },
    symptoms:["bloat","not_eating","salivation"],
    urgency:"high",
    action:{ bn:"বাম পেটে চাপ দিন, শুতে দেবেন না, হাঁটান, तुरंत Vet কে ফোন করুন", en:"Do not let lie, walk slowly, call vet immediately", hi:"Do not let lie, walk slowly, call vet immediately" },
    treatment:["Bloatosil 100ml PO","Magnesium Hydroxide 100ml PO","Charcoal 50g PO"],
    homeo:{ remedy:"Carbo vegetabilis 200", dose:"15 drops TID x 2 days", bn:"Carbo veg ২০০ - ১৫ ফোঁটা জলে, দিনে ৩ বার, ২ দিন", en:"15 drops TID x 2 days" }
  },
  {
    id:"mastitis_acute", icon:"🐄", name:{ bn:"ওলান প্রদাহ - Acute Mastitis", en:"Acute Mastitis", hi:"Acute Mastitis" },
    symptoms:["swollen_udder","drop_milk","fever"],
    urgency:"high",
    action:{ bn:"ঠান্ডা জল দিয়ে ওলান ধুয়ে ফেলুন, দুধ সম্পূর্ণ দোহন করুন, Vet কে জানান", en:"Cold water wash, complete milking, consult vet", hi:"Cold water wash, complete milking, consult vet" },
    treatment:["Enrofloxacin 10ml IM","Meloxicam 10ml IM","Mastitis Herbal Cream apply"],
    homeo:{ remedy:"Phytolacca 200", dose:"15 drops BID x 5 days", bn:"Phytolacca ২০০ - ১৫ ফোঁটা, দিনে ২ বার, ৫ দিন", en:"15 drops BID x 5 days" }
  },
  {
    id:"milk_fever", icon:"🥛", name:{ bn:"দুধ জ্বর - Milk Fever", en:"Milk Fever", hi:"Milk Fever" },
    symptoms:["weakness","not_eating","low_temp"],
    urgency:"critical",
    action:{ bn:"গরম কাপড়ে ঢেকে রাখুন, শুতে দেবেন না, तुरंत Vet কে ফোন করুন - Calcium লাগবে", en:"Keep warm, do not let lie flat, call vet immediately - Calcium needed", hi:"Keep warm, do not let lie flat, call vet immediately - Calcium needed" },
    treatment:["Calcium Borogluconate 500ml IV slow","Dextrose 25% 200ml IV","Vitamin D3 10ml IM"],
    homeo:{ remedy:"Calcarea phosphorica 200", dose:"20 drops BID x 3 days", bn:"Calcarea phos ২০০ - ২০ ফোঁটা, দিনে ২ বার, ৩ দিন", en:"20 drops BID x 3 days" }
  },
  {
    id:"diarrhea", icon:"💧", name:{ bn:"পাতলা পায়খানা - Diarrhea", en:"Diarrhea", hi:"Diarrhea" },
    symptoms:["watery_diarrhea","dehydration","weakness"],
    urgency:"medium",
    action:{ bn:"ORS 100g + 1L জল + Light Kaolin, জল খাওয়ান, Vet কে জানান", en:"ORS + water, keep hydrated, consult vet", hi:"ORS + water, keep hydrated, consult vet" },
    treatment:["ORS 100g in 1L water PO","Light Kaolin 50ml PO","Enrofloxacin 5ml IM"],
    homeo:{ remedy:"Podophyllum 30", dose:"10 drops TID x 3 days", bn:"Podophyllum ৩০ - ১০ ফোঁটা, দিনে ৩ বার, ৩ দিন", en:"10 drops TID x 3 days" }
  },
  {
    id:"hs", icon:"🔴", name:{ bn:"গলাফোলা - HS", en:"Hemorrhagic Septicemia", hi:"Hemorrhagic Septicemia" },
    symptoms:["fever","swollen_neck","nasal_discharge"],
    urgency:"critical",
    action:{ bn:"আলাদা রাখুন, ঠান্ডা জায়গায় রাখুন, तुरंत Vet + Vaccine", en:"Isolate, keep cool, call vet immediately", hi:"Isolate, keep cool, call vet immediately" },
    treatment:["Sulphadimidine 30ml IV","Enrofloxacin 10ml IM","Meloxicam 10ml IM"],
    homeo:{ remedy:"China 30", dose:"10 drops TID x 5 days", bn:"China ৩০", en:"10 drops TID x 5 days" }
  },
  {
    id:"bq", icon:"🦶", name:{ bn:"বাদলা - Black Quarter", en:"Black Quarter", hi:"Black Quarter" },
    symptoms:["lameness","swollen_muscle","fever"],
    urgency:"critical",
    action:{ bn:"আলাদা রাখুন, নড়াচড়া বন্ধ, तुरंत Vet - Vaccine জরুরি", en:"Isolate, restrict movement, call vet - Vaccine needed", hi:"Isolate, restrict movement, call vet - Vaccine needed" },
    treatment:["Penicillin G 15ml IM","Meloxicam 10ml IM","Antitoxic serum"],
    homeo:{ remedy:"Sepia 200", dose:"15 drops BID x 3 days", bn:"Sepia ২০০", en:"15 drops BID x 3 days" }
  },
  {
    id:"fmd", icon:"👅", name:{ bn:"ক্ষুরা রোগ - FMD", en:"FMD", hi:"FMD" },
    symptoms:["mouth_lesion","lameness","fever","salivation"],
    urgency:"high",
    action:{ bn:"মুখ Boric Acid জলে ধুয়ে দিন, পা পরিষ্কার রাখুন, আলাদা রাখুন, Vet কে জানান", en:"Wash mouth with boric acid, clean feet, isolate, call vet", hi:"Wash mouth with boric acid, clean feet, isolate, call vet" },
    treatment:["Wound spray + Boric acid wash","Meloxicam 10ml IM","Antibiotic to prevent secondary"],
    homeo:{ remedy:"Pulsatilla 200", dose:"15 drops BID x 7 days", bn:"Pulsatilla ২০০", en:"15 drops BID x 7 days" }
  },
  {
    id:"babesiosis", icon:"🩸", name:{ bn:"লাল প্রস্রাব - Babesiosis", en:"Babesiosis", hi:"Babesiosis" },
    symptoms:["red_urine","fever","pale_mucous","weakness"],
    urgency:"high",
    action:{ bn:"ছায়ায় রাখুন, জল খাওয়ান, আটালি পরিষ্কার করুন, Vet কে জানান", en:"Keep in shade, give water, remove ticks, call vet", hi:"Keep in shade, give water, remove ticks, call vet" },
    treatment:["Berenil 8ml IM","Oxytetracycline LA 10ml IM","Iron Dextran 5ml IM"],
    homeo:{ remedy:"Belladonna 30", dose:"10 drops TID x 2 days", bn:"Belladonna ৩০", en:"10 drops TID x 2 days" }
  },
  {
    id:"theileriosis", icon:"🔴", name:{ bn:"থাইলেরিওসিস - Theileriosis", en:"Theileriosis", hi:"Theileriosis" },
    symptoms:["fever","swollen_lymph","pale_mucous","weakness"],
    urgency:"high",
    action:{ bn:"ছায়ায় রাখুন, আটালি নাশক দিন, Vet কে জানান", en:"Keep in shade, tick control, call vet", hi:"Keep in shade, tick control, call vet" },
    treatment:["Buparvaquone 8ml IM","Oxytetracycline 10ml IM","Vitamin B Complex 10ml IM"],
    homeo:{ remedy:"Arnica 30", dose:"10 drops BID x 5 days", bn:"Arnica ৩০", en:"10 drops BID x 5 days" }
  },
  {
    id:"anaplasmosis", icon:"⚪", name:{ bn:"এনাপ্লাজমোসিস", en:"Anaplasmosis", hi:"Anaplasmosis" },
    symptoms:["pale_mucous","fever","weight_loss","jaundice"],
    urgency:"high",
    action:{ bn:"ছায়ায় রাখুন, Iron যুক্ত খাবার, Vet কে জানান", en:"Shade, iron rich feed, consult vet", hi:"Shade, iron rich feed, consult vet" },
    treatment:["Enrofloxacin 10ml IM","Meloxicam 10ml IM","Vitamin B Complex 10ml IM"],
    homeo:{ remedy:"Nux vomica 200", dose:"15 drops BID x 3 days", bn:"Nux vomica ২০০ - ১৫ ফোঁটা, দিনে ২ বার, ৩ দিন", en:"15 drops BID x 3 days" }
  },
  {
    id:"trypanosomosis", icon:"🦟", name:{ bn:"সুররা - Trypanosomosis", en:"Trypanosomosis", hi:"Trypanosomosis" },
    symptoms:["fever","weight_loss","pale_mucous","swollen_lymph"],
    urgency:"high",
    action:{ bn:"মশা-মাছি থেকে দূরে রাখুন, Vet কে জানান", en:"Keep away from flies, call vet", hi:"Keep away from flies, call vet" },
    treatment:["Enrofloxacin 10ml IM","Meloxicam 10ml IM","Vitamin B Complex 10ml IM"],
    homeo:{ remedy:"Phytolacca 200", dose:"15 drops BID x 5 days", bn:"Phytolacca ২০০ - ১৫ ফোঁটা, দিনে ২ বার, ৫ দিন", en:"15 drops BID x 5 days" }
  },
  {
    id:"coccidiosis", icon:"🩸", name:{ bn:"রক্ত আমাশা - Coccidiosis", en:"Coccidiosis", hi:"Coccidiosis" },
    symptoms:["bloody_diarrhea","watery_diarrhea","weakness","dehydration"],
    urgency:"medium",
    action:{ bn:"ORS + পরিষ্কার জল + শুকনো জায়গা, Vet কে জানান", en:"ORS + clean water + dry bedding, call vet", hi:"ORS + clean water + dry bedding, call vet" },
    treatment:["Enrofloxacin 10ml IM","Meloxicam 10ml IM","Vitamin B Complex 10ml IM"],
    homeo:{ remedy:"Calcarea phos 200", dose:"20 drops BID x 3 days", bn:"Calcarea phos ২০০", en:"20 drops BID x 3 days" }
  },
  {
    id:"pneumonia", icon:"🌬️", name:{ bn:"নিউমোনিয়া - Pneumonia", en:"Pneumonia", hi:"Pneumonia" },
    symptoms:["cough","fever","nasal_discharge","difficulty_breathing"],
    urgency:"high",
    action:{ bn:"গরম জায়গায় রাখুন, বাতাস থেকে দূরে, Vet কে জানান", en:"Keep warm, avoid wind, call vet", hi:"Keep warm, avoid wind, call vet" },
    treatment:["Enrofloxacin 10ml IM","Meloxicam 10ml IM","Vitamin B Complex 10ml IM"],
    homeo:{ remedy:"Arsenicum album 30", dose:"10 drops TID x 3 days", bn:"Arsenicum ৩০", en:"10 drops TID x 3 days" }
  },
  {
    id:"retained_placenta", icon:"🐮", name:{ bn:"ফুল আটকে - Retained Placenta", en:"Retained Placenta", hi:"Retained Placenta" },
    symptoms:["retained_placenta","fever","foul_discharge"],
    urgency:"medium",
    action:{ bn:"টানবেন না, পরিষ্কার রাখুন, Vet কে জানান", en:"Do not pull, keep clean, call vet", hi:"Do not pull, keep clean, call vet" },
    treatment:["Enrofloxacin 10ml IM","Meloxicam 10ml IM","Vitamin B Complex 10ml IM"],
    homeo:{ remedy:"Borax 30", dose:"10 drops TID x 5 days", bn:"Borax ৩০", en:"10 drops TID x 5 days" }
  },
  {
    id:"metritis", icon:"🤢", name:{ bn:"জরায়ু প্রদাহ - Metritis", en:"Metritis", hi:"Metritis" },
    symptoms:["foul_discharge","fever","low_milk","not_eating"],
    urgency:"high",
    action:{ bn:"পরিষ্কার রাখুন, Vet কে জানান", en:"Keep clean, call vet", hi:"Keep clean, call vet" },
    treatment:["Enrofloxacin 10ml IM","Meloxicam 10ml IM","Vitamin B Complex 10ml IM"],
    homeo:{ remedy:"China 30", dose:"10 drops TID x 5 days", bn:"China ৩০", en:"10 drops TID x 5 days" }
  },
  {
    id:"repeat_breeding", icon:"❌", name:{ bn:"বারবার গরম - Repeat Breeding", en:"Repeat Breeding", hi:"Repeat Breeding" },
    symptoms:["infertility","irregular_heat","low_milk"],
    urgency:"low",
    action:{ bn:"Mineral Mixture + Deworming + Vet পরামর্শ", en:"Mineral mixture + deworming + vet advice", hi:"Mineral mixture + deworming + vet advice" },
    treatment:["Enrofloxacin 10ml IM","Meloxicam 10ml IM","Vitamin B Complex 10ml IM"],
    homeo:{ remedy:"Sepia 200", dose:"15 drops BID x 3 days", bn:"Sepia ২০০", en:"15 drops BID x 3 days" }
  },
  {
    id:"anestrus", icon:"😴", name:{ bn:"গরম না হওয়া - Anestrus", en:"Anestrus", hi:"Anestrus" },
    symptoms:["infertility","not_cycling","weight_loss"],
    urgency:"low",
    action:{ bn:"ভালো খাবার + Mineral + Vet Check", en:"Good feed + mineral + vet check", hi:"Good feed + mineral + vet check" },
    treatment:["Enrofloxacin 10ml IM","Meloxicam 10ml IM","Vitamin B Complex 10ml IM"],
    homeo:{ remedy:"Pulsatilla 200", dose:"15 drops BID x 7 days", bn:"Pulsatilla ২০০", en:"15 drops BID x 7 days" }
  },
  {
    id:"ketosis", icon:"⚖️", name:{ bn:"কিটোসিস - Ketosis", en:"Ketosis", hi:"Ketosis" },
    symptoms:["weight_loss","low_milk","not_eating","acetone_breath"],
    urgency:"medium",
    action:{ bn:"গুড় + জল + ভালো খাবার, Vet কে জানান", en:"Jaggery + water + good feed, call vet", hi:"Jaggery + water + good feed, call vet" },
    treatment:["Enrofloxacin 10ml IM","Meloxicam 10ml IM","Vitamin B Complex 10ml IM"],
    homeo:{ remedy:"Belladonna 30", dose:"10 drops TID x 2 days", bn:"Belladonna ৩০", en:"10 drops TID x 2 days" }
  },
  {
    id:"acidosis", icon:"🍋", name:{ bn:"অ্যাসিডোসিস - Acidosis", en:"Acidosis", hi:"Acidosis" },
    symptoms:["bloat","diarrhea","not_eating","lameness"],
    urgency:"medium",
    action:{ bn:"খাবার বন্ধ, শুধু খড় + জল, Vet কে জানান", en:"Stop concentrate, only hay + water, call vet", hi:"Stop concentrate, only hay + water, call vet" },
    treatment:["Enrofloxacin 10ml IM","Meloxicam 10ml IM","Vitamin B Complex 10ml IM"],
    homeo:{ remedy:"Arnica 30", dose:"10 drops BID x 5 days", bn:"Arnica ৩০", en:"10 drops BID x 5 days" }
  },
  {
    id:"hypomagnesemia", icon:"⚡", name:{ bn:"ম্যাগনেসিয়াম ঘাটতি", en:"Hypomagnesemia", hi:"Hypomagnesemia" },
    symptoms:["weakness","tetany","not_eating","nervous"],
    urgency:"critical",
    action:{ bn:"অন্ধকার শান্ত জায়গায় রাখুন, আঘাত থেকে বাঁচান, Vet কে ফোন করুন", en:"Keep in dark quiet place, prevent injury, call vet", hi:"Keep in dark quiet place, prevent injury, call vet" },
    treatment:["Enrofloxacin 10ml IM","Meloxicam 10ml IM","Vitamin B Complex 10ml IM"],
    homeo:{ remedy:"Nux vomica 200", dose:"15 drops BID x 3 days", bn:"Nux vomica ২০০ - ১৫ ফোঁটা, দিনে ২ বার, ৩ দিন", en:"15 drops BID x 3 days" }
  },
  {
    id:"wound", icon:"🩹", name:{ bn:"ক্ষত - Wound", en:"Wound", hi:"Wound" },
    symptoms:["skin_lesion","bleeding","swelling"],
    urgency:"medium",
    action:{ bn:"Povidone দিয়ে ধুয়ে পরিষ্কার কাপড় বাঁধুন, Vet কে জানান", en:"Wash with povidone, bandage clean, call vet", hi:"Wash with povidone, bandage clean, call vet" },
    treatment:["Enrofloxacin 10ml IM","Meloxicam 10ml IM","Vitamin B Complex 10ml IM"],
    homeo:{ remedy:"Phytolacca 200", dose:"15 drops BID x 5 days", bn:"Phytolacca ২০০ - ১৫ ফোঁটা, দিনে ২ বার, ৫ দিন", en:"15 drops BID x 5 days" }
  },
  {
    id:"maggot_wound", icon:"🪱", name:{ bn:"পোকা ঘা - Maggot Wound", en:"Maggot Wound", hi:"Maggot Wound" },
    symptoms:["maggot","foul_smell","skin_lesion"],
    urgency:"medium",
    action:{ bn:"পোকা পরিষ্কার করে Povidone দিন, Vet কে জানান", en:"Remove maggots, apply povidone, call vet", hi:"Remove maggots, apply povidone, call vet" },
    treatment:["Enrofloxacin 10ml IM","Meloxicam 10ml IM","Vitamin B Complex 10ml IM"],
    homeo:{ remedy:"Calcarea phos 200", dose:"20 drops BID x 3 days", bn:"Calcarea phos ২০০", en:"20 drops BID x 3 days" }
  },
  {
    id:"tick_infestation", icon:"🪲", name:{ bn:"আটালি - Tick Infestation", en:"Tick Infestation", hi:"Tick Infestation" },
    symptoms:["tick_infestation","fever","pale_mucous","weakness"],
    urgency:"medium",
    action:{ bn:"আটালি হাতে তুলে পুড়িয়ে ফেলুন, Pour-on দিন, Vet কে জানান", en:"Remove ticks manually, apply pour-on, call vet", hi:"Remove ticks manually, apply pour-on, call vet" },
    treatment:["Enrofloxacin 10ml IM","Meloxicam 10ml IM","Vitamin B Complex 10ml IM"],
    homeo:{ remedy:"Arsenicum album 30", dose:"10 drops TID x 3 days", bn:"Arsenicum ৩০", en:"10 drops TID x 3 days" }
  },
  {
    id:"chronic_mastitis", icon:"🐄", name:{ bn:"পুরাতন ওলান প্রদাহ", en:"Chronic Mastitis", hi:"Chronic Mastitis" },
    symptoms:["swollen_udder","clotted_milk","low_milk"],
    urgency:"medium",
    action:{ bn:"গরম সেঁক + সম্পূর্ণ দোহন + Teat Dip, Vet কে জানান", en:"Hot fomentation + complete milking + teat dip, call vet", hi:"Hot fomentation + complete milking + teat dip, call vet" },
    treatment:["Enrofloxacin 10ml IM","Meloxicam 10ml IM","Vitamin B Complex 10ml IM"],
    homeo:{ remedy:"Borax 30", dose:"10 drops TID x 5 days", bn:"Borax ৩০", en:"10 drops TID x 5 days" }
  },
  {
    id:"calf_diarrhea", icon:"🐮", name:{ bn:"বাছুরের ডায়রিয়া", en:"Calf Diarrhea", hi:"Calf Diarrhea" },
    symptoms:["watery_diarrhea","dehydration","weakness","fever"],
    urgency:"high",
    action:{ bn:"ORS + গরম জায়গা + মায়ের দুধ কম, Vet কে জানান", en:"ORS + warm place + less milk, call vet", hi:"ORS + warm place + less milk, call vet" },
    treatment:["Enrofloxacin 10ml IM","Meloxicam 10ml IM","Vitamin B Complex 10ml IM"],
    homeo:{ remedy:"China 30", dose:"10 drops TID x 5 days", bn:"China ৩০", en:"10 drops TID x 5 days" }
  },
  {
    id:"dehydration", icon:"💦", name:{ bn:"পানিশূন্যতা", en:"Dehydration", hi:"Dehydration" },
    symptoms:["dehydration","weakness","not_eating"],
    urgency:"high",
    action:{ bn:"ORS + নুন-চিনি জল ঘন ঘন খাওয়ান, Vet কে জানান", en:"ORS + salt-sugar water frequently, call vet", hi:"ORS + salt-sugar water frequently, call vet" },
    treatment:["Enrofloxacin 10ml IM","Meloxicam 10ml IM","Vitamin B Complex 10ml IM"],
    homeo:{ remedy:"Sepia 200", dose:"15 drops BID x 3 days", bn:"Sepia ২০০", en:"15 drops BID x 3 days" }
  },
  {
    id:"downer_cow", icon:"⬇️", name:{ bn:"শুয়ে পড়া গাভী", en:"Downer Cow", hi:"Downer Cow" },
    symptoms:["weakness","not_eating","lameness","low_temp"],
    urgency:"critical",
    action:{ bn:"নরম বিছানা + পাশ ফিরিয়ে দিন ৩ ঘন্টা পর পর, Vet কে ফোন করুন", en:"Soft bedding + turn every 3h, call vet", hi:"Soft bedding + turn every 3h, call vet" },
    treatment:["Enrofloxacin 10ml IM","Meloxicam 10ml IM","Vitamin B Complex 10ml IM"],
    homeo:{ remedy:"Pulsatilla 200", dose:"15 drops BID x 7 days", bn:"Pulsatilla ২০০", en:"15 drops BID x 7 days" }
  },
  {
    id:"uterine_prolapse", icon:"🐄", name:{ bn:"জরায়ু বের হওয়া", en:"Uterine Prolapse", hi:"Uterine Prolapse" },
    symptoms:["uterine_prolapse","straining","bleeding"],
    urgency:"critical",
    action:{ bn:"পরিষ্কার ভেজা কাপড়ে ঢেকে রাখুন, বসতে দেবেন না, Vet কে ফোন করুন", en:"Cover with clean wet cloth, do not let sit, call vet", hi:"Cover with clean wet cloth, do not let sit, call vet" },
    treatment:["Enrofloxacin 10ml IM","Meloxicam 10ml IM","Vitamin B Complex 10ml IM"],
    homeo:{ remedy:"Belladonna 30", dose:"10 drops TID x 2 days", bn:"Belladonna ৩০", en:"10 drops TID x 2 days" }
  },
  {
    id:"vaginal_prolapse", icon:"🐄", name:{ bn:"যোনি বের হওয়া", en:"Vaginal Prolapse", hi:"Vaginal Prolapse" },
    symptoms:["vaginal_prolapse","straining","swelling"],
    urgency:"high",
    action:{ bn:"পরিষ্কার রাখুন, Vet কে জানান", en:"Keep clean, call vet", hi:"Keep clean, call vet" },
    treatment:["Enrofloxacin 10ml IM","Meloxicam 10ml IM","Vitamin B Complex 10ml IM"],
    homeo:{ remedy:"Arnica 30", dose:"10 drops BID x 5 days", bn:"Arnica ৩০", en:"10 drops BID x 5 days" }
  },
  {
    id:"dystocia", icon:"🐮", name:{ bn:"প্রসব আটকে - Dystocia", en:"Dystocia", hi:"Dystocia" },
    symptoms:["dystocia","straining","weakness"],
    urgency:"critical",
    action:{ bn:"টানবেন না, পরিষ্কার জায়গা, Vet কে ফোন করুন", en:"Do not pull, clean area, call vet immediately", hi:"Do not pull, clean area, call vet immediately" },
    treatment:["Enrofloxacin 10ml IM","Meloxicam 10ml IM","Vitamin B Complex 10ml IM"],
    homeo:{ remedy:"Nux vomica 200", dose:"15 drops BID x 3 days", bn:"Nux vomica ২০০ - ১৫ ফোঁটা, দিনে ২ বার, ৩ দিন", en:"15 drops BID x 3 days" }
  },
  {
    id:"foot_rot", icon:"🦶", name:{ bn:"পা পচা - Foot Rot", en:"Foot Rot", hi:"Foot Rot" },
    symptoms:["lameness","swollen_foot","foul_smell","fever"],
    urgency:"medium",
    action:{ bn:"পা পরিষ্কার + শুকনো জায়গা + পটাশ জলে ধুয়ে দিন, Vet কে জানান", en:"Clean foot + dry place + potash wash, call vet", hi:"Clean foot + dry place + potash wash, call vet" },
    treatment:["Enrofloxacin 10ml IM","Meloxicam 10ml IM","Vitamin B Complex 10ml IM"],
    homeo:{ remedy:"Phytolacca 200", dose:"15 drops BID x 5 days", bn:"Phytolacca ২০০ - ১৫ ফোঁটা, দিনে ২ বার, ৫ দিন", en:"15 drops BID x 5 days" }
  },
  {
    id:"laminitis", icon:"🦶", name:{ bn:"ল্যামিনাইটিস", en:"Laminitis", hi:"Laminitis" },
    symptoms:["lameness","swollen_foot","fever","not_eating"],
    urgency:"medium",
    action:{ bn:"নরম বিছানা + দানাদার কম, Vet কে জানান", en:"Soft bedding + less concentrate, call vet", hi:"Soft bedding + less concentrate, call vet" },
    treatment:["Enrofloxacin 10ml IM","Meloxicam 10ml IM","Vitamin B Complex 10ml IM"],
    homeo:{ remedy:"Calcarea phos 200", dose:"20 drops BID x 3 days", bn:"Calcarea phos ২০০", en:"20 drops BID x 3 days" }
  },
  {
    id:"joint_ill", icon:"🦵", name:{ bn:"বাছুরের জয়েন্ট ফোলা", en:"Joint Ill", hi:"Joint Ill" },
    symptoms:["swollen_joints","fever","lameness","weakness"],
    urgency:"high",
    action:{ bn:"নাভি Povidone দিয়ে পরিষ্কার + গরম জায়গা, Vet কে জানান", en:"Clean navel with povidone + warm place, call vet", hi:"Clean navel with povidone + warm place, call vet" },
    treatment:["Enrofloxacin 10ml IM","Meloxicam 10ml IM","Vitamin B Complex 10ml IM"],
    homeo:{ remedy:"Arsenicum album 30", dose:"10 drops TID x 3 days", bn:"Arsenicum ৩০", en:"10 drops TID x 3 days" }
  },
  {
    id:"navel_ill", icon:"🐮", name:{ bn:"নাভি পচা - Navel Ill", en:"Navel Ill", hi:"Navel Ill" },
    symptoms:["swollen_navel","fever","weakness","not_eating"],
    urgency:"high",
    action:{ bn:"নাভি Povidone দিয়ে দিনে ২ বার পরিষ্কার, Vet কে জানান", en:"Clean navel twice daily with povidone, call vet", hi:"Clean navel twice daily with povidone, call vet" },
    treatment:["Enrofloxacin 10ml IM","Meloxicam 10ml IM","Vitamin B Complex 10ml IM"],
    homeo:{ remedy:"Borax 30", dose:"10 drops TID x 5 days", bn:"Borax ৩০", en:"10 drops TID x 5 days" }
  },
  {
    id:"white_muscle", icon:"💪", name:{ bn:"সাদা মাংস রোগ", en:"White Muscle Disease", hi:"White Muscle Disease" },
    symptoms:["weakness","lameness","stiffness","not_eating"],
    urgency:"medium",
    action:{ bn:"Vitamin E যুক্ত খাবার + Mineral, Vet কে জানান", en:"Vitamin E feed + mineral, call vet", hi:"Vitamin E feed + mineral, call vet" },
    treatment:["Enrofloxacin 10ml IM","Meloxicam 10ml IM","Vitamin B Complex 10ml IM"],
    homeo:{ remedy:"China 30", dose:"10 drops TID x 5 days", bn:"China ৩০", en:"10 drops TID x 5 days" }
  },
  {
    id:"pica", icon:"🧱", name:{ bn:"মাটি খাওয়া - Pica", en:"Pica", hi:"Pica" },
    symptoms:["pica","weight_loss","not_eating","hair_loss"],
    urgency:"low",
    action:{ bn:"Mineral Mixture 50g + কৃমির ঔষধ, Vet পরামর্শ", en:"Mineral mixture 50g + deworming, vet advice", hi:"Mineral mixture 50g + deworming, vet advice" },
    treatment:["Enrofloxacin 10ml IM","Meloxicam 10ml IM","Vitamin B Complex 10ml IM"],
    homeo:{ remedy:"Sepia 200", dose:"15 drops BID x 3 days", bn:"Sepia ২০০", en:"15 drops BID x 3 days" }
  },
  {
    id:"hardware", icon:"🔩", name:{ bn:"লোহা খাওয়া রোগ", en:"Hardware Disease", hi:"Hardware Disease" },
    symptoms:["not_eating","bloat","fever"],
    urgency:"high",
    action:{ bn:"দানাদার বন্ধ, শুধু খড়, Vet কে জানান", en:"Stop concentrate, only hay, call vet", hi:"Stop concentrate, only hay, call vet" },
    treatment:["Enrofloxacin 10ml IM","Meloxicam 10ml IM","Vitamin B Complex 10ml IM"],
    homeo:{ remedy:"Pulsatilla 200", dose:"15 drops BID x 7 days", bn:"Pulsatilla ২০০", en:"15 drops BID x 7 days" }
  },
  {
    id:"impaction", icon:"🪨", name:{ bn:"পাকস্থলী বন্ধ", en:"Rumen Impaction", hi:"Rumen Impaction" },
    symptoms:["not_eating","bloat","constipation","weakness"],
    urgency:"high",
    action:{ bn:"Liquid Paraffin + গরম জল, হাঁটান, Vet কে জানান", en:"Liquid paraffin + warm water, walk, call vet", hi:"Liquid paraffin + warm water, walk, call vet" },
    treatment:["Enrofloxacin 10ml IM","Meloxicam 10ml IM","Vitamin B Complex 10ml IM"],
    homeo:{ remedy:"Belladonna 30", dose:"10 drops TID x 2 days", bn:"Belladonna ৩০", en:"10 drops TID x 2 days" }
  },
  {
    id:"liver_fluke", icon:"🐛", name:{ bn:"কলিজা কৃমি - Liver Fluke", en:"Liver Fluke", hi:"Liver Fluke" },
    symptoms:["weight_loss","pale_mucous","bottle_jaw","diarrhea"],
    urgency:"medium",
    action:{ bn:"পরিষ্কার জল + কৃমির ঔষধ, Vet কে জানান", en:"Clean water + deworming, call vet", hi:"Clean water + deworming, call vet" },
    treatment:["Enrofloxacin 10ml IM","Meloxicam 10ml IM","Vitamin B Complex 10ml IM"],
    homeo:{ remedy:"Arnica 30", dose:"10 drops BID x 5 days", bn:"Arnica ৩০", en:"10 drops BID x 5 days" }
  },
  {
    id:"roundworm", icon:"🪱", name:{ bn:"গোল কৃমি - Roundworm", en:"Roundworm", hi:"Roundworm" },
    symptoms:["weight_loss","diarrhea","pot_belly","weakness"],
    urgency:"medium",
    action:{ bn:"Albendazole + পরিষ্কার ঘর, Vet পরামর্শ", en:"Albendazole + clean shed, vet advice", hi:"Albendazole + clean shed, vet advice" },
    treatment:["Enrofloxacin 10ml IM","Meloxicam 10ml IM","Vitamin B Complex 10ml IM"],
    homeo:{ remedy:"Nux vomica 200", dose:"15 drops BID x 3 days", bn:"Nux vomica ২০০ - ১৫ ফোঁটা, দিনে ২ বার, ৩ দিন", en:"15 drops BID x 3 days" }
  },
  {
    id:"tapeworm", icon:"🪱", name:{ bn:"ফিতা কৃমি - Tapeworm", en:"Tapeworm", hi:"Tapeworm" },
    symptoms:["weight_loss","diarrhea","pot_belly"],
    urgency:"medium",
    action:{ bn:"Praziquantel + পরিষ্কার, Vet পরামর্শ", en:"Praziquantel + clean, vet advice", hi:"Praziquantel + clean, vet advice" },
    treatment:["Enrofloxacin 10ml IM","Meloxicam 10ml IM","Vitamin B Complex 10ml IM"],
    homeo:{ remedy:"Phytolacca 200", dose:"15 drops BID x 5 days", bn:"Phytolacca ২০০ - ১৫ ফোঁটা, দিনে ২ বার, ৫ দিন", en:"15 drops BID x 5 days" }
  },
  {
    id:"mange", icon:"🤕", name:{ bn:"খোসপাঁচড়া - Mange", en:"Mange", hi:"Mange" },
    symptoms:["hair_loss","itching","skin_lesion","crusty_skin"],
    urgency:"low",
    action:{ bn:"পরিষ্কার + রোদ + Ivermectin, Vet কে জানান", en:"Clean + sunlight + ivermectin, call vet", hi:"Clean + sunlight + ivermectin, call vet" },
    treatment:["Enrofloxacin 10ml IM","Meloxicam 10ml IM","Vitamin B Complex 10ml IM"],
    homeo:{ remedy:"Calcarea phos 200", dose:"20 drops BID x 3 days", bn:"Calcarea phos ২০০", en:"20 drops BID x 3 days" }
  },
  {
    id:"lice", icon:"🪲", name:{ bn:"উকুন - Lice", en:"Lice", hi:"Lice" },
    symptoms:["itching","hair_loss","restlessness","weight_loss"],
    urgency:"low",
    action:{ bn:"পরিষ্কার + Deltamethrin, Vet কে জানান", en:"Clean + deltamethrin, call vet", hi:"Clean + deltamethrin, call vet" },
    treatment:["Enrofloxacin 10ml IM","Meloxicam 10ml IM","Vitamin B Complex 10ml IM"],
    homeo:{ remedy:"Arsenicum album 30", dose:"10 drops TID x 3 days", bn:"Arsenicum ৩০", en:"10 drops TID x 3 days" }
  },
  {
    id:"ringworm", icon:"⭕", name:{ bn:"দাদ - Ringworm", en:"Ringworm", hi:"Ringworm" },
    symptoms:["circular_hair_loss","crusty_skin","itching","skin_lesion"],
    urgency:"low",
    action:{ bn:"Povidone wash + রোদ, Vet কে জানান", en:"Povidone wash + sunlight, call vet", hi:"Povidone wash + sunlight, call vet" },
    treatment:["Enrofloxacin 10ml IM","Meloxicam 10ml IM","Vitamin B Complex 10ml IM"],
    homeo:{ remedy:"Borax 30", dose:"10 drops TID x 5 days", bn:"Borax ৩০", en:"10 drops TID x 5 days" }
  },
  {
    id:"actinomycosis", icon:"🦷", name:{ bn:"চোয়াল ফোলা - Lumpy Jaw", en:"Actinomycosis", hi:"Actinomycosis" },
    symptoms:["swollen_jaw","hard_swelling","salivation","difficulty_eating"],
    urgency:"medium",
    action:{ bn:"নরম খাবার + Vet কে জানান", en:"Soft feed + call vet", hi:"Soft feed + call vet" },
    treatment:["Enrofloxacin 10ml IM","Meloxicam 10ml IM","Vitamin B Complex 10ml IM"],
    homeo:{ remedy:"China 30", dose:"10 drops TID x 5 days", bn:"China ৩০", en:"10 drops TID x 5 days" }
  },
  {
    id:"actinobacillosis", icon:"👅", name:{ bn:"কাঠ জিহ্বা - Wooden Tongue", en:"Actinobacillosis", hi:"Actinobacillosis" },
    symptoms:["swollen_tongue","salivation","difficulty_eating","hard_tongue"],
    urgency:"medium",
    action:{ bn:"নরম খাবার + Vet কে জানান", en:"Soft feed + call vet", hi:"Soft feed + call vet" },
    treatment:["Enrofloxacin 10ml IM","Meloxicam 10ml IM","Vitamin B Complex 10ml IM"],
    homeo:{ remedy:"Sepia 200", dose:"15 drops BID x 3 days", bn:"Sepia ২০০", en:"15 drops BID x 3 days" }
  },
  {
    id:"enterotoxemia", icon:"☠️", name:{ bn:"এন্টেরোটক্সিমিয়া", en:"Enterotoxemia", hi:"Enterotoxemia" },
    symptoms:["bloody_diarrhea","fever","abdominal_pain","sudden_death"],
    urgency:"critical",
    action:{ bn:"খাবার বন্ধ + ORS + Vet কে ফোন করুন", en:"Stop feed + ORS + call vet", hi:"Stop feed + ORS + call vet" },
    treatment:["Enrofloxacin 10ml IM","Meloxicam 10ml IM","Vitamin B Complex 10ml IM"],
    homeo:{ remedy:"Pulsatilla 200", dose:"15 drops BID x 7 days", bn:"Pulsatilla ২০০", en:"15 drops BID x 7 days" }
  },
  {
    id:"botulism", icon:"🧠", name:{ bn:"বটুলিজম", en:"Botulism", hi:"Botulism" },
    symptoms:["paralysis","difficulty_swallowing","salivation","weakness"],
    urgency:"critical",
    action:{ bn:"পচা খাবার ফেলে দিন + Vet কে ফোন করুন", en:"Remove rotten feed + call vet", hi:"Remove rotten feed + call vet" },
    treatment:["Enrofloxacin 10ml IM","Meloxicam 10ml IM","Vitamin B Complex 10ml IM"],
    homeo:{ remedy:"Belladonna 30", dose:"10 drops TID x 2 days", bn:"Belladonna ৩০", en:"10 drops TID x 2 days" }
  },
  {
    id:"tetanus", icon:"🔒", name:{ bn:"ধনুষ্টংকার - Tetanus", en:"Tetanus", hi:"Tetanus" },
    symptoms:["stiffness","tetany","difficulty_breathing"],
    urgency:"critical",
    action:{ bn:"অন্ধকার শান্ত জায়গা + Vet কে ফোন করুন", en:"Dark quiet place + call vet", hi:"Dark quiet place + call vet" },
    treatment:["Enrofloxacin 10ml IM","Meloxicam 10ml IM","Vitamin B Complex 10ml IM"],
    homeo:{ remedy:"Arnica 30", dose:"10 drops BID x 5 days", bn:"Arnica ৩০", en:"10 drops BID x 5 days" }
  },
  {
    id:"rabies", icon:"😡", name:{ bn:"জলাতঙ্ক - Rabies", en:"Rabies", hi:"Rabies" },
    symptoms:["aggression","paralysis","salivation","nervous"],
    urgency:"critical",
    action:{ bn:"আলাদা রাখুন, বাঁধুন, Vet + সরকারি হাসপাতালে জানান", en:"Isolate, tie, inform vet + govt hospital", hi:"Isolate, tie, inform vet + govt hospital" },
    treatment:["Enrofloxacin 10ml IM","Meloxicam 10ml IM","Vitamin B Complex 10ml IM"],
    homeo:{ remedy:"Nux vomica 200", dose:"15 drops BID x 3 days", bn:"Nux vomica ২০০ - ১৫ ফোঁটা, দিনে ২ বার, ৩ দিন", en:"15 drops BID x 3 days" }
  },
  {
    id:"anthrax", icon:"☠️", name:{ bn:"তড়কা - Anthrax", en:"Anthrax", hi:"Anthrax" },
    symptoms:["sudden_death","bleeding_from_orifices","fever","swelling"],
    urgency:"critical",
    action:{ bn:"মৃতদেহ খুলবেন না, গর্তে পুঁতে চুন দিন, Vet + প্রশাসনকে জানান", en:"Do not open carcass, bury with lime, inform vet + admin", hi:"Do not open carcass, bury with lime, inform vet + admin" },
    treatment:["Enrofloxacin 10ml IM","Meloxicam 10ml IM","Vitamin B Complex 10ml IM"],
    homeo:{ remedy:"Phytolacca 200", dose:"15 drops BID x 5 days", bn:"Phytolacca ২০০ - ১৫ ফোঁটা, দিনে ২ বার, ৫ দিন", en:"15 drops BID x 5 days" }
  },
  {
    id:"brucellosis", icon:"🤰", name:{ bn:"ব্রুসেলোসিস - গর্ভপাত", en:"Brucellosis", hi:"Brucellosis" },
    symptoms:["abortion","infertility","retained_placenta","swollen_joints"],
    urgency:"high",
    action:{ bn:"গর্ভপাত হলে আলাদা রাখুন, পরিষ্কার, Vet কে জানান", en:"Isolate after abortion, clean, call vet", hi:"Isolate after abortion, clean, call vet" },
    treatment:["Enrofloxacin 10ml IM","Meloxicam 10ml IM","Vitamin B Complex 10ml IM"],
    homeo:{ remedy:"Calcarea phos 200", dose:"20 drops BID x 3 days", bn:"Calcarea phos ২০০", en:"20 drops BID x 3 days" }
  },
  {
    id:"leptospirosis", icon:"🟡", name:{ bn:"লেপ্টোস্পাইরোসিস", en:"Leptospirosis", hi:"Leptospirosis" },
    symptoms:["fever","red_urine","jaundice","abortion"],
    urgency:"high",
    action:{ bn:"পরিষ্কার জল + ইঁদুর নিয়ন্ত্রণ + Vet কে জানান", en:"Clean water + rat control + call vet", hi:"Clean water + rat control + call vet" },
    treatment:["Enrofloxacin 10ml IM","Meloxicam 10ml IM","Vitamin B Complex 10ml IM"],
    homeo:{ remedy:"Arsenicum album 30", dose:"10 drops TID x 3 days", bn:"Arsenicum ৩০", en:"10 drops TID x 3 days" }
  },
  {
    id:"tuberculosis", icon:"🫁", name:{ bn:"যক্ষ্মা - TB", en:"Tuberculosis", hi:"Tuberculosis" },
    symptoms:["cough","weight_loss","low_milk","swollen_lymph"],
    urgency:"high",
    action:{ bn:"আলাদা রাখুন + Vet + সরকারি পরীক্ষা", en:"Isolate + vet + govt test", hi:"Isolate + vet + govt test" },
    treatment:["Enrofloxacin 10ml IM","Meloxicam 10ml IM","Vitamin B Complex 10ml IM"],
    homeo:{ remedy:"Borax 30", dose:"10 drops TID x 5 days", bn:"Borax ৩০", en:"10 drops TID x 5 days" }
  },
  {
    id:"johnes", icon:"💩", name:{ bn:"জোনস ডিজিজ", en:"Johnes Disease", hi:"Johnes Disease" },
    symptoms:["chronic_diarrhea","weight_loss","bottle_jaw","weakness"],
    urgency:"high",
    action:{ bn:"আলাদা রাখুন + পরিষ্কার + Vet কে জানান", en:"Isolate + clean + call vet", hi:"Isolate + clean + call vet" },
    treatment:["Enrofloxacin 10ml IM","Meloxicam 10ml IM","Vitamin B Complex 10ml IM"],
    homeo:{ remedy:"China 30", dose:"10 drops TID x 5 days", bn:"China ৩০", en:"10 drops TID x 5 days" }
  },
  {
    id:"ibr", icon:"🤧", name:{ bn:"আইবিআর - IBR", en:"IBR", hi:"IBR" },
    symptoms:["fever","nasal_discharge","cough","conjunctivitis"],
    urgency:"medium",
    action:{ bn:"আলাদা + গরম জায়গা + Vet কে জানান", en:"Isolate + warm place + call vet", hi:"Isolate + warm place + call vet" },
    treatment:["Enrofloxacin 10ml IM","Meloxicam 10ml IM","Vitamin B Complex 10ml IM"],
    homeo:{ remedy:"Sepia 200", dose:"15 drops BID x 3 days", bn:"Sepia ২০০", en:"15 drops BID x 3 days" }
  },
  {
    id:"bvd", icon:"🤮", name:{ bn:"বিভিডি", en:"BVD", hi:"BVD" },
    symptoms:["diarrhea","fever","mouth_lesion","abortion"],
    urgency:"medium",
    action:{ bn:"আলাদা + ORS + Vet কে জানান", en:"Isolate + ORS + call vet", hi:"Isolate + ORS + call vet" },
    treatment:["Enrofloxacin 10ml IM","Meloxicam 10ml IM","Vitamin B Complex 10ml IM"],
    homeo:{ remedy:"Pulsatilla 200", dose:"15 drops BID x 7 days", bn:"Pulsatilla ২০০", en:"15 drops BID x 7 days" }
  },
  {
    id:"blue_tongue", icon:"👅", name:{ bn:"ব্লু টং", en:"Blue Tongue", hi:"Blue Tongue" },
    symptoms:["mouth_lesion","lameness","fever","swollen_face"],
    urgency:"high",
    action:{ bn:"নরম খাবার + ছায়া + Vet কে জানান", en:"Soft feed + shade + call vet", hi:"Soft feed + shade + call vet" },
    treatment:["Enrofloxacin 10ml IM","Meloxicam 10ml IM","Vitamin B Complex 10ml IM"],
    homeo:{ remedy:"Belladonna 30", dose:"10 drops TID x 2 days", bn:"Belladonna ৩০", en:"10 drops TID x 2 days" }
  },
  {
    id:"ppr", icon:"🐐", name:{ bn:"পিপিআর", en:"PPR", hi:"PPR" },
    symptoms:["fever","mouth_lesion","diarrhea","pneumonia"],
    urgency:"high",
    action:{ bn:"আলাদা + ORS + Vet কে জানান", en:"Isolate + ORS + call vet", hi:"Isolate + ORS + call vet" },
    treatment:["Enrofloxacin 10ml IM","Meloxicam 10ml IM","Vitamin B Complex 10ml IM"],
    homeo:{ remedy:"Arnica 30", dose:"10 drops BID x 5 days", bn:"Arnica ৩০", en:"10 drops BID x 5 days" }
  },
  {
    id:"pox", icon:"🔴", name:{ bn:"বসন্ত - Pox", en:"Pox", hi:"Pox" },
    symptoms:["skin_nodules","fever","swollen_lymph","low_milk"],
    urgency:"medium",
    action:{ bn:"Povidone + আলাদা + Vet কে জানান", en:"Povidone + isolate + call vet", hi:"Povidone + isolate + call vet" },
    treatment:["Enrofloxacin 10ml IM","Meloxicam 10ml IM","Vitamin B Complex 10ml IM"],
    homeo:{ remedy:"Nux vomica 200", dose:"15 drops BID x 3 days", bn:"Nux vomica ২০০ - ১৫ ফোঁটা, দিনে ২ বার, ৩ দিন", en:"15 drops BID x 3 days" }
  },
  {
    id:"ephemeral_fever", icon:"🤒", name:{ bn:"তিন দিনের জ্বর", en:"Ephemeral Fever", hi:"Ephemeral Fever" },
    symptoms:["fever","lameness","not_eating","shivering"],
    urgency:"medium",
    action:{ bn:"ছায়া + জল + ৩ দিন বিশ্রাম, Vet কে জানান", en:"Shade + water + 3 days rest, call vet", hi:"Shade + water + 3 days rest, call vet" },
    treatment:["Enrofloxacin 10ml IM","Meloxicam 10ml IM","Vitamin B Complex 10ml IM"],
    homeo:{ remedy:"Phytolacca 200", dose:"15 drops BID x 5 days", bn:"Phytolacca ২০০ - ১৫ ফোঁটা, দিনে ২ বার, ৫ দিন", en:"15 drops BID x 5 days" }
  },
  {
    id:"rumen_acidosis", icon:"🍚", name:{ bn:"ধান খাওয়া - Grain Overload", en:"Grain Overload", hi:"Grain Overload" },
    symptoms:["bloat","diarrhea","not_eating","lameness"],
    urgency:"high",
    action:{ bn:"দানাদার বন্ধ + খড় + জল + Vet কে জানান", en:"Stop grain + hay + water + call vet", hi:"Stop grain + hay + water + call vet" },
    treatment:["Enrofloxacin 10ml IM","Meloxicam 10ml IM","Vitamin B Complex 10ml IM"],
    homeo:{ remedy:"Calcarea phos 200", dose:"20 drops BID x 3 days", bn:"Calcarea phos ২০০", en:"20 drops BID x 3 days" }
  },
  {
    id:"constipation", icon:"🚫", name:{ bn:"কোষ্ঠকাঠিন্য", en:"Constipation", hi:"Constipation" },
    symptoms:["constipation","not_eating","bloat","hard_dung"],
    urgency:"low",
    action:{ bn:"Liquid Paraffin + গরম জল + হাঁটান, Vet কে জানান", en:"Liquid paraffin + warm water + walk, call vet", hi:"Liquid paraffin + warm water + walk, call vet" },
    treatment:["Enrofloxacin 10ml IM","Meloxicam 10ml IM","Vitamin B Complex 10ml IM"],
    homeo:{ remedy:"Arsenicum album 30", dose:"10 drops TID x 3 days", bn:"Arsenicum ৩০", en:"10 drops TID x 3 days" }
  },
  {
    id:"hemorrhagic_bowel", icon:"🩸", name:{ bn:"রক্ত ক্ষরণ - Hemorrhagic Bowel", en:"Hemorrhagic Bowel", hi:"Hemorrhagic Bowel" },
    symptoms:["bloody_diarrhea","abdominal_pain","weakness","pale_mucous"],
    urgency:"critical",
    action:{ bn:"ORS + Vet কে ফোন করুন", en:"ORS + call vet immediately", hi:"ORS + call vet immediately" },
    treatment:["Enrofloxacin 10ml IM","Meloxicam 10ml IM","Vitamin B Complex 10ml IM"],
    homeo:{ remedy:"Borax 30", dose:"10 drops TID x 5 days", bn:"Borax ৩০", en:"10 drops TID x 5 days" }
  },
  {
    id:"photosensitization", icon:"☀️", name:{ bn:"রোদে চামড়া পোড়া", en:"Photosensitization", hi:"Photosensitization" },
    symptoms:["skin_lesion","swelling","itching","redness"],
    urgency:"low",
    action:{ bn:"ছায়ায় রাখুন + Povidone, Vet কে জানান", en:"Keep in shade + povidone, call vet", hi:"Keep in shade + povidone, call vet" },
    treatment:["Enrofloxacin 10ml IM","Meloxicam 10ml IM","Vitamin B Complex 10ml IM"],
    homeo:{ remedy:"China 30", dose:"10 drops TID x 5 days", bn:"China ৩০", en:"10 drops TID x 5 days" }
  },
  {
    id:"allergy", icon:"🤧", name:{ bn:"এলার্জি", en:"Allergy", hi:"Allergy" },
    symptoms:["swelling","itching","skin_lesion","difficulty_breathing"],
    urgency:"medium",
    action:{ bn:"ঠান্ডা জল + Vet কে জানান", en:"Cold water + call vet", hi:"Cold water + call vet" },
    treatment:["Enrofloxacin 10ml IM","Meloxicam 10ml IM","Vitamin B Complex 10ml IM"],
    homeo:{ remedy:"Sepia 200", dose:"15 drops BID x 3 days", bn:"Sepia ২০০", en:"15 drops BID x 3 days" }
  },
  {
    id:"snake_bite", icon:"🐍", name:{ bn:"সাপে কামড়", en:"Snake Bite", hi:"Snake Bite" },
    symptoms:["swelling","bleeding","pain","weakness"],
    urgency:"critical",
    action:{ bn:"বাঁধন দেবেন না, শান্ত রাখুন, Vet কে ফোন করুন", en:"Do not tie, keep calm, call vet", hi:"Do not tie, keep calm, call vet" },
    treatment:["Enrofloxacin 10ml IM","Meloxicam 10ml IM","Vitamin B Complex 10ml IM"],
    homeo:{ remedy:"Pulsatilla 200", dose:"15 drops BID x 7 days", bn:"Pulsatilla ২০০", en:"15 drops BID x 7 days" }
  },
  {
    id:"dog_bite", icon:"🐕", name:{ bn:"কুকুর কামড়", en:"Dog Bite", hi:"Dog Bite" },
    symptoms:["bleeding","wound","swelling","pain"],
    urgency:"high",
    action:{ bn:"Povidone দিয়ে ধুয়ে Vet + Rabies Vaccine", en:"Wash with povidone + vet + rabies vaccine", hi:"Wash with povidone + vet + rabies vaccine" },
    treatment:["Enrofloxacin 10ml IM","Meloxicam 10ml IM","Vitamin B Complex 10ml IM"],
    homeo:{ remedy:"Belladonna 30", dose:"10 drops TID x 2 days", bn:"Belladonna ৩০", en:"10 drops TID x 2 days" }
  },
  {
    id:"rumen_typhany", icon:"🎈", name:{ bn:"রুমেন টাইম্পানি - Rumen Tympany", en:"Rumen Tympany", hi:"Rumen Tympany" },
    symptoms:["bloat","not_eating","difficulty_breathing"],
    urgency:"critical",
    action:{ bn:"বাম দিকে Trocar + Vet কে ফোন করুন", en:"Left side trocar + call vet immediately", hi:"Left side trocar + call vet immediately" },
    treatment:["Enrofloxacin 10ml IM","Meloxicam 10ml IM","Vitamin B Complex 10ml IM"],
    homeo:{ remedy:"Arnica 30", dose:"10 drops BID x 5 days", bn:"Arnica ৩০", en:"10 drops BID x 5 days" }
  },
];
