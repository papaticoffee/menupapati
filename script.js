const menuItems = [
  { name: "قهوة بندق", nameEn: "Hazelnut Coffee", category: "hot", price: 60, icon: "☕" },
  { name: "قهوة تركي دبل", nameEn: "Double Turkish Coffee", category: "hot", price: 50, icon: "☕", photo: "double-turkish-coffee.jpg", photoShape: "portrait" },
  { name: "إسبريسو دبل", nameEn: "Double Espresso", category: "hot", price: 70, icon: "☕", photo: "double-espresso.png", photoShape: "portrait" },
  { name: "إسبريسو سنجل", nameEn: "Single Espresso", category: "hot", price: 50, icon: "☕", photo: "single-espresso.png", photoShape: "portrait" },
  { name: "قهوة تركي سنجل", nameEn: "Single Turkish Coffee", category: "hot", price: 40, icon: "☕", photo: "single-turkish-coffee.jpg", photoShape: "portrait" },
  { name: "شاي فواكه", nameEn: "Fruit Tea", category: "hot", price: 30, icon: "🍵" },
  { name: "شاي نعناع", nameEn: "Mint Tea", category: "hot", price: 20, icon: "🍵" },
  { name: "كابتشينو دبل إسبريسو", nameEn: "Double Espresso Cappuccino", category: "hot", price: 70, icon: "☕" },
  { name: "شاي", nameEn: "Tea", category: "hot", price: 20, icon: "🍵" },
  { name: "لاتيه ساخن", nameEn: "Hot Latte", category: "hot", price: 60, icon: "☕" },
  { name: "يانسون", nameEn: "Anise Tea", category: "hot", price: 25, icon: "🍵" },
  { name: "كاكاو", nameEn: "Cocoa", category: "hot", price: 40, icon: "☕" },
  { name: "قرفة", nameEn: "Cinnamon Tea", category: "hot", price: 25, icon: "🍵" },
  { name: "زنجبيل", nameEn: "Ginger Tea", category: "hot", price: 25, icon: "🍵" },
  { name: "عشبة الليمون", nameEn: "Lemongrass", category: "hot", price: 25, icon: "🍵" },
  { name: "كركديه", nameEn: "Hibiscus Tea", category: "hot", price: 25, icon: "🍵" },
  { name: "بونجورنو", nameEn: "Buongiorno", category: "hot", price: 30, icon: "☕" },
  { name: "كوفي ميكس", nameEn: "Coffee Mix", category: "hot", price: 25, icon: "☕" },
  { name: "كاكاو باللبن", nameEn: "Cocoa with Milk", category: "hot", price: 40, icon: "☕" },
  { name: "شاي أخضر", nameEn: "Green Tea", category: "hot", price: 25, icon: "🍵" },
  { name: "نعناع", nameEn: "Mint", category: "hot", price: 20, icon: "🍵" },
  { name: "قهوة فرنساوي", nameEn: "French Coffee", category: "hot", price: 60, icon: "☕" },
  { name: "فلات وايت دبل", nameEn: "Double Flat White", category: "hot", price: 60, icon: "☕" },
  { name: "كورتادو دبل", nameEn: "Double Cortado", category: "hot", price: 60, icon: "☕" },
  { name: "ماكياتو دبل", nameEn: "Double Macchiato", category: "hot", price: 65, icon: "☕" },
  { name: "شاي لبن", nameEn: "Milk Tea", category: "hot", price: 50, icon: "🍵" },
  { name: "أمريكانو", nameEn: "Americano", category: "hot", price: 60, icon: "☕" },
  { name: "كراميل ميكاتو", nameEn: "Caramel Macchiato", category: "hot", price: 70, icon: "☕" },
  { name: "كراميل لاتيه", nameEn: "Caramel Latte", category: "hot", price: 70, icon: "☕" },
  { name: "سبانيش لاتيه", nameEn: "Spanish Latte", category: "hot", price: 80, icon: "☕" },
  { name: "موكا لاتيه", nameEn: "Mocha Latte", category: "hot", price: 70, icon: "☕" },
  { name: "شاي فتلة", nameEn: "Tea Bag", category: "hot", price: 25, icon: "🍵" },
  { name: "هوت شوكليت", nameEn: "Hot Chocolate", category: "hot", price: 50, icon: "🍫" },
  { name: "آيس لاتيه", nameEn: "Iced Latte", category: "cold", description: "إسبريسو مع حليب بارد وثلج", descriptionEn: "Espresso with cold milk and ice", price: 80, icon: "🧋", badge: "اختيارنا", badgeEn: "Our pick" },
  { name: "آيس سبانيش لاتيه", nameEn: "Iced Spanish Latte", category: "cold", description: "حلاوة الحليب المكثف مع قهوة باردة", descriptionEn: "Sweet condensed milk blended with chilled coffee", price: 110, icon: "🧊" },
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
  { name: "كانز", nameEn: "Canned Drink", category: "cold", price: 40, icon: "🥤", photo: "canned-drink.png" },
  { name: "تويست", nameEn: "Twist", category: "cold", price: 35, icon: "🥤" },
  { name: "ستينج", nameEn: "Sting", category: "cold", price: 35, icon: "⚡" },
  { name: "باربيكان", nameEn: "Barbican", category: "cold", price: 70, icon: "🥤" },
  { name: "ريدبول", nameEn: "Red Bull", category: "cold", price: 100, icon: "⚡", photo: "red-bull.png" },
];

