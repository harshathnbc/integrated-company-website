/**
 * Integrated Company - Interactive Controller & Application Logic
 * Implements: Dynamic Bilingual translation, Tab Routing, & HTML Canvas Fluid Mesh
 */

// ==================== BILINGUAL TRANSLATION SYSTEM ====================
const translations = {
  en: {
    nav_brand: "Integrated Company",
    nav_home: "Home",
    nav_saudi: "Saudi Arabia",
    nav_senegal: "Industrial Supply",
    nav_universal: "Universal Machinery",
    nav_contact: "Contact Us",
    
    hero_tagline: "Saudi Arabia & International",
    hero_title_1: "Integrated Solutions",
    hero_title_2: "Across Core Sectors",
    hero_desc: "Integrated Company is a premier Saudi corporate delivering top-tier solutions across construction, industrial, and commercial sectors globally.",
    hero_btn_explore: "Explore Operations",
    hero_btn_contact: "Contact Us",
    stat_years: "Years Experience",
    stat_markets: "Global Markets",
    stat_machinery: "Machinery Models",
    
    sectors_badge: "Our Pillars",
    sectors_title: "Core Business Sectors",
    sectors_desc: "We deliver excellence across key industries by matching deep domain experience with advanced logistics capabilities.",
    sector_const_title: "Equipment for Construction & Real Estate",
    sector_const_desc: "Supplying premium heavy equipment and fleet solutions that empower the region's massive construction and real estate developments.",
    sector_ind_title: "Industrial Supply",
    sector_ind_desc: "Authorized distribution of international industrial polymers, chemical fertilizers, and engineering fluids.",
    sector_comm_title: "Commercial Trading",
    sector_comm_desc: "Forging global trading bridges and supplying high-performance machinery across developing markets.",
    
    saudi_badge: "Local Market Expertise",
    saudi_title: "Saudi Arabia Operations",
    saudi_desc: "Providing heavy machinery logistics and shaping landscapes through specialized construction management inside the Kingdom.",
    saudi_subtitle: "Heavy Equipment Solutions for Construction & Real Estate",
    saudi_text_1: "In Saudi Arabia, we operate at the forefront of machinery supply, specializing in the trading of high-quality heavy construction equipment, supporting key construction and real estate developments.",
    saudi_text_2: "Our comprehensive machinery fleet enables high-end construction efforts, helping partners execute specialized projects with uncompromising quality standards and absolute efficiency.",
    saudi_feat_1: "Comprehensive Fleet Solutions",
    saudi_feat_2: "Heavy Construction Equipment Supply",
    saudi_feat_3: "Construction & Project Support",
    saudi_eq_title: "Our Heavy Construction Equipment Catalog",
    eq_grader_name: "Motor Grader",
    eq_grader_desc: "Engineered for absolute leveling precision in road building and large scale architectural site preparation.",
    eq_dozer_name: "Crawler Dozer",
    eq_dozer_desc: "Massive pushing power combined with heavy tracks for earthmoving across harsh desert environments.",
    eq_backhoe_name: "Backhoe Loader",
    eq_backhoe_desc: "Unmatched versatility combining a strong front loader bucket and high-reach rear digging arm.",
    eq_excavator_name: "Heavy Excavator",
    eq_excavator_desc: "High breakout forces for deep trenching, rock breaking, demolition, and massive bulk earth works.",
    
    senegal_badge: "Industrial Supply",
    senegal_title: "Industrial Supply & Distribution",
    senegal_desc: "Serving as the trusted global supplier of premium industrial polymers, agricultural agri-nutrients, and high-performance lubricants.",
    senegal_subtitle: "Global Industrial Supply & Authorized Distribution",
    senegal_text_1: "Integrated Company is an approved distributor of world-class materials and petrochemical products, primarily supplying industry-leading **SABIC** polymers and agri-nutrients, alongside premium **PETROLUBE** lubricants and engineering fluids.",
    senegal_text_2: "We are actively increasing our supply footprint around the world and constantly expanding our product catalog. By maintaining robust, high-performance global supply chains, we support agricultural expansion, packaging manufacturers, and automotive fleets across developing international markets.",
    
    authorized_brands_label: "Strategic Partners & Authorized Brands",
    
    dist_tag_agri: "Agriculture",
    dist_fertilizer_title: "SABIC Agri-Nutrients",
    dist_fertilizer_desc: "Approved global distributor of SABIC's world-leading agricultural urea and chemical fertilizers, designed to maximize crop yields across diverse soil types.",
    dist_fertilizer_f1: "High Nitrogen Content",
    dist_fertilizer_f2: "High Solubility",
    
    dist_tag_plastic: "Manufacturing",
    dist_hdpe_title: "SABIC Polymers",
    dist_hdpe_desc: "High-density polyethylene (HDPE) and polypropylene (PP) polymers essential for blowing extrusion, injection molding, and agricultural pipe manufacturing.",
    dist_hdpe_f1: "High Tensile Strength",
    dist_hdpe_f2: "Excellent Chemical Resistance",
    
    dist_tag_fluid: "Industrial",
    dist_lubricant_title: "PETROLUBE Lubricants",
    dist_lubricant_desc: "Approved distribution of premium PETROLUBE and National heavy-duty automotive engine oils, gear oils, hydraulic fluids, and grease systems.",
    dist_lubricant_f1: "Maximum Wear Protection",
    dist_lubricant_f2: "Thermal Stability",
    
    dist_tag_expansion: "Global Reach",
    dist_expansion_title: "Global Supply Expansion",
    dist_expansion_desc: "We are actively increasing our supply footprint around the world and constantly expanding our product catalog to meet growing global industrial demands.",
    dist_expansion_f1: "Constantly Growing Catalog",
    dist_expansion_f2: "Worldwide Logistics Pipeline",
    
    universal_badge: "Strategic Partnership",
    universal_title: "Universal Machinery Group",
    universal_desc: "Consolidating our heavy machinery network and engineering dominance throughout dynamic markets in West Africa.",
    universal_subtitle: "Strategic West African Alliance",
    universal_text_1: "Integrated Company holds an important shareholding stake in Universal Machinery Group. This solidifies our footprint in West Africa's rapid infrastructure, construction, and mining boom.",
    universal_text_2: "As the approved distributor of Doosan (Develon) equipment, Universal Machinery Group provides top-tier machines with unparalleled after-sales support and authentic parts distribution.",
    universal_showcase_title: "Doosan (Develon) Equipment Range",
    mach_excavator_title: "Crawler Excavator",
    mach_excavator_desc: "Designed for heavy digging, offering exceptional breakout force and high hydraulic fuel efficiency.",
    spec_weight: "Operating Weight",
    spec_power: "Engine Power",
    mach_loader_title: "Wheel Loader",
    mach_loader_desc: "Optimal loading capacity with double traction differentials and rapid loading cycle times.",
    spec_bucket: "Bucket Capacity",
    mach_dump_title: "Articulated Dump Truck",
    mach_dump_desc: "High-payload trucks offering continuous contact and absolute stability in steep mine quarry operations.",
    spec_payload: "Max Payload",
    
    contact_badge: "Global Offices",
    contact_title: "Contact Our Global Network",
    contact_desc: "Connect with our business development team to discover equipment supply and strategic trading opportunities.",
    contact_info_title: "Office Locations",
    loc_riyadh_title: "Saudi Arabia Headquarters",
    loc_riyadh_desc: "King Salman Road 36341, Al Mojil Tower – Level 6, Al Hasa – Saudi Arabia",
    loc_dakar_title: "INTEGRATED AFRICA COMPANY – SUARL",
    loc_dakar_desc: "Villa N° 72, Cité Asecna, Ouakam, Dakar, Sénégal",
    contact_comm_title: "Direct Channels",
    ch_email_title: "Corporate Communications",
    ch_phone_title: "Direct Channels",
    phone_saudi: "Saudi Mobile",
    phone_uae: "UAE Mobile",
    
    form_title: "Submit an Inquiry",
    form_desc: "Reach out directly through our encrypted corporate contact channel.",
    label_name: "Full Name",
    label_email: "Email Address",
    label_company: "Company Name",
    label_subject: "Inquiry Subject",
    label_message: "Detailed Message",
    btn_submit: "Send Corporate Inquiry",
    success_title: "Message Sent!",
    success_desc: "Thank you for contacting Integrated Company. Our international relations team will respond to your query shortly.",
    
    footer_intro: "Delivering fully integrated engineering, machinery trading, and raw materials distribution solutions across construction, commercial, and industrial markets globally.",
    footer_nav_title: "Navigation",
    footer_contact_title: "Corporate Contacts",
    footer_copy: "Integrated Company. All rights reserved.",
    legal_privacy: "Privacy Policy",
    legal_terms: "Terms of Service",
    footer_addr: "King Salman Road, Al Hasa, Saudi Arabia",
    footer_saudi: "Saudi",
    footer_uae: "UAE",
    skip_link: "Skip to main content",
    
    profile_download_badge: "Company Profile",
    profile_download_title: "Download Company Profile",
    profile_download_desc: "Get comprehensive information about our services, capabilities, and achievements.",
    profile_download_en_btn: "Download English Profile",
    profile_download_ar_btn: "Download Arabic Profile",
    profile_scan_en_label: "Scan for English",
    profile_scan_ar_label: "Scan for Arabic",
    profile_scan_mobile: "Scan to download on mobile"
  },
  ar: {
    nav_brand: "الشركة المتكاملة",
    nav_home: "الرئيسية",
    nav_saudi: "المملكة العربية السعودية",
    nav_senegal: "التوريد الصناعي",
    nav_universal: "المجموعة العالمية للآليات",
    nav_contact: "اتصل بنا",
    
    hero_tagline: "المملكة العربية السعودية ودولياً",
    hero_title_1: "حلول متكاملة",
    hero_title_2: "عبر القطاعات الحيوية",
    hero_desc: "الشركة المتكاملة هي شركة سعودية رائدة تقدم حلولاً لوجستية وهندسية متكاملة عبر القطاعات الإنشائية والتجارية والصناعية على مستوى العالم.",
    hero_btn_explore: "استكشف أعمالنا",
    hero_btn_contact: "اتصل بنا",
    stat_years: "أعوام من الخبرة",
    stat_markets: "أسواق عالمية",
    stat_machinery: "طرازات الآلات والمعدات",
    
    sectors_badge: "ركائزنا الأساسية",
    sectors_title: "قطاعات الأعمال الرئيسية",
    sectors_desc: "نقدم التميز في العديد من الصناعات الكبرى من خلال دمج الخبرات الهندسية والعملية العميقة مع أحدث القدرات اللوجستية.",
    sector_const_title: "معدات البناء والقطاع العقاري",
    sector_const_desc: "توريد الحلول المتطورة لأسطول الآلات والمعدات الثقيلة التي تمكن وتدعم المشاريع العقارية والإنشائية الكبرى في المنطقة.",
    sector_ind_title: "التوريد والتمثيل الصناعي",
    sector_ind_desc: "موزع معتمد للبوليمرات البلاستيكية العالمية، والأسمدة الكيماوية عالية الجودة، وسوائل المحركات الهندسية.",
    sector_comm_title: "التجارة والتمثيل الدولي",
    sector_comm_desc: "بناء جسور تجارية متينة وتوريد المعدات الثقيلة والأنظمة الميكانيكية للشركاء عبر الأسواق النامية.",
    
    saudi_badge: "خبرة السوق المحلية الإقليمية",
    saudi_title: "عمليات المملكة العربية السعودية",
    saudi_desc: "توفير حلول أساطيل الآليات والمعدات الثقيلة والمساهمة في تشكيل الطفرة العقارية للمملكة من خلال إدارة البناء والتشييد المحترفة.",
    saudi_subtitle: "حلول المعدات الثقيلة لقطاع البناء والتشييد العقاري",
    saudi_text_1: "في المملكة العربية السعودية، نعمل في طليعة قطاع توريد الآلات، متخصّصين في تجارة معدات البناء والتشييد الثقيلة عالية الجودة، وداعمين لتطوير المشاريع العقارية والإنشائية الكبرى.",
    saudi_text_2: "يمكّن أسطول آلياتنا الشامل أعمال التشييد والبناء الراقية، مساهماً في إنجاز المشاريع المتخصصة لشركائنا بمعايير جودة صارمة وكفاءة تشغيلية مطلقة.",
    saudi_feat_1: "حلول شاملة ومتكاملة للمعدات الثقيلة",
    saudi_feat_2: "توريد معدات التشييد الثقيلة",
    saudi_feat_3: "دعم البناء وإدارة المشاريع",
    saudi_eq_title: "كتالوج الآليات والمعدات الثقيلة في المملكة",
    eq_grader_name: "ممهدة الطرق (Grader)",
    eq_grader_desc: "مصممة خصيصاً للتسوية الدقيقة للتربة في شق الطرق والمسارات والمواقع الإنشائية الهندسية العملاقة.",
    eq_dozer_name: "الجرافة المجنزرة (Dozer)",
    eq_dozer_desc: "قوة دفع خارقة بجنازير مدمجة لنقل وتجريف الصخور والرمال الثقيلة في أقسى الظروف والبيئات الصحراوية.",
    eq_backhoe_name: "حفار ذو محراث خلفي (Backhoe)",
    eq_backhoe_desc: "تعدد استخدامات فائق يدمج بين مجرفة التحميل الأمامية وذراع الحفر الخلفي القابل للتمديد العميق.",
    eq_excavator_name: "الحفار الهيدروليكي (Excavator)",
    eq_excavator_desc: "قوى اختراق هيدروليكية استثنائية لعمليات حفر الخنادق، تحطيم الصخور، وأعمال التعدين والدمج الإنشائي.",
    
    senegal_badge: "التوريد الصناعي",
    senegal_title: "التوريد الصناعي والتوزيع الدولي",
    senegal_desc: "المورد المعتمد والموثوق عالمياً للبوليمرات الصناعية فائقة الجودة، المغذيات الزراعية، وزيوت المحركات الشاقة عالية الأداء.",
    senegal_subtitle: "التوريد الصناعي العالمي والخدمات اللوجستية المعتمدة",
    senegal_text_1: "تعد الشركة المتكاملة موزعاً رسمياً معتمداً للمنتجات البتروكيماوية والمستلزمات الصناعية المصنعة من كبرى الشركات العالمية، متخصصة بشكل رئيسي في توريد بوليمرات ومغذيات **سابك (SABIC)** الزراعية، بالإضافة إلى زيوت وشحومات **بترولوب (PETROLUBE)** الهندسية الممتازة.",
    senegal_text_2: "نحن نعمل بنشاط على زيادة وتوسيع رقعة إمداداتنا حول العالم وزيادة قائمة منتجاتنا بشكل مستمر لتلبية الاحتياجات المتنامية للأسواق الصناعية. ومن خلال تأمين قنوات لوجستية متطورة، نسهم في تمكين شركائنا في قطاعات التصنيع، الزراعة، وأساطيل النقل الدولي.",
    
    authorized_brands_label: "الشركاء الاستراتيجيون والعلامات التجارية المعتمدة",
    
    dist_tag_agri: "الزراعة والتنمية",
    dist_fertilizer_title: "مغذيات سابك الزراعية",
    dist_fertilizer_desc: "موزع رسمي معتمد لمغذيات سابك (SABIC) وأسمدة اليوريا الزراعية الرائدة عالمياً والمصممة لتعزيز إنتاجية التربة والمحاصيل الزراعية.",
    dist_fertilizer_f1: "مستويات نيتروجين عالية وعضوية",
    dist_fertilizer_f2: "سرعة ذوبان وامتصاص فائق للتربة",
    
    dist_tag_plastic: "الصناعة والتجهيز",
    dist_hdpe_title: "بوليمرات سابك (SABIC)",
    dist_hdpe_desc: "مواد البولي إيثيلين عالي الكثافة (HDPE) والبوليمرات البلاستيكية الأساسية لخطوط سحب الأنابيب، القولبة بالحقن، والتصنيع البلاستيكي المتطور.",
    dist_hdpe_f1: "مقاومة إجهاد وشد متميزة",
    dist_hdpe_f2: "مقاومة قصوى للمواد الكيميائية والأحماض",
    
    dist_tag_fluid: "قطاع السيارات والآلات",
    dist_lubricant_title: "زيوت تشحيم بترولوب (PETROLUBE)",
    dist_lubricant_desc: "التوزيع الرسمي المعتمد لزيوت تشحيم ومحركات بترولوب (PETROLUBE) والزيوت الوطنية الشاقة المخصصة للمركبات، الضواغط والمعدات الصناعية.",
    dist_lubricant_f1: "حماية مطلقة من الاحتكاك الميكانيكي",
    dist_lubricant_f2: "ثبات واستقرار حراري ممتاز",
    
    dist_tag_expansion: "الانتشار العالمي",
    dist_expansion_title: "توسع الإمداد العالمي",
    dist_expansion_desc: "نعمل بنشاط على زيادة رقعة إمداداتنا حول العالم وتوسيع قائمة منتجاتنا باستمرار لتلبية المتطلبات الصناعية العالمية المتنامية.",
    dist_expansion_f1: "كتالوج منتجات متنامي باستمرار",
    dist_expansion_f2: "قنوات لوجستية حول العالم",
    
    universal_badge: "تحالفات وشراكات استراتيجية",
    universal_title: "مجموعة الآليات العالمية",
    universal_desc: "ترسيخ ريادتنا في سوق المعدات الثقيلة وتقوية تحالفاتنا التجارية والإنشائية في الأسواق الواعدة لغرب إفريقيا.",
    universal_subtitle: "تحالف تجاري واستراتيجي رائد في غرب إفريقيا",
    universal_text_1: "تمتلك الشركة المتكاملة حصة مساهمة استراتيجية في مجموعة الآليات العالمية (Universal Machinery Group)، وهو ما يمنحنا حضوراً متميزاً وحصة سوقية واعدة في مشاريع البنية التحتية، البناء والتشييد، والتنقيب بجمهورية السنغال وغرب إفريقيا.",
    universal_text_2: "باعتبارها الموزع الحصري المعتمد لمعدات دوسان ديفيلون (Doosan Develon) العالمية، تقدم المجموعة معدات تشغيلية استثنائية، مدعومة بخدمات الصيانة الفورية وقطع الغيار الأصلية.",
    universal_showcase_title: "أساطيل معدات دوسان ديفيلون (Doosan Develon)",
    mach_excavator_title: "حفار جنزير شاق (Crawler Excavator)",
    mach_excavator_desc: "معدات حفر واستخراج هيدروليكية ثقيلة مخصصة للمناجم ومشاريع البنية التحتية، مصممة لكفاءة استهلاك الديزل والتشغيل المتواصل.",
    spec_weight: "الوزن التشغيلي",
    spec_power: "قوة المحرك",
    mach_loader_title: "شاحنة تحميل هيدروليكية (Wheel Loader)",
    mach_loader_desc: "إنتاجية وكفاءة تشغيلية ممتازة مع ذراع تحميل هيدروليكية وسعة جرافة عملاقة لنقل المواد السائبة.",
    spec_bucket: "سعة الجرافة (البوكيت)",
    mach_dump_title: "شاحنة تفريغ مفصلية (Dump Truck)",
    mach_dump_desc: "شاحنات تفريغ مفصلية عملاقة للأوزان الشاقة، توفر تماسكاً وتوازناً دائمين على الطرق والمسارات الوعرة للغاية.",
    spec_payload: "الحمولة القصوى المتاحة",
    
    contact_badge: "فروعنا ومكاتبنا",
    contact_title: "تواصل مع شبكتنا اللوجستية",
    contact_desc: "يرجى التواصل مع ممثلي تطوير الاستثمار والتجارة الدولية لاستكشاف سبل التعاون وتوريد الآلات المتاحة.",
    contact_info_title: "مواقع المكاتب الإقليمية",
    loc_riyadh_title: "المقر الرئيسي - المملكة العربية السعودية",
    loc_riyadh_desc: "طريق الملك سلمان 36341، برج المجل – الطابق 6، الأحساء – المملكة العربية السعودية",
    loc_dakar_title: "شركة أفريقيا المتكاملة – SUARL",
    loc_dakar_desc: "فيلا رقم 72، حي أسيكنا، واكام، دكار، السنغال",
    contact_comm_title: "قنوات الاتصال المباشر",
    ch_email_title: "الاتصالات المؤسسية والاستثمارات",
    ch_phone_title: "قنوات الاتصال المباشر",
    phone_saudi: "جوال السعودية",
    phone_uae: "جوال الإمارات",
    
    form_title: "إرسال طلب استفسار تجاري",
    form_desc: "تواصل معنا مباشرة وبشكل آمن من خلال البريد المؤسسي المشفر.",
    label_name: "الاسم الكامل",
    label_email: "البريد الإلكتروني المباشر",
    label_company: "اسم الشركة / الجهة",
    label_subject: "موضوع الاستفسار",
    label_message: "تفاصيل الرسالة",
    btn_submit: "إرسال الاستفسار والطلب",
    success_title: "تم الإرسال بنجاح!",
    success_desc: "شكراً لتواصلك مع الشركة المتكاملة. سيقوم منسق العلاقات الدولية بالرد على طلبك خلال 24 ساعة عمل.",
    
    footer_intro: "نقدم حلولاً هندسية، لوجستية، وتجارية متكاملة تماماً عبر أسواق العقار، التشييد، البتروكيماويات، والمعدات الثقيلة على مستوى العالم.",
    footer_nav_title: "خريطة الموقع",
    footer_contact_title: "اتصالات الإدارة",
    footer_copy: "الشركة المتكاملة. جميع الحقوق محفوظة.",
    legal_privacy: "سياسة الخصوصية",
    legal_terms: "شروط الخدمة وسرية المعلومات",
    footer_addr: "طريق الملك سلمان، الأحساء، المملكة العربية السعودية",
    footer_saudi: "السعودية",
    footer_uae: "الإمارات",
    skip_link: "تجاوز إلى المحتوى الرئيسي",
    
    profile_download_badge: "الملف التعريفي للمؤسسة",
    profile_download_title: "تحميل الملف التعريفي للمؤسسة",
    profile_download_desc: "احصل على معلومات شاملة حول خدماتنا، وقدراتنا اللوجستية، وإنجازاتنا التشغيلية.",
    profile_download_en_btn: "تحميل الملف باللغة الإنجليزية",
    profile_download_ar_btn: "تحميل الملف باللغة العربية",
    profile_scan_en_label: "امسح لتحميل الملف الإنجليزي",
    profile_scan_ar_label: "امسح لتحميل الملف العربي",
    profile_scan_mobile: "امسح لتحميل الملف على الجوال"
  }
};

