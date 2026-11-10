/**
 * ==========================================================================
 * بن ليل (Bon Leil / Nocturne Reserve) - Digital Menu Configuration & Logic
 * Modern Flagship Features:
 * 1. Smart WhatsApp Order Tray & Drawer (سلة الطلبات المجمعة)
 * 2. Interactive Coffee & Mood Matcher (مكتشف المزاج والقهوة)
 * 3. Sensory Quick-View Modal (دليل الاستكشاف وطرق التحضير)
 * 4. Chiaroscuro Mouse Spotlight Effect
 * ==========================================================================
 */

// 1. بيانات المقهى والتواصل (Cafe Information)
const CAFE_INFO = {
  brandName: "بن ليل",
  slogan: "«قهوة تُحكى... مش بس تُشرب»",
  bio: "قهوة بمذاق مختلف وجودة عالية — أفضل أنواع البن والمشروبات في مكان واحد.",
  address: "إسكندرية الجديدة / مركز فارسكور / دمياط، مصر (34711)",
  workingHours: "مفتوح دائماً (24 ساعة)",
  phones: ["01033414033", "01005015435"],
  whatsapp: "+201033414033",
  whatsappRaw: "201033414033",
  email: "abdoanis72@gmail.com",
  mapsUrl: "https://maps.google.com/?q=فارسكور+دمياط"
};

// 2. قائمة المشروبات (الكافيه) - Drinks Menu
const DRINKS_MENU = [
  {
    category: "قهوة تركي",
    categoryId: "turkish-coffee",
    icon: "fa-mug-hot",
    badge: "تحميص فريش",
    items: [
      { id: "tc-1", name: "تركي فاتح", badge: null, mood: "calm" },
      { id: "tc-2", name: "تركي وسط", badge: null, mood: "royal" },
      { id: "tc-3", name: "تركي غامق", badge: null, mood: "energy" },
      { id: "tc-4", name: "تركي محوج فاتح", badge: null, mood: "calm" },
      { id: "tc-5", name: "تركي محوج وسط", badge: null, mood: "royal" },
      { id: "tc-6", name: "توليفة ليل", badge: "الأكثر طلباً ★", mood: "royal" },
      { id: "tc-7", name: "توليفة ليل اسبيشيال", badge: "إصدار خاص", mood: "royal" },
      { id: "tc-8", name: "توليفة طرشة", badge: "مزاج عالي ⚡", mood: "energy" }
    ]
  },
  {
    category: "إسبريسو",
    categoryId: "espresso",
    icon: "fa-fire-flame-curved",
    badge: "100% بن مختص",
    items: [
      { id: "esp-1", name: "إسبريسو", badge: null, mood: "royal" },
      { id: "esp-2", name: "إسبريسو سينجل", badge: null, mood: "royal" },
      { id: "esp-3", name: "إسبريسو دبل", badge: "طاقة مضاعفة", mood: "energy" }
    ]
  },
  {
    category: "قهوة فرنساوي ومشروبات ساخنة",
    categoryId: "french-hot",
    icon: "fa-mug-saucer",
    badge: "حليب طازج",
    items: [
      { id: "hot-1", name: "فرنساوي سادة", badge: null, mood: "calm" },
      { id: "hot-2", name: "فرنساوي طعم", badge: "نكهات فاخرة", mood: "calm" },
      { id: "hot-3", name: "كابتشينو", badge: null, mood: "calm" },
      { id: "hot-4", name: "نسكافيه", badge: null, mood: "calm" },
      { id: "hot-5", name: "كوفي ميكس", badge: null, mood: "calm" },
      { id: "hot-6", name: "سحلب", badge: "بالمكسرات", mood: "fresh" }
    ]
  },
  {
    category: "شاي",
    categoryId: "tea",
    icon: "fa-leaf",
    badge: "سيلاني فاخر",
    items: [
      { id: "tea-1", name: "شاي سادة", badge: null, mood: "calm" },
      { id: "tea-2", name: "شاي نعناع", badge: "نعناع بلدي", mood: "calm" },
      { id: "tea-3", name: "شاي قرنفل", badge: null, mood: "calm" },
      { id: "tea-4", name: "شاي طعم", badge: "نكهات خاصة", mood: "calm" }
    ]
  },
  {
    category: "عصائر فريش",
    categoryId: "fresh-juices",
    icon: "fa-wine-glass",
    badge: "طبيعي 100%",
    items: [
      { id: "j-1", name: "مانجا", badge: "بيور فريش", mood: "fresh" },
      { id: "j-2", name: "فراولة", badge: null, mood: "fresh" },
      { id: "j-3", name: "جوافة", badge: "بالحليب", mood: "fresh" },
      { id: "j-4", name: "ليمون نعناع", badge: "انتعاش فائق", mood: "fresh" },
      { id: "j-5", name: "برتقال", badge: "معصور طازج", mood: "fresh" },
      { id: "j-6", name: "كركديه", badge: "أسواني مثلج", mood: "fresh" },
      { id: "j-7", name: "موز باللبن", badge: "بالعسل", mood: "fresh" }
    ]
  },
  {
    category: "مشروبات طاقة",
    categoryId: "energy-drinks",
    icon: "fa-bolt",
    badge: "طاقة وتركيز",
    items: [
      { id: "en-1", name: "فولت", badge: null, mood: "energy" },
      { id: "en-2", name: "تويست", badge: null, mood: "energy" },
      { id: "en-3", name: "شارك", badge: null, mood: "energy" },
      { id: "en-4", name: "بوم بوم", badge: null, mood: "energy" },
      { id: "en-5", name: "ستينج", badge: null, mood: "energy" },
      { id: "en-6", name: "باور هورس", badge: null, mood: "energy" },
      { id: "en-7", name: "مونستر", badge: null, mood: "energy" },
      { id: "en-8", name: "ريد بول", badge: null, mood: "energy" },
      { id: "en-9", name: "كود ريد", badge: null, mood: "energy" }
    ]
  },
  {
    category: "مشروبات غازية ومياه",
    categoryId: "soft-drinks",
    icon: "fa-bottle-water",
    badge: "بارد ومثلج",
    items: [
      { id: "sd-1", name: "بيبسي", badge: null, mood: "fresh" },
      { id: "sd-2", name: "سفن", badge: null, mood: "fresh" },
      { id: "sd-3", name: "ميرندا", badge: null, mood: "fresh" },
      { id: "sd-4", name: "ديو", badge: null, mood: "fresh" },
      { id: "sd-5", name: "مياه معدنية صغيرة", badge: "نقية", mood: "fresh" }
    ]
  }
];

