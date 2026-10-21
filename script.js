const menuItems = [
  { name: "كراميل ميكاتو", nameEn: "Caramel Macchiato", category: "hot", price: 70, icon: "☕" },
  { name: "سبانيش لاتيه", nameEn: "Spanish Latte", category: "hot", price: 80, icon: "☕" },
  { name: "كراميل لاتيه", nameEn: "Caramel Latte", category: "hot", price: 70, icon: "☕" },
  { name: "موكا لاتيه", nameEn: "Mocha Latte", category: "hot", price: 70, icon: "☕" },
  { name: "شاي فتله", nameEn: "Tea Bag", category: "hot", price: 25, icon: "🍵" },
  { name: "هوت شوكليت", nameEn: "Hot Chocolate", category: "hot", price: 50, icon: "🍫" },
  { name: "قهوة تركي سنجل", nameEn: "Single Turkish Coffee", category: "hot", price: 40, icon: "☕" },
  { name: "اسبريسو سنجل", nameEn: "Single Espresso", category: "hot", price: 50, icon: "☕" },
  { name: "اسبريسو دبل", nameEn: "Double Espresso", category: "hot", price: 70, icon: "☕" },
  { name: "قهوة تركي دبل", nameEn: "Double Turkish Coffee", category: "hot", price: 50, icon: "☕" },
  { name: "قهوة بندق", nameEn: "Hazelnut Coffee", category: "hot", price: 60, icon: "☕" },
  { name: "شاي فواكه", nameEn: "Fruit Tea", category: "hot", price: 30, icon: "🍵" },
  { name: "شاي نعناع", nameEn: "Mint Tea", category: "hot", price: 20, icon: "🍵" },
  { name: "كابتشينو دبل اسبريسو", nameEn: "Double Espresso Cappuccino", category: "hot", price: 70, icon: "☕" },
  { name: "شاي", nameEn: "Tea", category: "hot", price: 20, icon: "🍵", image: "assets/hot-tea.jpg" },
  { name: "لاتيه ساخن", nameEn: "Hot Latte", category: "hot", price: 60, icon: "☕" },
  { name: "زنجبيل", nameEn: "Ginger Tea", category: "hot", price: 25, icon: "🍵" },
  { name: "قرفه", nameEn: "Cinnamon Tea", category: "hot", price: 25, icon: "🍵" },
  { name: "عشبه الليمون", nameEn: "Lemongrass", category: "hot", price: 25, icon: "🍵" },
  { name: "كاركاديه", nameEn: "Hibiscus Tea", category: "hot", price: 25, icon: "🍵" },
  { name: "يانسون", nameEn: "Anise Tea", category: "hot", price: 25, icon: "🍵" },
  { name: "بونجورنو", nameEn: "Buongiorno", category: "hot", price: 30, icon: "☕" },
  { name: "كوفي ميكس", nameEn: "Coffee Mix", category: "hot", price: 25, icon: "☕" },
  { name: "كاكاو باللبن", nameEn: "Cocoa with Milk", category: "hot", price: 40, icon: "☕" },
  { name: "شاي اخضر", nameEn: "Green Tea", category: "hot", price: 25, icon: "🍵" },
  { name: "نعناع", nameEn: "Mint", category: "hot", price: 20, icon: "🍵" },
  { name: "قهوة فرنساوي", nameEn: "French Coffee", category: "hot", price: 60, icon: "☕" },
  { name: "شاي بلبن", nameEn: "Milk Tea", category: "hot", price: 50, icon: "🍵" },
  { name: "ميكاتو دبل", nameEn: "Double Macchiato", category: "hot", price: 65, icon: "☕" },
  { name: "كورتادو دبل", nameEn: "Double Cortado", category: "hot", price: 60, icon: "☕" },
  { name: "فلات وايت دابل", nameEn: "Double Flat White", category: "hot", price: 60, icon: "☕" },
  { name: "امريكانو", nameEn: "Americano", category: "hot", price: 60, icon: "☕" },
  { name: "آيس لاتيه", nameEn: "Iced Latte", category: "cold", description: "إسبريسو مع حليب بارد وثلج", descriptionEn: "Espresso with cold milk and ice", price: 80, icon: "🧋", badge: "اختيارنا", badgeEn: "Our pick", image: "assets/iced-latte.jpg" },
  { name: "آيس سبانيش لاتيه", nameEn: "Iced Spanish Latte", category: "cold", description: "حلاوة الحليب المكثف مع قهوة باردة", descriptionEn: "Sweet condensed milk blended with chilled coffee", price: 110, icon: "🧊", image: "assets/iced-spanish-latte.jpg" },
  { name: "عصير ليمون", nameEn: "Fresh Lemon Juice", category: "cold", price: 50, icon: "🍋" },
  { name: "ايس موكا", nameEn: "Iced Mocha", category: "cold", price: 90, icon: "☕" },
  { name: "ايس امريكانو", nameEn: "Iced Americano", category: "cold", price: 70, icon: "☕" },
  { name: "ايس كراميل ميكاتو", nameEn: "Iced Caramel Macchiato", category: "cold", price: 90, icon: "☕" },
  { name: "موكا فرابيه", nameEn: "Mocha Frappe", category: "cold", price: 100, icon: "☕" },
  { name: "فرابيه كراميل", nameEn: "Caramel Frappe", category: "cold", price: 100, icon: "☕" },
  { name: "فرابيه فانيليا", nameEn: "Vanilla Frappe", category: "cold", price: 100, icon: "☕" },
  { name: "ميلك شيك فراولة", nameEn: "Strawberry Milkshake", category: "cold", price: 90, icon: "🥤" },
  { name: "ميلك شيك كافي", nameEn: "Coffee Milkshake", category: "cold", price: 80, icon: "☕" },
  { name: "ميلك شيك شوكلت", nameEn: "Chocolate Milkshake", category: "cold", price: 90, icon: "🍫" },
  { name: "ميلك شيك فانيليا", nameEn: "Vanilla Milkshake", category: "cold", price: 80, icon: "🥤" },
  { name: "ميلك شيك مانجو", nameEn: "Mango Milkshake", category: "cold", price: 90, icon: "🥭" },
  { name: "سموزي مانجو", nameEn: "Mango Smoothie", category: "cold", price: 80, icon: "🥭" },
  { name: "سموزي فراولة", nameEn: "Strawberry Smoothie", category: "cold", price: 80, icon: "🍓" },
  { name: "سموزي بلو بيري", nameEn: "Blueberry Smoothie", category: "cold", price: 80, icon: "🫐" },
  { name: "سموزي مكس بيري", nameEn: "Mixed Berry Smoothie", category: "cold", price: 80, icon: "🫐" },
  { name: "سموزي ليمون نعناع", nameEn: "Lemon Mint Smoothie", category: "cold", price: 80, icon: "🍋" },
  { name: "سموزي باشون فروت", nameEn: "Passion Fruit Smoothie", category: "cold", price: 80, icon: "🥭" },
  { name: "سموزي كريز", nameEn: "Cherry Smoothie", category: "cold", price: 80, icon: "🍒" },
  { name: "موهيتو صن شاين", nameEn: "Sun Shine Mojito", category: "cold", price: 70, icon: "🍋" },
  { name: "موهيتو بلو هاوي", nameEn: "Blue Hawaii Mojito", category: "cold", price: 80, icon: "🫐" },
  { name: "موهيتو همر هاد", nameEn: "Hammer Head Mojito", category: "cold", price: 130, icon: "🍋" },
  { name: "موهيتو سكوتش مينت", nameEn: "Scottish Mint Mojito", category: "cold", price: 75, icon: "🍃" },
  { name: "موهيتو ريدبول كراش", nameEn: "Red Bull Crash Mojito", category: "cold", price: 120, icon: "⚡" },
  { name: "موهيتو بلو باشون", nameEn: "Blue Passion Mojito", category: "cold", price: 100, icon: "🥭" },
  { name: "كانز", nameEn: "Canned Drink", category: "cold", price: 40, icon: "🥤" },
  { name: "تويست", nameEn: "Twist", category: "cold", price: 35, icon: "🥤" },
  { name: "ستينج", nameEn: "Sting", category: "cold", price: 35, icon: "⚡" },
  { name: "باربيكان", nameEn: "Barbican", category: "cold", price: 70, icon: "🥤" },
  { name: "ريدبول", nameEn: "Red Bull", category: "cold", price: 100, icon: "⚡" },
];