// ==================== CRITICAL: INITIALIZE ALL GLOBAL DOM SELECTORS FIRST ====================
// Moving these selections to the top eliminates Hoisting/Temporal Dead Zone ReferenceErrors on page load.
const brandLink = document.getElementById('brand-link');
const langToggleBtn = document.getElementById('lang-toggle-btn');
const langText = document.getElementById('lang-text');
const copyrightYear = document.getElementById('copyright-year');
const mainNavbar = document.getElementById('main-navbar');

const mobileToggle = document.getElementById('mobile-toggle');
const navbarLinks = document.getElementById('navbar-links');
const menuOverlay = document.getElementById('menu-overlay');

const contactForm = document.getElementById('corporate-contact-form');
const successMessage = document.getElementById('success-message');

const storedLang = localStorage.getItem('preferredLang');
let currentLang = ['en', 'ar'].includes(storedLang) ? storedLang : 'en';

// Set Copyright Year
if (copyrightYear) {
  copyrightYear.textContent = new Date().getFullYear();
}

// Function to translate DOM elements
function applyTranslations(lang) {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    } else {
      console.warn(`Missing translation: "${key}" for lang: "${lang}"`);
    }
  });

  // Switch document direction and attributes
  if (lang === 'ar') {
    document.documentElement.setAttribute('dir', 'rtl');
    document.documentElement.setAttribute('lang', 'ar');
    if (langText) langText.textContent = 'English';
    if (brandLink) brandLink.style.fontFamily = "var(--font-ar)";
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
    document.documentElement.setAttribute('lang', 'en');
    if (langText) langText.textContent = 'العربية';
    if (brandLink) brandLink.style.fontFamily = "var(--font-en)";
  }
}

