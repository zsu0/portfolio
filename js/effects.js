// ===================== EFFECTS =====================

// ===== IDLE SPARKLE BURSTS =====
function spawnSparkle() {
    const x = 80 + Math.random() * (window.innerWidth - 160);
    const y = 80 + Math.random() * (window.innerHeight - 160);
    const count = Math.floor(Math.random() * 6 + 4);
    const colors = ['#c9b8f5', '#b8d8f5', '#f5c8e0', '#c8f5e0'];
    for (let i = 0; i < count; i++) {
        const spark = document.createElement('div');
        const angle = (i / count) * Math.PI * 2 + Math.random() * 0.5;
        const dist = Math.random() * 40 + 20;
        const sz = Math.random() * 4 + 2;
        const color = colors[Math.floor(Math.random() * colors.length)];
        spark.style.cssText = `
      position:fixed;width:${sz}px;height:${sz}px;
      border-radius:50%;background:${color};
      left:${x}px;top:${y}px;
      pointer-events:none;z-index:9;
      transform:translate(-50%,-50%);
      animation:sparkFly 0.8s cubic-bezier(0,0,0.3,1) forwards;
      --dx:${Math.cos(angle) * dist}px;--dy:${Math.sin(angle) * dist}px;
    `;
        document.body.appendChild(spark);
        setTimeout(() => spark.remove(), 900);
    }
}

const sparkStyle = document.createElement('style');
sparkStyle.textContent = `
  @keyframes sparkFly {
    0%  { opacity:1; transform:translate(-50%,-50%) translate(0,0) scale(1); }
    100%{ opacity:0; transform:translate(-50%,-50%) translate(var(--dx),var(--dy)) scale(0); }
  }
`;
document.head.appendChild(sparkStyle);

function scheduleSparkle() {
    if (document.getElementById('portfolio').classList.contains('visible')) {
        spawnSparkle();
    }
    setTimeout(scheduleSparkle, Math.random() * 4000 + 2500);
}
setTimeout(scheduleSparkle, 3000);

// ===== SECTION BACKGROUND PARALLAX BLOBS =====
function addBlob(section, color, size, top, left, opacity, duration) {
    const blob = document.createElement('div');
    blob.style.cssText = `position:absolute;width:${size}px;height:${size}px;background:${color};border-radius:50%;filter:blur(80px);opacity:${opacity};top:${top}%;left:${left}%;pointer-events:none;z-index:0;animation:blobFloat${Math.floor(Math.random() * 3)} ${duration}s ease-in-out infinite alternate;`;
    section.style.position = 'relative';
    section.insertBefore(blob, section.firstChild);
}

const sectionBlobs = [
    { id: 'profile', blobs: [['#c9b8f5', 400, 5, 5, 0.07, 12], ['#b8d8f5', 300, 70, 80, 0.05, 15]] },
    { id: 'tech', blobs: [['#9b7fe8', 350, 15, 70, 0.06, 10], ['#6aaed6', 250, 60, 10, 0.05, 14]] },
    { id: 'art', blobs: [['#f5c8e0', 300, 10, 20, 0.06, 11], ['#c9b8f5', 250, 65, 75, 0.05, 13]] },
    { id: 'entrepreneur', blobs: [['#9b7fe8', 350, 20, 5, 0.06, 9], ['#b8d8f5', 280, 60, 70, 0.05, 16]] },
    { id: 'activities', blobs: [['#c8f5e0', 300, 5, 60, 0.06, 12], ['#f5c8e0', 250, 70, 20, 0.05, 14]] },
    { id: 'certs', blobs: [['#c9b8f5', 350, 10, 50, 0.07, 11], ['#6aaed6', 200, 65, 5, 0.05, 13]] },
];
sectionBlobs.forEach(({ id, blobs }) => {
    const el = document.getElementById(id);
    if (el) blobs.forEach(([color, size, top, left, opacity, duration]) => {
        addBlob(el, color, size, top, left, opacity, duration);
    });
});

// ===== SCROLL-TRIGGERED TEXT SCRAMBLE =====
const scrambleChars = '!@#$%^&*<>?/|{}アイウエオカキクケコ✦✧★☆▲△▷▽◇◆';

function scrambleText(el, finalText, duration = 650) {
    let frame = 0;
    const totalFrames = Math.floor(duration / 16);
    const textSpan = el.querySelector('[data-scramble-text]') || el;
    const interval = setInterval(() => {
        let output = '';
        for (let i = 0; i < finalText.length; i++) {
            output += i < (frame / totalFrames) * finalText.length
                ? finalText[i]
                : scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
        }
        textSpan.dataset.scrambleContent = output;
        if (textSpan === el) {
            for (let node of el.childNodes) {
                if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
                    node.textContent = output;
                    break;
                }
            }
        }
        frame++;
        if (frame >= totalFrames) {
            for (let node of el.childNodes) {
                if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
                    node.textContent = finalText;
                    break;
                }
            }
            clearInterval(interval);
        }
    }, 16);
}

document.querySelectorAll('.section-tag').forEach(el => {
    let plainText = '';
    for (let node of el.childNodes) {
        if (node.nodeType === Node.TEXT_NODE) plainText += node.textContent;
    }
    el.dataset.originalText = plainText.trim();
});

const scrambleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.scrambled) {
            entry.target.dataset.scrambled = 'true';
            const original = entry.target.dataset.originalText;
            if (original) scrambleText(entry.target, original, 700);
        }
    });
}, { threshold: 0.5 });
document.querySelectorAll('.section-tag').forEach(el => scrambleObserver.observe(el));

// ===== SCROLL-TRIGGERED NUMBER COUNTER =====
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.counted) {
            entry.target.dataset.counted = 'true';
            const el = entry.target;
            const target = parseInt(el.dataset.count);
            if (!target) return;
            const suffix = el.textContent.replace(/\d+/g, '').trim();
            let current = 0;
            const duration = 1400;
            const stepTime = duration / target;
            const timer = setInterval(() => {
                current++;
                el.textContent = current + (suffix || '+');
                if (current >= target) clearInterval(timer);
            }, stepTime);
        }
    });
}, { threshold: 0.8 });
document.querySelectorAll('[data-count]').forEach(el => counterObserver.observe(el));

// ===== GLITCH RANDOM TRIGGER =====
setInterval(() => {
    const glitch = document.querySelector('.glitch');
    if (glitch) { glitch.style.animation = 'none'; void glitch.offsetHeight; glitch.style.animation = ''; }
}, 5000);

// ===== MARQUEE SPEED VARIATION =====
const marqueeInner = document.querySelector('.marquee-inner');
setInterval(() => {
    const speed = (Math.random() * 15 + 15).toFixed(0);
    if (marqueeInner) marqueeInner.style.animationDuration = speed + 's';
}, 10000);

// ===== AUTO-HIGHLIGHT TECH CARDS =====
const techCards = document.querySelectorAll('.tech-card');
let highlightIdx = 0;
setInterval(() => {
    techCards.forEach(c => c.style.boxShadow = '');
    if (techCards[highlightIdx]) techCards[highlightIdx].style.boxShadow = '0 0 35px rgba(201,184,245,0.18)';
    highlightIdx = (highlightIdx + 1) % techCards.length;
}, 2500);