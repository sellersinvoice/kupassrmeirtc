// /js/app.js

import { initRouter } from "./router.js";
import { initLanguage } from "./language.js";
import { initSiteSettings } from "./siteSettings.js";
import { initKvitel } from "./sections/kvitel.js";
import { initDonate } from "./sections/donate.js";
import { initPushka } from "./sections/pushka.js";

document.addEventListener("DOMContentLoaded", () => {
  initLanguage();
  initRouter();
  initDonate();
  initSiteSettings();
  initContactToggle();
  initKvitel();
  initPushka();
});

/* =========================
   CONTACT BUTTON LOGIC
========================= */

function initContactToggle() {
  const btn = document.getElementById("contactToggle");
  const box = document.getElementById("contactBox");

  if (!btn || !box) return;

  btn.addEventListener("click", () => {
    box.classList.toggle("hidden");
  });
}