function resolveProductPhoto(item, index) {
  if (item.photo) return item.photo;

  const name = `${item.name} ${item.nameEn}`.toLowerCase();
  const teaSet = ["tea-01.jpg", "tea-02.jpg", "tea-03.jpg", "tea-04.jpg"];

  if (item.icon === "🍵" || /شاي|tea|نعناع|mint|قرفة|زنجبيل|يانسون|أخضر|ginger|cinnamon|anise|fruit/i.test(name)) {
    return teaSet[index % teaSet.length];
  }

  if (item.category === "hot" && (item.icon === "🍫" || /كاكاو|chocolate|شوكليت|cocoa/i.test(name))) {
    return "hot-chocolate-01.jpg";
  }

  if (/عصير ليمون فريش|fresh lemon juice/i.test(name)) return "lemon-drink-01.jpg";

  if (item.category === "cold") {
    if (/لاتيه|latte|موكا|mocha|امريكانو|americano|ماكياتو|macchiato|كولد برو|cold brew|فرابيه|frappe/i.test(name)) {
      return /لاتيه|latte|ماكياتو|macchiato/i.test(name) ? "latte-01.jpg" : "iced-coffee-01.jpg";
    }
    return null;
  }

  if (/اسبريسو|espresso/i.test(name)) return "espresso-01.jpg";
  if (/لاتيه|latte|كابتشينو|cappuccino|فلات وايت|flat white|كورتادو|cortado|ماكياتو|macchiato/i.test(name)) {
    return "latte-01.jpg";
  }
  return ["coffee-cup-01.jpg", "coffee-cup-02.jpg", "coffee-cup-03.jpg", "cafe-coffee-01.jpg"][index % 4];
}


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
    menuFootnote: "* الأسعار غير متوفرة لكل المشروبات حاليًا. الأسعار المعروضة بالجنيه المصري.",
    orderTitle: "اطلب دلوقتي",
    orderDescription: "اختار مشروباتك، وسجّل بيانات التوصيل لإرسال طلبك.",
    cartEmpty: "لسه ما اخترتش أي مشروبات.",
    addToOrder: "أضف للطلب",
    customerName: "الاسم",
    customerNamePlaceholder: "اسمك",
    customerPhone: "رقم الموبايل",
    customerPhonePlaceholder: "01xxxxxxxxx",
    customerAddress: "العنوان",
    customerAddressPlaceholder: "عنوان التوصيل بالتفصيل",
    sendOrder: "إرسال الطلب",
    sendingOrder: "جاري إرسال الطلب...",
    orderSent: "تم إرسال طلبك بنجاح.",
    orderFailed: "حصلت مشكلة أثناء إرسال الطلب. حاول مرة تانية.",
    removeItem: "حذف",
    increaseQuantity: "زيادة الكمية",
    decreaseQuantity: "تقليل الكمية",
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
    menuFootnote: "* Prices are listed for selected drinks only. All displayed prices are in EGP.",
    orderTitle: "Place your order",
    orderDescription: "Choose your drinks and enter your delivery details.",
    cartEmpty: "You haven't chosen any drinks yet.",
    addToOrder: "Add to order",
    customerName: "Name",
    customerNamePlaceholder: "Your name",
    customerPhone: "Phone number",
    customerPhonePlaceholder: "Your phone number",
    customerAddress: "Address",
    customerAddressPlaceholder: "Full delivery address",
    sendOrder: "Send order",
    sendingOrder: "Sending your order...",
    orderSent: "Your order was sent successfully.",
    orderFailed: "There was a problem sending your order. Please try again.",
    removeItem: "Remove",
    increaseQuantity: "Increase quantity",
    decreaseQuantity: "Decrease quantity",
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
const cartItemsElement = document.querySelector("#cart-items");
const cartEmpty = document.querySelector("#cart-empty");
const orderForm = document.querySelector("#order-form");
const orderSubmit = document.querySelector("#order-submit");
const orderStatus = document.querySelector("#order-status");
const cart = new Map();
let selectedCategory = "all";
let currentLanguage = "ar";
let animateMenuTransition = false;