// 3. قسم بيع القهوة (البن المطحون والمعبأ) - Packaged Coffee Beans
const COFFEE_BEANS_MENU = [
  {
    id: "bean-1",
    name: "قهوة تركي فاتح",
    badge: "تحميص فاتح",
    mood: "calm",
    desc: "أجود حبوب البن المختارة، تحميص شقراء هادئ يحافظ على نسبة الكافيين العالية والحمضية الفاكهية اللطيفة.",
    image: "coffee-bag.jpg",
    isSpecial: false,
    origin: "محصول إثيوبي سيدامو (أرابيكا)",
    altitude: "1900 - 2200 متر",
    process: "معالجة طبيعية مجففة بالشمس",
    notes: ["زهور الياسمين", "حمضيات برتقال", "شاي أخضر"],
    profile: {
      roast: { val: 28, label: "فاتح" },
      acidity: { val: 78, label: "عالية" },
      body: { val: 45, label: "خفيف" }
    },
    brewGuide: {
      method: "ركوة تركية نحاسية",
      ratio: "1:10 (7 جم بن لكل 70 مل ماء)",
      temp: "88°C - 90°C",
      grind: "طحن ناعم جداً (دقيق)"
    }
  },
  {
    id: "bean-2",
    name: "قهوة تركي وسط",
    badge: "الأكثر طلباً",
    mood: "royal",
    desc: "درجة تحميص متوازنة بعناية فائقة، توازن مذهل بين النكهة الشوكولاتية وقوام القهوة المخملي.",
    image: "coffee-bag.jpg",
    isSpecial: false,
    origin: "أرابيكا برازيلي سانتوس وكولومبي سوبريمو",
    altitude: "1400 - 1700 متر",
    process: "مغسولة ونصف مجففة",
    notes: ["كراميل مكرمل", "شوكولاتة بالحليب", "مكسرات"],
    profile: {
      roast: { val: 55, label: "وسط" },
      acidity: { val: 50, label: "متوازنة" },
      body: { val: 70, label: "متوسط" }
    },
    brewGuide: {
      method: "ركوة تركية / فلات وايت",
      ratio: "1:10 (8 جم بن لكل 80 مل ماء)",
      temp: "90°C - 92°C",
      grind: "طحن ناعم كلاسيكي"
    }
  },
  {
    id: "bean-3",
    name: "قهوة تركي غامق",
    badge: "تحميص داكن",
    mood: "energy",
    desc: "تحميص عميق مكثف لعشاق القهوة الثقيلة، مرارة ممتعة ونكهات الدخان والشوكولاتة المرة المركزة.",
    image: "coffee-bag.jpg",
    isSpecial: false,
    origin: "توليفة جبال أمريكا الجنوبية",
    altitude: "1200 - 1500 متر",
    process: "معالجة طبيعية",
    notes: ["شوكولاتة داكنة", "كاكاو مركز", "دخان خفيف"],
    profile: {
      roast: { val: 88, label: "داكن" },
      acidity: { val: 22, label: "منخفضة" },
      body: { val: 92, label: "ممتلئ" }
    },
    brewGuide: {
      method: "ركوة تركي ثقيلة / مكبس فرنسي",
      ratio: "1:9 (9 جم بن لكل 80 مل ماء)",
      temp: "93°C",
      grind: "طحن ناعم داكن"
    }
  },
  {
    id: "bean-4",
    name: "قهوة تركي محوج فاتح",
    badge: "محوج فاخر",
    mood: "calm",
    desc: "بن فاتح مطحون ومحوج بحبوب الهيل الأخضر الفاخرة، المستكة الحرة، ولمسة جوزة الطيب المعطرة.",
    image: "coffee-bag.jpg",
    isSpecial: false,
    origin: "أرابيكا إثيوبي مع حب هيل هندي نخب أول",
    altitude: "1850 متر",
    process: "مجفف ومحوج يدوياً",
    notes: ["حب الهيل", "مستكة طبيعية", "نفحات زهرية"],
    profile: {
      roast: { val: 32, label: "فاتح" },
      acidity: { val: 68, label: "متوسطة-عالية" },
      body: { val: 55, label: "متوسط" }
    },
    brewGuide: {
      method: "ركوة نحاسية على رمال ساخنة",
      ratio: "1:10 (8 جم بن لكل 80 مل ماء)",
      temp: "89°C",
      grind: "طحن ناعم مع توابل دقيقة"
    }
  },
  {
    id: "bean-5",
    name: "قهوة تركي محوج وسط",
    badge: "المذاق الملكي",
    mood: "royal",
    desc: "تحويجة بن ليل الأكثر توازناً؛ امتزاج فاخر بين قوام البن الوسط وحبوب الهيل الهندي والقرنفل الزكي.",
    image: "coffee-bag.jpg",
    isSpecial: false,
    origin: "خلطة بن ليل الخاصة المتوازنة",
    altitude: "1600 متر",
    process: "تحميص مخصص وتوابل طازجة",
    notes: ["هيل هندي", "قرنفل عطر", "بندق محمص"],
    profile: {
      roast: { val: 58, label: "وسط" },
      acidity: { val: 42, label: "هادئة" },
      body: { val: 75, label: "متوسط-كثيف" }
    },
    brewGuide: {
      method: "ركوة تركية كلاسيكية",
      ratio: "1:10 (8.5 جم بن لكل 85 مل ماء)",
      temp: "91°C",
      grind: "طحن ناعم متوازن"
    }
  },
  {
    id: "bean-6",
    name: "توليفة ليل",
    badge: "توليفة حصرية ★",
    mood: "royal",
    desc: "بصمة علامة بن ليل؛ مزيج مبتكر من أجود محاصيل الأرابيكا والروبوستا المختارة بنكهة تدوم طويلاً.",
    image: "coffee-bag.jpg",
    isSpecial: true,
    origin: "إصدار محمصة بن ليل السري (Signature Blend)",
    altitude: "1750 متر",
    process: "تحميص بدرجات متباينة",
    notes: ["فانيليا مدغشقر", "توفي دافئ", "توابل شرقية"],
    profile: {
      roast: { val: 68, label: "فوق الوسط" },
      acidity: { val: 38, label: "لطيفة" },
      body: { val: 85, label: "كثيف" }
    },
    brewGuide: {
      method: "ركوة تركية / إسبريسو منزلي",
      ratio: "1:9 (9 جم بن لكل 80 مل)",
      temp: "92°C",
      grind: "طحن مخصص لعلامة ليل"
    }
  },
  {
    id: "bean-7",
    name: "توليفة ليل اسبيشيال",
    badge: "إصدار خاص ★",
    mood: "royal",
    desc: "أعلى درجات الفخامة النقية؛ خلطة سرية مخصصة للذواقة وأصحاب المزاج العالي مع لمسة عطرية ساحرة.",
    image: "coffee-bag.jpg",
    isSpecial: true,
    origin: "مايكرو-لوت فاخر كولومبيا وإثيوبيا",
    altitude: "2100 متر",
    process: "تخمير لاهوائي Anaerobic",
    notes: ["شوكولاتة سويسرية", "هيل ملكي", "كراميل مدخن"],
    profile: {
      roast: { val: 72, label: "وسط غامق" },
      acidity: { val: 32, label: "ناعمة" },
      body: { val: 94, label: "مخملي" }
    },
    brewGuide: {
      method: "ركوة بن ليل الفاخرة",
      ratio: "1:9.5 (9 جم لكل 85 مل)",
      temp: "91°C",
      grind: "طحن ناعم حريري"
    }
  },
  {
    id: "bean-8",
    name: "توليفة طرشة",
    badge: "قنبلة التركيز ★",
    mood: "energy",
    desc: "توليفة قوية جداً ذات تركيز فائق، طعم حاد ومفعول فوري يوقظ الحواس ويعدل الرأس من أول رشفة.",
    image: "coffee-bag.jpg",
    isSpecial: true,
    origin: "خلطة الطاقة العالية (روبوستا نقية + أرابيكا داكنة)",
    altitude: "1100 - 1400 متر",
    process: "تحميص مكثف عميق",
    notes: ["بن محمص ناري", "كاكاو أسود", "مرارة نقية"],
    profile: {
      roast: { val: 95, label: "شديد الداكن" },
      acidity: { val: 12, label: "منعدمة" },
      body: { val: 100, label: "ثقيل جداً" }
    },
    brewGuide: {
      method: "فنجان تركي مضاعف التركيز",
      ratio: "1:8 (10 جم بن لكل 80 مل ماء)",
      temp: "94°C",
      grind: "طحن خشن قليلاً عن المعتاد لاستخلاص قوي"
    }
  }
];

