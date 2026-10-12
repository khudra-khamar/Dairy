// FINAL FIXED 70 REAL DISEASES + 70 SYMPTOMS + Homeo Bracket - No Placeholder
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
  {
    id:"rumen_typhany", icon:"🎈", name:{ bn:"রুমেন টাইম্পানি - Rumen Tympany", en:"Rumen Tympany" },
    symptoms:["bloat","not_eating","difficulty_breathing"],
    treatment:["Trocarization if severe","Bloatosil 100ml PO","Magnesium Hydroxide 100ml PO"],
    homeo:{ remedy:"Carbo veg 200", dose:"15 drops TID x 2 days", bn:"Carbo veg ২০০ - ১৫ ফোঁটা, দিনে ৩ বার, ২ দিন", en:"15 drops TID x 2 days" },
    action:{ bn:"রুমেন টাইম্পানি - চিকিৎসা দেখুন", en:"Rumen Tympany - See treatment" }
  },
];
window.DISEASE_DB = [
  {
    id:"off_feed", icon:"🍽️", name:{ bn:"Off Feed - খাওয়া বন্ধ", en:"Off Feed" },
    symptoms:["not_eating","low_milk","weight_loss"],
    treatment:["Rumentas Bolus 1 bolus PO","Vitamin B Complex 10ml IM","Hepatocare 10ml IM"],
    homeo:{ remedy:"Nux vomica 200", dose:"15 drops with water, BID x 3 days", bn:"Nux vomica ২০০ - ১৫ ফোঁটা, দিনে ২ বার, ৩ দিন", en:"15 drops with water, BID x 3 days" },
    action:{ bn:"Off Feed - খাওয়া বন্ধ - চিকিৎসা দেখুন", en:"Off Feed - See treatment" }
  },
  {
    id:"bloat", icon:"🎈", name:{ bn:"পেট ফোলা - Bloat", en:"Bloat" },
    symptoms:["bloat","not_eating","salivation"],
    treatment:["Bloatosil 100ml PO","Magnesium Hydroxide 100ml PO","Charcoal 50g PO"],
    homeo:{ remedy:"Carbo veg 200", dose:"15 drops TID x 2 days", bn:"Carbo veg ২০০", en:"15 drops TID x 2 days" },
    action:{ bn:"পেট ফোলা - Bloat - চিকিৎসা দেখুন", en:"Bloat - See treatment" }
  },
  {
    id:"mastitis_acute", icon:"🐄", name:{ bn:"ওলান প্রদাহ - Acute Mastitis", en:"Acute Mastitis" },
    symptoms:["swollen_udder","drop_milk","fever"],
    treatment:["Enrofloxacin 10ml IM","Meloxicam 10ml IM","Mastitis Cream apply"],
    homeo:{ remedy:"Phytolacca 200", dose:"15 drops BID x 5 days", bn:"Phytolacca ২০০", en:"15 drops BID x 5 days" },
    action:{ bn:"ওলান প্রদাহ - Acute Mastitis - চিকিৎসা দেখুন", en:"Acute Mastitis - See treatment" }
  },
  {
    id:"milk_fever", icon:"🥛", name:{ bn:"দুধ জ্বর - Milk Fever", en:"Milk Fever" },
    symptoms:["weakness","not_eating","low_temp"],
    treatment:["Calcium Borogluconate 500ml IV slow","Dextrose 25% 200ml IV","Vitamin D3 10ml IM"],
    homeo:{ remedy:"Calcarea phos 200", dose:"20 drops BID x 3 days", bn:"Calcarea phos ২০০", en:"20 drops BID x 3 days" },
    action:{ bn:"দুধ জ্বর - Milk Fever - চিকিৎসা দেখুন", en:"Milk Fever - See treatment" }
  },
  {
    id:"diarrhea", icon:"💧", name:{ bn:"পাতলা পায়খানা - Diarrhea", en:"Diarrhea" },
    symptoms:["watery_diarrhea","dehydration","weakness"],
    treatment:["ORS 100g in 1L water PO","Light Kaolin 50ml PO","Enrofloxacin 5ml IM"],
    homeo:{ remedy:"Podophyllum 30", dose:"10 drops TID x 3 days", bn:"Podophyllum ৩০", en:"10 drops TID x 3 days" },
    action:{ bn:"পাতলা পায়খানা - Diarrhea - চিকিৎসা দেখুন", en:"Diarrhea - See treatment" }
  },
  {
    id:"hs", icon:"🔴", name:{ bn:"গলাফোলা - HS", en:"Hemorrhagic Septicemia" },
    symptoms:["fever","swollen_neck","nasal_discharge"],
    treatment:["Sulphadimidine 30ml IV","Enrofloxacin 10ml IM","Meloxicam 10ml IM"],
    homeo:{ remedy:"Arsenicum album 30", dose:"10 drops TID x 3 days", bn:"Arsenicum ৩০", en:"10 drops TID x 3 days" },
    action:{ bn:"গলাফোলা - HS - চিকিৎসা দেখুন", en:"Hemorrhagic Septicemia - See treatment" }
  },
  {
    id:"bq", icon:"🦶", name:{ bn:"বাদলা - Black Quarter", en:"Black Quarter" },
    symptoms:["lameness","swollen_muscle","fever"],
    treatment:["Penicillin G 15ml IM","Meloxicam 10ml IM","Antitoxic serum"],
    homeo:{ remedy:"Ledum pal 200", dose:"15 drops BID x 3 days", bn:"Ledum pal ২০০", en:"15 drops BID x 3 days" },
    action:{ bn:"বাদলা - Black Quarter - চিকিৎসা দেখুন", en:"Black Quarter - See treatment" }
  },
  {
    id:"fmd", icon:"👅", name:{ bn:"ক্ষুরা রোগ - FMD", en:"FMD" },
    symptoms:["mouth_lesion","lameness","fever","salivation"],
    treatment:["Wound spray + Boric acid wash","Meloxicam 10ml IM","Antibiotic to prevent secondary"],
    homeo:{ remedy:"Borax 30", dose:"10 drops TID x 5 days", bn:"Borax ৩০", en:"10 drops TID x 5 days" },
    action:{ bn:"ক্ষুরা রোগ - FMD - চিকিৎসা দেখুন", en:"FMD - See treatment" }
  },
  {
    id:"babesiosis", icon:"🩸", name:{ bn:"লাল প্রস্রাব - Babesiosis", en:"Babesiosis" },
    symptoms:["red_urine","fever","pale_mucous","weakness"],
    treatment:["Berenil 8ml IM","Oxytetracycline LA 10ml IM","Iron Dextran 5ml IM"],
    homeo:{ remedy:"China 30", dose:"10 drops TID x 5 days", bn:"China ৩০", en:"10 drops TID x 5 days" },
    action:{ bn:"লাল প্রস্রাব - Babesiosis - চিকিৎসা দেখুন", en:"Babesiosis - See treatment" }
  },
  {
    id:"theileriosis", icon:"🔴", name:{ bn:"থাইলেরিওসিস - Theileriosis", en:"Theileriosis" },
    symptoms:["fever","swollen_lymph","pale_mucous","weakness"],
    treatment:["Buparvaquone 8ml IM","Oxytetracycline 10ml IM","Vitamin B Complex 10ml IM"],
    homeo:{ remedy:"Arsenicum album 200", dose:"10 drops BID x 5 days", bn:"Arsenicum ২০০", en:"10 drops BID x 5 days" },
    action:{ bn:"থাইলেরিওসিস - Theileriosis - চিকিৎসা দেখুন", en:"Theileriosis - See treatment" }
  },
  {
    id:"anaplasmosis", icon:"⚪", name:{ bn:"এনাপ্লাজমোসিস", en:"Anaplasmosis" },
    symptoms:["pale_mucous","fever","weight_loss","jaundice"],
    treatment:["Imidocarb 4ml IM","Oxytetracycline LA 10ml IM","Iron + B Complex"],
    homeo:{ remedy:"China 30", dose:"10 drops TID x 5 days", bn:"China ৩০", en:"10 drops TID x 5 days" },
    action:{ bn:"এনাপ্লাজমোসিস - চিকিৎসা দেখুন", en:"Anaplasmosis - See treatment" }
  },
  {
    id:"trypanosomosis", icon:"🦟", name:{ bn:"সুররা - Trypanosomosis", en:"Trypanosomosis" },
    symptoms:["fever","weight_loss","pale_mucous","swollen_lymph"],
    treatment:["Isometamidium 5ml IM","Berenil 8ml IM","Vitamin B Complex"],
    homeo:{ remedy:"Arsenicum album 30", dose:"10 drops TID x 5 days", bn:"Arsenicum ৩০", en:"10 drops TID x 5 days" },
    action:{ bn:"সুররা - Trypanosomosis - চিকিৎসা দেখুন", en:"Trypanosomosis - See treatment" }
  },
  {
    id:"coccidiosis", icon:"🩸", name:{ bn:"রক্ত আমাশা - Coccidiosis", en:"Coccidiosis" },
    symptoms:["bloody_diarrhea","watery_diarrhea","weakness","dehydration"],
    treatment:["Toltrazuril 15ml PO","Sulphadimidine 20ml IV","ORS"],
    homeo:{ remedy:"Merc cor 30", dose:"10 drops TID x 3 days", bn:"Merc cor ৩০", en:"10 drops TID x 3 days" },
    action:{ bn:"রক্ত আমাশা - Coccidiosis - চিকিৎসা দেখুন", en:"Coccidiosis - See treatment" }
  },
  {
    id:"pneumonia", icon:"🌬️", name:{ bn:"নিউমোনিয়া - Pneumonia", en:"Pneumonia" },
    symptoms:["cough","fever","nasal_discharge","difficulty_breathing"],
    treatment:["Enrofloxacin 10ml IM","Meloxicam 10ml IM","Bromhexine 10ml IM"],
    homeo:{ remedy:"Bryonia 30", dose:"10 drops TID x 5 days", bn:"Bryonia ৩০", en:"10 drops TID x 5 days" },
    action:{ bn:"নিউমোনিয়া - Pneumonia - চিকিৎসা দেখুন", en:"Pneumonia - See treatment" }
  },
  {
    id:"retained_placenta", icon:"🐮", name:{ bn:"ফুল আটকে - Retained Placenta", en:"Retained Placenta" },
    symptoms:["retained_placenta","fever","foul_discharge"],
    treatment:["Oxytocin 5ml IM","Cloprostenol 2ml IM","Enrofloxacin 10ml IM"],
    homeo:{ remedy:"Sepia 200", dose:"15 drops BID x 3 days", bn:"Sepia ২০০", en:"15 drops BID x 3 days" },
    action:{ bn:"ফুল আটকে - Retained Placenta - চিকিৎসা দেখুন", en:"Retained Placenta - See treatment" }
  },
  {
    id:"metritis", icon:"🤢", name:{ bn:"জরায়ু প্রদাহ - Metritis", en:"Metritis" },
    symptoms:["foul_discharge","fever","low_milk","not_eating"],
    treatment:["Cloprostenol 2ml IM","Enrofloxacin 10ml IM","Meloxicam 10ml IM"],
    homeo:{ remedy:"Sepia 200", dose:"15 drops BID x 5 days", bn:"Sepia ২০০", en:"15 drops BID x 5 days" },
    action:{ bn:"জরায়ু প্রদাহ - Metritis - চিকিৎসা দেখুন", en:"Metritis - See treatment" }
  },
  {
    id:"repeat_breeding", icon:"❌", name:{ bn:"বারবার গরম - Repeat Breeding", en:"Repeat Breeding" },
    symptoms:["infertility","irregular_heat","low_milk"],
    treatment:["Cloprostenol 2ml IM","Buserelin 2.5ml IM","Vitamin AD3E 10ml IM"],
    homeo:{ remedy:"Sepia 200", dose:"15 drops BID x 7 days", bn:"Sepia ২০০", en:"15 drops BID x 7 days" },
    action:{ bn:"বারবার গরম - Repeat Breeding - চিকিৎসা দেখুন", en:"Repeat Breeding - See treatment" }
  },
  {
    id:"anestrus", icon:"😴", name:{ bn:"গরম না হওয়া - Anestrus", en:"Anestrus" },
    symptoms:["infertility","not_cycling","weight_loss"],
    treatment:["Buserelin 2.5ml IM","Vitamin AD3E + Mineral Mixture 50g/day"],
    homeo:{ remedy:"Pulsatilla 200", dose:"15 drops BID x 7 days", bn:"Pulsatilla ২০০", en:"15 drops BID x 7 days" },
    action:{ bn:"গরম না হওয়া - Anestrus - চিকিৎসা দেখুন", en:"Anestrus - See treatment" }
  },
  {
    id:"ketosis", icon:"⚖️", name:{ bn:"কিটোসিস - Ketosis", en:"Ketosis" },
    symptoms:["weight_loss","low_milk","not_eating","acetone_breath"],
    treatment:["Dextrose 25% 500ml IV","Propylene Glycol 200ml PO","Vitamin B Complex"],
    homeo:{ remedy:"China 30", dose:"10 drops BID x 5 days", bn:"China ৩০", en:"10 drops BID x 5 days" },
    action:{ bn:"কিটোসিস - Ketosis - চিকিৎসা দেখুন", en:"Ketosis - See treatment" }
  },
  {
    id:"acidosis", icon:"🍋", name:{ bn:"অ্যাসিডোসিস - Acidosis", en:"Acidosis" },
    symptoms:["bloat","diarrhea","not_eating","lameness"],
    treatment:["Sodium Bicarbonate 100ml IV","Magnesium Hydroxide 100ml PO","Probiotic"],
    homeo:{ remedy:"Nux vomica 30", dose:"10 drops TID x 3 days", bn:"Nux vomica ৩০", en:"10 drops TID x 3 days" },
    action:{ bn:"অ্যাসিডোসিস - Acidosis - চিকিৎসা দেখুন", en:"Acidosis - See treatment" }
  },
  {
    id:"hypomagnesemia", icon:"⚡", name:{ bn:"ম্যাগনেসিয়াম ঘাটতি", en:"Hypomagnesemia" },
    symptoms:["weakness","tetany","not_eating","nervous"],
    treatment:["Magnesium Sulphate 100ml IV slow","Calcium Borogluconate 300ml IV"],
    homeo:{ remedy:"Mag phos 200", dose:"15 drops BID x 3 days", bn:"Mag phos ২০০", en:"15 drops BID x 3 days" },
    action:{ bn:"ম্যাগনেসিয়াম ঘাটতি - চিকিৎসা দেখুন", en:"Hypomagnesemia - See treatment" }
  },
  {
    id:"wound", icon:"🩹", name:{ bn:"ক্ষত - Wound", en:"Wound" },
    symptoms:["skin_lesion","bleeding","swelling"],
    treatment:["Wound spray + Povidone Iodine","Enrofloxacin 10ml IM","Meloxicam 10ml IM"],
    homeo:{ remedy:"Calendula Q", dose:"Wash + 10 drops BID x 5 days", bn:"Calendula + Arnica", en:"Wash + 10 drops BID x 5 days" },
    action:{ bn:"ক্ষত - Wound - চিকিৎসা দেখুন", en:"Wound - See treatment" }
  },
  {
    id:"maggot_wound", icon:"🪱", name:{ bn:"পোকা ঘা - Maggot Wound", en:"Maggot Wound" },
    symptoms:["maggot","foul_smell","skin_lesion"],
    treatment:["Maggot Oil + Ivermectin 10ml SC","Wound spray","Enrofloxacin 10ml IM"],
    homeo:{ remedy:"Hepar sulph 30", dose:"10 drops BID x 5 days", bn:"Hepar sulph ৩০", en:"10 drops BID x 5 days" },
    action:{ bn:"পোকা ঘা - Maggot Wound - চিকিৎসা দেখুন", en:"Maggot Wound - See treatment" }
  },
  {
    id:"tick_infestation", icon:"🪲", name:{ bn:"আটালি - Tick Infestation", en:"Tick Infestation" },
    symptoms:["tick_infestation","fever","pale_mucous","weakness"],
    treatment:["Ivermectin 10ml SC","Deltamethrin Pour-on 10ml","Iron + B Complex"],
    homeo:{ remedy:"Ledum pal 200", dose:"15 drops BID x 3 days", bn:"Ledum pal ২০০", en:"15 drops BID x 3 days" },
    action:{ bn:"আটালি - Tick Infestation - চিকিৎসা দেখুন", en:"Tick Infestation - See treatment" }
  },
  {
    id:"chronic_mastitis", icon:"🐄", name:{ bn:"পুরাতন ওলান প্রদাহ", en:"Chronic Mastitis" },
    symptoms:["swollen_udder","clotted_milk","low_milk"],
    treatment:["Cefoperazone intramammary","Meloxicam 10ml IM","Teat dip"],
    homeo:{ remedy:"Silicea 30", dose:"15 drops BID x 7 days", bn:"Silicea ৩০", en:"15 drops BID x 7 days" },
    action:{ bn:"পুরাতন ওলান প্রদাহ - চিকিৎসা দেখুন", en:"Chronic Mastitis - See treatment" }
  },
  {
    id:"calf_diarrhea", icon:"🐮", name:{ bn:"বাছুরের ডায়রিয়া", en:"Calf Diarrhea" },
    symptoms:["watery_diarrhea","dehydration","weakness","fever"],
    treatment:["Calf ORS + Light Kaolin 20ml PO","Enrofloxacin 3ml IM","Probiotic"],
    homeo:{ remedy:"Podophyllum 30", dose:"5 drops TID x 3 days", bn:"Podophyllum ৩০", en:"5 drops TID x 3 days" },
    action:{ bn:"বাছুরের ডায়রিয়া - চিকিৎসা দেখুন", en:"Calf Diarrhea - See treatment" }
  },
  {
    id:"dehydration", icon:"💦", name:{ bn:"পানিশূন্যতা", en:"Dehydration" },
    symptoms:["dehydration","weakness","not_eating"],
    treatment:["Ringer Lactate 1000ml IV","ORS PO","Dextrose 25% 200ml IV"],
    homeo:{ remedy:"China 30", dose:"10 drops TID x 3 days", bn:"China ৩০", en:"10 drops TID x 3 days" },
    action:{ bn:"পানিশূন্যতা - চিকিৎসা দেখুন", en:"Dehydration - See treatment" }
  },
  {
    id:"downer_cow", icon:"⬇️", name:{ bn:"শুয়ে পড়া গাভী", en:"Downer Cow" },
    symptoms:["weakness","not_eating","lameness","low_temp"],
    treatment:["Calcium + Phosphorus IV","Vitamin AD3E + B Complex","Meloxicam 10ml IM"],
    homeo:{ remedy:"Arnica 200", dose:"15 drops BID x 5 days", bn:"Arnica ২০০", en:"15 drops BID x 5 days" },
    action:{ bn:"শুয়ে পড়া গাভী - চিকিৎসা দেখুন", en:"Downer Cow - See treatment" }
  },
  {
    id:"uterine_prolapse", icon:"🐄", name:{ bn:"জরায়ু বের হওয়া", en:"Uterine Prolapse" },
    symptoms:["uterine_prolapse","straining","bleeding"],
    treatment:["Calcium Borogluconate IV + Reposition","Enrofloxacin 10ml IM","Meloxicam 10ml IM"],
    homeo:{ remedy:"Sepia 200", dose:"15 drops BID x 5 days", bn:"Sepia ২০০", en:"15 drops BID x 5 days" },
    action:{ bn:"জরায়ু বের হওয়া - চিকিৎসা দেখুন", en:"Uterine Prolapse - See treatment" }
  },
  {
    id:"vaginal_prolapse", icon:"🐄", name:{ bn:"যোনি বের হওয়া", en:"Vaginal Prolapse" },
    symptoms:["vaginal_prolapse","straining","swelling"],
    treatment:["Reposition + Retention suture","Meloxicam 10ml IM","Enrofloxacin 10ml IM"],
    homeo:{ remedy:"Sepia 200", dose:"15 drops BID x 5 days", bn:"Sepia ২০০", en:"15 drops BID x 5 days" },
    action:{ bn:"যোনি বের হওয়া - চিকিৎসা দেখুন", en:"Vaginal Prolapse - See treatment" }
  },
  {
    id:"dystocia", icon:"🐮", name:{ bn:"প্রসব আটকে - Dystocia", en:"Dystocia" },
    symptoms:["dystocia","straining","weakness"],
    treatment:["Calcium + Oxytocin 5ml IM","Manual delivery + Antibiotic","Fluid therapy"],
    homeo:{ remedy:"Pulsatilla 200", dose:"15 drops BID x 3 days", bn:"Pulsatilla ২০০", en:"15 drops BID x 3 days" },
    action:{ bn:"প্রসব আটকে - Dystocia - চিকিৎসা দেখুন", en:"Dystocia - See treatment" }
  },
  {
    id:"foot_rot", icon:"🦶", name:{ bn:"পা পচা - Foot Rot", en:"Foot Rot" },
    symptoms:["lameness","swollen_foot","foul_smell","fever"],
    treatment:["Oxytetracycline LA 10ml IM","Foot care lotion + Zinc Oxide","Meloxicam 10ml IM"],
    homeo:{ remedy:"Silicea 30", dose:"15 drops BID x 7 days", bn:"Silicea ৩০", en:"15 drops BID x 7 days" },
    action:{ bn:"পা পচা - Foot Rot - চিকিৎসা দেখুন", en:"Foot Rot - See treatment" }
  },
  {
    id:"laminitis", icon:"🦶", name:{ bn:"ল্যামিনাইটিস", en:"Laminitis" },
    symptoms:["lameness","swollen_foot","fever","not_eating"],
    treatment:["Meloxicam 10ml IM","Hoof trimming + Soft bedding","Sodium Bicarbonate PO"],
    homeo:{ remedy:"Rhus tox 200", dose:"15 drops BID x 5 days", bn:"Rhus tox ২০০", en:"15 drops BID x 5 days" },
    action:{ bn:"ল্যামিনাইটিস - চিকিৎসা দেখুন", en:"Laminitis - See treatment" }
  },
  {
    id:"joint_ill", icon:"🦵", name:{ bn:"বাছুরের জয়েন্ট ফোলা", en:"Joint Ill" },
    symptoms:["swollen_joints","fever","lameness","weakness"],
    treatment:["Enrofloxacin 5ml IM","Meloxicam 5ml IM","Navel dressing"],
    homeo:{ remedy:"Bryonia 30", dose:"10 drops BID x 7 days", bn:"Bryonia ৩০", en:"10 drops BID x 7 days" },
    action:{ bn:"বাছুরের জয়েন্ট ফোলা - চিকিৎসা দেখুন", en:"Joint Ill - See treatment" }
  },
  {
    id:"navel_ill", icon:"🐮", name:{ bn:"নাভি পচা - Navel Ill", en:"Navel Ill" },
    symptoms:["swollen_navel","fever","weakness","not_eating"],
    treatment:["Povidone Iodine dressing","Enrofloxacin 5ml IM","Meloxicam 5ml IM"],
    homeo:{ remedy:"Calendula Q", dose:"Wash + Calendula", bn:"Calendula Q", en:"Wash + Calendula" },
    action:{ bn:"নাভি পচা - Navel Ill - চিকিৎসা দেখুন", en:"Navel Ill - See treatment" }
  },
  {
    id:"white_muscle", icon:"💪", name:{ bn:"সাদা মাংস রোগ", en:"White Muscle Disease" },
    symptoms:["weakness","lameness","stiffness","not_eating"],
    treatment:["Vitamin E + Selenium 10ml IM","Hivit 10ml IM","Mineral Mixture"],
    homeo:{ remedy:"Selenium 30", dose:"10 drops BID x 5 days", bn:"Selenium ৩০", en:"10 drops BID x 5 days" },
    action:{ bn:"সাদা মাংস রোগ - চিকিৎসা দেখুন", en:"White Muscle Disease - See treatment" }
  },
  {
    id:"pica", icon:"🧱", name:{ bn:"মাটি খাওয়া - Pica", en:"Pica" },
    symptoms:["pica","weight_loss","not_eating","hair_loss"],
    treatment:["Mineral Mixture 50g/day","Phosphorus Inj 10ml IM","Deworming"],
    homeo:{ remedy:"Calcarea phos 200", dose:"15 drops BID x 7 days", bn:"Calcarea phos ২০০", en:"15 drops BID x 7 days" },
    action:{ bn:"মাটি খাওয়া - Pica - চিকিৎসা দেখুন", en:"Pica - See treatment" }
  },
  {
    id:"hardware", icon:"🔩", name:{ bn:"লোহা খাওয়া রোগ", en:"Hardware Disease" },
    symptoms:["not_eating","bloat","fever"],
    treatment:["Rumenotomy if needed + Antibiotic","Meloxicam + Magnet PO","Fluid"],
    homeo:{ remedy:"Arnica 200", dose:"15 drops BID x 3 days", bn:"Arnica ২০০", en:"15 drops BID x 3 days" },
    action:{ bn:"লোহা খাওয়া রোগ - চিকিৎসা দেখুন", en:"Hardware Disease - See treatment" }
  },
  {
    id:"impaction", icon:"🪨", name:{ bn:"পাকস্থলী বন্ধ", en:"Rumen Impaction" },
    symptoms:["not_eating","bloat","constipation","weakness"],
    treatment:["Magnesium Sulphate 100g PO","Liquid Paraffin 500ml PO","B Complex + Fluid"],
    homeo:{ remedy:"Nux vomica 200", dose:"15 drops TID x 3 days", bn:"Nux vomica ২০০", en:"15 drops TID x 3 days" },
    action:{ bn:"পাকস্থলী বন্ধ - চিকিৎসা দেখুন", en:"Rumen Impaction - See treatment" }
  },
  {
    id:"liver_fluke", icon:"🐛", name:{ bn:"কলিজা কৃমি - Liver Fluke", en:"Liver Fluke" },
    symptoms:["weight_loss","pale_mucous","bottle_jaw","diarrhea"],
    treatment:["Triclabendazole 15ml PO","Ivermectin + Clorsulon 10ml SC","Iron + Liver tonic"],
    homeo:{ remedy:"China 30", dose:"10 drops BID x 7 days", bn:"China ৩০", en:"10 drops BID x 7 days" },
    action:{ bn:"কলিজা কৃমি - Liver Fluke - চিকিৎসা দেখুন", en:"Liver Fluke - See treatment" }
  },
  {
    id:"roundworm", icon:"🪱", name:{ bn:"গোল কৃমি - Roundworm", en:"Roundworm" },
    symptoms:["weight_loss","diarrhea","pot_belly","weakness"],
    treatment:["Albendazole 20ml PO","Fenbendazole 15ml PO","Vitamin B Complex"],
    homeo:{ remedy:"Cina 30", dose:"10 drops BID x 3 days", bn:"Cina ৩০", en:"10 drops BID x 3 days" },
    action:{ bn:"গোল কৃমি - Roundworm - চিকিৎসা দেখুন", en:"Roundworm - See treatment" }
  },
  {
    id:"tapeworm", icon:"🪱", name:{ bn:"ফিতা কৃমি - Tapeworm", en:"Tapeworm" },
    symptoms:["weight_loss","diarrhea","pot_belly"],
    treatment:["Praziquantel 10ml PO","Fenbendazole 15ml PO","Mineral Mixture"],
    homeo:{ remedy:"Cina 200", dose:"10 drops BID x 3 days", bn:"Cina ২০০", en:"10 drops BID x 3 days" },
    action:{ bn:"ফিতা কৃমি - Tapeworm - চিকিৎসা দেখুন", en:"Tapeworm - See treatment" }
  },
  {
    id:"mange", icon:"🤕", name:{ bn:"খোসপাঁচড়া - Mange", en:"Mange" },
    symptoms:["hair_loss","itching","skin_lesion","crusty_skin"],
    treatment:["Ivermectin 10ml SC","Amitraz dip 2ml/L","Vitamin AD3E"],
    homeo:{ remedy:"Sulphur 30", dose:"10 drops BID x 7 days", bn:"Sulphur ৩০", en:"10 drops BID x 7 days" },
    action:{ bn:"খোসপাঁচড়া - Mange - চিকিৎসা দেখুন", en:"Mange - See treatment" }
  },
  {
    id:"lice", icon:"🪲", name:{ bn:"উকুন - Lice", en:"Lice" },
    symptoms:["itching","hair_loss","restlessness","weight_loss"],
    treatment:["Deltamethrin Pour-on","Cypermethrin spray","Ivermectin 10ml SC"],
    homeo:{ remedy:"Staphysagria 30", dose:"10 drops BID x 5 days", bn:"Staphysagria ৩০", en:"10 drops BID x 5 days" },
    action:{ bn:"উকুন - Lice - চিকিৎসা দেখুন", en:"Lice - See treatment" }
  },
  {
    id:"ringworm", icon:"⭕", name:{ bn:"দাদ - Ringworm", en:"Ringworm" },
    symptoms:["circular_hair_loss","crusty_skin","itching","skin_lesion"],
    treatment:["Povidone Iodine wash","Antifungal cream + Vitamin AD3E","Mineral Mixture"],
    homeo:{ remedy:"Tellurium 30", dose:"10 drops BID x 10 days", bn:"Tellurium ৩০", en:"10 drops BID x 10 days" },
    action:{ bn:"দাদ - Ringworm - চিকিৎসা দেখুন", en:"Ringworm - See treatment" }
  },
  {
    id:"actinomycosis", icon:"🦷", name:{ bn:"চোয়াল ফোলা - Lumpy Jaw", en:"Actinomycosis" },
    symptoms:["swollen_jaw","hard_swelling","salivation","difficulty_eating"],
    treatment:["Potassium Iodide 10g PO daily x 7 days","Penicillin G 15ml IM","Meloxicam"],
    homeo:{ remedy:"Hepar sulph 200", dose:"15 drops BID x 7 days", bn:"Hepar sulph ২০০", en:"15 drops BID x 7 days" },
    action:{ bn:"চোয়াল ফোলা - Lumpy Jaw - চিকিৎসা দেখুন", en:"Actinomycosis - See treatment" }
  },
  {
    id:"actinobacillosis", icon:"👅", name:{ bn:"কাঠ জিহ্বা - Wooden Tongue", en:"Actinobacillosis" },
    symptoms:["swollen_tongue","salivation","difficulty_eating","hard_tongue"],
    treatment:["Potassium Iodide 10g PO","Strepto-Penicillin 10ml IM","Sodium Iodide IV"],
    homeo:{ remedy:"Phytolacca 200", dose:"15 drops BID x 7 days", bn:"Phytolacca ২০০", en:"15 drops BID x 7 days" },
    action:{ bn:"কাঠ জিহ্বা - Wooden Tongue - চিকিৎসা দেখুন", en:"Actinobacillosis - See treatment" }
  },
  {
    id:"enterotoxemia", icon:"☠️", name:{ bn:"এন্টেরোটক্সিমিয়া", en:"Enterotoxemia" },
    symptoms:["bloody_diarrhea","fever","abdominal_pain","sudden_death"],
    treatment:["Antitoxic serum + Enrofloxacin 10ml IM","Fluid + Meloxicam","Activated Charcoal PO"],
    homeo:{ remedy:"Arsenicum album 30", dose:"10 drops TID x 3 days", bn:"Arsenicum ৩০", en:"10 drops TID x 3 days" },
    action:{ bn:"এন্টেরোটক্সিমিয়া - চিকিৎসা দেখুন", en:"Enterotoxemia - See treatment" }
  },
  {
    id:"botulism", icon:"🧠", name:{ bn:"বটুলিজম", en:"Botulism" },
    symptoms:["paralysis","difficulty_swallowing","salivation","weakness"],
    treatment:["Antitoxin + Fluid + Activated Charcoal","Vitamin B Complex","Supportive"],
    homeo:{ remedy:"Causticum 30", dose:"10 drops BID x 5 days", bn:"Causticum ৩০", en:"10 drops BID x 5 days" },
    action:{ bn:"বটুলিজম - চিকিৎসা দেখুন", en:"Botulism - See treatment" }
  },
  {
    id:"tetanus", icon:"🔒", name:{ bn:"ধনুষ্টংকার - Tetanus", en:"Tetanus" },
    symptoms:["stiffness","tetany","difficulty_breathing"],
    treatment:["Antitetanus serum + Penicillin G high dose","Muscle relaxant + Dark quiet place","Fluid"],
    homeo:{ remedy:"Hypericum 200", dose:"15 drops TID x 5 days", bn:"Hypericum ২০০", en:"15 drops TID x 5 days" },
    action:{ bn:"ধনুষ্টংকার - Tetanus - চিকিৎসা দেখুন", en:"Tetanus - See treatment" }
  },
  {
    id:"rabies", icon:"😡", name:{ bn:"জলাতঙ্ক - Rabies", en:"Rabies" },
    symptoms:["aggression","paralysis","salivation","nervous"],
    treatment:["No treatment - Preventive vaccination","Isolation + Report","Post-exposure vaccine"],
    homeo:{ remedy:"Belladonna 200", dose:"Emergency - Vet only", bn:"Belladonna ২০০", en:"Emergency - Vet only" },
    action:{ bn:"জলাতঙ্ক - Rabies - চিকিৎসা দেখুন", en:"Rabies - See treatment" }
  },
  {
    id:"anthrax", icon:"☠️", name:{ bn:"তড়কা - Anthrax", en:"Anthrax" },
    symptoms:["sudden_death","bleeding_from_orifices","fever","swelling"],
    treatment:["Penicillin G high dose early","No carcass opening + Disinfection","Vaccination"],
    homeo:{ remedy:"Arsenicum album 200", dose:"Emergency - Allopathy must", bn:"Arsenicum ২০০", en:"Emergency - Allopathy must" },
    action:{ bn:"তড়কা - Anthrax - চিকিৎসা দেখুন", en:"Anthrax - See treatment" }
  },
  {
    id:"brucellosis", icon:"🤰", name:{ bn:"ব্রুসেলোসিস - গর্ভপাত", en:"Brucellosis" },
    symptoms:["abortion","infertility","retained_placenta","swollen_joints"],
    treatment:["No treatment - Test and cull","Hygiene + Vaccination","Enrofloxacin for secondary"],
    homeo:{ remedy:"Sepia 200", dose:"15 drops BID x 7 days", bn:"Sepia ২০০", en:"15 drops BID x 7 days" },
    action:{ bn:"ব্রুসেলোসিস - গর্ভপাত - চিকিৎসা দেখুন", en:"Brucellosis - See treatment" }
  },
  {
    id:"leptospirosis", icon:"🟡", name:{ bn:"লেপ্টোস্পাইরোসিস", en:"Leptospirosis" },
    symptoms:["fever","red_urine","jaundice","abortion"],
    treatment:["Strepto-Penicillin 10ml IM","Oxytetracycline LA 10ml IM","Fluid + B Complex"],
    homeo:{ remedy:"Leptospira nosode 30", dose:"10 drops BID x 7 days", bn:"Leptospira nosode ৩০", en:"10 drops BID x 7 days" },
    action:{ bn:"লেপ্টোস্পাইরোসিস - চিকিৎসা দেখুন", en:"Leptospirosis - See treatment" }
  },
  {
    id:"tuberculosis", icon:"🫁", name:{ bn:"যক্ষ্মা - TB", en:"Tuberculosis" },
    symptoms:["cough","weight_loss","low_milk","swollen_lymph"],
    treatment:["No treatment - Test and cull","Isolation + Disinfection"],
    homeo:{ remedy:"Tuberculinum 200", dose:"Chronic - Vet supervision", bn:"Tuberculinum ২০০", en:"Chronic - Vet supervision" },
    action:{ bn:"যক্ষ্মা - TB - চিকিৎসা দেখুন", en:"Tuberculosis - See treatment" }
  },
  {
    id:"johnes", icon:"💩", name:{ bn:"জোনস ডিজিজ", en:"Johnes Disease" },
    symptoms:["chronic_diarrhea","weight_loss","bottle_jaw","weakness"],
    treatment:["No treatment - Cull","Hygiene + Management"],
    homeo:{ remedy:"Thuja 200", dose:"Supportive only", bn:"Thuja ২০০", en:"Supportive only" },
    action:{ bn:"জোনস ডিজিজ - চিকিৎসা দেখুন", en:"Johnes Disease - See treatment" }
  },
  {
    id:"ibr", icon:"🤧", name:{ bn:"আইবিআর - IBR", en:"IBR" },
    symptoms:["fever","nasal_discharge","cough","conjunctivitis"],
    treatment:["Antibiotic for secondary + Meloxicam","Vitamin AD3E + Fluid","Isolation"],
    homeo:{ remedy:"Euphrasia 30", dose:"10 drops TID x 5 days", bn:"Euphrasia ৩০", en:"10 drops TID x 5 days" },
    action:{ bn:"আইবিআর - IBR - চিকিৎসা দেখুন", en:"IBR - See treatment" }
  },
  {
    id:"bvd", icon:"🤮", name:{ bn:"বিভিডি", en:"BVD" },
    symptoms:["diarrhea","fever","mouth_lesion","abortion"],
    treatment:["Supportive + Antibiotic secondary","Fluid + Vitamin","Isolation"],
    homeo:{ remedy:"Arsenicum album 30", dose:"10 drops BID x 5 days", bn:"Arsenicum ৩০", en:"10 drops BID x 5 days" },
    action:{ bn:"বিভিডি - চিকিৎসা দেখুন", en:"BVD - See treatment" }
  },
  {
    id:"blue_tongue", icon:"👅", name:{ bn:"ব্লু টং", en:"Blue Tongue" },
    symptoms:["mouth_lesion","lameness","fever","swollen_face"],
    treatment:["Meloxicam + Antibiotic secondary","Wound care + Soft feed","Fluid"],
    homeo:{ remedy:"Borax 30", dose:"10 drops TID x 5 days", bn:"Borax ৩০", en:"10 drops TID x 5 days" },
    action:{ bn:"ব্লু টং - চিকিৎসা দেখুন", en:"Blue Tongue - See treatment" }
  },
  {
    id:"ppr", icon:"🐐", name:{ bn:"পিপিআর", en:"PPR" },
    symptoms:["fever","mouth_lesion","diarrhea","pneumonia"],
    treatment:["Antibiotic secondary + Meloxicam","ORS + Vitamin","Isolation"],
    homeo:{ remedy:"Merc sol 30", dose:"10 drops TID x 5 days", bn:"Merc sol ৩০", en:"10 drops TID x 5 days" },
    action:{ bn:"পিপিআর - চিকিৎসা দেখুন", en:"PPR - See treatment" }
  },
  {
    id:"pox", icon:"🔴", name:{ bn:"বসন্ত - Pox", en:"Pox" },
    symptoms:["skin_nodules","fever","swollen_lymph","low_milk"],
    treatment:["Povidone dressing + Antibiotic secondary","Meloxicam + Vitamin","Isolation"],
    homeo:{ remedy:"Thuja 200", dose:"15 drops BID x 7 days", bn:"Thuja ২০০", en:"15 drops BID x 7 days" },
    action:{ bn:"বসন্ত - Pox - চিকিৎসা দেখুন", en:"Pox - See treatment" }
  },
  {
    id:"ephemeral_fever", icon:"🤒", name:{ bn:"তিন দিনের জ্বর", en:"Ephemeral Fever" },
    symptoms:["fever","lameness","not_eating","shivering"],
    treatment:["Meloxicam 10ml IM","Fluid + Rest 3 days","Vitamin B Complex"],
    homeo:{ remedy:"Aconite 30", dose:"10 drops TID x 3 days", bn:"Aconite ৩০", en:"10 drops TID x 3 days" },
    action:{ bn:"তিন দিনের জ্বর - চিকিৎসা দেখুন", en:"Ephemeral Fever - See treatment" }
  },
  {
    id:"rumen_acidosis", icon:"🍚", name:{ bn:"ধান খাওয়া - Grain Overload", en:"Grain Overload" },
    symptoms:["bloat","diarrhea","not_eating","lameness"],
    treatment:["Sodium Bicarbonate IV + Rumen lavage","Charcoal + Probiotic","Fluid"],
    homeo:{ remedy:"Nux vomica 30", dose:"10 drops TID x 3 days", bn:"Nux vomica ৩০", en:"10 drops TID x 3 days" },
    action:{ bn:"ধান খাওয়া - Grain Overload - চিকিৎসা দেখুন", en:"Grain Overload - See treatment" }
  },
  {
    id:"constipation", icon:"🚫", name:{ bn:"কোষ্ঠকাঠিন্য", en:"Constipation" },
    symptoms:["constipation","not_eating","bloat","hard_dung"],
    treatment:["Liquid Paraffin 500ml PO","Magnesium Sulphate PO","Enema + B Complex"],
    homeo:{ remedy:"Nux vomica 30", dose:"10 drops BID x 3 days", bn:"Nux vomica ৩০", en:"10 drops BID x 3 days" },
    action:{ bn:"কোষ্ঠকাঠিন্য - চিকিৎসা দেখুন", en:"Constipation - See treatment" }
  },
  {
    id:"hemorrhagic_bowel", icon:"🩸", name:{ bn:"রক্ত ক্ষরণ - Hemorrhagic Bowel", en:"Hemorrhagic Bowel" },
    symptoms:["bloody_diarrhea","abdominal_pain","weakness","pale_mucous"],
    treatment:["Fluid + Blood transfusion if needed","Enrofloxacin + Meloxicam","Vitamin K 10ml IM"],
    homeo:{ remedy:"China 30", dose:"10 drops BID x 5 days", bn:"China ৩০", en:"10 drops BID x 5 days" },
    action:{ bn:"রক্ত ক্ষরণ - Hemorrhagic Bowel - চিকিৎসা দেখুন", en:"Hemorrhagic Bowel - See treatment" }
  },
  {
    id:"photosensitization", icon:"☀️", name:{ bn:"রোদে চামড়া পোড়া", en:"Photosensitization" },
    symptoms:["skin_lesion","swelling","itching","redness"],
    treatment:["Shade + Antihistamine + Meloxicam","Povidone dressing + Liver tonic","Fluid"],
    homeo:{ remedy:"Cantharis 30", dose:"10 drops BID x 5 days", bn:"Cantharis ৩০", en:"10 drops BID x 5 days" },
    action:{ bn:"রোদে চামড়া পোড়া - চিকিৎসা দেখুন", en:"Photosensitization - See treatment" }
  },
  {
    id:"allergy", icon:"🤧", name:{ bn:"এলার্জি", en:"Allergy" },
    symptoms:["swelling","itching","skin_lesion","difficulty_breathing"],
    treatment:["Chlorpheniramine 10ml IM + Dexamethasone 5ml IM","Adrenaline if anaphylaxis","Fluid"],
    homeo:{ remedy:"Apis mel 30", dose:"10 drops TID x 3 days", bn:"Apis mel ৩০", en:"10 drops TID x 3 days" },
    action:{ bn:"এলার্জি - চিকিৎসা দেখুন", en:"Allergy - See treatment" }
  },
  {
    id:"snake_bite", icon:"🐍", name:{ bn:"সাপে কামড়", en:"Snake Bite" },
    symptoms:["swelling","bleeding","pain","weakness"],
    treatment:["Antivenom + Atropine + Dexamethasone","Fluid + Wound care","Enrofloxacin"],
    homeo:{ remedy:"Ledum pal 200", dose:"15 drops TID x 3 days", bn:"Ledum + Hypericum", en:"15 drops TID x 3 days" },
    action:{ bn:"সাপে কামড় - চিকিৎসা দেখুন", en:"Snake Bite - See treatment" }
  },
  {
    id:"dog_bite", icon:"🐕", name:{ bn:"কুকুর কামড়", en:"Dog Bite" },
    symptoms:["bleeding","wound","swelling","pain"],
    treatment:["Wound wash + Povidone + Antibiotic","Anti-rabies vaccine","Meloxicam"],
    homeo:{ remedy:"Calendula Q", dose:"Wash + Ledum 15 drops BID", bn:"Calendula + Ledum", en:"Wash + Ledum 15 drops BID" },
    action:{ bn:"কুকুর কামড় - চিকিৎসা দেখুন", en:"Dog Bite - See treatment" }
  },
  {
    id:"rumen_typhany", icon:"🎈", name:{ bn:"রুমেন টাইম্পানি - Rumen Tympany", en:"Rumen Tympany" },
    symptoms:["bloat","not_eating","difficulty_breathing"],
    treatment:["Trocarization if severe","Bloatosil 100ml PO","Magnesium Hydroxide 100ml PO"],
    homeo:{ remedy:"Carbo veg 200", dose:"15 drops TID x 2 days", bn:"Carbo veg ২০০ - ১৫ ফোঁটা, দিনে ৩ বার, ২ দিন", en:"15 drops TID x 2 days" },
    action:{ bn:"রুমেন টাইম্পানি - চিকিৎসা দেখুন", en:"Rumen Tympany - See treatment" }
  },
];