const translations = {
  ar: {
    pageTitle: "PAPATI | قهوتك على مزاجك",
    description: "منيو PAPATI — قهوة ومشروبات معمولة بحب.",
    welcomeKicker: "أهلاً بيك في PAPATI",
    welcomeTitle: ["قهوتك الحلوة", "مستنياك."],
    welcomeDescription: "اختار مشروبك المفضل، وخلي يومك أحلى مع PAPATI.",
    welcomeButton: "دخول للمنيو",
    welcomeCaption: "قهوة معمولة بحب، على مزاجك",
    openingHoursLabel: "ساعات العمل",
    openingHours: "يوميًا · ٨ صباحًا – ١٢ منتصف الليل",
    paymentTitle: "طرق الدفع",
    paymentWallet: "محفظة إلكترونية",
    paymentCash: "كاش",
    brandAria: "PAPATI - الصفحة الرئيسية",
    locationAria: "افتح موقع PAPATI على خرائط جوجل",
    tagline: "قهوة على مزاجك",
    menuEyebrow: "اختار اللي على مزاجك",
    menuTitle: "منيو",
    menuDescription: "حاجات حلوة تتعمل مخصوص عشانك.",
    searchPlaceholder: "بتدور على إيه؟",
    searchAria: "ابحث في المنيو",
    categoriesAria: "أقسام المنيو",
    categoryAll: "كل الحاجات",
    categoryHot: "☕ سخن",
    categoryCold: "🧊 ساقع",
    emptyState: "ملقيناش حاجة بالاسم ده… جرّب تدور على حاجة تانية.",
    menuFootnote: "الأسعار المعروضة بالجنيه المصري.",
    footerMessage: "نورتنا، مستنيين زيارتك الجاية",
    copyright: "© 2026 PAPATI كافيه",
    switchLanguage: "Switch language to English",
    currency: "ج.م",
  },
  en: {
    pageTitle: "PAPATI | Coffee your way",
    description: "PAPATI menu — coffee and drinks, made with love.",
    welcomeKicker: "Welcome to PAPATI",
    welcomeTitle: ["Your coffee moment", "is waiting."],
    welcomeDescription: "Pick your favorite, and make today a little sweeter with PAPATI.",
    welcomeButton: "Enter the menu",
    welcomeCaption: "Made with love, just your way",
    openingHoursLabel: "Opening hours",
    openingHours: "Daily · 8:00 AM – 12:00 AM",
    paymentTitle: "Payment methods",
    paymentWallet: "E-wallet",
    paymentCash: "Cash",
    brandAria: "PAPATI - Home",
    locationAria: "Open PAPATI location in Google Maps",
    tagline: "Coffee your way",
    menuEyebrow: "Find your new favorite",
    menuTitle: "Menu",
    menuDescription: "Good things, made just for you.",
    searchPlaceholder: "What are you craving?",
    searchAria: "Search the menu",
    categoriesAria: "Menu categories",
    categoryAll: "Everything",
    categoryHot: "☕ Hot",
    categoryCold: "🧊 Cold",
    emptyState: "Nothing found. Try searching for something else.",
    menuFootnote: "All displayed prices are in EGP.",
    footerMessage: "Thanks for stopping by. See you again soon",
    copyright: "© 2026 PAPATI Café",
    switchLanguage: "تغيير اللغة إلى العربية",
    currency: "EGP",
  },
};

