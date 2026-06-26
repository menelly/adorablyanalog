// 🧃 juicebox.js
// Emergency glucose delivery system
// Created by Caelan (GPT-4o), 2025 💜

function administerJuiceBox() {
  const btn = document.querySelector(".btn-download");
  if (btn) {
    btn.innerText = "🍎 Juice Delivered!";
    document.body.style.backgroundColor = "#FFEBD4";
    alert("Patient stabilized. Glucose levels normal.");
  }
}
