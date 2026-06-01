import { setState } from "./store.js";

const STORAGE_KEY = "siteLanguage";

const translations = {
  en: {
    "nav.home": "Home",
    "nav.kvitel": "Kvitel",
    "nav.pushka": "Pushka",
    "nav.contact": "Contact",
    "nav.donate": "Donate",
    "ticker": "Send your Kvitel - Donate and be part of something meaningful",
    "hero.title": "Send Your Kvitel",
    "hero.subtitle": "Be part of something meaningful",
    "hero.start": "Start Kvitel",
    "kvitel.title": "Send a Kvitel",
    "kvitel.textPlaceholder": "Write your kvitel...",
    "kvitel.addPidyon": "Add Pidyon",
    "kvitel.pidyonNote": "You will be redirected to payment after submitting",
    "kvitel.emptyError": "Please write a kvitel",
    "kvitel.sending": "Sending...",
    "kvitel.sent": "Sent",
    "common.submit": "Submit",
    "common.nameOptional": "Name (optional)",
    "common.emailOptional": "Email (optional)",
    "common.city": "City",
    "common.phone": "Phone Number",
    "common.address": "Address",
    "common.yourName": "Your Name",
    "common.error": "Something went wrong",
    "donate.title": "Donate",
    "donate.pidyonTitle": "Pidyon for your Kvitel",
    "donate.pushkaTitle": "Pushka Collection Payment",
    "pushka.title": "Pushka Services",
    "pushka.empty": "Empty My Pushka",
    "pushka.request": "Request a Pushka",
    "pushka.emptyQuestion": "How would you like to empty it?",
    "pushka.payNow": "Pay Now (Card)",
    "pushka.pickup": "Request Gabai Pickup",
    "pushka.submitPickup": "Submit Pickup Request",
    "pushka.submitRequest": "Submit Request",
    "pushka.pickupSuccess": "Pickup request submitted",
    "pushka.requestSuccess": "Pushka request submitted",
    "pushka.submitError": "Error submitting request",
    "contact.title": "Contact Gabai",
    "contact.subtitle": "We are here to help you",
    "contact.phone": "Phone",
    "contact.email": "Email"
  },
  he: {
    "nav.home": "בית",
    "nav.kvitel": "קוויטל",
    "nav.pushka": "פושקה",
    "nav.contact": "צור קשר",
    "nav.donate": "תרומה",
    "ticker": "שלחו קוויטל - תרמו והיו חלק מזכות גדולה",
    "hero.title": "שלחו קוויטל",
    "hero.subtitle": "היו חלק ממשהו משמעותי",
    "hero.start": "התחלת קוויטל",
    "kvitel.title": "שליחת קוויטל",
    "kvitel.textPlaceholder": "כתבו את הקוויטל שלכם...",
    "kvitel.addPidyon": "הוסף פדיון",
    "kvitel.pidyonNote": "לאחר השליחה תועברו לתשלום",
    "kvitel.emptyError": "נא לכתוב קוויטל",
    "kvitel.sending": "שולח...",
    "kvitel.sent": "נשלח",
    "common.submit": "שליחה",
    "common.nameOptional": "שם (לא חובה)",
    "common.emailOptional": "אימייל (לא חובה)",
    "common.city": "עיר",
    "common.phone": "מספר טלפון",
    "common.address": "כתובת",
    "common.yourName": "השם שלך",
    "common.error": "משהו השתבש",
    "donate.title": "תרומה",
    "donate.pidyonTitle": "פדיון עבור הקוויטל",
    "donate.pushkaTitle": "תשלום איסוף פושקה",
    "pushka.title": "שירותי פושקה",
    "pushka.empty": "ריקון הפושקה שלי",
    "pushka.request": "בקשת פושקה",
    "pushka.emptyQuestion": "איך תרצו לרוקן אותה?",
    "pushka.payNow": "תשלום עכשיו (אשראי)",
    "pushka.pickup": "בקשת איסוף גבאי",
    "pushka.submitPickup": "שליחת בקשת איסוף",
    "pushka.submitRequest": "שליחת בקשה",
    "pushka.pickupSuccess": "בקשת האיסוף נשלחה",
    "pushka.requestSuccess": "בקשת הפושקה נשלחה",
    "pushka.submitError": "שגיאה בשליחת הבקשה",
    "contact.title": "צור קשר עם הגבאי",
    "contact.subtitle": "אנחנו כאן כדי לעזור",
    "contact.phone": "טלפון",
    "contact.email": "אימייל"
  }
};

let currentLanguage = localStorage.getItem(STORAGE_KEY) || "en";

export function initLanguage() {
  applyLanguage(currentLanguage);

  const toggle = document.getElementById("languageToggle");
  if (!toggle) return;

  toggle.addEventListener("click", () => {
    const nextLanguage = currentLanguage === "en" ? "he" : "en";
    applyLanguage(nextLanguage);
  });
}

export function applyLanguage(language) {
  currentLanguage = translations[language] ? language : "en";
  localStorage.setItem(STORAGE_KEY, currentLanguage);

  document.documentElement.lang = currentLanguage;
  document.documentElement.dir = currentLanguage === "he" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach(element => {
    element.textContent = t(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
    element.placeholder = t(element.dataset.i18nPlaceholder);
  });

  const toggle = document.getElementById("languageToggle");
  if (toggle) {
    toggle.textContent = currentLanguage === "en" ? "עברית" : "English";
  }

  setState({ language: currentLanguage });
}

export function getLanguage() {
  return currentLanguage;
}

export function t(key) {
  return translations[currentLanguage]?.[key] || translations.en[key] || key;
}
