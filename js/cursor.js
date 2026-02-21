// ===================== CUSTOM CURSOR =====================

const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top = my + 'px';
});

(function animRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    requestAnimationFrame(animRing);
})();

document.querySelectorAll('a, button, .tech-card, .art-cell, .bento-card, .cert-card, .model-card').forEach(el => {
    el.addEventListener('mouseenter', () => { ring.style.width = '60px'; ring.style.height = '60px'; ring.style.borderColor = 'var(--pb)'; });
    el.addEventListener('mouseleave', () => { ring.style.width = '40px'; ring.style.height = '40px'; ring.style.borderColor = 'var(--pp)'; });
});

// ===== CURSOR TRAIL =====
const trailDots = [];
const MAX_TRAIL = 10;
const trailPositions = Array.from({ length: MAX_TRAIL }, () => ({ x: -100, y: -100 }));
let trailMouseX = -100, trailMouseY = -100;

for (let i = 0; i < MAX_TRAIL; i++) {
    const dot = document.createElement('div');
    const sz = Math.max(1.5, 5 - i * 0.35);
    dot.style.cssText = `position:fixed;width:${sz}px;height:${sz}px;border-radius:50%;background:var(--pp);pointer-events:none;z-index:9990;opacity:${Math.max(0.05, 0.45 - i * 0.04)};transform:translate(-50%,-50%);will-change:left,top;`;
    document.body.appendChild(dot);
    trailDots.push(dot);
}

document.addEventListener('mousemove', e => {
    trailMouseX = e.clientX; trailMouseY = e.clientY;
});

(function animTrail() {
    trailPositions[0].x += (trailMouseX - trailPositions[0].x) * 0.45;
    trailPositions[0].y += (trailMouseY - trailPositions[0].y) * 0.45;
    for (let i = 1; i < MAX_TRAIL; i++) {
        trailPositions[i].x += (trailPositions[i - 1].x - trailPositions[i].x) * 0.35;
        trailPositions[i].y += (trailPositions[i - 1].y - trailPositions[i].y) * 0.35;
    }
    trailDots.forEach((dot, i) => {
        dot.style.left = trailPositions[i].x + 'px';
        dot.style.top = trailPositions[i].y + 'px';
    });
    requestAnimationFrame(animTrail);
})();

// ===== SCROLL-VELOCITY CURSOR STRETCH =====
let lastScrollY = 0, scrollVel = 0;
window.addEventListener('scroll', () => {
    scrollVel = window.scrollY - lastScrollY;
    lastScrollY = window.scrollY;
    const stretch = Math.min(Math.abs(scrollVel) * 0.08, 0.6);
    const dir = scrollVel > 0 ? 1 : -1;
    cursor.style.transform =
        `translate(-50%,-50%) scaleY(${1 + stretch}) scaleX(${1 - stretch * 0.3}) translateY(${dir * stretch * 4}px)`;
    clearTimeout(window._scrollStretchReset);
    window._scrollStretchReset = setTimeout(() => {
        cursor.style.transform = 'translate(-50%,-50%)';
    }, 150);
});