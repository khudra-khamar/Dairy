// ========== FIRST AID DATA ==========
// 26 common livestock problems — bilingual (বাংলা / English / हिन्दी)
// Last updated: 2026

const FIRST_AID_DATA = [

  // ============ 1. WOUND / ক্ষত ============
  {
    id: 'wound',
    icon: '🩸',
    title_bn: 'ক্ষত / রক্তক্ষরণ',
    title_en: 'Wound / Bleeding',
    title_hi: 'घाव / रक्तस्राव',
    whatIsIt_bn: 'চামড়া কাটা, ছেঁড়া বা রক্তপাত। ধারালো জিনিস, তার, পেরেক বা অন্য পশুর কামড়ে হতে পারে।',
    whatIsIt_en: 'Cut, tear or bleeding of skin. Caused by sharp objects, wire, nail, or animal bite.',
    whatIsIt_hi: 'त्वचा का कटना, फटना या खून बहना। नुकीली चीज़, तार, कील या जानवर के काटने से होता है।',
    dos_bn: [
      'পরিষ্কার পানি দিয়ে ক্ষত ধুয়ে ফেলুন',
      'পরিষ্কার কাপড় দিয়ে ৫ মিনিট চেপে ধরুন',
      'ক্ষত পরিষ্কার ব্যান্ডেজ করুন',
      '২৪ ঘন্টার মধ্যে Tetanus injection দিন',
      'রক্তপাত বন্ধ না হলে ডাক্তার ডাকুন'
    ],
    dos_en: [
      'Wash the wound with clean water',
      'Press with clean cloth for 5 minutes',
      'Cover wound with clean bandage',
      'Give Tetanus injection within 24 hours',
      'Call vet if bleeding does not stop'
    ],
    dos_hi: [
      'साफ पानी से घाव धोएँ',
      'साफ कपड़े से 5 मिनट दबाएँ',
      'घाव पर साफ पट्टी बाँधें',
      '24 घंटे में टिटनेस इंजेक्शन दें',
      'खून बंद न हो तो डॉक्टर बुलाएँ'
    ],
    donts_bn: [
      'চুন, মাটি বা গোবর লাগাবেন না',
      'ময়লা কাপড় জড়াবেন না',
      'পানি ছাড়া অন্য কিছু ঢালবেন না',
      'পোকা পড়তে দেবেন না'
    ],
    donts_en: [
      'Do not apply lime, soil or dung',
      'Do not wrap with dirty cloth',
      'Do not pour anything except water',
      'Do not let flies sit on wound'
    ],
    donts_hi: [
      'चूना, मिट्टी या गोबर न लगाएँ',
      'गंदे कपड़े से न बाँधें',
      'पानी के अलावा कुछ न डालें',
      'मक्खियों को बैठने न दें'
    ],
    medicines: [
      { name: 'Povidone Iodine', dose: 'ক্ষতের চারপাশে', route_bn: 'বাহ্যিক', route_en: 'Topical', route_hi: 'बाहरी' },
      { name: 'Inj. Tetanus Toxoid', dose: '৩ ml', route_bn: 'IM', route_en: 'IM', route_hi: 'IM' },
      { name: 'Inj. Meloxicam', dose: '২.৫ ml / ১০০ কেজি', route_bn: 'IM', route_en: 'IM', route_hi: 'IM' }
    ],
    redFlags_bn: [
      'রক্তপাত ৫ মিনিটে বন্ধ না হলে',
      'ক্ষত অনেক গভীর হলে',
      'হাড় বা পেশী দেখা গেলে',
      'জ্বর শুরু হলে',
      'ক্ষত থেকে দুর্গন্ধ এলে'
    ],
    redFlags_en: [
      'Bleeding does not stop in 5 minutes',
      'Wound is very deep',
      'Bone or muscle is visible',
      'Fever develops',
      'Bad smell from wound'
    ],
    redFlags_hi: [
      'खून 5 मिनट में बंद न हो',
      'घाव बहुत गहरा हो',
      'हड्डी या मांसपेशी दिखे',
      'बुखार शुरू हो जाए',
      'घाव से बदबू आए'
    ]
  },

  // ============ 2. BURN / পোড়া ============
  {
    id: 'burn',
    icon: '🔥',
    title_bn: 'পোড়া',
    title_en: 'Burn',
    title_hi: 'जलना',
    whatIsIt_bn: 'আগুন, গরম পানি, গরম তেল বা বিদ্যুতে পোড়া। চামড়া লাল, ফোস্কা পড়া বা কালো হয়ে যেতে পারে।',
    whatIsIt_en: 'Burn from fire, hot water, hot oil or electricity. Skin may become red, blistered or black.',
    whatIsIt_hi: 'आग, गर्म पानी, गर्म तेल या बिजली से जलना। त्वचा लाल, फफोले या काली हो सकती है।',
    dos_bn: [
      'ঠান্ডা পানি ১০-১৫ মিনিট ঢালুন',
      'পরিষ্কার ভেজা কাপড় দিয়ে ঢেকে রাখুন',
      'ব্যথার ঔষধ দিন',
      'পানি খাওয়ান',
      'ডাক্তার ডাকুন (বড় পোড়া হলে)'
    ],
    dos_en: [
      'Pour cool water for 10-15 minutes',
      'Cover with clean wet cloth',
      'Give pain medicine',
      'Give plenty of water',
      'Call vet if burn is large'
    ],
    dos_hi: [
      '10-15 मिनट ठंडा पानी डालें',
      'साफ गीले कपड़े से ढकें',
      'दर्द की दवा दें',
      'पानी पिलाएँ',
      'बड़ा जल जाए तो डॉक्टर बुलाएँ'
    ],
    donts_bn: [
      'বরফ লাগাবেন না',
      'তেল, মাখন বা ঘি লাগাবেন না',
      'টুথপেস্ট বা কালি লাগাবেন না',
      'ফোস্কা ফাটাবেন না'
    ],
    donts_en: [
      'Do not apply ice',
      'Do not apply oil, butter or ghee',
      'Do not apply toothpaste or ink',
      'Do not burst blisters'
    ],
    donts_hi: [
      'बर्फ न लगाएँ',
      'तेल, मक्खन या घी न लगाएँ',
      'टूथपेस्ट या स्याही न लगाएँ',
      'फफोले न फोड़ें'
    ],
    medicines: [
      { name: 'Silver Sulfadiazine cream', dose: 'পোড়া জায়গায়', route_bn: 'বাহ্যিক', route_en: 'Topical', route_hi: 'बाहरी' },
      { name: 'Inj. Meloxicam', dose: '২.৫ ml / ১০০ কেজি', route_bn: 'IM', route_en: 'IM', route_hi: 'IM' }
    ],
    redFlags_bn: [
      'পোড়া শরীরের ১০% এর বেশি',
      'শ্বাসকষ্ট বা কাশি',
      'চামড়া কালো হয়ে গেলে',
      'পশু দাঁড়াতে না পারে',
      'চোখ পুড়ে গেলে'
    ],
    redFlags_en: [
      'Burn covers more than 10% of body',
      'Difficulty breathing or cough',
      'Skin turns black',
      'Animal cannot stand',
      'Eye is burned'
    ],
    redFlags_hi: [
      'जलन शरीर के 10% से अधिक',
      'साँस लेने में तकलीफ या खाँसी',
      'त्वचा काली हो जाए',
      'पशु खड़ा न हो पाए',
      'आँख जल गई हो'
    ]
  },

  // ============ 3. POISON / বিষক্রিয়া ============
  {
    id: 'poison',
    icon: '🤢',
    title_bn: 'বিষ / গেলা বিষক্রিয়া',
    title_en: 'Poisoning',
    title_hi: 'ज़हर',
    whatIsIt_bn: 'বিষাক্ত গাছ, কীটনাশক, ইঁদুরের বিষ বা রাসায়নিক খেয়ে ফেলা। লালা পড়া, বমি, খিঁচুনি হতে পারে।',
    whatIsIt_en: 'Eating toxic plants, pesticides, rat poison or chemicals. Symptoms: drooling, vomiting, convulsions.',
    whatIsIt_hi: 'ज़हरीले पौधे, कीटनाशक, चूहे का ज़हर या रसायन खाना। लक्षण: लार, उल्टी, दौरा।',
    dos_bn: [
      'মুখ থেকে বিষ সরান',
      'পানি দিয়ে মুখ ধুয়ে দিন',
      'শ্বাস নিতে পারছে কিনা দেখুন',
      'কী খেয়েছে সেটা জানার চেষ্টা করুন',
      'দ্রুত ডাক্তারের কাছে যান'
    ],
    dos_en: [
      'Remove poison from mouth',
      'Rinse mouth with water',
      'Check if animal can breathe',
      'Try to find out what was eaten',
      'Reach vet immediately'
    ],
    dos_hi: [
      'मुँह से ज़हर हटाएँ',
      'पानी से मुँह धोएँ',
      'देखें पशु साँस ले पा रहा है या नहीं',
      'पता करें क्या खाया',
      'तुरंत डॉक्टर के पास जाएँ'
    ],
    donts_bn: [
      'নিজে বমি করাবেন না',
      'দুধ বা তেল খাওয়াবেন না',
      'সময় নষ্ট করবেন না',
      'পশুকে একা ফেলে রাখবেন না'
    ],
    donts_en: [
      'Do not induce vomiting yourself',
      'Do not give milk or oil',
      'Do not waste time',
      'Do not leave animal alone'
    ],
    donts_hi: [
      'खुद उल्टी न कराएँ',
      'दूध या तेल न पिलाएँ',
      'समय बर्बाद न करें',
      'पशु को अकेला न छोड़ें'
    ],
    medicines: [
      { name: 'Activated Charcoal', dose: '৫০-১০০ গ্রাম / ২০০ কেজি', route_bn: 'মুখে (পানিতে মিশিয়ে)', route_en: 'Oral (in water)', route_hi: 'मुँह से (पानी में)' },
      { name: 'ORS প্যাকেট', dose: '১ প্যাকেট / ২ লিটার পানি', route_bn: 'মুখে', route_en: 'Oral', route_hi: 'मुँह से' }
    ],
    redFlags_bn: [
      'খিঁচুনি বা অজ্ঞান',
      'শ্বাসকষ্ট',
      'অতিরিক্ত লালা পড়া',
      'পশু দাঁড়াতে না পারে',
      'মুখ দিয়ে ফেনা'
    ],
    redFlags_en: [
      'Convulsions or unconscious',
      'Difficulty breathing',
      'Excessive drooling',
      'Animal cannot stand',
      'Foam from mouth'
    ],
    redFlags_hi: [
      'दौरा या बेहोशी',
      'साँस लेने में तकलीफ',
      'बहुत ज़्यादा लार',
      'पशु खड़ा न हो पाए',
      'मुँह से झाग'
    ]
  },

  // ============ 4. FEVER / জ্বর ============
  {
    id: 'fever',
    icon: '🌡️',
    title_bn: 'জ্বর',
    title_en: 'Fever',
    title_hi: 'बुखार',
    whatIsIt_bn: 'শরীরের তাপমাত্রা ১০১.৫°F (৩৮.৬°C) এর বেশি হওয়া। গরু অলস, খাওয়া বন্ধ, দুধ কমে যায়।',
    whatIsIt_en: 'Body temperature above 101.5°F (38.6°C). Animal becomes dull, stops eating, milk drops.',
    whatIsIt_hi: 'शरीर का तापमान 101.5°F (38.6°C) से अधिक। पशु सुस्त, खाना बंद, दूध कम।',
    dos_bn: [
      'আক্রান্ত পশুকে আলাদা ঘরে রাখুন',
      'ঠান্ডা, বাতাস চলাচলকারী জায়গায় নিন',
      'পরিষ্কার ঠান্ডা পানি সবসময় রাখুন',
      'শরীরের তাপমাত্রা প্রতি ৪ ঘন্টায় মাপুন',
      'প্রস্রাব ও পায়খানা লক্ষ্য করুন',
      'নরম, সহজপাচ্য খাবার দিন'
    ],
    dos_en: [
      'Keep the animal in a separate shed',
      'Move to a cool, well-ventilated place',
      'Provide clean cool water at all times',
      'Check temperature every 4 hours',
      'Observe urine and dung',
      'Give soft, easily digestible feed'
    ],
    dos_hi: [
      'पशु को अलग शेड में रखें',
      'ठंडी, हवादार जगह पर ले जाएँ',
      'साफ ठंडा पानी हमेशा रखें',
      'हर 4 घंटे में तापमान जाँचें',
      'पेशाब और गोबर पर नज़र रखें',
      'नरम, आसानी से पचने वाला भोजन दें'
    ],
    donts_bn: [
      'ঠান্ডা পানি দিয়ে গা ঢালবেন না',
      'জোর করে খাওয়াবেন না',
      'নিজে থেকে অ্যান্টিবায়োটিক দেবেন না',
      'গরম কাপড়ে ঢাকবেন না'
    ],
    donts_en: [
      'Do not pour cold water on body',
      'Do not force-feed',
      'Do not self-prescribe antibiotics',
      'Do not cover with heavy warm cloth'
    ],
    donts_hi: [
      'ठंडा पानी शरीर पर न डालें',
      'ज़बरदस्ती खाना न खिलाएँ',
      'खुद से एंटीबायोटिक न दें',
      'भारी गर्म कपड़े से न ढकें'
    ],
    medicines: [
      { name: 'Paracetamol', dose: '৩০ ml / ১০০ কেজি', route_bn: 'মুখে', route_en: 'Oral', route_hi: 'मुँह से' },
      { name: 'Meloxicam', dose: '২.৫ ml / ১০০ কেজি', route_bn: 'ইনজেকশন (IM)', route_en: 'Injection (IM)', route_hi: 'इंजेक्शन (IM)' },
      { name: 'Inj. Analgin', dose: '৫-১০ ml', route_bn: 'IM', route_en: 'IM', route_hi: 'IM' },
      { name: 'ORS প্যাকেট', dose: '১ প্যাকেট / ২ লিটার পানি', route_bn: 'মুখে', route_en: 'Oral', route_hi: 'मुँह से' }
    ],
    redFlags_bn: [
      'জ্বর ১০৪°F এর বেশি',
      'জ্বর ২ দিনের বেশি',
      'পশু দাঁড়াতে না পারে',
      'খাওয়া সম্পূর্ণ বন্ধ ২৪ ঘন্টা+',
      'রক্তমিশ্রিত পায়খানা বা প্রস্রাব',
      'শ্বাসকষ্ট বা মুখে ফেনা'
    ],
    redFlags_en: [
      'Fever above 104°F (40°C)',
      'Fever lasts more than 2 days',
      'Animal cannot stand',
      'Completely off feed for 24 hours+',
      'Blood in dung or urine',
      'Difficulty breathing or foam from mouth'
    ],
    redFlags_hi: [
      'बुखार 104°F (40°C) से अधिक',
      'बुखार 2 दिन से ज़्यादा',
      'पशु खड़ा न हो पाए',
      'पूरी तरह खाना बंद 24 घंटे+',
      'गोबर या पेशाब में खून',
      'साँस लेने में तकलीफ या मुँह से झाग'
    ]
  },

  // ============ 5. CALVING PROBLEM / প্রসবের সমস্যা ============
  {
    id: 'calving',
    icon: '🍼',
    title_bn: 'প্রসবের সমস্যা',
    title_en: 'Calving Difficulty',
    title_hi: 'प्रसव की कठिनाई',
    whatIsIt_bn: 'প্রসব শুরু হওয়ার পর বাছুর বের হতে দেরি হওয়া বা আটকে যাওয়া। ২ ঘন্টার বেশি হলে জরুরি।',
    whatIsIt_en: 'Delay or blockage during birth. If more than 2 hours, it is an emergency.',
    whatIsIt_hi: 'प्रसव शुरू होने के बाद बछड़ा निकलने में देरी या रुकावट। 2 घंटे से ज़्यादा हो तो आपातकाल।',
    dos_bn: [
      'শান্ত থাকুন, পশুকেও শান্ত রাখুন',
      'পরিষ্কার, শুকনো জায়গায় রাখুন',
      'লেজের গোড়া ও পিছনের অংশ সাবান দিয়ে ধুয়ে দিন',
      '২ ঘন্টা অপেক্ষা করুন (প্রথমবার হলে ৩ ঘন্টা)',
      'সমস্যা হলে সাথে সাথে ডাক্তার ডাকুন'
    ],
    dos_en: [
      'Stay calm, keep animal calm too',
      'Place in a clean, dry area',
      'Wash tail base and rear with soap',
      'Wait 2 hours (3 hours if first birth)',
      'Call vet immediately if problem persists'
    ],
    dos_hi: [
      'शांत रहें, पशु को भी शांत रखें',
      'साफ, सूखी जगह पर रखें',
      'पूँछ की जड़ और पिछला हिस्सा साबुन से धोएँ',
      '2 घंटे रुकें (पहली बार हो तो 3 घंटे)',
      'समस्या हो तो तुरंत डॉक्टर बुलाएँ'
    ],
    donts_bn: [
      'জোরে টানবেন না',
      'নোংরা হাতে ধরবেন না',
      'অতিরিক্ত অপেক্ষা করবেন না',
      'নিজে যন্ত্র দিয়ে বের করার চেষ্টা করবেন না'
    ],
    donts_en: [
      'Do not pull hard',
      'Do not use dirty hands',
      'Do not wait too long',
      'Do not try with instruments yourself'
    ],
    donts_hi: [
      'ज़ोर से न खींचें',
      'गंदे हाथों से न छुएँ',
      'ज़्यादा इंतज़ार न करें',
      'खुद औज़ार से निकालने की कोशिश न करें'
    ],
    medicines: [
      { name: 'Povidone Iodine', dose: 'হাত ও যন্ত্রে', route_bn: 'বাহ্যিক', route_en: 'Topical', route_hi: 'बाहरी' },
      { name: 'Inj. Oxytocin', dose: 'শুধু ডাক্তারের পরামর্শে', route_bn: 'IM', route_en: 'IM', route_hi: 'IM' }
    ],
    redFlags_bn: [
      '২ ঘন্টার বেশি হয়েছে',
      'রক্তপাত শুরু হয়েছে',
      'বাছুরের পা আগে বের হচ্ছে (উল্টো)',
      'মা দুর্বল হয়ে পড়ছে',
      'প্রসবের পর ফুলে গেছে (জরায়ু বাইরে)'
    ],
    redFlags_en: [
      'More than 2 hours passed',
      'Bleeding has started',
      'Calf leg comes first (backward)',
      'Mother becoming weak',
      'Swelling after birth (uterine prolapse)'
    ],
    redFlags_hi: [
      '2 घंटे से ज़्यादा हो गए',
      'खून बहना शुरू',
      'बछड़े का पैर पहले (उल्टा)',
      'माँ कमज़ोर हो रही है',
      'प्रसव के बाद सूजन (गर्भाशय बाहर)'
    ]
  },

  // ============ 6. FRACTURE / হাড় ভাঙা ============
  {
    id: 'fracture',
    icon: '🦴',
    title_bn: 'হাড় ভাঙা',
    title_en: 'Fracture',
    title_hi: 'हड्डी टूटना',
    whatIsIt_bn: 'পড়ে যাওয়া, আঘাত বা জোরে ধাক্কায় হাড় ভাঙা। পা বা হাত ফুলে যায়, পশু ভর দিতে পারে না।',
    whatIsIt_en: 'Bone break from fall, injury or strong impact. Limb swells, animal cannot bear weight.',
    whatIsIt_hi: 'गिरने, चोट या तेज़ टक्कर से हड्डी टूटना। अंग सूज जाता है, पशु वज़न नहीं डाल पाता।',
    dos_bn: [
      'গরুকে শুইয়ে রাখুন, নড়াচড়া কম করুন',
      'বাঁশ বা কাঠ দিয়ে সাপোর্ট দিন',
      'ফুলা জায়গায় ঠান্ডা সেঁক দিন',
      'দুইজন মিলে সমানভাবে তুলুন',
      'দ্রুত ডাক্তার ডাকুন'
    ],
    dos_en: [
      'Make the animal lie down, minimize movement',
      'Support with bamboo or wood splint',
      'Apply cold compress on swelling',
      'Lift with two people evenly',
      'Call vet immediately'
    ],
    dos_hi: [
      'पशु को लिटाएँ, हिलना-डुलना कम करें',
      'बाँस या लकड़ी से सहारा दें',
      'सूजन पर ठंडी पट्टी लगाएँ',
      'दो लोग मिलकर समान रूप से उठाएँ',
      'तुरंत डॉक्टर बुलाएँ'
    ],
    donts_bn: [
      'নিজে হাড় ঠিক করার চেষ্টা করবেন না',
      'জোরে টানবেন না',
      'একা তোলার চেষ্টা করবেন না',
      'হাঁটাতে বাধ্য করবেন না'
    ],
    donts_en: [
      'Do not try to set bone yourself',
      'Do not pull hard',
      'Do not try to lift alone',
      'Do not force walking'
    ],
    donts_hi: [
      'खुद हड्डी जोड़ने की कोशिश न करें',
      'ज़ोर से न खींचें',
      'अकेले उठाने की कोशिश न करें',
      'चलने के लिए मजबूर न करें'
    ],
    medicines: [
      { name: 'Inj. Meloxicam', dose: '২.৫ ml / ১০০ কেজি', route_bn: 'IM', route_en: 'IM', route_hi: 'IM' },
      { name: 'Calcium syrup', dose: '৩০ ml / দিন', route_bn: 'মুখে', route_en: 'Oral', route_hi: 'मुँह से' }
    ],
    redFlags_bn: [
      'হাড় বাইরে বেরিয়ে এসেছে',
      'রক্তপাত বন্ধ হচ্ছে না',
      'জ্বর শুরু হয়েছে',
      'পশু উঠতেই পারছে না',
      'প্রস্রাব-পায়খানা বন্ধ'
    ],
    redFlags_en: [
      'Bone protruding outside',
      'Bleeding does not stop',
      'Fever developed',
      'Animal cannot get up at all',
      'Urine or dung stopped'
    ],
    redFlags_hi: [
      'हड्डी बाहर निकली',
      'खून बंद नहीं हो रहा',
      'बुखार शुरू',
      'पशु उठ ही नहीं पा रहा',
      'पेशाब-गोबर बंद'
    ]
  }


// ============ 7. VACCINE REACTION / টিকা reaction ============
,
{
  id: 'reaction',
  icon: '💉',
  title_bn: 'টিকা reaction',
  title_en: 'Vaccine Reaction',
  title_hi: 'टीका प्रतिक्रिया',
  whatIsIt_bn: 'টিকা দেওয়ার পর শরীরে খারাপ প্রতিক্রিয়া। ফুলে যাওয়া, শ্বাসকষ্ট বা চামড়ায় দাগ দেখা দিতে পারে। সাধারণত ৩০ মিনিটের মধ্যে হয়।',
  whatIsIt_en: 'Bad reaction after vaccination. Swelling, breathing trouble or skin rash. Usually within 30 minutes.',
  whatIsIt_hi: 'टीके के बाद शरीर में खराब प्रतिक्रिया। सूजन, साँस की तकलीफ या त्वचा पर दाने। आमतौर पर 30 मिनट के अंदर।',
  dos_bn: [
    'ছায়ায় শুইয়ে রাখুন',
    'ঠান্ডা পানি দিন',
    '১০-১৫ মিনিট পর্যবেক্ষণ করুন',
    'শ্বাস-প্রশ্বাস লক্ষ্য করুন',
    'ডাক্তার ডাকুন সাথে সাথে'
  ],
  dos_en: [
    'Keep in shade and make lie down',
    'Give cool water',
    'Observe for 10-15 minutes',
    'Monitor breathing',
    'Call vet immediately'
  ],
  dos_hi: [
    'छाया में लिटाएँ',
    'ठंडा पानी दें',
    '10-15 मिनट निगरानी करें',
    'साँस पर नज़र रखें',
    'तुरंत डॉक्टर बुलाएँ'
  ],
  donts_bn: [
    'একা ফেলে রাখবেন না',
    'জোরে দৌড়াবেন না',
    'ঠান্ডা পানি ঢালবেন না',
    'নিজে ঔষধ দেবেন না'
  ],
  donts_en: [
    'Do not leave alone',
    'Do not make it run',
    'Do not pour cold water',
    'Do not self-medicate'
  ],
  donts_hi: [
    'अकेला न छोड़ें',
    'दौड़ाएँ नहीं',
    'ठंडा पानी न डालें',
    'खुद दवा न दें'
  ],
  medicines: [
    { name: 'Inj. Dexamethasone', dose: '৫-১০ ml', route_bn: 'IM', route_en: 'IM', route_hi: 'IM' },
    { name: 'Inj. Adrenaline', dose: 'শুধু ডাক্তার', route_bn: 'IM', route_en: 'IM', route_hi: 'IM' }
  ],
  redFlags_bn: [
    'শ্বাসকষ্ট শুরু',
    'মুখ ফুলে যাওয়া',
    'খিঁচুনি',
    'পশু পড়ে যাওয়া',
    'শরীরে লাল দাগ'
  ],
  redFlags_en: [
    'Difficulty breathing',
    'Face swelling',
    'Convulsions',
    'Animal collapses',
    'Red spots on body'
  ],
  redFlags_hi: [
    'साँस लेने में तकलीफ',
    'चेहरा सूजना',
    'दौरा',
    'पशु गिर जाए',
    'शरीर पर लाल दाग'
  ]
},

// ============ 8. SNAKE BITE / সাপের কামড় ============
{
  id: 'snake',
  icon: '🐍',
  title_bn: 'সাপের কামড়',
  title_en: 'Snake Bite',
  title_hi: 'साँप का काटना',
  whatIsIt_bn: 'বিষাক্ত বা নির্বিষ সাপের কামড়। কামড়ের জায়গায় দুইটা ছোট দাগ, ফুলে যাওয়া, ব্যথা। বিষাক্ত হলে দ্রুত ছড়ায়।',
  whatIsIt_en: 'Bite from venomous or non-venomous snake. Two small marks, swelling, pain at bite site. Venom spreads fast.',
  whatIsIt_hi: 'ज़हरीले या बिना ज़हर वाले साँप का काटना। काटने की जगह दो छोटे निशान, सूजन, दर्द। ज़हर तेज़ी से फैलता है।',
  dos_bn: [
    'পশুকে যতটা সম্ভব শান্ত রাখুন',
    'কামড়ের জায়গা হৃদয়ের নিচে রাখুন',
    'সময় লিখে রাখুন (কখন কামড়েছে)',
    'দ্রুত হাসপাতালে যান',
    'সাপের ছবি তোলার চেষ্টা করুন (নিরাপদ দূর থেকে)'
  ],
  dos_en: [
    'Keep animal as calm as possible',
    'Keep bite area below heart level',
    'Note the time of bite',
    'Rush to hospital',
    'Try to photograph snake (from safe distance)'
  ],
  dos_hi: [
    'पशु को शांत रखें',
    'काटने की जगह दिल के नीचे रखें',
    'समय लिखें (कब काटा)',
    'तुरंत अस्पताल जाएँ',
    'साँप की फोटो लेने की कोशिश करें (सुरक्षित दूरी से)'
  ],
  donts_bn: [
    'চুষে বের করবেন না',
    'কেটে বের করবেন না',
    'শক্ত বাঁধন দেবেন না',
    'সময় নষ্ট করবেন না',
    'সাপ ধরা বা মারার চেষ্টা করবেন না'
  ],
  donts_en: [
    'Do not suck out venom',
    'Do not cut the wound',
    'Do not tie tight bandage',
    'Do not waste time',
    'Do not try to catch or kill snake'
  ],
  donts_hi: [
    'चूसकर निकालने की कोशिश न करें',
    'काट कर न निकालें',
    'कसकर पट्टी न बाँधें',
    'समय बर्बाद न करें',
    'साँप पकड़ने या मारने की कोशिश न करें'
  ],
  medicines: [
    { name: 'Anti-Snake Venom (ASV)', dose: 'শুধু হাসপাতালে', route_bn: 'IV', route_en: 'IV', route_hi: 'IV' }
  ],
  redFlags_bn: [
    'শ্বাসকষ্ট',
    'চোখের পাতা বন্ধ হয়ে যাওয়া',
    'পশু দাঁড়াতে না পারে',
    'খিঁচুনি',
    'কামড়ের জায়গা কালো হয়ে যাওয়া'
  ],
  redFlags_en: [
    'Difficulty breathing',
    'Eyelids closing',
    'Animal cannot stand',
    'Convulsions',
    'Bite area turning black'
  ],
  redFlags_hi: [
    'साँस लेने में तकलीफ',
    'पलकें बंद होना',
    'पशु खड़ा न हो पाए',
    'दौरा',
    'काटने की जगह काली होना'
  ]
},

// ============ 9. BREATHING DIFFICULTY / শ্বাসকষ্ট ============
{
  id: 'breath',
  icon: '🫁',
  title_bn: 'শ্বাসকষ্ট',
  title_en: 'Breathing Difficulty',
  title_hi: 'साँस लेने में कठिनाई',
  whatIsIt_bn: 'দ্রুত শ্বাস, মুখ খোলা, জিভ বের করা, শব্দ করা। ঠান্ডা, নিউমোনিয়া, বিষক্রিয়া বা হার্টের সমস্যায় হতে পারে।',
  whatIsIt_en: 'Rapid breathing, open mouth, tongue out, noisy breathing. Can be due to cold, pneumonia, poisoning or heart issue.',
  whatIsIt_hi: 'तेज़ साँस, मुँह खुला, जीभ बाहर, आवाज़। ठंड, निमोनिया, ज़हर या दिल की समस्या से हो सकता है।',
  dos_bn: [
    'খোলা, বাতাস চলাচলকারী জায়গায় নিন',
    'গলার দড়ি/শিকল ঢিলা করুন',
    'বসিয়ে রাখুন, শুইয়ে নয়',
    'ছায়ায় রাখুন',
    'ডাক্তার ডাকুন সাথে সাথে'
  ],
  dos_en: [
    'Move to open, well-ventilated area',
    'Loosen rope/chain around neck',
    'Keep sitting, not lying down',
    'Keep in shade',
    'Call vet immediately'
  ],
  dos_hi: [
    'खुली, हवादार जगह पर ले जाएँ',
    'गले की रस्सी/ज़ंजीर ढीली करें',
    'बैठाएँ, लिटाएँ नहीं',
    'छाया में रखें',
    'तुरंत डॉक्टर बुलाएँ'
  ],
  donts_bn: [
    'শুইয়ে রাখবেন না',
    'জোরে হাঁটাবেন না',
    'ঠান্ডা পানিতে গা ঢালবেন না',
    'জোর করে পানি খাওয়াবেন না'
  ],
  donts_en: [
    'Do not make it lie down',
    'Do not walk fast',
    'Do not pour cold water',
    'Do not force water'
  ],
  donts_hi: [
    'लिटाएँ नहीं',
    'तेज़ न चलाएँ',
    'ठंडा पानी न डालें',
    'ज़बरदस्ती पानी न पिलाएँ'
  ],
  medicines: [
    { name: 'Inj. Dexamethasone', dose: '৫-১০ ml', route_bn: 'IM', route_en: 'IM', route_hi: 'IM' },
    { name: 'Inj. Deriphyllin', dose: '৫-১০ ml', route_bn: 'IM', route_en: 'IM', route_hi: 'IM' }
  ],
  redFlags_bn: [
    'মুখ দিয়ে ফেনা',
    'ঠোঁট/জিভ নীল',
    'পশু দাঁড়াতে না পারে',
    'শ্বাস বন্ধ হয়ে আসছে',
    'গলা ফুলে যাওয়া'
  ],
  redFlags_en: [
    'Foam from mouth',
    'Blue lips/tongue',
    'Animal cannot stand',
    'Breathing stopping',
    'Throat swelling'
  ],
  redFlags_hi: [
    'मुँह से झाग',
    'होंठ/जीभ नीली',
    'पशु खड़ा न हो पाए',
    'साँस रुक रही हो',
    'गला सूजना'
  ]
},

// ============ 10. OFF FEED / খাওয়া বন্ধ ============
{
  id: 'noteat',
  icon: '🍽️',
  title_bn: 'খাওয়া বন্ধ',
  title_en: 'Off Feed',
  title_hi: 'खाना बंद',
  whatIsIt_bn: 'পশু খাবার খাওয়া বন্ধ করে দেওয়া। অনেক রোগের প্রথম লক্ষণ — জ্বর, পেটের সমস্যা, দাঁতের সমস্যা ইত্যাদি।',
  whatIsIt_en: 'Animal stops eating. First sign of many diseases — fever, stomach issues, teeth problems, etc.',
  whatIsIt_hi: 'पशु खाना खाना बंद कर देना। कई रोगों का पहला लक्षण — बुखार, पेट, दाँत आदि।',
  dos_bn: [
    'মুখ ও দাঁত পরীক্ষা করুন',
    'জ্বর চেক করুন',
    'পেট ফুলা কিনা দেখুন',
    'পায়খানা ও প্রস্রাব লক্ষ্য করুন',
    'নরম, সুস্বাদু খাবার দিন',
    '২৪ ঘন্টা অপেক্ষা করুন, না হলে ডাক্তার'
  ],
  dos_en: [
    'Check mouth and teeth',
    'Check for fever',
    'Check if belly is bloated',
    'Observe dung and urine',
    'Offer soft, tasty food',
    'Wait 24 hours, then call vet'
  ],
  dos_hi: [
    'मुँह और दाँत जाँचें',
    'बुखार देखें',
    'पेट फूला है क्या देखें',
    'गोबर और पेशाब देखें',
    'नरम, स्वादिष्ट खाना दें',
    '24 घंटे रुकें, वरना डॉक्टर बुलाएँ'
  ],
  donts_bn: [
    'জোর করে খাওয়াবেন না',
    'বাড়তি ঔষধ দেবেন না',
    'পেটে চাপ দেবেন না',
    'নিজে থেকে সিদ্ধান্ত নেবেন না'
  ],
  donts_en: [
    'Do not force-feed',
    'Do not give extra medicine',
    'Do not press on belly',
    'Do not self-diagnose'
  ],
  donts_hi: [
    'ज़बरदस्ती न खिलाएँ',
    'ज़्यादा दवा न दें',
    'पेट पर दबाव न डालें',
    'खुद निदान न करें'
  ],
  medicines: [
    { name: 'Liver tonic', dose: '৩০ ml / দিন', route_bn: 'মুখে', route_en: 'Oral', route_hi: 'मुँह से' },
    { name: 'ORS প্যাকেট', dose: '১ প্যাকেট / ২ লিটার', route_bn: 'মুখে', route_en: 'Oral', route_hi: 'मुँह से' },
    { name: 'B-Complex syrup', dose: '৩০ ml / দিন', route_bn: 'মুখে', route_en: 'Oral', route_hi: 'मुँह से' }
  ],
  redFlags_bn: [
    '২৪ ঘন্টার বেশি খায়নি',
    'জ্বর ১০৩°F+',
    'মুখ দিয়ে লালা পড়ছে',
    'পেট ফুলে গেছে',
    'পশু দাঁড়াতে পারছে না'
  ],
  redFlags_en: [
    'Not eating for more than 24 hours',
    'Fever 103°F+',
    'Drooling from mouth',
    'Belly bloated',
    'Animal cannot stand'
  ],
  redFlags_hi: [
    '24 घंटे से ज़्यादा नहीं खाया',
    'बुखार 103°F+',
    'मुँह से लार',
    'पेट फूला',
    'पशु खड़ा नहीं हो पा रहा'
  ]
},

// ============ 11. BLOAT / পেট ফুলে যাওয়া ============
{
  id: 'bloat',
  icon: '🫘',
  title_bn: 'পেট ফুলে যাওয়া (Bloat)',
  title_en: 'Bloat',
  title_hi: 'पेट फूलना',
  whatIsIt_bn: 'পেটে গ্যাস জমে বাঁ দিক ফুলে যাওয়া। সবুজ ঘাস বা শিম জাতীয় খাবার বেশি খেলে হয়। দ্রুত মৃত্যু হতে পারে।',
  whatIsIt_en: 'Gas accumulates in rumen, left side swells. Caused by eating too much green grass or legumes. Can cause sudden death.',
  whatIsIt_hi: 'पेट में गैस जमा होकर बाईं तरफ फूलना। ज़्यादा हरी घास या फली खाने से। तेज़ मौत हो सकती है।',
  dos_bn: [
    'পশুকে ১০-১৫ মিনিট হাঁটান',
    'পিছনের দিকে রাখুন, সামনের দিক নিচু',
    'বাঁ দিকের পেটে হাত বুলান',
    'সবুজ ঘাস/ফল বন্ধ করুন',
    'জরুরি ডাক্তার ডাকুন'
  ],
  dos_en: [
    'Walk the animal 10-15 minutes',
    'Keep rear raised, front lowered',
    'Rub left side of belly',
    'Stop green grass/legumes',
    'Call vet urgently'
  ],
  dos_hi: [
    '10-15 मिनट टहलाएँ',
    'पिछला हिस्सा ऊपर, आगे नीचे',
    'बाईं तरफ पेट पर हाथ फेरें',
    'हरी घास/फली बंद करें',
    'तुरंत डॉक्टर बुलाएँ'
  ],
  donts_bn: [
    'খাওয়াবেন না',
    'পানি দেবেন না',
    'সময় নষ্ট করবেন না',
    'নিজে পেট ছিদ্র করার চেষ্টা করবেন না'
  ],
  donts_en: [
    'Do not feed',
    'Do not give water',
    'Do not waste time',
    'Do not try to puncture belly yourself'
  ],
  donts_hi: [
    'खाना न दें',
    'पानी न दें',
    'समय बर्बाद न करें',
    'खुद पेट में छेद करने की कोशिश न करें'
  ],
  medicines: [
    { name: 'Bloatosil / Simethicone', dose: '৫০-১০০ ml', route_bn: 'মুখে', route_en: 'Oral', route_hi: 'मुँह से' },
    { name: 'Inj. Dexamethasone', dose: '৫-১০ ml', route_bn: 'IM', route_en: 'IM', route_hi: 'IM' }
  ],
  redFlags_bn: [
    'বাঁ দিক খুব শক্ত ও ফোলা',
    'শ্বাসকষ্ট',
    'পশু দাঁড়াতে পারছে না',
    'মুখ দিয়ে ফেনা',
    'লালা পড়ছে'
  ],
  redFlags_en: [
    'Left side very hard and swollen',
    'Difficulty breathing',
    'Animal cannot stand',
    'Foam from mouth',
    'Drooling'
  ],
  redFlags_hi: [
    'बाईं तरफ बहुत कड़ा और फूला',
    'साँस लेने में तकलीफ',
    'पशु खड़ा नहीं हो पा रहा',
    'मुँह से झाग',
    'लार बहना'
  ]
},

// ============ 12. MASTITIS / ওলান ফোলা ============
{
  id: 'mastitis',
  icon: '🐄',
  title_bn: 'Mastitis (ওলান ফোলা)',
  title_en: 'Mastitis (Udder swelling)',
  title_hi: 'मास्टाइटिस (थन सूजन)',
  whatIsIt_bn: 'ওলান ফুলে যাওয়া, গরম, লাল বা ব্যথা। দুধে চাকা, রক্ত বা পুঁজ আসতে পারে। দুধ উৎপাদন কমে যায়।',
  whatIsIt_en: 'Udder becomes swollen, hot, red or painful. Milk may contain clots, blood or pus. Milk production drops.',
  whatIsIt_hi: 'थन सूजना, गर्म, लाल या दर्द। दूध में गांठ, खून या पीप आ सकती है। दूध उत्पादन घटता है।',
  dos_bn: [
    'আক্রান্ত ওলান থেকে বারবার দুধ দোহন করুন',
    'গরম পানির সেঁক দিন',
    'সেঁকের পর নরম হাতে মালিশ করুন',
    'পরিষ্কার শুকনো জায়গায় রাখুন',
    'ডাক্তার ডাকুন (অ্যান্টিবায়োটিক লাগবে)'
  ],
  dos_en: [
    'Milk the affected quarter frequently',
    'Apply warm water compress',
    'Massage gently after compress',
    'Keep in clean dry place',
    'Call vet (antibiotics needed)'
  ],
  dos_hi: [
    'प्रभावित थन से बार-बार दूध निकालें',
    'गर्म पानी की सिकाई करें',
    'सिकाई के बाद हल्के हाथ से मालिश करें',
    'साफ सूखी जगह पर रखें',
    'डॉक्टर बुलाएँ (एंटीबायोटिक चाहिए)'
  ],
  donts_bn: [
    'ওই দুধ খাবেন না',
    'জোরে চাপবেন না',
    'নোংরা হাতে ধরবেন না',
    'ব্যথা দেবেন না'
  ],
  donts_en: [
    'Do not consume that milk',
    'Do not press hard',
    'Do not touch with dirty hands',
    'Do not cause pain'
  ],
  donts_hi: [
    'वह दूध न पिएँ',
    'ज़ोर से न दबाएँ',
    'गंदे हाथों से न छुएँ',
    'दर्द न दें'
  ],
  medicines: [
    { name: 'Intra-mammary antibiotic', dose: 'ডাক্তারের পরামর্শে', route_bn: 'ওলানে', route_en: 'Intra-mammary', route_hi: 'थन में' },
    { name: 'Inj. Meloxicam', dose: '২.৫ ml / ১০০ কেজি', route_bn: 'IM', route_en: 'IM', route_hi: 'IM' },
    { name: 'Povidone Iodine', dose: 'দোহনের পর', route_bn: 'বাহ্যিক', route_en: 'Topical', route_hi: 'बाहरी' }
  ],
  redFlags_bn: [
    'ওলান কালো হয়ে যাওয়া',
    'দুধে রক্ত বা পুঁজ',
    'গরু দুধ দিতে না দেয়া',
    'জ্বর ১০৩°F+',
    'ওলান শক্ত ও ঠান্ডা হয়ে যাওয়া'
  ],
  redFlags_en: [
    'Udder turning black',
    'Blood or pus in milk',
    'Animal refuses milking',
    'Fever 103°F+',
    'Udder hard and cold'
  ],
  redFlags_hi: [
    'थन काला होना',
    'दूध में खून या पीप',
    'पशु दूध नहीं देने देना',
    'बुखार 103°F+',
    'थन सख्त और ठंडा'
  ]
},

// ============ 13. EYE PROBLEM / চোখের সমস্যা ============
{
  id: 'eye',
  icon: '👁️',
  title_bn: 'চোখের সমস্যা',
  title_en: 'Eye Problem',
  title_hi: 'आँख की समस्या',
  whatIsIt_bn: 'চোখ লাল, ফোলা, পানি পড়া বা ঘোলা। ধুলো, সংক্রমণ, আঘাত বা Pink Eye রোগে হয়।',
  whatIsIt_en: 'Eye red, swollen, watery or cloudy. Due to dust, infection, injury or Pink Eye disease.',
  whatIsIt_hi: 'आँख लाल, सूजी, पानी या धुंधली। धूल, संक्रमण, चोट या पिंक आई रोग से।',
  dos_bn: [
    'পরিষ্কার পানিতে কাপড় ভিজিয়ে আলতো করে মুছুন',
    'ছায়ায় রাখুন',
    'ধুলো থেকে দূরে রাখুন',
    'ডাক্তার ডাকুন (ঔষধ লাগবে)'
  ],
  dos_en: [
    'Wipe gently with clean wet cloth',
    'Keep in shade',
    'Keep away from dust',
    'Call vet (medicine needed)'
  ],
  dos_hi: [
    'साफ गीले कपड़े से हल्के से पोंछें',
    'छाया में रखें',
    'धूल से दूर रखें',
    'डॉक्टर बुलाएँ (दवा चाहिए)'
  ],
  donts_bn: [
    'হাত দিয়ে ঘষবেন না',
    'নোংরা কাপড় লাগাবেন না',
    'নিজে ঔষধ ডালবেন না',
    'রোদে রাখবেন না'
  ],
  donts_en: [
    'Do not rub with hands',
    'Do not apply dirty cloth',
    'Do not self-medicate',
    'Do not keep in direct sun'
  ],
  donts_hi: [
    'हाथ से न रगड़ें',
    'गंदा कपड़ा न लगाएँ',
    'खुद दवा न डालें',
    'धूप में न रखें'
  ],
  medicines: [
    { name: 'Eye drops (antibiotic)', dose: '২-৩ ফোঁটা / দিনে ৩ বার', route_bn: 'চোখে', route_en: 'Eye', route_hi: 'आँख में' },
    { name: 'Terramycin eye ointment', dose: 'সরু স্তর', route_bn: 'চোখে', route_en: 'Eye', route_hi: 'आँख में' }
  ],
  redFlags_bn: [
    'চোখ সম্পূর্ণ বন্ধ',
    'চোখ থেকে পুঁজ',
    'দৃষ্টি হারানো',
    'চোখ বেরিয়ে আসা',
    'দুই চোখে সমস্যা'
  ],
  redFlags_en: [
    'Eye completely closed',
    'Pus from eye',
    'Vision loss',
    'Eye popping out',
    'Problem in both eyes'
  ],
  redFlags_hi: [
    'आँख पूरी तरह बंद',
    'आँख से पीप',
    'दृष्टि खोना',
    'आँख बाहर आना',
    'दोनों आँखों में समस्या'
  ]
}

// ============ 14. DIARRHEA / ডায়রিয়া ============
,
{
  id: 'diarrhea',
  icon: '💧',
  title_bn: 'ডায়রিয়া (পাতলা পায়খানা)',
  title_en: 'Diarrhea',
  title_hi: 'दस्त',
  whatIsIt_bn: 'বারবার পাতলা বা পানির মতো পায়খানা। বাছুরে বেশি হয়, দ্রুত শরীর শুকিয়ে যায়। ৬-১২ ঘন্টায় মৃত্যু হতে পারে।',
  whatIsIt_en: 'Frequent loose or watery dung. More common in calves. Body dehydrates quickly. Can cause death in 6-12 hours.',
  whatIsIt_hi: 'बार-बार पतला या पानी जैसा गोबर। बछड़ों में ज़्यादा। शरीर जल्दी सूख जाता है। 6-12 घंटे में मौत हो सकती है।',
  dos_bn: [
    'ORS দ্রুত শুরু করুন (১ প্যাকেট / ২ লিটার পানি)',
    'প্রতিদিন ৪-৬ বার ORS দিন',
    'শরীরে তাপমাত্রা লক্ষ্য করুন',
    'পরিষ্কার ঘরে রাখুন',
    'দুধ কমিয়ে দিন (বাছুর হলে)',
    'ডাক্তার ডাকুন'
  ],
  dos_en: [
    'Start ORS immediately (1 packet / 2 liter water)',
    'Give ORS 4-6 times daily',
    'Watch body temperature',
    'Keep in clean shed',
    'Reduce milk (if calf)',
    'Call vet'
  ],
  dos_hi: [
    'तुरंत ORS शुरू करें (1 पैकेट / 2 लीटर पानी)',
    'दिन में 4-6 बार ORS दें',
    'शरीर का तापमान देखें',
    'साफ शेड में रखें',
    'दूध कम करें (बछड़ा हो तो)',
    'डॉक्टर बुलाएँ'
  ],
  donts_bn: [
    'পানি বন্ধ করবেন না',
    'দুধ বেশি খাওয়াবেন না',
    'নিজে থেকে অ্যান্টিবায়োটিক দেবেন না',
    'সময় নষ্ট করবেন না',
    'পায়খানা পরীক্ষা না করে ঔষধ দেবেন না'
  ],
  donts_en: [
    'Do not stop water',
    'Do not give too much milk',
    'Do not self-prescribe antibiotics',
    'Do not waste time',
    'Do not medicate without checking dung'
  ],
  donts_hi: [
    'पानी बंद न करें',
    'ज़्यादा दूध न पिलाएँ',
    'खुद एंटीबायोटिक न दें',
    'समय बर्बाद न करें',
    'गोबर जाँचे बिना दवा न दें'
  ],
  medicines: [
    { name: 'ORS প্যাকেট', dose: '১ প্যাকেট / ২ লিটার পানি', route_bn: 'মুখে', route_en: 'Oral', route_hi: 'मुँह से' },
    { name: 'Inj. Meloxicam', dose: '২.৫ ml / ১০০ কেজি', route_bn: 'IM', route_en: 'IM', route_hi: 'IM' },
    { name: 'Bolus (Diarrhea)', dose: 'ডাক্তারের পরামর্শে', route_bn: 'মুখে', route_en: 'Oral', route_hi: 'मुँह से' }
  ],
  redFlags_bn: [
    'পায়খানায় রক্ত',
    '৬ ঘন্টার বেশি ডায়রিয়া',
    'চোখ বসে গেছে',
    'পশু দাঁড়াতে পারছে না',
    'শরীর ঠান্ডা হয়ে যাচ্ছে',
    'পানি শূন্যতা (Dehydration)'
  ],
  redFlags_en: [
    'Blood in dung',
    'More than 6 hours of diarrhea',
    'Eyes sunken',
    'Animal cannot stand',
    'Body turning cold',
    'Severe dehydration'
  ],
  redFlags_hi: [
    'गोबर में खून',
    '6 घंटे से ज़्यादा दस्त',
    'आँखें धँसी',
    'पशु खड़ा न हो पाए',
    'शरीर ठंडा हो रहा',
    'गंभीर निर्जलीकरण'
  ]
},

// ============ 15. CONSTIPATION / কোষ্ঠকাঠিন্য ============
{
  id: 'constipation',
  icon: '🚫',
  title_bn: 'কোষ্ঠকাঠিন্য',
  title_en: 'Constipation',
  title_hi: 'कब्ज',
  whatIsIt_bn: 'পায়খানা না হওয়া বা শক্ত হওয়া। প্রসবের পর বা কম পানি খেলে হয়। পেট ফুলে যায়, পশু অস্বস্তিতে থাকে।',
  whatIsIt_en: 'No dung or hard dung. Common after calving or due to low water intake. Belly swells, animal uncomfortable.',
  whatIsIt_hi: 'गोबर न आना या सख्त होना। प्रसव के बाद या कम पानी पीने से। पेट फूलता है, पशु बेचैन।',
  dos_bn: [
    'পর্যাপ্ত পানি দিন',
    'সবুজ ঘাস ও নরম খাবার দিন',
    'পশুকে হাঁটান',
    'পেটে আলতো মালিশ করুন',
    'পেটে গরম সেঁক দিন',
    'ডাক্তার ডাকুন (২ দিন হলে)'
  ],
  dos_en: [
    'Give plenty of water',
    'Give green grass and soft feed',
    'Walk the animal',
    'Massage belly gently',
    'Apply warm compress on belly',
    'Call vet if 2 days passed'
  ],
  dos_hi: [
    'खूब पानी दें',
    'हरी घास और नरम खाना दें',
    'टहलाएँ',
    'पेट पर हल्की मालिश करें',
    'पेट पर गर्म सिकाई करें',
    '2 दिन हो गए तो डॉक्टर बुलाएँ'
  ],
  donts_bn: [
    'নিজে ঔষধ দেবেন না',
    'শক্ত খাবার দেবেন না',
    'পেটে জোরে চাপবেন না',
    'অপেক্ষা করবেন না বেশি'
  ],
  donts_en: [
    'Do not self-medicate',
    'Do not give hard feed',
    'Do not press belly hard',
    'Do not wait too long'
  ],
  donts_hi: [
    'खुद दवा न दें',
    'सख्त खाना न दें',
    'पेट पर ज़ोर न डालें',
    'ज़्यादा इंतज़ार न करें'
  ],
  medicines: [
    { name: 'Magnesium Sulphate', dose: '১০০-২০০ গ্রাম', route_bn: 'মুখে', route_en: 'Oral', route_hi: 'मुँह से' },
    { name: 'Liquid Paraffin', dose: '২০০-৩০০ ml', route_bn: 'মুখে', route_en: 'Oral', route_hi: 'मुँह से' },
    { name: 'Mineral oil enema', dose: 'ডাক্তারের পরামর্শে', route_bn: 'মলদ্বারে', route_en: 'Rectal', route_hi: 'गुदा में' }
  ],
  redFlags_bn: [
    '২ দিনের বেশি পায়খানা হয়নি',
    'পেট খুব ফুলে গেছে',
    'শ্বাসকষ্ট',
    'পশু দাঁড়াতে পারছে না',
    'ব্যথায় কাতরাচ্ছে'
  ],
  redFlags_en: [
    'No dung for 2+ days',
    'Belly very swollen',
    'Difficulty breathing',
    'Animal cannot stand',
    'Restless with pain'
  ],
  redFlags_hi: [
    '2 दिन से ज़्यादा गोबर नहीं',
    'पेट बहुत फूला',
    'साँस लेने में तकलीफ',
    'पशु खड़ा न हो पाए',
    'दर्द से बेचैन'
  ]
},

// ============ 16. LAMENESS / খোঁড়া ============
{
  id: 'lameness',
  icon: '🦵',
  title_bn: 'খোঁড়া / পা ফোলা',
  title_en: 'Lameness / Leg Swelling',
  title_hi: 'लंगड़ापन / पैर सूजन',
  whatIsIt_bn: 'পায়ে ব্যথা, ফোলা বা খোঁড়ানো। পেরেক, কাঁটা, আঘাত বা সংক্রমণে হয়। দুধ কমে যায়।',
  whatIsIt_en: 'Pain, swelling or limping. Caused by nail, thorn, injury or infection. Milk drops.',
  whatIsIt_hi: 'पैर में दर्द, सूजन या लंगड़ाना। कील, काँटा, चोट या संक्रमण से। दूध घटता है।',
  dos_bn: [
    'আক্রান্ত পা পরীক্ষা করুন',
    'পেরেক/কাঁটা থাকলে সাবধানে বের করুন',
    'পরিষ্কার পানি দিয়ে ধুয়ে দিন',
    'Povidone Iodine লাগান',
    'শুকনো, নরম জায়গায় রাখুন',
    'ডাক্তার ডাকুন'
  ],
  dos_en: [
    'Examine the affected leg',
    'Carefully remove nail/thorn if present',
    'Wash with clean water',
    'Apply Povidone Iodine',
    'Keep in dry, soft area',
    'Call vet'
  ],
  dos_hi: [
    'प्रभावित पैर जाँचें',
    'कील/काँटा हो तो सावधानी से निकालें',
    'साफ पानी से धोएँ',
    'Povidone Iodine लगाएँ',
    'सूखी, नरम जगह पर रखें',
    'डॉक्टर बुलाएँ'
  ],
  donts_bn: [
    'জোরে টানবেন না',
    'নোংরা হাতে ধরবেন না',
    'হাঁটাতে বাধ্য করবেন না',
    'নিজে কাটবেন না'
  ],
  donts_en: [
    'Do not pull hard',
    'Do not touch with dirty hands',
    'Do not force walking',
    'Do not cut yourself'
  ],
  donts_hi: [
    'ज़ोर से न खींचें',
    'गंदे हाथों से न छुएँ',
    'चलने के लिए मजबूर न करें',
    'खुद न काटें'
  ],
  medicines: [
    { name: 'Povidone Iodine', dose: 'আক্রান্ত জায়গায়', route_bn: 'বাহ্যিক', route_en: 'Topical', route_hi: 'बाहरी' },
    { name: 'Inj. Meloxicam', dose: '২.৫ ml / ১০০ কেজি', route_bn: 'IM', route_en: 'IM', route_hi: 'IM' },
    { name: 'Inj. Oxytetracycline', dose: 'ডাক্তারের পরামর্শে', route_bn: 'IM', route_en: 'IM', route_hi: 'IM' }
  ],
  redFlags_bn: [
    'পা কালো হয়ে যাওয়া',
    'দুর্গন্ধ বের হওয়া',
    'হাড় দৃশ্যমান',
    'জ্বর ১০৩°F+',
    'দাঁড়াতেই না পারা'
  ],
  redFlags_en: [
    'Leg turning black',
    'Foul smell',
    'Bone visible',
    'Fever 103°F+',
    'Cannot stand at all'
  ],
  redFlags_hi: [
    'पैर काला होना',
    'बदबू आना',
    'हड्डी दिखना',
    'बुखार 103°F+',
    'बिल्कुल खड़ा न हो पाना'
  ]
},

// ============ 17. MILK DROP / দুধ কমে যাওয়া ============
{
  id: 'milkdrop',
  icon: '🥛',
  title_bn: 'দুধ কমে যাওয়া',
  title_en: 'Milk Drop',
  title_hi: 'दूध कम होना',
  whatIsIt_bn: 'আগের চেয়ে দুধ কমে যাওয়া। খাবারে পরিবর্তন, জ্বর, ম্যাস্টাইটিস, চাপ বা পানির অভাব থেকে হতে পারে।',
  whatIsIt_en: 'Milk production drops from previous level. Due to feed change, fever, mastitis, stress or water shortage.',
  whatIsIt_hi: 'पहले से दूध कम होना। चारा बदलाव, बुखार, मास्टाइटिस, तनाव या पानी की कमी से।',
  dos_bn: [
    'খাবার ও পানি ঠিক আছে কিনা দেখুন',
    'ওলান পরীক্ষা করুন',
    'জ্বর চেক করুন',
    'মানসম্মত সবুজ ঘাস দিন',
    'Mineral mixture দিন',
    'পরিষ্কার ও শান্ত জায়গায় রাখুন'
  ],
  dos_en: [
    'Check feed and water',
    'Examine udder',
    'Check for fever',
    'Give quality green grass',
    'Give mineral mixture',
    'Keep in clean and calm place'
  ],
  dos_hi: [
    'चारा और पानी जाँचें',
    'थन जाँचें',
    'बुखार देखें',
    'अच्छी हरी घास दें',
    'मिनरल मिक्सचर दें',
    'साफ शांत जगह पर रखें'
  ],
  donts_bn: [
    'খাবার হঠাৎ বদলাবেন না',
    'নোংরা পানি দেবেন না',
    'গরমে বাইরে রাখবেন না',
    'চাপ দেবেন না'
  ],
  donts_en: [
    'Do not change feed suddenly',
    'Do not give dirty water',
    'Do not keep in heat outside',
    'Do not stress the animal'
  ],
  donts_hi: [
    'चारा अचानक न बदलें',
    'गंदा पानी न दें',
    'गर्मी में बाहर न रखें',
    'तनाव न दें'
  ],
  medicines: [
    { name: 'Mineral mixture', dose: '৫০ গ্রাম / দিন', route_bn: 'মুখে', route_en: 'Oral', route_hi: 'मुँह से' },
    { name: 'Calcium syrup', dose: '৩০ ml / দিন', route_bn: 'মুখে', route_en: 'Oral', route_hi: 'मुँह से' },
    { name: 'Liver tonic', dose: '৩০ ml / দিন', route_bn: 'মুখে', route_en: 'Oral', route_hi: 'मुँह से' }
  ],
  redFlags_bn: [
    'হঠাৎ দুধ ৫০% কমে যাওয়া',
    'সাথে জ্বর',
    'ওলান ফোলা',
    'খাওয়া বন্ধ',
    'শরীর দুর্বল'
  ],
  redFlags_en: [
    'Sudden 50% milk drop',
    'Fever along with it',
    'Udder swelling',
    'Stopped eating',
    'Body weak'
  ],
  redFlags_hi: [
    'अचानक 50% दूध कम',
    'बुखार के साथ',
    'थन सूजन',
    'खाना बंद',
    'शरीर कमज़ोर'
  ]
},

// ============ 18. WEAKNESS / দুর্বলতা ============
{
  id: 'weakness',
  icon: '😴',
  title_bn: 'অলসতা / দুর্বলতা',
  title_en: 'Weakness / Dullness',
  title_hi: 'कमज़ोरी / सुस्ती',
  whatIsIt_bn: 'পশু অলস, দাঁড়াতে চায় না, চোখ বন্ধ করে রাখে। অপুষ্টি, কৃমি, রক্তাল্পতা বা রোগের লক্ষণ।',
  whatIsIt_en: 'Animal dull, reluctant to stand, eyes closed. Sign of malnutrition, worms, anemia or disease.',
  whatIsIt_hi: 'पशु सुस्त, खड़ा नहीं होना चाहता, आँखें बंद। कुपोषण, कीड़े, खून की कमी या रोग का लक्षण।',
  dos_bn: [
    'জ্বর চেক করুন',
    'চোখের পাতা ও মাড়ি দেখুন (সাদা হলে রক্তাল্পতা)',
    'মানসম্মত খাবার ও পানি দিন',
    'কৃমিনাশক ঔষধ দিন',
    'Mineral mixture দিন',
    'ডাক্তার ডাকুন'
  ],
  dos_en: [
    'Check for fever',
    'Check eyelids and gums (pale = anemia)',
    'Give quality feed and water',
    'Deworm the animal',
    'Give mineral mixture',
    'Call vet'
  ],
  dos_hi: [
    'बुखार देखें',
    'पलकें और मसूड़े देखें (सफेद = खून की कमी)',
    'अच्छा चारा और पानी दें',
    'कृमिनाशक दवा दें',
    'मिनरल मिक्सचर दें',
    'डॉक्टर बुलाएँ'
  ],
  donts_bn: [
    'জোর করে দাঁড় করাবেন না',
    'একা ফেলে রাখবেন না',
    'ঠান্ডায় রাখবেন না',
    'ভেজা জায়গায় রাখবেন না'
  ],
  donts_en: [
    'Do not force to stand',
    'Do not leave alone',
    'Do not keep in cold',
    'Do not keep in wet place'
  ],
  donts_hi: [
    'ज़बरदस्ती खड़ा न कराएँ',
    'अकेला न छोड़ें',
    'ठंड में न रखें',
    'गीली जगह पर न रखें'
  ],
  medicines: [
    { name: 'Deworming bolus', dose: 'ডাক্তারের পরামর্শে', route_bn: 'মুখে', route_en: 'Oral', route_hi: 'मुँह से' },
    { name: 'Iron + B-Complex syrup', dose: '৩০ ml / দিন', route_bn: 'মুখে', route_en: 'Oral', route_hi: 'मुँह से' },
    { name: 'Mineral mixture', dose: '৫০ গ্রাম / দিন', route_bn: 'মুখে', route_en: 'Oral', route_hi: 'मुँह से' }
  ],
  redFlags_bn: [
    'পশু উঠতেই পারছে না',
    'চোখ-মাড়ি সাদা',
    'শ্বাসকষ্ট',
    'খাওয়া সম্পূর্ণ বন্ধ',
    'শরীর ঠান্ডা'
  ],
  redFlags_en: [
    'Animal cannot get up',
    'Eyes and gums pale',
    'Difficulty breathing',
    'Completely off feed',
    'Body cold'
  ],
  redFlags_hi: [
    'पशु उठ ही नहीं पा रहा',
    'आँखें-मसूड़े सफेद',
    'साँस लेने में तकलीफ',
    'खाना पूरी तरह बंद',
    'शरीर ठंडा'
  ]
}

  // ============ 19. SKIN PROBLEM / ত্বকের সমস্যা ============
  ,
  {
    id: 'skin',
    icon: '🩹',
    title_bn: 'ত্বকের সমস্যা',
    title_en: 'Skin Problem',
    title_hi: 'त्वचा की समस्या',
    whatIsIt_bn: 'চুলকানি, খুশকি, গোল দাগ, চুল পড়া বা ঘা। ছত্রাক, পোকা, পরজীবী বা অ্যালার্জিতে হয়।',
    whatIsIt_en: 'Itching, dandruff, round patches, hair loss or sores. Due to fungus, insects, parasites or allergy.',
    whatIsIt_hi: 'खुजली, रूसी, गोल दाग, बाल झड़ना या घाव। फंगस, कीड़े, परजीवी या एलर्जी से।',
    dos_bn: [
      'আক্রান্ত জায়গা ভালোভাবে দেখুন',
      'পরিষ্কার পানি ও সাবান দিয়ে ধুয়ে দিন',
      'অন্য পশু থেকে দূরে রাখুন',
      'Povidone Iodine বা antifungal লাগান',
      'খামার পরিষ্কার করুন',
      'ডাক্তার ডাকুন'
    ],
    dos_en: [
      'Examine the affected area well',
      'Wash with clean water and soap',
      'Keep away from other animals',
      'Apply Povidone Iodine or antifungal',
      'Clean the shed',
      'Call vet'
    ],
    dos_hi: [
      'प्रभावित जगह अच्छे से देखें',
      'साफ पानी और साबुन से धोएँ',
      'दूसरे जानवरों से दूर रखें',
      'Povidone Iodine या antifungal लगाएँ',
      'शेड साफ करें',
      'डॉक्टर बुलाएँ'
    ],
    donts_bn: [
      'হাত দিয়ে খুঁচবেন না',
      'নোংরা হাতে ধরবেন না',
      'অন্য পশুর সাথে মেশাবেন না',
      'নিজে ঔষধ ডালবেন না'
    ],
    donts_en: [
      'Do not scratch with hands',
      'Do not touch with dirty hands',
      'Do not mix with other animals',
      'Do not self-medicate'
    ],
    donts_hi: [
      'हाथ से न खुरचें',
      'गंदे हाथों से न छुएँ',
      'दूसरे जानवरों से न मिलाएँ',
      'खुद दवा न लगाएँ'
    ],
    medicines: [
      { name: 'Povidone Iodine', dose: 'আক্রান্ত জায়গায়', route_bn: 'বাহ্যিক', route_en: 'Topical', route_hi: 'बाहरी' },
      { name: 'Antifungal cream', dose: 'সরু স্তর', route_bn: 'বাহ্যিক', route_en: 'Topical', route_hi: 'बाहरी' },
      { name: 'Inj. Ivermectin', dose: 'ডাক্তারের পরামর্শে', route_bn: 'SC', route_en: 'SC', route_hi: 'SC' }
    ],
    redFlags_bn: [
      'পুরো শরীরে ছড়িয়ে পড়া',
      'ঘা থেকে পুঁজ ও দুর্গন্ধ',
      'জ্বর',
      'খাওয়া বন্ধ',
      'দ্রুত ছড়াচ্ছে'
    ],
    redFlags_en: [
      'Spread all over body',
      'Pus and foul smell from sores',
      'Fever',
      'Off feed',
      'Spreading rapidly'
    ],
    redFlags_hi: [
      'पूरे शरीर पर फैलना',
      'घाव से पीप और बदबू',
      'बुखार',
      'खाना बंद',
      'तेज़ी से फैलना'
    ]
  },

  // ============ 20. ABORTION SIGNS / গর্ভপাতের লক্ষণ ============
  {
    id: 'abortion',
    icon: '⚠️',
    title_bn: 'গর্ভপাতের লক্ষণ',
    title_en: 'Abortion Signs',
    title_hi: 'गर्भपात के संकेत',
    whatIsIt_bn: 'গর্ভবতী পশুর যোনি দিয়ে রক্ত, পানি বা তরল বের হওয়া। পেটে ব্যথা বা বাচ্চা নড়াচড়া বন্ধ।',
    whatIsIt_en: 'Blood, water or discharge from vagina of pregnant animal. Belly pain or fetal movement stopped.',
    whatIsIt_hi: 'गर्भवती पशु की योनि से खून, पानी या तरल। पेट दर्द या बच्चे की हलचल बंद।',
    dos_bn: [
      'পশুকে শান্ত, শুকনো জায়গায় রাখুন',
      'শরীরের তাপমাত্রা মাপুন',
      'যা বের হয়েছে তা পরিষ্কার কাপড়ে রাখুন',
      'পশুকে একা ফেলবেন না',
      'সাথে সাথে ডাক্তার ডাকুন'
    ],
    dos_en: [
      'Keep animal in calm, dry place',
      'Check body temperature',
      'Save what came out in clean cloth',
      'Do not leave alone',
      'Call vet immediately'
    ],
    dos_hi: [
      'पशु को शांत, सूखी जगह पर रखें',
      'शरीर का तापमान जाँचें',
      'जो निकला उसे साफ कपड़े में रखें',
      'अकेला न छोड़ें',
      'तुरंत डॉक्टर बुलाएँ'
    ],
    donts_bn: [
      'নিজে ভিতরে হাত দেবেন না',
      'জোর করবেন না',
      'নোংরা হাতে ধরবেন না',
      'সময় নষ্ট করবেন না'
    ],
    donts_en: [
      'Do not insert hand inside',
      'Do not force',
      'Do not touch with dirty hands',
      'Do not waste time'
    ],
    donts_hi: [
      'खुद अंदर हाथ न डालें',
      'ज़ोर न लगाएँ',
      'गंदे हाथों से न छुएँ',
      'समय बर्बाद न करें'
    ],
    medicines: [
      { name: 'Inj. Oxytocin', dose: 'শুধু ডাক্তারের পরামর্শে', route_bn: 'IM', route_en: 'IM', route_hi: 'IM' }
    ],
    redFlags_bn: [
      'অতিরিক্ত রক্তপাত',
      'বাচ্চা বের হতে না পারা',
      'মা দুর্বল হয়ে পড়া',
      'শরীর ঠান্ডা হয়ে যাওয়া',
      'জ্বর শুরু'
    ],
    redFlags_en: [
      'Excessive bleeding',
      'Baby not coming out',
      'Mother becoming weak',
      'Body turning cold',
      'Fever starts'
    ],
    redFlags_hi: [
      'बहुत ज़्यादा खून',
      'बच्चा बाहर न आना',
      'माँ कमज़ोर',
      'शरीर ठंडा',
      'बुखार शुरू'
    ]
  },

  // ============ 21. BLOODY URINE / প্রস্রাবে রক্ত ============
  {
    id: 'bloodyurine',
    icon: '🩸',
    title_bn: 'প্রস্রাবে রক্ত',
    title_en: 'Bloody Urine',
    title_hi: 'पेशाब में खून',
    whatIsIt_bn: 'প্রস্রাব লাল বা গাঢ় বাদামী রঙের। কিডনি, মূত্রথলি বা সংক্রমণের সমস্যা। বিষাক্ত গাছ খেলেও হয়।',
    whatIsIt_en: 'Urine becomes red or dark brown. Kidney, bladder or infection problem. Also from toxic plants.',
    whatIsIt_hi: 'पेशाब लाल या गहरा भूरा। गुर्दे, मूत्राशय या संक्रमण की समस्या। ज़हरीले पौधे से भी।',
    dos_bn: [
      'পর্যাপ্ত পানি দিন',
      'প্রস্রাবের রং ও পরিমাণ লক্ষ্য করুন',
      'পশুকে বিশ্রাম দিন',
      'খাবার পরিবর্তন করলে থামান',
      'ডাক্তার ডাকুন'
    ],
    dos_en: [
      'Give plenty of water',
      'Observe urine color and quantity',
      'Give rest to animal',
      'Stop new feed if changed',
      'Call vet'
    ],
    dos_hi: [
      'खूब पानी दें',
      'पेशाब का रंग और मात्रा देखें',
      'आराम दें',
      'नया चारा बदला हो तो बंद करें',
      'डॉक्टर बुलाएँ'
    ],
    donts_bn: [
      'নিজে ঔষধ দেবেন না',
      'সময় নষ্ট করবেন না',
      'পানি কম দেবেন না',
      'খামার থেকে দূরে রাখবেন না'
    ],
    donts_en: [
      'Do not self-medicate',
      'Do not waste time',
      'Do not reduce water',
      'Do not move far from farm'
    ],
    donts_hi: [
      'खुद दवा न दें',
      'समय बर्बाद न करें',
      'पानी कम न दें',
      'खेत से दूर न रखें'
    ],
    medicines: [
      { name: 'Inj. Meloxicam', dose: '২.৫ ml / ১০০ কেজি', route_bn: 'IM', route_en: 'IM', route_hi: 'IM' },
      { name: 'Inj. Oxytetracycline', dose: 'ডাক্তারের পরামর্শে', route_bn: 'IM', route_en: 'IM', route_hi: 'IM' }
    ],
    redFlags_bn: [
      'প্রস্রাব সম্পূর্ণ বন্ধ',
      'শরীর ফুলে যাওয়া',
      'জ্বর',
      'পশু দাঁড়াতে না পারা',
      'রক্ত clot আকারে'
    ],
    redFlags_en: [
      'Urine completely stopped',
      'Body swelling',
      'Fever',
      'Animal cannot stand',
      'Blood in clots'
    ],
    redFlags_hi: [
      'पेशाब पूरी तरह बंद',
      'शरीर सूजना',
      'बुखार',
      'पशु खड़ा न हो पाए',
      'खून थक्के के रूप में'
    ]
  },

  // ============ 22. REPEAT BREEDING / বারবার গর্ভধারণ ব্যর্থ ============
  {
    id: 'repeatbreeding',
    icon: '🔄',
    title_bn: 'বারবার গর্ভধারণ ব্যর্থ (Repeat Breeding)',
    title_en: 'Repeat Breeding',
    title_hi: 'बार-बार गर्भधारण विफल',
    whatIsIt_bn: 'তিন বা তার বেশি AI দেওয়ার পরও গাভী গর্ভবতী না হওয়া। গর্ভপাত, সংক্রমণ, পুষ্টির অভাব বা AI সময়ে সমস্যা।',
    whatIsIt_en: 'Cow not conceiving even after 3 or more AI attempts. Due to abortion, infection, nutrition or AI timing.',
    whatIsIt_hi: '3 या ज़्यादा AI के बाद भी गाय गर्भवती न होना। गर्भपात, संक्रमण, पोषण या AI समय।',
    dos_bn: [
      'প্রতিটি AI এর তারিখ ও Bull নম্বর লিখুন',
      'গাভীর গর্ভাবস্থা পরীক্ষা (PD) করান',
      'পুষ্টি ঠিক করুন (Mineral mixture)',
      'খামারে পরিষ্কার পরিবেশ রাখুন',
      'AI technician এর সাথে কথা বলুন',
      'ডাক্তার ডাকুন'
    ],
    dos_en: [
      'Record every AI date and Bull number',
      'Do pregnancy diagnosis (PD)',
      'Fix nutrition (Mineral mixture)',
      'Keep clean farm environment',
      'Consult AI technician',
      'Call vet'
    ],
    dos_hi: [
      'हर AI तारीख और Bull नंबर लिखें',
      'गर्भावस्था जाँच (PD) कराएँ',
      'पोषण ठीक करें (Mineral mixture)',
      'खेत साफ रखें',
      'AI तकनीशियन से बात करें',
      'डॉक्टर बुलाएँ'
    ],
    donts_bn: [
      'সময় মতো AI না করা',
      'কম পুষ্টি দেবেন না',
      'অনিয়মিত AI করাবেন না',
      'সংক্রমণ থাকলে উপেক্ষা করবেন না'
    ],
    donts_en: [
      'Do not miss AI timing',
      'Do not give less nutrition',
      'Do not do irregular AI',
      'Do not ignore infection'
    ],
    donts_hi: [
      'AI समय न चूकें',
      'कम पोषण न दें',
      'अनियमित AI न कराएँ',
      'संक्रमण नज़रअंदाज़ न करें'
    ],
    medicines: [
      { name: 'Mineral mixture', dose: '৫০ গ্রাম / দিন', route_bn: 'মুখে', route_en: 'Oral', route_hi: 'मुँह से' },
      { name: 'Inj. GnRH', dose: 'AI সময় ডাক্তারের পরামর্শে', route_bn: 'IM', route_en: 'IM', route_hi: 'IM' },
      { name: 'Vitamin E + Selenium', dose: 'ডাক্তারের পরামর্শে', route_bn: 'মুখে', route_en: 'Oral', route_hi: 'मुँह से' }
    ],
    redFlags_bn: [
      'যোনি দিয়ে দুর্গন্ধযুক্ত স্রাব',
      'গাভীর বয়স ৮ বছরের বেশি',
      '৩ বারের বেশি ব্যর্থ',
      'গর্ভপাত বারবার',
      'ওলানে সমস্যা'
    ],
    redFlags_en: [
      'Foul vaginal discharge',
      'Cow age above 8 years',
      'Failed more than 3 times',
      'Repeated abortion',
      'Udder problem'
    ],
    redFlags_hi: [
      'योनि से बदबूदार स्राव',
      'गाय की उम्र 8 साल से ज़्यादा',
      '3 बार से ज़्यादा विफल',
      'बार-बार गर्भपात',
      'थन में समस्या'
    ]
  },

  // ============ 23. TEETH PROBLEM / দাঁতের সমস্যা ============
  {
    id: 'teeth',
    icon: '🦷',
    title_bn: 'দাঁতের সমস্যা',
    title_en: 'Teeth Problem',
    title_hi: 'दाँत की समस्या',
    whatIsIt_bn: 'দাঁত ভাঙা, নড়া বা দাঁতে আঘাত। খেতে অসুবিধা, খাবার মুখ থেকে পড়ে, লালা পড়ে।',
    whatIsIt_en: 'Broken, loose or injured teeth. Difficulty eating, food falls from mouth, drooling.',
    whatIsIt_hi: 'दाँत टूटना, हिलना या चोट। खाने में कठिनाई, खाना मुँह से गिरना, लार।',
    dos_bn: [
      'মুখ খুলে দাঁত পরীক্ষা করুন',
      'ভাঙা দাঁত থাকলে বের করুন (সাবধানে)',
      'নরম খাবার দিন',
      'লবণ পানি দিয়ে মুখ ধুয়ে দিন',
      'ডাক্তার ডাকুন (দাঁত ভাঙলে)'
    ],
    dos_en: [
      'Open mouth and examine teeth',
      'Remove broken tooth carefully',
      'Give soft feed',
      'Rinse mouth with salt water',
      'Call vet (if tooth broken)'
    ],
    dos_hi: [
      'मुँह खोलकर दाँत जाँचें',
      'टूटा दाँत सावधानी से निकालें',
      'नरम खाना दें',
      'नमक पानी से मुँह धोएँ',
      'डॉक्टर बुलाएँ (दाँत टूटा हो तो)'
    ],
    donts_bn: [
      'জোরে টানবেন না',
      'নিজে ভাঙবেন না',
      'শক্ত খাবার দেবেন না',
      'নোংরা হাতে ধরবেন না'
    ],
    donts_en: [
      'Do not pull hard',
      'Do not break yourself',
      'Do not give hard feed',
      'Do not touch with dirty hands'
    ],
    donts_hi: [
      'ज़ोर से न खींचें',
      'खुद न तोड़ें',
      'सख्त खाना न दें',
      'गंदे हाथों से न छुएँ'
    ],
    medicines: [
      { name: 'Povidone Iodine', dose: 'মুখে ঘায়ে', route_bn: 'বাহ্যিক', route_en: 'Topical', route_hi: 'बाहरी' },
      { name: 'Inj. Meloxicam', dose: '২.৫ ml / ১০০ কেজি', route_bn: 'IM', route_en: 'IM', route_hi: 'IM' }
    ],
    redFlags_bn: [
      'খাওয়া সম্পূর্ণ বন্ধ',
      'মুখে দুর্গন্ধ',
      'পুঁজ পড়া',
      'মুখ ফুলে যাওয়া',
      'জ্বর'
    ],
    redFlags_en: [
      'Completely stopped eating',
      'Bad smell from mouth',
      'Pus discharge',
      'Face swelling',
      'Fever'
    ],
    redFlags_hi: [
      'खाना पूरी तरह बंद',
      'मुँह से बदबू',
      'पीप',
      'चेहरा सूजना',
      'बुखार'
    ]
  },

  // ============ 24. UTERINE PROBLEM / জরায়ুর সমস্যা ============
  {
    id: 'uterine',
    icon: '🤰',
    title_bn: 'জরায়ুর সমস্যা',
    title_en: 'Uterine Problem',
    title_hi: 'गर्भाशय की समस्या',
    whatIsIt_bn: 'প্রসবের পর জরায়ুতে সংক্রমণ। দুর্গন্ধযুক্ত স্রাব, জ্বর, খাওয়া বন্ধ।',
    whatIsIt_en: 'Uterine infection after calving. Foul discharge, fever, off feed.',
    whatIsIt_hi: 'प्रसव के बाद गर्भाशय में संक्रमण। बदबूदार स्राव, बुखार, खाना बंद।',
    dos_bn: [
      'যোনি থেকে যা বের হচ্ছে তা পরিষ্কার কাপড়ে সংগ্রহ করুন',
      'পশুকে পরিষ্কার, শুকনো জায়গায় রাখুন',
      'পিছনের অংশ সাবান দিয়ে ধুয়ে দিন',
      'অন্য পশু থেকে দূরে রাখুন',
      'সাথে সাথে ডাক্তার ডাকুন'
    ],
    dos_en: [
      'Collect discharge in clean cloth',
      'Keep in clean, dry place',
      'Wash rear part with soap',
      'Keep away from other animals',
      'Call vet immediately'
    ],
    dos_hi: [
      'योनि से जो निकले साफ कपड़े में लें',
      'साफ सूखी जगह पर रखें',
      'पिछला हिस्सा साबुन से धोएँ',
      'दूसरे जानवरों से दूर रखें',
      'तुरंत डॉक्टर बुलाएँ'
    ],
    donts_bn: [
      'নিজে হাত ঢোকানোর চেষ্টা করবেন না',
      'নোংরা হাতে ধরবেন না',
      'সময় নষ্ট করবেন না',
      'নিজে ঔষধ ডালবেন না'
    ],
    donts_en: [
      'Do not insert hand inside',
      'Do not touch with dirty hands',
      'Do not waste time',
      'Do not self-medicate'
    ],
    donts_hi: [
      'खुद हाथ न डालें',
      'गंदे हाथों से न छुएँ',
      'समय बर्बाद न करें',
      'खुद दवा न डालें'
    ],
    medicines: [
      { name: 'Inj. Oxytocin', dose: 'ডাক্তারের পরামর্শে', route_bn: 'IM', route_en: 'IM', route_hi: 'IM' },
      { name: 'Inj. Oxytetracycline', dose: 'ডাক্তারের পরামর্শে', route_bn: 'IM', route_en: 'IM', route_hi: 'IM' }
    ],
    redFlags_bn: [
      'দুর্গন্ধযুক্ত স্রাব',
      'জ্বর ১০৩°F+',
      'পশু দাঁড়াতে না পারা',
      'খাওয়া বন্ধ',
      'প্রস্রাবে রক্ত'
    ],
    redFlags_en: [
      'Foul-smelling discharge',
      'Fever 103°F+',
      'Animal cannot stand',
      'Off feed',
      'Blood in urine'
    ],
    redFlags_hi: [
      'बदबूदार स्राव',
      'बुखार 103°F+',
      'पशु खड़ा न हो पाए',
      'खाना बंद',
      'पेशाब में खून'
    ]
  },

  // ============ 25. BLOOD IN MILK / দুধে রক্ত ============
  {
    id: 'bloodmilk',
    icon: '🥛',
    title_bn: 'দুধে রক্ত',
    title_en: 'Blood in Milk',
    title_hi: 'दूध में खून',
    whatIsIt_bn: 'দুধে রক্ত আসা। ওলানে আঘাত, ম্যাস্টাইটিস, প্রসবের পর বা জোরে দোহনে হয়।',
    whatIsIt_en: 'Blood in milk. Due to udder injury, mastitis, after calving or rough milking.',
    whatIsIt_hi: 'दूध में खून। थन में चोट, मास्टाइटिस, प्रसव के बाद या ज़ोरदार दोहन से।',
    dos_bn: [
      'ওই দুধ ফেলে দিন',
      'ওলান ভালোভাবে পরীক্ষা করুন',
      'গরম পানির সেঁক দিন',
      'নরম হাতে মালিশ করুন',
      'পরিষ্কার দুধ দোহন করুন',
      'ডাক্তার ডাকুন'
    ],
    dos_en: [
      'Discard that milk',
      'Examine udder carefully',
      'Apply warm water compress',
      'Massage gently',
      'Milk cleanly',
      'Call vet'
    ],
    dos_hi: [
      'वह दूध फेंक दें',
      'थन अच्छे से जाँचें',
      'गर्म पानी की सिकाई करें',
      'हल्के हाथ से मालिश करें',
      'साफ दोहन करें',
      'डॉक्टर बुलाएँ'
    ],
    donts_bn: [
      'ওই দুধ খাবেন না',
      'জোরে চাপবেন না',
      'নোংরা হাতে ধরবেন না',
      'বিক্রি করবেন না'
    ],
    donts_en: [
      'Do not consume that milk',
      'Do not press hard',
      'Do not touch with dirty hands',
      'Do not sell'
    ],
    donts_hi: [
      'वह दूध न पिएँ',
      'ज़ोर से न दबाएँ',
      'गंदे हाथों से न छुएँ',
      'बेचें नहीं'
    ],
    medicines: [
      { name: 'Inj. Meloxicam', dose: '২.৫ ml / ১০০ কেজি', route_bn: 'IM', route_en: 'IM', route_hi: 'IM' },
      { name: 'Inj. Vitamin K', dose: 'ডাক্তারের পরামর্শে', route_bn: 'IM', route_en: 'IM', route_hi: 'IM' }
    ],
    redFlags_bn: [
      'দুধে পুঁজ',
      'ওলান কালো হয়ে যাওয়া',
      'জ্বর',
      'গরু দুধ দিতে না দেওয়া',
      'রক্তপাত বন্ধ না হওয়া'
    ],
    redFlags_en: [
      'Pus in milk',
      'Udder turning black',
      'Fever',
      'Animal refusing milking',
      'Bleeding not stopping'
    ],
    redFlags_hi: [
      'दूध में पीप',
      'थन काला होना',
      'बुखार',
      'पशु दूध न देने देना',
      'खून बंद न होना'
    ]
  },

  // ============ 26. FMD WOUND / FMD এর ক্ষত ============
  {
    id: 'fmd',
    icon: '🩹',
    title_bn: 'FMD এর ক্ষত',
    title_en: 'FMD Wounds',
    title_hi: 'FMD के घाव',
    whatIsIt_bn: 'FMD (Foot and Mouth Disease) এ মুখ, জিভ, পা ও ওলানে ফোস্কা ও ক্ষত। খাওয়া বন্ধ, লালা পড়া, খোঁড়ানো।',
    whatIsIt_en: 'FMD causes blisters and wounds on mouth, tongue, feet and udder. Off feed, drooling, limping.',
    whatIsIt_hi: 'FMD में मुँह, जीभ, पैर और थन पर फफोले और घाव। खाना बंद, लार, लंगड़ाना।',
    dos_bn: [
      'পশুকে আলাদা করুন',
      'মুখ ও পা পরিষ্কার পানি দিয়ে ধুয়ে দিন',
      'লবণ পানি দিয়ে মুখ ধুয়ে দিন',
      'নরম, তরল খাবার দিন',
      'Antiseptic লাগান',
      'ডাক্তার ডাকুন'
    ],
    dos_en: [
      'Separate the animal',
      'Wash mouth and feet with clean water',
      'Rinse mouth with salt water',
      'Give soft, liquid feed',
      'Apply antiseptic',
      'Call vet'
    ],
    dos_hi: [
      'पशु को अलग करें',
      'मुँह और पैर साफ पानी से धोएँ',
      'नमक पानी से मुँह धोएँ',
      'नरम, तरल खाना दें',
      'Antiseptic लगाएँ',
      'डॉक्टर बुलाएँ'
    ],
    donts_bn: [
      'অন্য পশুর সাথে মেশাবেন না',
      'নোংরা জায়গায় রাখবেন না',
      'শক্ত খাবার দেবেন না',
      'নিজে ঔষধ ডালবেন না'
    ],
    donts_en: [
      'Do not mix with other animals',
      'Do not keep in dirty place',
      'Do not give hard feed',
      'Do not self-medicate'
    ],
    donts_hi: [
      'दूसरे जानवरों से न मिलाएँ',
      'गंदी जगह पर न रखें',
      'सख्त खाना न दें',
      'खुद दवा न डालें'
    ],
    medicines: [
      { name: 'Povidone Iodine', dose: 'ক্ষতে', route_bn: 'বাহ্যিক', route_en: 'Topical', route_hi: 'बाहरी' },
      { name: 'Glycerin + Borax', dose: 'মুখের ঘায়ে', route_bn: 'বাহ্যিক', route_en: 'Topical', route_hi: 'बाहरी' },
      { name: 'Inj. Meloxicam', dose: '২.৫ ml / ১০০ কেজি', route_bn: 'IM', route_en: 'IM', route_hi: 'IM' }
    ],
    redFlags_bn: [
      'খাওয়া সম্পূর্ণ বন্ধ',
      'অনেক পশু আক্রান্ত',
      'পশু দাঁড়াতে না পারা',
      'জ্বর ১০৪°F+',
      'শ্বাসকষ্ট'
    ],
    redFlags_en: [
      'Completely off feed',
      'Many animals affected',
      'Animal cannot stand',
      'Fever 104°F+',
      'Difficulty breathing'
    ],
    redFlags_hi: [
      'खाना पूरी तरह बंद',
      'कई जानवर प्रभावित',
      'पशु खड़ा न हो पाए',
      'बुखार 104°F+',
      'साँस लेने में तकलीफ'
    ]
  }

];
