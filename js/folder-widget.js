/* ============================================================
   folder-widget.js
   วาง <script src="folder-widget.js"></script> ก่อนปิด </body>
   ทุกอย่างถูกห่อใน IIFE — ไม่รั่วสู่ global scope
   ============================================================ */

(function () {
  let popupActive = false;
  let popupIndex = 0;

  let wheelLocked = false;
  let wheelAccum = 0;
  'use strict';

  /* ── แก้เนื้อหา slides ตรงนี้ที่เดียว ── */
  const SLIDES = [
    {
      label: "01 / Introduction",
      title: "Welcome to\nthe Folder",
      body: "This interactive folder holds key pieces of information. Scroll through to discover each one, presented in beautiful glass cards.",
      accent: "#F5C842",
      accentEmoji: "✦",
      image: "../pic/IMG_20250911_0001.jpg"
    },
    {
      label: "02 / Vision",
      title: "Scroll-Driven\nStorytelling",
      body: "Every pixel of your scroll controls this experience — the gap between slides, the tilt of the folder, the rhythm of reveal.",
      accent: "#9B7FFF",
      accentEmoji: "◈",
      image: null
    },
    {
      label: "03 / Design",
      title: "Glass\nMorphism",
      body: "Each slide is crafted with frosted glass — layered transparencies, subtle refraction, and deep shadows that create real depth.",
      accent: "#4ECDC4",
      accentEmoji: "◉",
      image: null
    },
    {
      label: "04 / Interaction",
      title: "Click to\nRead More",
      body: "Tap any slide to bring it front and center. A smooth animation flips it to face you directly for comfortable reading.",
      accent: "#FF6B6B",
      accentEmoji: "⬡",
      image: null
    },
    {
      label: "05 / Technology",
      title: "Pure CSS\n& JavaScript",
      body: "No frameworks, no libraries. Just hand-crafted scroll math and CSS transforms working in harmony to produce this effect.",
      accent: "#F5C842",
      accentEmoji: "⧫",
      image: null
    },
  ];

  /* ── Utils ── */
  const lerp   = (a, b, t) => a + (b - a) * t;
  const clamp  = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
  const easeOut   = t => 1 - (1 - t) * (1 - t);
  const easeInOut = t => t < 0.5 ? 2*t*t : 1 - Math.pow(-2*t+2, 2) / 2;

  /* ── Init ── */
  function init() {
    const driver     = document.getElementById('fw-driver');
    const stage      = document.getElementById('fw-stage');
    const folderEl   = document.getElementById('fw-folder');
    const folderFront= document.getElementById('fw-folder-front');
    const face       = document.getElementById('fw-face');
    const slidesWrap = document.getElementById('fw-slides-wrap');
    const hint       = document.getElementById('fw-hint');
    const dotsWrap   = document.getElementById('fw-dots');
    const popup      = document.getElementById('fw-popup');
    const popupClose = document.getElementById('fw-popup-close');
    const popupLabel = document.getElementById('fw-popup-label');
    const popupTitle = document.getElementById('fw-popup-title');
    const popupBody  = document.getElementById('fw-popup-body');
    const popupPic   = document.getElementById('fw-popup-pic');

    

    if (!driver || !folderEl) return;

    /* ── Auto-fix: ตรวจ ancestor ที่มี overflow กั้น sticky ── */
    (function fixStickyAncestors() {
      let el = driver.parentElement;
      while (el && el !== document.documentElement) {
        const s = window.getComputedStyle(el);
        if (['hidden','auto','scroll'].some(v => s.overflow===v || s.overflowX===v || s.overflowY===v)) {
          console.warn('[folder-widget] auto-fix overflow on', el, '→ overflow:visible');
          el.style.overflow = 'visible';
        }
        el = el.parentElement;
      }
    })();

    /* ── Build slides DOM จาก SLIDES array ── */
    slidesWrap.innerHTML = '';
    dotsWrap.innerHTML   = '';

    const slideEls = SLIDES.map((data, i) => {
      const el = document.createElement('div');
      el.className = 'fw-slide';
      el.innerHTML =
        '<div class="fw-slide-inner">' +
          '<div class="fw-slide-label">' + data.label + '</div>' +
          '<div class="fw-slide-title">' + data.title.replace('\n', '<br>') + '</div>' +
          '<div class="fw-slide-body">' + data.body + '</div>' +
          '<div class="fw-slide-accent" style="background:' + data.accent + '20;color:' + data.accent + '">' +
            data.accentEmoji +
          '</div>' +
        '</div>';
      el.addEventListener('click', () => openPopup(i));
      slidesWrap.appendChild(el);
      return el;
    });

    /* ── Build dots ── */
    const dots = SLIDES.map(() => {
      const d = document.createElement('div');
      d.className = 'fw-dot';
      dotsWrap.appendChild(d);
      return d;
    });

    /* ── Popup ── */
    function openPopup(i) {
      updatePopup(i);
      const d = SLIDES[i];

      popupIndex = i;
      popupActive = true;

      popupLabel.textContent = d.label;
      popupTitle.innerHTML   = d.title.replace('\n', '<br>');
      popupBody.textContent  = d.body;
      popup.classList.add('active');

      // จัดการรูป
      popupPic.innerHTML = '';

      if (d.image) {
        const img = document.createElement('img');
        img.src = d.image;
        img.alt = d.title;
        popupPic.appendChild(img);
      }

      document.body.style.overflow = 'hidden';
    }
    function closePopup() {
      popup.classList.remove('active');
      popupActive = false;

      document.body.style.overflow = '';

      wheelAccum = 0;
      wheelLocked = false;
    }
    popupClose.addEventListener('click', closePopup);
    document.getElementById('fw-popup-backdrop').addEventListener('click', closePopup);
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closePopup(); });

    /* ── Scroll progress relative to #fw-driver ── */
    function getP() {
      const driverTop = driver.getBoundingClientRect().top + window.scrollY;
      const scrollable = driver.offsetHeight - window.innerHeight;
      return clamp((window.scrollY - driverTop) / scrollable, 0, 1);
    }

    const N = SLIDES.length;

    /* ── Main render ── */
    function render() {
      const p = getP();

      // Scroll hint
      hint.style.opacity = p < 0.02 ? '1' : '0';

      // Phase 1: 0 → 0.15 — folder tilts + front opens
      const tiltP = clamp(p / 0.15, 0, 1);
      const tilt  = easeInOut(tiltP);

      folderEl.style.transform    = `rotateY(${lerp(0, -25, tilt)}deg) rotateX(${lerp(0, 15, tilt)}deg)`;
      folderFront.style.transform = `rotateX(${lerp(0, -85, tilt)}deg)`;
      face.style.opacity          = String(1 - tilt);

      // Phase 2: 0.05 → 0.40 — slides fan out
      const fanP = clamp((p - 0.05) / 0.35, 0, 1);

      // Phase 3: 0.40 → 0.95 — slides parade one by one
      const paradeP  = clamp((p - 0.40) / 0.55, 0, 1);
      const inParade = p >= 0.40;
      const activeIdx = inParade
        ? (paradeP < 1 ? Math.floor(paradeP * N) : N - 1)
        : -1;
      const slideProgress = (paradeP * N) % 1;

      // Dots
      const dotsVisible = fanP > 0.5;
      dots.forEach((d, i) => d.classList.toggle('active', i === activeIdx && inParade));

      slideEls.forEach((el, i) => {
        if (!inParade) {
          /* ── Fan phase ── */
          const fanned = easeOut(fanP);
          const gap    = lerp(4, 28, fanned);
          const zPos = (N - i) * gap;
          const yOff   = lerp(0, -i * 2, fanned);

            el.style.transform    = `translate(-50%, -50%) translateZ(${zPos}px) translateY(${yOff}px)`;
          el.style.opacity      = fanP > 0.15
            ? String(Math.min(1, (fanP - 0.15) / 0.2 + i * 0.1))
            : '0';
          el.style.pointerEvents = fanP > 0.5 ? 'all' : 'none';

        } else {
          /* ── Parade phase ── */
          const gap  = 28;
          const zBase = (N - i) * gap;          
          let rotX = 0, rotY = 0, ty = 0, tz = zBase, scale = 1, opacity = 1;
          el.style.filter = (i === activeIdx) ? 'none' : 'blur(1px)';

          if (i === activeIdx) {
            const t  = easeInOut(clamp(slideProgress * 2, 0, 1));
            const t2 = easeInOut(clamp((slideProgress - 0.5) * 2, 0, 1));

            if (slideProgress < 0.5) {
              // sweep forward — face user
              tz    = lerp(zBase, 160, t);
              rotX  = lerp(0, -10, t);
              ty    = lerp(0, -30, t);
              scale = lerp(1, 1.15, t);
            } else {
              // return back
              tz    = lerp(160, zBase, t2);
              rotX  = lerp(-10, 0, t2);
              ty    = lerp(-30, 0, t2);
              scale = lerp(1.15, 1, t2);
            }
          } else if (i < activeIdx) {
            tz      = zBase - 40;
            opacity = 0.25;
          } else {
            opacity = 0.4;
          }

          el.style.transform    = `translate(-50%, -50%) translateZ(${tz}px) translateY(${ty}px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(${scale})`;
          el.style.opacity      = String(opacity);
          el.style.pointerEvents = 'all';
        }
      });
    }

    window.addEventListener('scroll', render, { passive: true });
    window.addEventListener('resize', render);
    render();

    window.addEventListener('wheel', (e) => {

      if (!popupActive) return;

      e.preventDefault();

      if (wheelLocked) return;

      wheelAccum += e.deltaY;

      const threshold = 120; // ปรับความไวได้

      if (Math.abs(wheelAccum) >= threshold) {

        wheelLocked = true;

        if (wheelAccum > 0) {
          popupIndex = Math.min(popupIndex + 1, SLIDES.length - 1);
        } else {
          popupIndex = Math.max(popupIndex - 1, 0);
        }

        updatePopup(popupIndex);
        syncBackgroundToPopup();

        wheelAccum = 0;

        setTimeout(() => {
          wheelLocked = false;
        }, 300);
      }

    }, { passive: false });

    function updatePopup(i) {
      const d = SLIDES[i];

      popupLabel.textContent = d.label;
      popupTitle.innerHTML   = d.title.replace('\n', '<br>');
      popupBody.textContent  = d.body;

      popupPic.innerHTML = '';
      if (d.image) {
        const img = document.createElement('img');
        img.src = d.image;
        img.alt = d.title;
        popupPic.appendChild(img);
      }
    }

    /* 🔥 ต้องอยู่ระดับเดียวกับ updatePopup */
    function syncBackgroundToPopup() {
      const driverTop = driver.getBoundingClientRect().top + window.scrollY;
      const scrollable = driver.offsetHeight - window.innerHeight;

      const targetP = popupIndex / (SLIDES.length - 1);

      window.scrollTo({
        top: driverTop + scrollable * (0.40 + targetP * 0.55),
        behavior: 'auto'
      });
    }


  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();