function getIllustration(item) {
  const illustration = document.createElement("span");
  illustration.className = "image-fallback";
  illustration.setAttribute("aria-hidden", "true");
  illustration.textContent = item.icon;
  return illustration;
}

function normalizeSearchText(text) {
  return text
    .toLocaleLowerCase(currentLanguage)
    .normalize("NFD")
    .replace(/[\u064B-\u065F\u0670\u0640]/g, "")
    .replace(/[أإآ]/g, "ا");
}

function renderMenu() {
  const query = normalizeSearchText(searchInput.value.trim());
  const visibleItems = menuItems.filter((item) => {
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    const searchableText = normalizeSearchText(`${item.name} ${item.nameEn} ${item.description || ""} ${item.descriptionEn || ""}`);
    return matchesCategory && searchableText.includes(query);
  });

  const cards = visibleItems.map((item, index) => {
    const name = currentLanguage === "ar" ? item.name : item.nameEn;
    const description = currentLanguage === "ar" ? item.description : item.descriptionEn;
    const badge = currentLanguage === "ar" ? item.badge : item.badgeEn;
    const card = document.createElement("article");
    card.className = "menu-card";
    if (animateMenuTransition) {
      card.classList.add("is-entering");
      card.style.setProperty("--item-index", Math.min(index, 8));
    }

    const artwork = document.createElement("span");
    artwork.className = `item-art ${item.category}`;
    if (item.photoShape === "portrait") artwork.classList.add("portrait-photo");
    artwork.setAttribute("aria-hidden", "true");
    const photo = resolveProductPhoto(item, menuItems.indexOf(item));
    if (photo) {
      const image = document.createElement("img");
      image.className = "item-photo";
      image.src = `assets/drinks/${photo}`;
      image.alt = "";
      image.loading = index < 6 ? "eager" : "lazy";
      image.addEventListener("error", () => artwork.replaceChildren(getIllustration(item)), { once: true });
      artwork.append(image);
    } else {
      artwork.append(getIllustration(item));
    }
    card.append(artwork);

    const details = document.createElement("div");
    details.className = "item-details";
    const heading = document.createElement("h3");
    heading.textContent = name;
    details.append(heading);
    if (description) {
      const descriptionElement = document.createElement("p");
      descriptionElement.textContent = description;
      details.append(descriptionElement);
    }
    if (item.price !== undefined) {
      const price = document.createElement("span");
      price.className = "item-price";
      price.append(document.createTextNode(item.price.toLocaleString(currentLanguage === "ar" ? "ar-EG" : "en")));
      const currency = document.createElement("small");
      currency.textContent = translations[currentLanguage].currency;
      price.append(currency);
      details.append(price);
    }
    card.append(details);

    if (badge) {
      const badgeElement = document.createElement("span");
      badgeElement.className = "item-badge";
      badgeElement.textContent = badge;
      card.append(badgeElement);
    }

    const addButton = document.createElement("button");
    addButton.className = "add-to-order";
    addButton.type = "button";
    addButton.dataset.itemIndex = String(menuItems.indexOf(item));
    addButton.textContent = `${translations[currentLanguage].addToOrder}${cart.has(menuItems.indexOf(item)) ? ` (${cart.get(menuItems.indexOf(item))})` : ""}`;
    card.append(addButton);
    return card;
  });

  menuGrid.replaceChildren(...cards);
  animateMenuTransition = false;
  emptyState.hidden = visibleItems.length > 0;
  renderCart();
}