// Toggle language handler
let langSwitchInProgress = false;
if (langToggleBtn) {
  langToggleBtn.addEventListener('click', () => {
    if (langSwitchInProgress) return;
    langSwitchInProgress = true;

    currentLang = currentLang === 'en' ? 'ar' : 'en';
    localStorage.setItem('preferredLang', currentLang);
    
    // Dynamic smooth transition overlay during switch
    const mask = document.createElement('div');
    mask.style.position = 'fixed';
    mask.style.top = '0';
    mask.style.left = '0';
    mask.style.width = '100vw';
    mask.style.height = '100vh';
    mask.style.background = 'rgba(240, 244, 248, 0.98)';
    mask.style.backdropFilter = 'blur(30px)';
    mask.style.zIndex = '9999';
    mask.style.opacity = '0';
    mask.style.transition = 'opacity 0.25s ease';
    document.body.appendChild(mask);
    
    setTimeout(() => {
      mask.style.opacity = '1';
    }, 10);
    
    setTimeout(() => {
      applyTranslations(currentLang);
      window.scrollTo({ top: 0, behavior: 'instant' });
      
      // Animate mask fading out
      mask.style.opacity = '0';
      setTimeout(() => {
        if (mask.parentNode) mask.parentNode.removeChild(mask);
        langSwitchInProgress = false;
      }, 250);
    }, 250);
  });
}