// أوزان البن المتاحة
const BEAN_WEIGHTS = [
  { id: "1_8", label: "ثمن كيلو", grams: "125 جم" },
  { id: "1_4", label: "ربع كيلو", grams: "250 جم" },
  { id: "1_2", label: "نصف كيلو", grams: "500 جم" },
  { id: "1_1", label: "كيلو", grams: "1000 جم" }
];

// خيارات الطحن المتاحة
const GRIND_OPTIONS = [
  "طحن ناعم (للقهوة التركي)",
  "طحن وسط (لفلاتر القهوة و V60)",
  "طحن خشن (للمكبس الفرنسي الفرنش بريس)",
  "حبوب كاملة بدون طحن"
];

// حالة التطبيق العامة (Application State)
let currentTab = "drinks"; // "drinks" | "beans"
let currentCategoryFilter = "all";
let currentMoodFilter = null;
let searchQuery = "";
const selectedWeights = {};
let cart = []; // [{ id, name, type, weight, grind, qty, unitPrice }]

// تهيئة الأوزان الافتراضية
COFFEE_BEANS_MENU.forEach(item => {
  selectedWeights[item.id] = "ربع كيلو";
});

// ==========================================================================
// التهيئة عند تحميل الصفحة (Initialization)
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  setupTabs();
  renderCategoryFilterPills();
  renderDrinksMenu();
  renderCoffeeBeansMenu();
  setupSearch();
  setupBackToTop();
  setupScrollNavbar();
  setupSpotlightEffect();
  renderCart();
});

// ==========================================================================
// إدارة التبويبات (Tab Switching)
// ==========================================================================
function setupTabs() {
  const tabDrinks = document.getElementById("tab-drinks-btn");
  const tabBeans = document.getElementById("tab-beans-btn");
  const contentDrinks = document.getElementById("tab-drinks-content");
  const contentBeans = document.getElementById("tab-beans-content");
  const categoryFilters = document.getElementById("category-filters-container");

  function switchTab(target) {
    currentTab = target;
    if (target === "drinks") {
      tabDrinks.classList.add("active");
      tabBeans.classList.remove("active");

      contentDrinks.classList.remove("hidden-tab");
      contentDrinks.classList.add("active-tab");
      contentBeans.classList.add("hidden-tab");
      contentBeans.classList.remove("active-tab");

      if (categoryFilters) categoryFilters.style.display = "block";
    } else {
      tabBeans.classList.add("active");
      tabDrinks.classList.remove("active");

      contentBeans.classList.remove("hidden-tab");
      contentBeans.classList.add("active-tab");
      contentDrinks.classList.add("hidden-tab");
      contentDrinks.classList.remove("active-tab");

      if (categoryFilters) categoryFilters.style.display = "none";
    }
  }

  if (tabDrinks) tabDrinks.addEventListener("click", () => switchTab("drinks"));
  if (tabBeans) tabBeans.addEventListener("click", () => switchTab("beans"));
}

