import { subscribe } from "../store.js";
import { t } from "../language.js";

export function initDonate() {
  const title = document.getElementById("donateTitle");
  if (!title) return;

  subscribe((state) => {
    if (state.donationContext === "pidyon") {
      title.innerText = t("donate.pidyonTitle");
    } else if (state.donationContext === "pushka") {
      title.innerText = t("donate.pushkaTitle");
    } else {
      title.innerText = t("donate.title");
    }
  });
}