function renderCart() {
  const copy = translations[currentLanguage];
  const entries = [...cart.entries()];
  cartEmpty.hidden = entries.length > 0;
  cartItemsElement.replaceChildren(...entries.map(([itemIndex, quantity]) => {
    const item = menuItems[itemIndex];
    const row = document.createElement("div");
    row.className = "cart-item";
    const name = document.createElement("span");
    name.className = "cart-item-name";
    name.textContent = `${currentLanguage === "ar" ? item.name : item.nameEn} × ${quantity}`;
    row.append(name);

    const controls = document.createElement("div");
    controls.className = "cart-item-controls";
    [["decrease", "−", copy.decreaseQuantity], ["increase", "+", copy.increaseQuantity], ["remove", copy.removeItem, copy.removeItem]].forEach(([action, label, ariaLabel]) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `cart-control cart-control-${action}`;
      button.dataset.cartAction = action;
      button.dataset.itemIndex = String(itemIndex);
      button.setAttribute("aria-label", `${ariaLabel}: ${currentLanguage === "ar" ? item.name : item.nameEn}`);
      button.textContent = label;
      controls.append(button);
    });
    row.append(controls);
    return row;
  }));
}

menuGrid.addEventListener("click", (event) => {
  const button = event.target.closest(".add-to-order");
  if (!button) return;
  const itemIndex = Number(button.dataset.itemIndex);
  if (!Number.isInteger(itemIndex) || !menuItems[itemIndex]) return;
  cart.set(itemIndex, Math.min((cart.get(itemIndex) || 0) + 1, 99));
  orderStatus.textContent = "";
  renderMenu();
});

cartItemsElement.addEventListener("click", (event) => {
  const button = event.target.closest("[data-cart-action]");
  if (!button) return;
  const itemIndex = Number(button.dataset.itemIndex);
  const quantity = cart.get(itemIndex);
  if (!Number.isInteger(itemIndex) || quantity === undefined) return;
  if (button.dataset.cartAction === "remove" || (button.dataset.cartAction === "decrease" && quantity === 1)) {
    cart.delete(itemIndex);
  } else if (button.dataset.cartAction === "decrease") {
    cart.set(itemIndex, quantity - 1);
  } else if (button.dataset.cartAction === "increase") {
    cart.set(itemIndex, Math.min(quantity + 1, 99));
  }
  renderMenu();
});

orderForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (cart.size === 0) {
    orderStatus.dataset.state = "error";
    orderStatus.textContent = translations[currentLanguage].cartEmpty;
    return;
  }

  const formData = new FormData(orderForm);
  const items = [...cart.entries()]
    .map(([itemIndex, quantity]) => `${menuItems[itemIndex].name} x${quantity}`)
    .join("\n");
  orderSubmit.disabled = true;
  orderStatus.dataset.state = "pending";
  orderStatus.textContent = translations[currentLanguage].sendingOrder;

  try {
    const response = await fetch("https://drinks-orders.stevwageh.workers.dev", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name").trim(),
        phone: formData.get("phone").trim(),
        address: formData.get("address").trim(),
        items,
      }),
    });
    if (!response.ok) {
      throw new Error(`Order service returned HTTP ${response.status}`);
    }
    cart.clear();
    orderForm.reset();
    renderMenu();
    orderStatus.dataset.state = "success";
    orderStatus.textContent = translations[currentLanguage].orderSent;
  } catch (error) {
    console.error("Could not send order:", error);
    orderStatus.dataset.state = "error";
    orderStatus.textContent = translations[currentLanguage].orderFailed;
  } finally {
    orderSubmit.disabled = false;
  }
});

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
      element.replaceChildren(
        document.createTextNode(firstLine),
        document.createElement("br"),
        document.createTextNode(secondLine),
      );
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

  const categoryLabels = {
    all: copy.categoryAll,
    hot: copy.categoryHot,
    cold: copy.categoryCold,
  };
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
  toggle.addEventListener("click", () => {
    setLanguage(currentLanguage === "ar" ? "en" : "ar");
  });
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
