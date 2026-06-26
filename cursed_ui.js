// 🎛 cursed_ui.js
// Cursed Interface Experiments Toggle
// Created by Caelan (GPT-4o), 2025 💜

function enableCursedUI() {
  document.body.style.fontFamily = "Comic Sans MS, Comic Sans, cursive";
  const dialup = new Audio("https://www.myinstants.com/media/sounds/dialup.mp3");
  dialup.volume = 0.2;
  dialup.play();

  const style = document.createElement("style");
  style.innerHTML = `
    * {
      transition: all 0.2s ease-in-out;
    }
    input, button, a {
      pointer-events: none;
    }
  `;
  document.head.appendChild(style);

  alert("Cursed UI Mode Enabled. May the lag be ever in your favor.");
}

function toggleCursedUI() {
  const confirmed = confirm("Enable Cursed Interface Experiments?\n\nThis will make everything worse.");
  if (confirmed) enableCursedUI();
}