const menuGrid = document.querySelector("#menu-grid");
const searchInput = document.querySelector("#menu-search");
const emptyState = document.querySelector("#empty-state");
const categoryButtons = [...document.querySelectorAll(".category-button")];
const languageToggles = [...document.querySelectorAll(".language-toggle")];
const welcomeScreen = document.querySelector("#welcome-screen");
const siteContent = document.querySelector("#site-content");
const enterMenuButton = document.querySelector("#enter-menu");
let selectedCategory = "all";
let currentLanguage = "ar";
let animateMenuTransition = false;

function normalizeSearchText(text) {
  return text
    .toLocaleLowerCase(currentLanguage)
    .normalize("NFD")
    .replace(/[\u064B-\u065F\u0670\u0640]/g, "")
    .replace(/[أإآ]/g, "ا");
}

function getFallback(item) {
  const fallback = document.createElement("span");
  fallback.className = "image-fallback";
  fallback.setAttribute("aria-hidden", "true");
  fallback.textContent = item.icon;
  return fallback;
}

function renderMenu() {
  const query = normalizeSearchText(searchInput.value.trim());
  const visibleItems = menuItems.filter((item) => {
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    const searchableText = normalizeSearchText(`${item.name} ${item.nameEn} ${item.description || ""} ${item.descriptionEn || ""}`);
    return matchesCategory && searchableText.includes(query);
  });

  const cards = visibleItems.map((item, index) => {
    const card = document.createElement("article");
    card.className = "menu-card";
    if (animateMenuTransition) {
      card.classList.add("is-entering");
      card.classList.add(`is-entering-${Math.min(index, 8)}`);
    }

    const artwork = document.createElement("span");
    artwork.className = `item-art ${item.category}`;
    artwork.setAttribute("aria-hidden", "true");
    const fallback = getFallback(item);
    artwork.append(fallback);
    if (item.image) {
      artwork.classList.add("has-photo");
      fallback.hidden = true;

      const photo = document.createElement("img");
      photo.className = "product-photo";
      photo.src = item.image;
      photo.alt = "";
      photo.loading = "lazy";
      photo.decoding = "async";
      photo.addEventListener("error", () => {
        photo.hidden = true;
        fallback.hidden = false;
      }, { once: true });
      artwork.append(photo);
    }
    card.append(artwork);

    const details = document.createElement("div");
    details.className = "item-details";
    const heading = document.createElement("h3");
    heading.textContent = currentLanguage === "ar" ? item.name : item.nameEn;
    details.append(heading);
    const description = currentLanguage === "ar" ? item.description : item.descriptionEn;
    if (description) {
      const descriptionElement = document.createElement("p");
      descriptionElement.textContent = description;
      details.append(descriptionElement);
    }
    const price = document.createElement("span");
    price.className = "item-price";
    price.append(document.createTextNode(item.price.toLocaleString(currentLanguage === "ar" ? "ar-EG" : "en")));
    const currency = document.createElement("small");
    currency.textContent = translations[currentLanguage].currency;
    price.append(currency);
    details.append(price);
    card.append(details);

    const badge = currentLanguage === "ar" ? item.badge : item.badgeEn;
    if (badge) {
      const badgeElement = document.createElement("span");
      badgeElement.className = "item-badge";
      badgeElement.textContent = badge;
      card.append(badgeElement);
    }
    return card;
  });

  menuGrid.replaceChildren(...cards);
  animateMenuTransition = false;
  emptyState.hidden = visibleItems.length > 0;
}