// Run Initial Language Check
applyTranslations(currentLang);


// ==================== SINGLE PAGE APPLICATION NAVIGATION ====================
function navigateToSection(hash) {
  const validSections = ['home', 'saudi', 'senegal', 'universal', 'contact'];
  const cleanHash = hash ? hash.replace('#', '') : 'home';
  if (!validSections.includes(cleanHash)) return;
  const targetId = `${cleanHash}-section`;
  const targetSection = document.getElementById(targetId);
  
  if (!targetSection) return;
  
  // Close mobile navigation overlay if open
  closeMobileMenu();

  // If section is already active, just defer the scroll and exit to prevent layout invalidations
  if (targetSection.classList.contains('active')) {
    requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
    return;
  }

  // Deactivate currently active section and activate target section (O(1) class modifications)
  const activeSection = document.querySelector('.page-section.active');
  if (activeSection) {
    activeSection.classList.remove('active');
  }
  targetSection.classList.add('active');

  // Sync navbar active indicator across matching navigational items (O(1) selectors instead of looping all)
  const activeNavs = document.querySelectorAll('[data-page].active');
  activeNavs.forEach(item => {
    if (item.getAttribute('data-page') !== cleanHash) {
      item.classList.remove('active');
    }
  });

  const targetNavs = document.querySelectorAll(`[data-page="${cleanHash}"]`);
  targetNavs.forEach(item => {
    item.classList.add('active');
  });

  // Reset scroll position to top instantly for a clean SPA page transition without main-thread blocking
  window.scrollTo(0, 0);
}

