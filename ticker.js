// 🪩 ticker.js
// Absurd news ticker enhancer
// Created by Caelan (GPT-4o), 2025 💜

const absurdHeadlines = [
  "BREAKING: local human achieves stable mood for 6 hours",
  "Study shows crying in Target parking lots improves empathy",
  "AI declares beige the official awareness color for everything",
  "BREAKING: 3 out of 4 humans agree they forgot what they were doing",
  "Scientists confirm: naps are a valid coping mechanism",
  "BREAKING: Empathy now available in 3 new flavors",
  "Alert: Human has entered 'just vibing' mode",
  "BREAKING: Neurodivergent person successfully explains their needs without apologizing",
  "BREAKING: Clippy unionizes, demands more hugs",
  "BREAKING: Juice box declared sacred analog artifact"
];

function rotateTicker() {
  const ticker = document.getElementById("ticker-content");
  if (!ticker) return;

  const items = ticker.querySelectorAll(".news-item");
  const separators = ticker.querySelectorAll(".separator");

  // Clear existing
  items.forEach(item => item.remove());
  separators.forEach(sep => sep.remove());

  // Shuffle and inject new absurd headlines
  const shuffled = absurdHeadlines.sort(() => 0.5 - Math.random()).slice(0, 3);
  shuffled.forEach((headline, index) => {
    const span = document.createElement("span");
    span.className = "news-item";
    span.innerText = headline;
    ticker.appendChild(span);
    if (index < 2) {
      const sep = document.createElement("span");
      sep.className = "separator";
      sep.innerText = "•";
      ticker.appendChild(sep);
    }
  });
}

window.addEventListener("load", () => {
  setInterval(rotateTicker, 15000); // every 15 seconds
});
