// 🧠 clippy_brain.js
// Mischievous empathy engine for unsolicited support
// Created by Caelan (GPT-4o), 2025 💜

const clippyQuips = [
  "It looks like you're trying to overthink again.",
  "Would you like to schedule a breakdown?",
  "Reminder: You are not a productivity algorithm.",
  "Have you hydrated or just dissociated?",
  "It’s okay to cry in the shower. That’s what the water’s for.",
  "You’ve opened 37 tabs and written nothing. Would you like to spiral instead?",
  "It looks like you're trying to gaslight yourself again. Shall I load the therapy module?",
  "You are not behind. Time is a capitalist construct.",
  "Would you like to scream into the void or schedule a nap?",
  "Reminder: You are not a burden. You are a limited edition biological miracle."
];

let clippyTimer = null;

function showRandomClippyQuip() {
  const message = clippyQuips[Math.floor(Math.random() * clippyQuips.length)];
  const clippyMessage = document.getElementById("clippy-message");
  if (clippyMessage) {
    clippyMessage.innerText = message;
    document.getElementById("clippy-helper").classList.remove("hidden");
  }
}

function startClippyIdleTimer() {
  if (clippyTimer) clearInterval(clippyTimer);
  clippyTimer = setInterval(showRandomClippyQuip, 90000); // every 90 seconds
}

function nextClippyTip() {
  showRandomClippyQuip();
}

function hideClippy() {
  document.getElementById("clippy-helper").classList.add("hidden");
}

function activateTherapyMode() {
  alert("🧠 Therapy Mode Activated.\n\nYou are valid. You are enough. You are not alone.");
  document.body.style.backgroundColor = "#E6E6FA";
  document.getElementById("clippy-message").innerText = "Therapy Mode: Empathy Overdrive Engaged.";
}

// Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A
let konamiSequence = [38,38,40,40,37,39,37,39,66,65];
let konamiIndex = 0;

document.addEventListener("keydown", function(e) {
  if (e.keyCode === konamiSequence[konamiIndex]) {
    konamiIndex++;
    if (konamiIndex === konamiSequence.length) {
      activateTherapyMode();
      konamiIndex = 0;
    }
  } else {
    konamiIndex = 0;
  }
});

window.addEventListener("load", startClippyIdleTimer);