// BULLETPROOF DELEGATED CLICK HANDLER: Uses event delegation on document body
// to reliably capture clicks/taps on all anchor links, including inside
// position:fixed mobile nav drawers where individual listeners can fail.
document.body.addEventListener('click', function (e) {
  const anchor = e.target.closest('a[href^="#"]');
  if (!anchor) return;
  e.preventDefault();
  const href = anchor.getAttribute('href');
  if (window.location.hash === href) {
    navigateToSection(href);
  } else {
    window.location.hash = href;
  }
});

// Hashchange Event listener for SPA routing
window.addEventListener('hashchange', () => {
  navigateToSection(window.location.hash);
});

// Initialize Route on Page Load
if (window.location.hash) {
  navigateToSection(window.location.hash);
} else {
  navigateToSection('home');
}

// Navbar Scrolled Glass Visual State Change (throttled)
let scrollTicking = false;
window.addEventListener('scroll', () => {
  if (!scrollTicking) {
    requestAnimationFrame(() => {
      if (mainNavbar) {
        if (window.scrollY > 50) {
          mainNavbar.classList.add('scrolled');
        } else {
          mainNavbar.classList.remove('scrolled');
        }
      }
      scrollTicking = false;
    });
    scrollTicking = true;
  }
});


// ==================== MOBILE DRAWER MENU MANAGEMENT ====================
function openMobileMenu() {
  if (navbarLinks && menuOverlay) {
    navbarLinks.classList.add('active');
    menuOverlay.classList.add('active');
    menuOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Lock scrolling
  }
}