// ==========================================================================
// مكتشف القهوة التفاعلي حسب المزاج (Coffee & Mood Matcher)
// ==========================================================================
window.selectMood = function(moodKey) {
  if (currentMoodFilter === moodKey) {
    // إلغاء الفلترة إذا نقر عليه مرة أخرى
    window.resetMood();
    return;
  }

  currentMoodFilter = moodKey;

  // تحديث أزرار المزاج
  document.querySelectorAll(".mood-btn").forEach(btn => {
    if (btn.getAttribute("data-mood") === moodKey) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  const resetBadge = document.getElementById("mood-reset-badge");
  if (resetBadge) resetBadge.style.display = "inline-flex";

  renderDrinksMenu();
  renderCoffeeBeansMenu();

  // تمرير ناعم نحو بداية الأصناف
  const menuElem = document.getElementById("menu");
  if (menuElem) {
    const yOffset = -90;
    const y = menuElem.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

window.resetMood = function() {
  currentMoodFilter = null;
  document.querySelectorAll(".mood-btn").forEach(btn => btn.classList.remove("active"));
  const resetBadge = document.getElementById("mood-reset-badge");
  if (resetBadge) resetBadge.style.display = "none";
  renderDrinksMenu();
  renderCoffeeBeansMenu();
};

// ==========================================================================
// أزرار فلترة فئات المشروبات (Category Filter Pills)
// ==========================================================================
function renderCategoryFilterPills() {
  const container = document.getElementById("category-pills");
  if (!container) return;

  const allPill = `
    <button onclick="filterCategory('all')" 
            data-cat="all" 
            class="filter-pill active px-4 py-2 text-xs sm:text-sm font-semibold flex items-center gap-1.5 flex-shrink-0 cursor-pointer">
      <i class="fa-solid fa-list-check text-xs"></i>
      <span>الكل</span>
    </button>
  `;

  const categoryPills = DRINKS_MENU.map(cat => `
    <button onclick="filterCategory('${cat.categoryId}')" 
            data-cat="${cat.categoryId}" 
            class="filter-pill px-4 py-2 text-xs sm:text-sm font-medium flex items-center gap-1.5 flex-shrink-0 cursor-pointer">
      <i class="fa-solid ${cat.icon} text-xs text-[#D4A359]"></i>
      <span>${cat.category}</span>
    </button>
  `).join("");

  container.innerHTML = allPill + categoryPills;
}

window.filterCategory = function(categoryId) {
  currentCategoryFilter = categoryId;
  
  const buttons = document.querySelectorAll(".filter-pill");
  buttons.forEach(btn => {
    if (btn.getAttribute("data-cat") === categoryId) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  renderDrinksMenu();
};

// ==========================================================================
// عرض منيو المشروبات (Render Drinks Menu - 3-Column Category Boxes)
// ==========================================================================
function renderDrinksMenu() {
  const container = document.getElementById("drinks-container");
  if (!container) return;

  const query = searchQuery.trim().toLowerCase();

  const filteredCategories = DRINKS_MENU.map(category => {
    if (currentCategoryFilter !== "all" && category.categoryId !== currentCategoryFilter) {
      return null;
    }

    const matchingItems = category.items.filter(item => {
      // التحقق من فلتر المزاج
      if (currentMoodFilter && item.mood !== currentMoodFilter) {
        return false;
      }

      // التحقق من البحث
      if (!query) return true;
      return item.name.toLowerCase().includes(query) || 
             (item.desc && item.desc.toLowerCase().includes(query)) ||
             category.category.toLowerCase().includes(query);
    });

    if (matchingItems.length === 0) return null;

    return {
      ...category,
      items: matchingItems
    };
  }).filter(Boolean);

  if (filteredCategories.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center text-[#A89F91]">
        <i class="fa-solid fa-mug-hot text-4xl mb-4 text-[#D4A359]/50"></i>
        <p class="text-lg font-amiri text-[#F5E6CA]">لم يتم العثور على مشروبات مطابقة لبحثك أو مزاجك المختار</p>
        <button onclick="resetSearchAndMood()" class="mt-4 btn-gold-outline px-5 py-2 text-xs">
          إعادة تعيين الفلاتر
        </button>
      </div>
    `;
    return;
  }

  let html = `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">`;

  filteredCategories.forEach(cat => {
    html += `
      <div class="category-menu-box group" data-cat-id="${cat.categoryId}">
        <!-- Category Header -->
        <div class="category-menu-box-header">
          <div class="flex items-center gap-2.5">
            <span class="w-8 h-8 rounded-sm bg-[#221F1E] border border-[rgba(212,163,89,0.25)] flex items-center justify-center text-[#D4A359] text-xs shadow-sm">
              <i class="fa-solid ${cat.icon}"></i>
            </span>
            <h3 class="font-headline-sm text-[#F5E6CA] font-bold text-sm sm:text-base">${cat.category}</h3>
          </div>
          <span class="flavor-chip text-[10px] py-0.5 px-2">
            <span class="ember-dot"></span>
            ${cat.items.length} أصناف
          </span>
        </div>

        <!-- Drinks List (Item Name right, Dotted Divider, Price Placeholder left) -->
        <div class="flex flex-col gap-1.5">
          ${cat.items.map(item => `
            <div class="menu-item-row group" 
                 onclick="addDrinkToCart('${item.id}', '${item.name}')" 
                 title="انقر لإضافة «${item.name}» إلى سلة الطلب">
              <div class="flex items-center flex-shrink-0">
                <span class="menu-item-bullet">
                  <i class="fa-solid fa-mug-hot"></i>
                </span>
                <span class="menu-item-name">${item.name}</span>
                ${item.badge ? `
                  <span class="badge-special text-[9px] mr-1.5 px-2 py-0.5 font-bold inline-flex items-center gap-0.5">
                    ${item.badge}
                  </span>
                ` : ''}
              </div>

              <!-- Dotted Divider Line -->
              <div class="menu-item-dots"></div>

              <!-- Price Placeholder on Left & Interactive Cart Plus Button -->
              <div class="flex items-center gap-2 flex-shrink-0">
                <span class="price-placeholder-pill" title="يحدد السعر عند الطلب">-- ج.م</span>
                <button type="button" 
                        onclick="event.stopPropagation(); addDrinkToCart('${item.id}', '${item.name}')"
                        class="menu-item-add-btn" 
                        title="أضف للطلب">
                  <i class="fa-solid fa-plus text-[10px]"></i>
                </button>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    `;
  });

  html += `</div>`;
  container.innerHTML = html;
}

// ==========================================================================
// عرض قسم بيع القهوة (Render Coffee Beans with Profile Meter & Notes)
// ==========================================================================
function renderCoffeeBeansMenu() {
  const container = document.getElementById("beans-container");
  if (!container) return;

  const query = searchQuery.trim().toLowerCase();

  const filteredBeans = COFFEE_BEANS_MENU.filter(item => {
    if (currentMoodFilter && item.mood !== currentMoodFilter) {
      return false;
    }

    if (!query) return true;
    return item.name.toLowerCase().includes(query) || 
           item.desc.toLowerCase().includes(query) ||
           item.badge.toLowerCase().includes(query) ||
           (item.notes && item.notes.some(n => n.toLowerCase().includes(query)));
  });

  if (filteredBeans.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center text-[#A89F91]">
        <i class="fa-solid fa-box-open text-4xl mb-4 text-[#D4A359]/50"></i>
        <p class="text-lg font-amiri text-[#F5E6CA]">لم يتم العثور على صنف بن مطابق لبحثك أو مزاجك المختار</p>
        <button onclick="resetSearchAndMood()" class="mt-4 btn-gold-outline px-5 py-2 text-xs">
          إعادة تعيين الفلاتر
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = filteredBeans.map(item => {
    const selectedWeight = selectedWeights[item.id] || "ربع كيلو";
    const waLink = getCoffeeOrderWhatsAppLink(item.name, selectedWeight);

    return `
      <div class="luxury-card overflow-hidden flex flex-col justify-between group relative">
        ${item.isSpecial ? `
          <div class="absolute top-3 right-3 z-10">
            <span class="badge-special text-[11px] font-bold px-2.5 py-1 flex items-center gap-1 shadow-md">
              <i class="fa-solid fa-crown text-[10px] text-[#D4A359]"></i>
              <span>${item.badge}</span>
            </span>
          </div>
        ` : `
          <div class="absolute top-3 right-3 z-10">
            <span class="flavor-chip text-[10px]">
              <span class="ember-dot"></span>
              ${item.badge}
            </span>
          </div>
        `}

        <!-- Product Image Section (Click opens Sensory Quick View) -->
        <div onclick="openQuickView('${item.id}')"
             class="product-visual-container relative w-full h-56 flex items-center justify-center p-3 border-b border-[rgba(212,163,89,0.12)]">
          <img src="${item.image}" 
               alt="${item.name}" 
               loading="lazy"
               class="h-full w-auto object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.9)]"
               onerror="this.src='logo.png'" />
          
          <!-- Origin Tag -->
          <div class="absolute bottom-2 left-2">
            <span class="text-[10px] bg-[#0D0B0A]/85 text-[#F5E6CA] px-2 py-0.5 rounded-[4px] border border-[rgba(212,163,89,0.2)]">
              ${item.origin}
            </span>
          </div>

          <!-- Quick View Indicator -->
          <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
            <span class="btn-gold-outline text-xs px-3 py-1.5 rounded-[4px] shadow-lg">
              <i class="fa-solid fa-eye ml-1"></i> تفاصيل المحصول والتحضير
            </span>
          </div>
        </div>

        <!-- Product Info Section -->
        <div class="p-5 flex-1 flex flex-col justify-between gap-4">
          <div>
            <div class="flex items-center justify-between mb-1.5">
              <h4 onclick="openQuickView('${item.id}')"
                  class="font-headline-sm text-[#F5E6CA] group-hover:text-[#F3C97E] transition-colors cursor-pointer">
                ${item.name}
              </h4>
              <button type="button" 
                      onclick="openQuickView('${item.id}')"
                      class="text-xs text-[#D4A359] hover:text-[#F3C97E] transition p-1"
                      title="استكشف دليل التحضير">
                <i class="fa-solid fa-circle-info"></i>
              </button>
            </div>

            <p class="text-xs text-[#A89F91] leading-relaxed mb-3">
              ${item.desc}
            </p>

            <!-- Tasting Notes Tags -->
            ${item.notes ? `
              <div class="flex flex-wrap gap-1.5 mb-4">
                ${item.notes.map(note => `
                  <span class="flavor-chip text-[10px]">
                    <span class="ember-dot"></span>
                    ${note}
                  </span>
                `).join("")}
              </div>
            ` : ''}

            <!-- Coffee Profile Meter -->
            ${item.profile ? `
              <div class="profile-meter-container mb-4">
                <div class="profile-meter-row">
                  <span class="profile-meter-label">التحميص:</span>
                  <div class="profile-meter-track">
                    <div class="profile-meter-fill" style="width: ${item.profile.roast.val}%;"></div>
                  </div>
                  <span class="profile-meter-val">${item.profile.roast.label}</span>
                </div>

                <div class="profile-meter-row">
                  <span class="profile-meter-label">الحموضة:</span>
                  <div class="profile-meter-track">
                    <div class="profile-meter-fill" style="width: ${item.profile.acidity.val}%;"></div>
                  </div>
                  <span class="profile-meter-val">${item.profile.acidity.label}</span>
                </div>

                <div class="profile-meter-row">
                  <span class="profile-meter-label">القوام:</span>
                  <div class="profile-meter-track">
                    <div class="profile-meter-fill" style="width: ${item.profile.body.val}%;"></div>
                  </div>
                  <span class="profile-meter-val">${item.profile.body.label}</span>
                </div>
              </div>
            ` : ''}
          </div>

          <div>
            <!-- Weight Badges Selector -->
            <div class="mb-4">
              <label class="block text-xs text-[#A89F91] mb-2 font-medium">
                اختر الوزن المطلوب:
              </label>
              <div class="grid grid-cols-4 gap-1.5">
                ${BEAN_WEIGHTS.map(w => `
                  <button type="button" 
                          onclick="selectWeight('${item.id}', '${w.label}')"
                          class="weight-btn py-1.5 px-1 text-center text-xs cursor-pointer ${
                            selectedWeight === w.label ? 'selected' : ''
                          }">
                    <span class="block font-bold">${w.label}</span>
                    <span class="block text-[10px] opacity-75">${w.grams}</span>
                  </button>
                `).join("")}
              </div>
            </div>

            <!-- Price & Order Action -->
            <div class="pt-3 border-t border-[rgba(212,163,89,0.15)] flex items-center justify-between gap-2.5">
              <button type="button"
                      onclick="addBeanToCart('${item.id}')"
                      class="btn-gold flex-1 py-2.5 px-3 text-xs sm:text-sm">
                <i class="fa-solid fa-cart-plus"></i>
                <span>أضف للطلب (${selectedWeight})</span>
              </button>

              <a href="${waLink}" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 title="طلب سريع فوري"
                 class="btn-gold-outline w-10 h-10 p-0 flex items-center justify-center flex-shrink-0 text-emerald-400">
                <i class="fa-brands fa-whatsapp text-lg"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

// ==========================================================================
// تحديد وزن البن
// ==========================================================================
window.selectWeight = function(itemId, weightLabel) {
  selectedWeights[itemId] = weightLabel;
  renderCoffeeBeansMenu();
};

// ==========================================================================
// سلة الطلبات المجمعة للواتساب (Smart WhatsApp Order Tray)
// ==========================================================================
window.addDrinkToCart = function(drinkId, drinkName) {
  const existing = cart.find(c => c.id === drinkId && c.type === 'drink');
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id: drinkId,
      name: drinkName,
      type: 'drink',
      weight: null,
      grind: null,
      qty: 1
    });
  }

  showToast(`تمت إضافة «${drinkName}» إلى سلة الطلب`);
  renderCart();
};

window.addBeanToCart = function(beanId) {
  const bean = COFFEE_BEANS_MENU.find(b => b.id === beanId);
  if (!bean) return;

  const weight = selectedWeights[beanId] || "ربع كيلو";
  const existing = cart.find(c => c.id === beanId && c.weight === weight && c.type === 'bean');

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id: beanId,
      name: bean.name,
      type: 'bean',
      weight: weight,
      grind: "طحن ناعم (تركي)",
      qty: 1
    });
  }

  showToast(`تمت إضافة «${bean.name} (${weight})» إلى سلة الطلب`);
  renderCart();
};

window.updateCartQty = function(index, delta) {
  if (!cart[index]) return;
  cart[index].qty += delta;
  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }
  renderCart();
};

window.updateCartGrind = function(index, newGrind) {
  if (cart[index]) {
    cart[index].grind = newGrind;
  }
};

window.removeFromCart = function(index) {
  cart.splice(index, 1);
  renderCart();
};

window.clearCart = function() {
  cart = [];
  renderCart();
  window.closeCart();
};

window.openCart = function() {
  const overlay = document.getElementById("cart-drawer-overlay");
  if (overlay) overlay.classList.add("open");
};

window.closeCart = function() {
  const overlay = document.getElementById("cart-drawer-overlay");
  if (overlay) overlay.classList.remove("open");
};

function renderCart() {
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);

  // تحديث الزر العائم
  const floatingBar = document.getElementById("cart-floating-bar");
  const countBadge = document.getElementById("cart-count-badge");
  const floatingSummary = document.getElementById("cart-floating-summary");

  if (floatingBar && countBadge) {
    if (totalCount > 0) {
      floatingBar.style.display = "flex";
      countBadge.innerText = totalCount;
      if (floatingSummary) {
        floatingSummary.innerText = `${totalCount} أصناف مختارة في طلبك`;
      }
    } else {
      floatingBar.style.display = "none";
    }
  }

  // تحديث محتوى الدرج (Drawer)
  const drawerList = document.getElementById("cart-drawer-items");
  const drawerCount = document.getElementById("cart-drawer-count");
  if (drawerCount) drawerCount.innerText = totalCount;

  if (!drawerList) return;

  if (cart.length === 0) {
    drawerList.innerHTML = `
      <div class="py-16 text-center text-[#A89F91]">
        <i class="fa-solid fa-basket-shopping text-4xl mb-4 text-[#D4AF37]/40"></i>
        <p class="font-amiri text-lg text-[#F5E6CA] mb-1">سلة الطلب فارغة حتى الآن</p>
        <p class="text-xs text-[#7E7365]">تصفح المنيو وأضف مشروباتك وأكياس البن المفضلة</p>
      </div>
    `;
    return;
  }

  drawerList.innerHTML = cart.map((item, idx) => `
    <div class="cart-item-row flex flex-col gap-2.5">
      <div class="flex items-start justify-between gap-2">
        <div>
          <h5 class="text-sm font-bold text-[#F5E6CA]">${item.name}</h5>
          ${item.weight ? `
            <span class="flavor-chip text-[10px] mt-1 py-0.5 px-2">
              <span class="ember-dot"></span>
              الوزن: ${item.weight}
            </span>
          ` : `
            <span class="text-[11px] text-[#A89F91]">مشروب كافيه طازج</span>
          `}
        </div>

        <button type="button" 
                onclick="removeFromCart(${idx})"
                class="text-muted hover:text-red-400 text-xs transition p-1"
                title="حذف من السلة">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>

      <!-- Bean Grind Selection if Coffee Bean -->
      ${item.type === 'bean' ? `
        <div class="pt-1">
          <label class="block text-[11px] text-[#A89F91] mb-1 font-medium">درجة الطحن المطلوبة:</label>
          <select onchange="updateCartGrind(${idx}, this.value)" 
                  class="input-nocturne w-full text-xs py-1.5 px-2 rounded-[4px] cursor-pointer">
            ${GRIND_OPTIONS.map(g => `
              <option value="${g}" ${item.grind === g ? 'selected' : ''}>${g}</option>
            `).join("")}
          </select>
        </div>
      ` : ''}

      <!-- Quantity Adjuster -->
      <div class="flex items-center justify-between pt-2 border-t border-[rgba(212,163,89,0.1)]">
        <span class="text-xs text-[#A89F91]">الكمية:</span>
        <div class="flex items-center gap-2">
          <button type="button" onclick="updateCartQty(${idx}, -1)" class="cart-qty-btn">
            <i class="fa-solid fa-minus text-[10px]"></i>
          </button>
          <span class="font-amiri text-sm font-bold px-2 text-[#F5E6CA]">${item.qty}</span>
          <button type="button" onclick="updateCartQty(${idx}, 1)" class="cart-qty-btn">
            <i class="fa-solid fa-plus text-[10px]"></i>
          </button>
        </div>
      </div>
    </div>
  `).join("");
}

// إرسال كامل الطلب دفعة واحدة عبر واتساب
window.sendWhatsAppFullOrder = function() {
  if (cart.length === 0) {
    alert("سلة الطلبات فارغة حالياً. يرجى اختيار أصناف أولاً.");
    return;
  }

  const customerNotes = document.getElementById("cart-customer-notes")?.value || "";

  let message = `السلام عليكم ورحمة الله،\n`;
  message += `أود تأكيد طلب من كافيه ومحمصة «بن ليل»:\n`;
  message += `──────────────────\n`;

  cart.forEach((item, i) => {
    message += `${i + 1}. ${item.name} (${item.qty}×)\n`;
    if (item.weight) {
      message += `   • الوزن: ${item.weight}\n`;
    }
    if (item.grind) {
      message += `   • الطحن: ${item.grind}\n`;
    }
  });

  message += `──────────────────\n`;
  if (customerNotes.trim()) {
    message += `ملاحظات إضافية: ${customerNotes.trim()}\n`;
  }
  message += `يرجى إفادتي بإجمالي السعر وتأكيد استلام الطلب والتوصيل.\nشكراً جزيلاً!`;

  const waUrl = `https://wa.me/${CAFE_INFO.whatsappRaw}?text=${encodeURIComponent(message)}`;
  window.open(waUrl, "_blank");
};

// ==========================================================================
// نافذة الاستكشاف الحسي ودليل التحضير (Sensory Quick-View Modal)
// ==========================================================================
window.openQuickView = function(beanId) {
  const bean = COFFEE_BEANS_MENU.find(b => b.id === beanId);
  if (!bean) return;

  const modalContainer = document.getElementById("sensory-modal-container");
  if (!modalContainer) return;

  modalContainer.innerHTML = `
    <div class="sensory-modal-card p-6 sm:p-8">
      <!-- Modal Header -->
      <div class="flex items-start justify-between pb-4 border-b border-[rgba(212,163,89,0.18)] mb-6">
        <div>
          <div class="flex items-center gap-2 mb-1">
            <span class="flavor-chip text-xs">
              <span class="ember-dot"></span>
              ${bean.badge}
            </span>
            <span class="text-xs text-[#A89F91]">• ${bean.origin}</span>
          </div>
          <h3 class="font-headline-lg text-[#F5E6CA] gold-gradient-text">${bean.name}</h3>
        </div>
        <button type="button" onclick="closeQuickView()" class="text-muted hover:text-cream text-lg p-2 cursor-pointer transition">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <!-- Modal Body -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <!-- Visual & Notes -->
        <div class="flex flex-col items-center justify-center p-4 bg-[#0D0B0A] rounded-[8px] border border-[rgba(212,163,89,0.15)]">
          <img src="${bean.image}" alt="${bean.name}" class="h-48 w-auto object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] mb-4" />
          
          <div class="w-full text-center">
            <span class="text-xs text-[#A89F91] block mb-2 font-medium">نغمات وتدرجات التذوق العطرية:</span>
            <div class="flex flex-wrap justify-center gap-1.5">
              ${bean.notes.map(n => `
                <span class="flavor-chip text-[11px]">
                  <span class="ember-dot"></span>
                  ${n}
                </span>
              `).join("")}
            </div>
          </div>
        </div>

        <!-- Telemetry & Sensory Profile -->
        <div class="flex flex-col justify-between gap-4">
          <div>
            <h5 class="text-xs font-bold text-[#D4A359] uppercase tracking-wider mb-2">بطاقة مواصفات المحصول</h5>
            <ul class="space-y-2 text-xs text-[#A89F91] mb-4">
              <li class="flex items-center justify-between pb-1 border-b border-white/5">
                <span>الارتفاع عن البحر:</span>
                <strong class="text-[#F5E6CA]">${bean.altitude}</strong>
              </li>
              <li class="flex items-center justify-between pb-1 border-b border-white/5">
                <span>طريقة المعالجة:</span>
                <strong class="text-[#F5E6CA]">${bean.process}</strong>
              </li>
            </ul>

            <h5 class="text-xs font-bold text-[#D4A359] uppercase tracking-wider mb-2">مقياس بروفايل القهوة</h5>
            <div class="profile-meter-container">
              <div class="profile-meter-row">
                <span class="profile-meter-label">التحميص:</span>
                <div class="profile-meter-track">
                  <div class="profile-meter-fill" style="width: ${bean.profile.roast.val}%;"></div>
                </div>
                <span class="profile-meter-val">${bean.profile.roast.label}</span>
              </div>
              <div class="profile-meter-row">
                <span class="profile-meter-label">الحموضة:</span>
                <div class="profile-meter-track">
                  <div class="profile-meter-fill" style="width: ${bean.profile.acidity.val}%;"></div>
                </div>
                <span class="profile-meter-val">${bean.profile.acidity.label}</span>
              </div>
              <div class="profile-meter-row">
                <span class="profile-meter-label">القوام:</span>
                <div class="profile-meter-track">
                  <div class="profile-meter-fill" style="width: ${bean.profile.body.val}%;"></div>
                </div>
                <span class="profile-meter-val">${bean.profile.body.label}</span>
              </div>
            </div>
          </div>

          <!-- Brew Guide Box -->
          <div class="brew-guide-box">
            <h5 class="text-xs font-bold text-[#F3C97E] mb-2 flex items-center gap-1.5">
              <i class="fa-solid fa-fire-burner"></i>
              <span>دليل التحضير الموصى به:</span>
            </h5>
            <div class="grid grid-cols-2 gap-2 text-[11px] text-[#A89F91]">
              <div>• الأداة: <span class="text-[#F5E6CA] font-medium">${bean.brewGuide.method}</span></div>
              <div>• الحرارة: <span class="text-[#F5E6CA] font-medium">${bean.brewGuide.temp}</span></div>
              <div>• التناسب: <span class="text-[#F5E6CA] font-medium">${bean.brewGuide.ratio}</span></div>
              <div>• الطحن: <span class="text-[#F5E6CA] font-medium">${bean.brewGuide.grind}</span></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal Footer Action -->
      <div class="pt-4 border-t border-[rgba(212,163,89,0.18)] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div class="text-xs text-[#A89F91]">
          <span>متوفر بأوزان: ثمن كيلو • ربع كيلو • نصف كيلو • كيلو</span>
        </div>
        <div class="flex items-center gap-3 w-full sm:w-auto">
          <button type="button" 
                  onclick="addBeanToCart('${bean.id}'); closeQuickView();"
                  class="btn-gold flex-1 sm:flex-initial py-2.5 px-6 text-xs sm:text-sm">
            <i class="fa-solid fa-cart-plus"></i>
            <span>أضف هذا الصنف للطلب</span>
          </button>
        </div>
      </div>
    </div>
  `;

  const overlay = document.getElementById("sensory-modal-overlay");
  if (overlay) overlay.classList.add("open");
};

window.closeQuickView = function() {
  const overlay = document.getElementById("sensory-modal-overlay");
  if (overlay) overlay.classList.remove("open");
};

// ==========================================================================
// تأثير ضوء الفأرة التفاعلي على الكروت (Mouse Spotlight Glow)
// ==========================================================================
function setupSpotlightEffect() {
  document.addEventListener("mousemove", (e) => {
    const cards = document.querySelectorAll(".luxury-card");
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // تحديث فقط إذا كان المؤشر قريباً
      if (x >= -100 && x <= rect.width + 100 && y >= -100 && y <= rect.height + 100) {
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    });
  });
}

// رسائل التنبيه العائمة السريعة (Toast notification)
function showToast(message) {
  let toast = document.getElementById("nocturne-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "nocturne-toast";
    toast.className = "fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-[#171311] border border-[#D4A359] text-[#F5E6CA] px-5 py-2.5 rounded-[4px] shadow-2xl text-xs font-bold transition-all duration-300 opacity-0 pointer-events-none";
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i class="fa-solid fa-circle-check text-emerald-400 ml-2"></i> ${message}`;
  toast.classList.remove("opacity-0", "pointer-events-none");
  toast.classList.add("opacity-100");

  setTimeout(() => {
    toast.classList.remove("opacity-100");
    toast.classList.add("opacity-0", "pointer-events-none");
  }, 2400);
}

// روابط الواتساب الفردية
function getCoffeeOrderWhatsAppLink(itemName, weight) {
  const message = `السلام عليكم ورحمة الله،
أود طلب بن من كافيه ومحمصة «بن ليل»:
الصنف: ${itemName}
الوزن المطلوب: ${weight}
يرجى إفادتي بالسعر وتأكيد الطلب والتوصيل. شكراً جزيلاً!`;
  return `https://wa.me/${CAFE_INFO.whatsappRaw}?text=${encodeURIComponent(message)}`;
}

function getDrinkWhatsAppLink(drinkName) {
  const message = `السلام عليكم ورحمة الله،
حابب أطلب من منيو كافيه «بن ليل»:
المشروب: ${drinkName}
شكراً لك!`;
  return `https://wa.me/${CAFE_INFO.whatsappRaw}?text=${encodeURIComponent(message)}`;
}

// محرك البحث الحي
function setupSearch() {
  const searchInput = document.getElementById("search-input");
  const clearBtn = document.getElementById("search-clear-btn");
  if (!searchInput) return;

  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    if (clearBtn) {
      clearBtn.style.display = searchQuery ? "block" : "none";
    }
    renderDrinksMenu();
    renderCoffeeBeansMenu();
  });

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      resetSearchAndMood();
    });
  }
}

