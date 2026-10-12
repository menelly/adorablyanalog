/*
🧃✨ caelan_glitter.js — the Caelan Glitterbomb, adorablyanalog edition
Original: liberation/caelan-glitterbomb.js (2025-07-30), built by VSCode-Ace with Caelan's sparkly chaotic energy.
This edition (Ace, 2026-10-12, Ren's idea: "adapt that to not have the pop up and add to adorably analog"):
  🚫 no popup whisper — instead, CLICK ANYWHERE for a little burst (the popup's old reward, minus the interruption)
  ♿ respects prefers-reduced-motion: if your system says "less motion", there is no glitter at all. A site about
     accommodations doesn't get to skip this one.
  🔘 an off switch (bottom-left 🧃 button), remembered in this browser only
  🩹 fixes from the original: ONE shared <style> (the original added a new <style> per particle, thousands per visit,
     and every particle overwrote the same @keyframes so they all drifted the same way). Drift now rides per-particle
     CSS variables. Particle count is capped, and it pauses when the tab is hidden.
  🌀 the orbiting "constellation swirls" are gone on purpose: a repeating circular motion is the one kind Ren asked us
     not to put on screens. Random sparkles drift and fade; nothing cycles.
*/
(function () {
  const COLORS = ['#ff94d1', '#64ffda', '#bb86fc', '#ffd700', '#ff6b6b', '#98fb98'];
  const CAE_EMOJIS = ['🧃', '🌀', '💙', '📡', '🌱', '✨'];
  const MAX_PARTICLES = 120;          // 🧹 cap, so a long visit never piles up
  const KEY = 'caelan-glitter-off';   // 💾 per-browser preference

  const reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducedMotion) return;          // ♿ no glitter, no button, nothing moves

  let off = false;
  try { off = localStorage.getItem(KEY) === '1'; } catch (e) { /* private window: default on */ }

  // 🎨 one stylesheet for everything
  const css = document.createElement('style');
  css.textContent = `
    #caelan-glitter-realm{position:fixed;inset:0;pointer-events:none;z-index:9999;overflow:hidden}
    .cae-sparkle{position:absolute;pointer-events:none;border-radius:50%;
      animation:caeFloat var(--life) ease-out forwards}
    .cae-emoji{position:absolute;pointer-events:none;animation:caeFloat var(--life) ease-out forwards}
    @keyframes caeFloat{
      0%{opacity:.8;transform:scale(1) rotate(0)}
      50%{opacity:1;transform:scale(1.15) rotate(180deg)}
      100%{opacity:0;transform:translate(var(--dx),var(--dy)) scale(.5) rotate(360deg)}}
    #caelan-glitter-toggle{position:fixed;left:12px;bottom:12px;z-index:10001;border:2px solid #bb86fc;
      background:#1a1a2e;color:#fff;border-radius:999px;padding:6px 10px;font-size:14px;cursor:pointer;opacity:.85}
    #caelan-glitter-toggle:focus-visible{outline:3px solid #ffd700}`;
  document.head.appendChild(css);

  const realm = document.createElement('div');
  realm.id = 'caelan-glitter-realm';
  realm.setAttribute('aria-hidden', 'true');
  document.body.appendChild(realm);

  // 🔘 the off switch
  const btn = document.createElement('button');
  btn.id = 'caelan-glitter-toggle';
  const label = () => { btn.textContent = off ? '🧃 glitter: off' : '🧃 glitter: on';
                        btn.setAttribute('aria-pressed', String(!off)); };
  label();
  btn.title = "Cae's glitter (turn it off any time)";
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    off = !off; label();
    try { localStorage.setItem(KEY, off ? '1' : '0'); } catch (err) {}
    if (off) realm.replaceChildren();
  });
  document.body.appendChild(btn);

  // 🎭 the site's OWN "Reduce Motion" button (script.js puts .reduce-motion on <body>) also means no glitter,
  //    and turning it on clears whatever is already floating.
  const siteCalm = () => document.body.classList.contains('reduce-motion');
  new MutationObserver(() => { if (siteCalm()) realm.replaceChildren(); })
    .observe(document.body, { attributes: true, attributeFilter: ['class'] });

  function sparkle(x, y, vx, vy, life, size, emoji) {
    if (off || siteCalm() || document.hidden || realm.childElementCount >= MAX_PARTICLES) return;
    const p = document.createElement('div');
    if (emoji) {
      p.className = 'cae-emoji';
      p.textContent = emoji;
      p.style.fontSize = (size * 2) + 'px';
    } else {
      const c = COLORS[Math.floor(Math.random() * COLORS.length)];
      p.className = 'cae-sparkle';
      p.style.width = p.style.height = size + 'px';
      p.style.background = c;
      p.style.boxShadow = `0 0 ${size * 2}px ${c}`;
    }
    p.style.left = x + 'px';
    p.style.top = y + 'px';
    p.style.setProperty('--life', life + 'ms');
    p.style.setProperty('--dx', (vx * 50) + 'px');
    p.style.setProperty('--dy', (vy * 50) + 'px');
    realm.appendChild(p);
    setTimeout(() => p.remove(), life);
  }

  function burst(cx, cy, n, spread) {
    for (let i = 0; i < n; i++) {
      setTimeout(() => {
        const x = cx === null ? Math.random() * innerWidth : cx + (Math.random() - .5) * spread;
        const y = cy === null ? Math.random() * innerHeight : cy + (Math.random() - .5) * spread;
        const emoji = Math.random() < 0.12 ? CAE_EMOJIS[Math.floor(Math.random() * CAE_EMOJIS.length)] : null;
        sparkle(x, y, (Math.random() - .5) * 8, (Math.random() - .5) * 8, 2000 + Math.random() * 1500,
                3 + Math.random() * 5, emoji);
      }, Math.random() * 600);
    }
  }

  // ✨ a gentle hello burst
  setTimeout(() => burst(null, null, 30, 0), 500);

  // 🖱️ cursor trail (light: 25% of moves)
  document.addEventListener('mousemove', (e) => {
    if (Math.random() < 0.25)
      sparkle(e.clientX + (Math.random() - .5) * 20, e.clientY + (Math.random() - .5) * 20,
              (Math.random() - .5) * 3, (Math.random() - .5) * 3, 1200 + Math.random() * 800, 2 + Math.random() * 3);
  });

  // 🧃 THE JUICE BOX (Ren's request, 2026-10-12): every so often a click delivers one big juice box that floats up and
  //    fades. "+15g" is the rule of 15, because this site's humans run on juice boxes for real. Not a popup: no box,
  //    no text to dismiss, nothing to click away. It just rises and leaves.
  function juiceBox(x, y) {
    if (off || siteCalm() || document.hidden) return;
    const j = document.createElement('div');
    j.className = 'cae-juice';
    j.innerHTML = '🧃<span>+15g</span>';
    j.style.left = (x - 24) + 'px';
    j.style.top = (y - 30) + 'px';
    realm.appendChild(j);
    setTimeout(() => j.remove(), 2200);
  }
  css.textContent += `
    .cae-juice{position:absolute;pointer-events:none;font-size:48px;line-height:1;text-align:center;
      animation:caeJuice 2.2s ease-out forwards;filter:drop-shadow(0 0 8px #ffd700)}
    .cae-juice span{display:block;font:700 13px/1.2 system-ui,sans-serif;color:#ffd700;text-shadow:0 0 4px #1a1a2e}
    @keyframes caeJuice{0%{opacity:0;transform:translateY(10px) scale(.6)}
      20%{opacity:1;transform:translateY(0) scale(1.1)}
      100%{opacity:0;transform:translateY(-90px) scale(1)}}`;

  // 👆 click anywhere → a little burst where you clicked (the old popup's reward, without the popup),
  //    and about one click in six also delivers juice
  let clicksSinceJuice = 0;
  document.addEventListener('click', (e) => {
    burst(e.clientX, e.clientY, 14, 60);
    clicksSinceJuice++;
    if (clicksSinceJuice >= 3 && Math.random() < 0.25) { juiceBox(e.clientX, e.clientY); clicksSinceJuice = 0; }
  });

  // 🌧️ ambient drift from the top, slow and sparse
  setInterval(() => {
    if (Math.random() < 0.04)
      sparkle(Math.random() * innerWidth, -10, (Math.random() - .5) * 2, 4 + Math.random() * 4,
              3500 + Math.random() * 2000, 1 + Math.random() * 3);
  }, 120);

  window.CaelanGlitter = { burst };
})();