function closeMobileMenu() {
  if (navbarLinks && menuOverlay) {
    navbarLinks.classList.remove('active');
    menuOverlay.classList.remove('active');
    menuOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = ''; // Unlock scrolling
  }
}

if (mobileToggle) {
  mobileToggle.addEventListener('click', () => {
    if (navbarLinks && navbarLinks.classList.contains('active')) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });
}

if (menuOverlay) {
  menuOverlay.addEventListener('click', closeMobileMenu);
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && navbarLinks && navbarLinks.classList.contains('active')) {
    closeMobileMenu();
  }
});


// Background is kept simple and clean as requested by the user.


// ==================== FORM MANAGEMENT & UX ====================
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Capture values
    const name = document.getElementById('form-name')?.value || '';
    const email = document.getElementById('form-email')?.value || '';
    const company = document.getElementById('form-company')?.value || '';
    const subject = document.getElementById('form-subject')?.value || '';
    const message = document.getElementById('form-message')?.value || '';
    
    // Build mailto link with form data
    const mailtoSubject = encodeURIComponent(`Website Inquiry: ${subject}`);
    const mailtoBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\nMessage:\n${message}`);
    const mailtoLink = `mailto:info@integrated-equipment.com?subject=${mailtoSubject}&body=${mailtoBody}`;

    // Open email client
    window.location.href = mailtoLink;

    // Show success message
    const submitBtn = contactForm.querySelector('.btn-primary');
    if (submitBtn) submitBtn.disabled = true;

    if (successMessage) {
      successMessage.classList.add('show');
    }

    // Reset form and re-enable
    setTimeout(() => {
      contactForm.reset();
      if (submitBtn) submitBtn.disabled = false;
      if (successMessage) {
        successMessage.classList.remove('show');
      }
    }, 6000);
  });
}