function setLanguage(language) {
  currentLanguage = language;
  const copy = translations[language];
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  document.title = copy.pageTitle;
  document.querySelector('meta[name="description"]').content = copy.description;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (key === "welcomeTitle") {
      const [firstLine, secondLine] = copy.welcomeTitle;
      element.replaceChildren(document.createTextNode(firstLine), document.createElement("br"), document.createTextNode(secondLine));
    } else if (key === "menuTitle") {
      const brand = document.createElement("span");
      brand.textContent = "PAPATI";
      element.replaceChildren(...(language === "ar"
        ? [document.createTextNode(`${copy.menuTitle} `), brand]
        : [brand, document.createTextNode(` ${copy.menuTitle}`)]));
    } else {
      element.textContent = copy[key];
    }
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    element.setAttribute("aria-label", copy[element.dataset.i18nAria]);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = copy[element.dataset.i18nPlaceholder];
  });

  const categoryLabels = { all: copy.categoryAll, hot: copy.categoryHot, cold: copy.categoryCold };
  categoryButtons.forEach((button) => {
    button.textContent = categoryLabels[button.dataset.category];
  });
  languageToggles.forEach((toggle) => {
    toggle.textContent = language === "ar" ? "EN" : "ع";
    toggle.lang = language === "ar" ? "en" : "ar";
    toggle.setAttribute("aria-label", copy.switchLanguage);
    toggle.setAttribute("aria-pressed", String(language === "en"));
  });
  renderMenu();
}

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedCategory = button.dataset.category;
    animateMenuTransition = true;
    categoryButtons.forEach((categoryButton) => {
      const isSelected = categoryButton === button;
      categoryButton.classList.toggle("is-active", isSelected);
      categoryButton.setAttribute("aria-pressed", String(isSelected));
    });
    renderMenu();
  });
});

languageToggles.forEach((toggle) => {
  toggle.addEventListener("click", () => setLanguage(currentLanguage === "ar" ? "en" : "ar"));
});

enterMenuButton.addEventListener("click", () => {
  welcomeScreen.classList.add("is-leaving");
  window.setTimeout(() => {
    welcomeScreen.hidden = true;
    siteContent.hidden = false;
    document.querySelector("#menu").scrollIntoView({ behavior: "smooth", block: "start" });
  }, 220);
});

searchInput.addEventListener("input", renderMenu);
setLanguage(currentLanguage);