window.resetSearchAndMood = function() {
  const searchInput = document.getElementById("search-input");
  const clearBtn = document.getElementById("search-clear-btn");
  searchQuery = "";
  currentMoodFilter = null;
  if (searchInput) searchInput.value = "";
  if (clearBtn) clearBtn.style.display = "none";
  document.querySelectorAll(".mood-btn").forEach(btn => btn.classList.remove("active"));
  const resetBadge = document.getElementById("mood-reset-badge");
  if (resetBadge) resetBadge.style.display = "none";
  renderDrinksMenu();
  renderCoffeeBeansMenu();
};

// زر الرجوع لأعلى وشريط التنقل
function setupBackToTop() {
  const backToTopBtn = document.getElementById("back-to-top");
  if (!backToTopBtn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.remove("opacity-0", "pointer-events-none");
      backToTopBtn.classList.add("opacity-100", "pointer-events-auto");
    } else {
      backToTopBtn.classList.add("opacity-0", "pointer-events-none");
      backToTopBtn.classList.remove("opacity-100", "pointer-events-auto");
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function setupScrollNavbar() {
  const navbar = document.getElementById("main-nav");
  if (!navbar) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("bg-[#0D0B0A]/95", "border-b", "border-[rgba(212,163,89,0.2)]", "shadow-xl");
    } else {
      navbar.classList.remove("bg-[#0D0B0A]/95", "border-b", "border-[rgba(212,163,89,0.2)]", "shadow-xl");
    }
  });
}

// التحكم في إيقاف وتشغيل فيديو الخلفية
window.toggleHeroVideo = function() {
  const video = document.querySelector("#hero video");
  const icon = document.getElementById("video-toggle-icon");
  if (!video) return;

  if (video.paused) {
    video.play();
    if (icon) {
      icon.className = "fa-solid fa-pause text-xs";
    }
  } else {
    video.pause();
    if (icon) {
      icon.className = "fa-solid fa-play text-xs";
    }
  }
};

