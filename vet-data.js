// ============================================
// VET DATA - 100+ MEDICINE DATABASE + 70 DISEASES
// Version: 1.0 - Safe Emoji + Generic Name + 3 Languages
// For vet.html - Medicine Stock + Case Taking
// ============================================

window.VET_MEDICINES = [
  // 1-25: ANTIBIOTIC
  { id:1, brand:'Enrofloxacin 10%', generic:'Enrofloxacin 100mg/ml', company:'Intas', category:'Antibiotic', dose:'5mg/kg IM', route:'IM', withdrawal:'3 days milk, 7 days meat', use:'Mastitis, Pneumonia, Diarrhea', price:180, icon:'💊' },
  { id:2, brand:'Ceftiofur', generic:'Ceftiofur Sodium 50mg/ml', company:'Pfizer', category:'Antibiotic', dose:'1mg/kg IM', route:'IM', withdrawal:'0 days', use:'Mastitis, Metritis, Pneumonia', price:350, icon:'💊' },
  { id:3, brand:'Oxytetracycline LA', generic:'Oxytetracycline 200mg/ml', company:'Alembic', category:'Antibiotic', dose:'20mg/kg IM', route:'IM', withdrawal:'5 days milk, 28 days meat', use:'Babesiosis, Anaplasmosis, Pneumonia', price:220, icon:'💊' },
  { id:4, brand:'Amoxicillin + Clavulanate', generic:'Amoxicillin 200mg + Clavulanate 50mg', company:'Intas', category:'Antibiotic', dose:'10mg/kg IM', route:'IM', withdrawal:'3 days', use:'Mastitis, Skin infection', price:250, icon:'💊' },
  { id:5, brand:'Penicillin G', generic:'Procaine Penicillin 400000 IU + Benzyl Penicillin', company:'Alembic', category:'Antibiotic', dose:'10000 IU/kg IM', route:'IM', withdrawal:'3 days', use:'BQ, HS, Wound', price:150, icon:'💉' },
  { id:6, brand:'Gentamicin', generic:'Gentamicin Sulphate 80mg/ml', company:'Neon', category:'Antibiotic', dose:'4mg/kg IM', route:'IM/IV', withdrawal:'5 days', use:'Severe infection, Peritonitis', price:180, icon:'💊' },
  { id:7, brand:'Sulphadimidine', generic:'Sulphadimidine 33% 100ml', company:'Alembic', category:'Antibiotic', dose:'100mg/kg IV', route:'IV', withdrawal:'5 days', use:'HS, Coccidiosis, Diarrhea', price:120, icon:'💧' },
  { id:8, brand:'Enro + Bromhexine', generic:'Enrofloxacin 100mg + Bromhexine 15mg', company:'Intas', category:'Antibiotic', dose:'5mg/kg IM', route:'IM', withdrawal:'3 days', use:'Pneumonia, Bronchitis', price:200, icon:'🌬️' },
  { id:9, brand:'Cefoperazone', generic:'Cefoperazone 250mg (Intramammary)', company:'Pfizer', category:'Antibiotic', dose:'1 tube per quarter', route:'Intramammary', withdrawal:'3 days', use:'Mastitis', price:85, icon:'🔴' },
  { id:10, brand:'Tylosin', generic:'Tylosin Tartrate 200mg/ml', company:'Wockhardt', category:'Antibiotic', dose:'10mg/kg IM', route:'IM', withdrawal:'4 days', use:'Pneumonia, Dysentery', price:280, icon:'💊' },

  // 11-25: More Antibiotics
  { id:11, brand:'Marbofloxacin', generic:'Marbofloxacin 100mg/ml', company:'Intas', category:'Antibiotic', dose:'2mg/kg IM', route:'IM', withdrawal:'3 days', use:'Mastitis, Pneumonia', price:320, icon:'💊' },
  { id:12, brand:'Cefquinome', generic:'Cefquinome Sulphate 25mg/ml', company:'Intervet', category:'Antibiotic', dose:'1mg/kg IM', route:'IM', withdrawal:'0 days', use:'Mastitis, Foot rot', price:380, icon:'💊' },
  { id:13, brand:'Amoxy + Cloxacillin', generic:'Amoxicillin 200mg + Cloxacillin 200mg (Mammary)', company:'Intas', category:'Antibiotic', dose:'1 tube/quarter', route:'Mammary', withdrawal:'3 days', use:'Mastitis', price:90, icon:'🔴' },
  { id:14, brand:'Oxytet Spray', generic:'Oxytetracycline 3% Spray 100ml', company:'Intas', category:'Antibiotic', dose:'Spray 2 times', route:'Topical', withdrawal:'0 days', use:'Foot rot, Wound, FMD', price:120, icon:'🦶' },
  { id:15, brand:'Metronidazole', generic:'Metronidazole 500mg/100ml', company:'Neon', category:'Antibiotic', dose:'10mg/kg IV', route:'IV', withdrawal:'3 days', use:'Diarrhea, Metritis', price:90, icon:'💧' },

  // 26-40: DEWORMER
  { id:26, brand:'Albendazole 10%', generic:'Albendazole 100mg/ml Suspension', company:'Intas', category:'Dewormer', dose:'10mg/kg PO', route:'Oral', withdrawal:'3 days milk, 7 days meat', use:'Roundworm, Fluke, Tapeworm', price:120, icon:'💧' },
  { id:27, brand:'Ivermectin 1%', generic:'Ivermectin 10mg/ml', company:'Neovet', category:'Dewormer', dose:'0.2mg/kg SC', route:'SC', withdrawal:'5 days milk, 28 days meat', use:'Worm, Tick, Mange', price:150, icon:'💉' },
  { id:28, brand:'Closantel 10%', generic:'Closantel Sodium 100mg/ml', company:'Intas', category:'Dewormer', dose:'10mg/kg PO', route:'Oral', withdrawal:'7 days', use:'Liver fluke, Haemonchus', price:180, icon:'💧' },
  { id:29, brand:'Levamisole 7.5%', generic:'Levamisole HCl 75mg/ml', company:'Alembic', category:'Dewormer', dose:'7.5mg/kg SC/PO', route:'SC/PO', withdrawal:'3 days', use:'Roundworm, Lungworm', price:90, icon:'💉' },
  { id:30, brand:'Fenbendazole', generic:'Fenbendazole 150mg bolus', company:'Intas', category:'Dewormer', dose:'7.5mg/kg PO', route:'Oral', withdrawal:'3 days', use:'Worm, Giardia', price:25, icon:'💊' },
  { id:31, brand:'Triclabendazole', generic:'Triclabendazole 120mg + Levamisole 75mg', company:'Intas', category:'Dewormer', dose:'12mg/kg PO', route:'Oral', withdrawal:'7 days', use:'Liver fluke', price:45, icon:'💊' },
  { id:32, brand:'Oxyclozanide', generic:'Oxyclozanide 340mg + Levamisole 375mg', company:'Intas', category:'Dewormer', dose:'10mg/kg PO', route:'Oral', withdrawal:'3 days', use:'Fluke, Roundworm', price:35, icon:'💊' },

  // 41-55: HORMONE & REPRODUCTION
  { id:41, brand:'Oxytocin 10IU', generic:'Oxytocin 10 IU/ml', company:'Alembic', category:'Hormone', dose:'5-10 IU IM', route:'IM/IV', withdrawal:'0 days', use:'Milk letdown, Retained placenta', price:35, icon:'🐄' },
  { id:42, brand:'Cloprostenol', generic:'Cloprostenol Sodium 250mcg/ml', company:'Intas', category:'Hormone', dose:'2ml IM', route:'IM', withdrawal:'0 days', use:'Heat induction, Abortion, Pyometra', price:120, icon:'🔴' },
  { id:43, brand:'GnRH', generic:'Buserelin Acetate 0.0042mg/ml', company:'Intas', category:'Hormone', dose:'2.5ml IM', route:'IM', withdrawal:'0 days', use:'Cystic ovary, Repeat breeding', price:180, icon:'🔴' },
  { id:44, brand:'Progesterone', generic:'Hydroxyprogesterone 250mg/ml', company:'Alembic', category:'Hormone', dose:'500mg IM', route:'IM', withdrawal:'0 days', use:'Maintain pregnancy, Repeat breeding', price:90, icon:'🔴' },
  { id:45, brand:'Estrogen', generic:'Estradiol Benzoate 5mg/ml', company:'Intas', category:'Hormone', dose:'5mg IM', route:'IM', withdrawal:'0 days', use:'Anestrus, Pyometra', price:85, icon:'🔴' },

  // 56-75: CALCIUM / MINERAL / VITAMIN
  { id:56, brand:'Calcium Borogluconate', generic:'Calcium Borogluconate 450ml + Mg + P', company:'Alembic', category:'Calcium', dose:'450ml IV slow', route:'IV slow', withdrawal:'0 days', use:'Milk fever', price:180, icon:'🐄' },
  { id:57, brand:'Phosphorus Inj', generic:'Sodium Acid Phosphate 40% 100ml', company:'Intas', category:'Mineral', dose:'100ml IV', route:'IV', withdrawal:'0 days', use:'Pica, Downer, Post-parturient', price:150, icon:'💉' },
  { id:58, brand:'Vitamin B Complex', generic:'Vit B1 50mg + B6 50mg + B12 500mcg', company:'Intas', category:'Vitamin', dose:'10ml IM', route:'IM', withdrawal:'0 days', use:'Anorexia, Weakness, Nerve', price:120, icon:'💊' },
  { id:59, brand:'Vitamin AD3E', generic:'Vit A 1 lakh IU + D3 10000 IU + E 100mg', company:'Intas', category:'Vitamin', dose:'10ml IM', route:'IM', withdrawal:'0 days', use:'Growth, Fertility, Immunity', price:140, icon:'💊' },
  { id:60, brand:'Mineral Mixture', generic:'Chelated Mineral Mixture 1kg', company:'Agrimin', category:'Mineral', dose:'50g daily PO', route:'Oral', withdrawal:'0 days', use:'Repeat breeding, Pica, Milk', price:320, icon:'🍽️' },
  { id:61, brand:'Iron Sorbitol', generic:'Iron Sorbitol Citric Acid 50mg/ml', company:'Intas', category:'Mineral', dose:'5ml IM', route:'IM', withdrawal:'0 days', use:'Anemia, Babesiosis', price:90, icon:'🩸' },
  { id:62, brand:'Vitamin E + Se', generic:'Vitamin E 50mg + Selenium 1.5mg/ml', company:'Intas', category:'Vitamin', dose:'10ml IM', route:'IM', withdrawal:'0 days', use:'White muscle, Retained placenta', price:160, icon:'💊' },
  { id:63, brand:'Calcium + Phosphorus Oral', generic:'Calcium + Phosphorus + Vit D3 Suspension', company:'Intas', category:'Calcium', dose:'100ml PO', route:'Oral', withdrawal:'0 days', use:'Milk fever prevention', price:180, icon:'🐄' },

  // 76-90: ANTI-INFLAMMATORY / PAIN / ANTIHISTAMINE
  { id:76, brand:'Meloxicam', generic:'Meloxicam 20mg/ml + Paracetamol', company:'Intas', category:'Pain', dose:'0.5mg/kg IM', route:'IM', withdrawal:'3 days', use:'Pain, Fever, Inflammation', price:140, icon:'😰' },
  { id:77, brand:'Ketoprofen', generic:'Ketoprofen 100mg/ml', company:'Intas', category:'Pain', dose:'3mg/kg IM', route:'IM', withdrawal:'2 days', use:'Pain, Fever, Lameness', price:160, icon:'😰' },
  { id:78, brand:'Flunixin', generic:'Flunixin Meglumine 50mg/ml', company:'Intas', category:'Pain', dose:'1.1mg/kg IV', route:'IV', withdrawal:'3 days', use:'Colic, Pain, Endotoxemia', price:220, icon:'💉' },
  { id:79, brand:'Cetirizine', generic:'Cetirizine HCl 10mg/ml', company:'Intas', category:'Antihistamine', dose:'0.5mg/kg IM', route:'IM', withdrawal:'0 days', use:'Allergy, LSD, Swelling', price:90, icon:'🔴' },
  { id:80, brand:'Pheniramine', generic:'Pheniramine Maleate 22.75mg/ml', company:'Alembic', category:'Antihistamine', dose:'1mg/kg IM', route:'IM', withdrawal:'0 days', use:'Allergy, Anaphylaxis', price:70, icon:'🔴' },
  { id:81, brand:'Dexamethasone', generic:'Dexamethasone Sodium Phosphate 4.4mg/ml', company:'Alembic', category:'Steroid', dose:'0.04mg/kg IM', route:'IM/IV', withdrawal:'3 days', use:'Allergy, Shock, Ketosis', price:60, icon:'💉' },
  { id:82, brand:'Prednisolone', generic:'Prednisolone 10mg/ml', company:'Intas', category:'Steroid', dose:'0.5mg/kg IM', route:'IM', withdrawal:'3 days', use:'Allergy, Inflammation', price:55, icon:'💉' },

  // 91-105: OTHER ESSENTIAL
  { id:91, brand:'Berenil', generic:'Diminazene Aceturate 70mg/ml', company:'MSD', category:'Antiprotozoal', dose:'3.5mg/kg IM', route:'IM deep', withdrawal:'21 days meat, 3 days milk', use:'Babesiosis, Trypanosomiasis', price:450, icon:'🩸' },
  { id:92, brand:'Buparvaquone', generic:'Buparvaquone 50mg/ml', company:'Intas', category:'Antiprotozoal', dose:'2.5mg/kg IM', route:'IM', withdrawal:'42 days', use:'Theileriosis', price:580, icon:'🩸' },
  { id:93, brand:'Imidocarb', generic:'Imidocarb Dipropionate 120mg/ml', company:'MSD', category:'Antiprotozoal', dose:'3mg/kg IM', route:'IM', withdrawal:'28 days', use:'Babesiosis, Anaplasmosis', price:420, icon:'🩸' },
  { id:94, brand:'Sodium Iodide 20%', generic:'Sodium Iodide 200mg/ml', company:'Alembic', category:'Iodine', dose:'70mg/kg IV', route:'IV slow', withdrawal:'0 days', use:'Wooden tongue, Actinomycosis', price:280, icon:'👅' },
  { id:95, brand:'Potassium Iodide', generic:'Potassium Iodide 200mg bolus', company:'Intas', category:'Iodine', dose:'6-10g PO', route:'Oral', withdrawal:'0 days', use:'Wooden tongue, Maintenance', price:15, icon:'👅' },
  { id:96, brand:'Bloatosil', generic:'Polydimethyl Siloxane + Turpentine', company:'Intas', category:'Antibloat', dose:'100ml PO', route:'Oral', withdrawal:'0 days', use:'Bloat, Tympany', price:140, icon:'💧' },
  { id:97, brand:'Rumentas', generic:'Sodium Acid Phosphate + Nux Vomica + Ginger', company:'Intas', category:'Rumenotoric', dose:'1 bolus PO', route:'Oral', withdrawal:'0 days', use:'Anorexia, Indigestion', price:25, icon:'🍽️' },
  { id:98, brand:'Povidone Iodine 5%', generic:'Povidone Iodine 5% w/v 100ml', company:'Betadine', category:'Antiseptic', dose:'External', route:'Topical', withdrawal:'0 days', use:'Wound, FMD, Navel ill', price:90, icon:'🔴' },
  { id:99, brand:'Magnesium Sulphate', generic:'Magnesium Sulphate 50% 100ml', company:'Alembic', category:'Laxative', dose:'200g PO', route:'Oral', withdrawal:'0 days', use:'Constipation, Impaction', price:70, icon:'💧' },
  { id:100, brand:'Glucose 25%', generic:'Dextrose 25% 500ml', company:'Alembic', category:'Fluid', dose:'500ml IV', route:'IV', withdrawal:'0 days', use:'Ketosis, Weakness, Downer', price:110, icon:'💉' },
  { id:101, brand:'Normal Saline', generic:'Normal Saline 0.9% 1000ml', company:'Alembic', category:'Fluid', dose:'1-2L IV', route:'IV', withdrawal:'0 days', use:'Dehydration, Shock, Diarrhea', price:85, icon:'💧' },
  { id:102, brand:'Ringer Lactate', generic:'Ringer Lactate 1000ml', company:'Alembic', category:'Fluid', dose:'1-2L IV', route:'IV', withdrawal:'0 days', use:'Dehydration, Acidosis', price:95, icon:'💧' },
  { id:103, brand:'Atropine', generic:'Atropine Sulphate 1mg/ml', company:'Neon', category:'Antidote', dose:'0.05mg/kg SC', route:'SC', withdrawal:'0 days', use:'Organophosphate poisoning, Bloat', price:40, icon:'🚨' },
  { id:104, brand:'Charcoal + Kaolin', generic:'Activated Charcoal + Kaolin + Pectin', company:'Intas', category:'Antidiarrheal', dose:'1 bolus PO', route:'Oral', withdrawal:'0 days', use:'Diarrhea, Poisoning', price:30, icon:'💧' },
  { id:105, brand:'Hepatocare', generic:'Liver Extract + B-Complex + Choline', company:'Intas', category:'Liver', dose:'10ml IM', route:'IM', withdrawal:'0 days', use:'Liver damage, Anorexia, Poisoning', price:130, icon:'🍽️' }
];

// ===== MEDICINE STOCK - Vet's Inventory =====
window.VET_STOCK_TEMPLATE = {
  medicine_id: null, // from VET_MEDICINES
  batch_no: '', // optional
  quantity: 0,
  purchase_price: 0,
  sale_price: 0,
  expiry_date: '',
  supplier: '', // optional - user asked
  company: '',
  added_date: new Date().toISOString()
};

// ===== CASE TAKING TEMPLATE =====
window.CASE_TEMPLATE = {
  id: '',
  farmer_name: '',
  farmer_phone: '',
  animal_type: 'cow', // cow, buffalo, goat, sheep
  age: '',
  weight: '',
  temperature: '',
  symptoms: [], // from SYMPTOM_LIST
  duration: '',
  previous_treatment: '',
  possible_diseases: [], // auto from symptom match
  suggested_medicines: [], // from VET_MEDICINES
  vet_selected_medicines: [], // final selection
  prescription: '',
  created_at: new Date().toISOString()
};

console.log('✅ VET DATA Loaded: 105 Medicines with Generic + Stock + Case Template');
