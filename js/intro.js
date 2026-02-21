// ===================== CINEMATIC INTRO =====================

// ===== DIAGONAL STARFALL CANVAS =====
const introCanvas = document.getElementById('intro-star-canvas');
const ictx = introCanvas.getContext('2d');

function resizeIntroCanvas() {
    introCanvas.width = window.innerWidth;
    introCanvas.height = window.innerHeight;
}
resizeIntroCanvas();
window.addEventListener('resize', resizeIntroCanvas);

const TALENT_POOL = [
    'Python', 'JavaScript', 'Blender', 'Godot', 'Unity',
    'ภาษาไทย', '日本語', '中文', 'Español',
    'Digital Art', '3D Modeling', 'Brand Design', 'Game Dev',
    'AFS Japan', 'IELTS 7.5', 'Stanford', 'Full-Stack',
    'Piano', 'Traditional Music', 'Volunteer',
    'Entrepreneurship', 'Commissions', 'Cultural Exchange',
    'Technology', 'Art', 'Diversity', 'Creativity', 'Innovation',
    'Open Source', 'Cybersecurity', 'Firebase', 'MongoDB',
    '東京', 'Culture', 'Exchange Student', 'Self-Taught',
];

const COLORS_HEX = [
    [201, 184, 245], [184, 216, 245], [245, 200, 220], [200, 245, 224],
    [245, 230, 200], [232, 213, 255], [213, 245, 232], [245, 213, 232],
    [255, 220, 180], [180, 255, 220], [220, 180, 255],
];

const DIAG_ANGLE = (Math.PI / 180) * 28;

function makeStarVelocity(speed) {
    return {
        vx: Math.sin(DIAG_ANGLE) * speed,
        vy: Math.cos(DIAG_ANGLE) * speed,
    };
}

const stars = [];
const TOTAL_STARS = 260;
for (let i = 0; i < TOTAL_STARS; i++) {
    const isTalent = i % 5 === 0;
    const speed = Math.random() * 2.8 + 0.6;
    const { vx, vy } = makeStarVelocity(speed);
    const startX = Math.random() * (introCanvas.width + introCanvas.height * Math.tan(DIAG_ANGLE))
        - introCanvas.height * Math.tan(DIAG_ANGLE);
    const startY = Math.random() * introCanvas.height - introCanvas.height;
    const colorArr = COLORS_HEX[Math.floor(Math.random() * COLORS_HEX.length)];
    stars.push({
        x: startX, y: startY, vx, vy, speed,
        size: isTalent ? 1 : Math.random() * 2.4 + 0.3,
        twinkle: Math.random() * Math.PI * 2,
        twinkleSpeed: Math.random() * 0.045 + 0.008,
        colorArr,
        trailLen: isTalent ? 0 : (Math.random() > 0.65 ? Math.random() * 40 + 12 : 0),
        isTalent,
        label: isTalent ? TALENT_POOL[Math.floor(Math.random() * TALENT_POOL.length)] : null,
        labelSize: Math.floor(Math.random() * 9 + 7),
        labelLife: 0,
        labelMaxLife: Math.random() * 200 + 80,
        labelActive: isTalent,
        wobble: Math.random() * Math.PI * 2,
        wobbleAmp: Math.random() * 0.35,
        wobbleFreq: Math.random() * 0.03 + 0.01,
        brightness: Math.random(),
    });
}

let waveT = 0;
function drawBackgroundWave() {
    waveT += 0.004;
    const W = introCanvas.width, H = introCanvas.height;
    for (let x = 0; x < W; x += 40) {
        const y = H * 0.5 + Math.sin(x * 0.008 + waveT) * 60 + Math.cos(x * 0.015 + waveT * 0.7) * 30;
        const alpha = 0.012 + Math.abs(Math.sin(waveT + x * 0.01)) * 0.018;
        ictx.beginPath();
        ictx.arc(x, y, 1.5, 0, Math.PI * 2);
        ictx.fillStyle = `rgba(201,184,245,${alpha})`;
        ictx.fill();
    }
}

let introAnimRunning = true;

function drawIntroStars() {
    if (!introAnimRunning) return;
    ictx.fillStyle = 'rgba(0,0,0,0.18)';
    ictx.fillRect(0, 0, introCanvas.width, introCanvas.height);
    drawBackgroundWave();

    const W = introCanvas.width, H = introCanvas.height;

    for (const s of stars) {
        s.wobble += s.wobbleFreq;
        const perp = Math.sin(s.wobble) * s.wobbleAmp;
        s.x += s.vx + Math.cos(DIAG_ANGLE + Math.PI / 2) * perp;
        s.y += s.vy + Math.sin(DIAG_ANGLE + Math.PI / 2) * perp;

        s.twinkle += s.twinkleSpeed;
        const alpha = (Math.sin(s.twinkle) * 0.35 + 0.65) * 0.85;
        const [r, g, b] = s.colorArr;

        if (!s.isTalent) {
            if (s.trailLen > 0) {
                const tx = s.x - Math.sin(DIAG_ANGLE) * s.trailLen;
                const ty = s.y - Math.cos(DIAG_ANGLE) * s.trailLen;
                const grad = ictx.createLinearGradient(tx, ty, s.x, s.y);
                grad.addColorStop(0, `rgba(${r},${g},${b},0)`);
                grad.addColorStop(1, `rgba(${r},${g},${b},${alpha * 0.55})`);
                ictx.beginPath();
                ictx.moveTo(tx, ty);
                ictx.lineTo(s.x, s.y);
                ictx.strokeStyle = grad;
                ictx.lineWidth = s.size * 0.6;
                ictx.stroke();
            }
            ictx.beginPath();
            ictx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
            ictx.fillStyle = `rgba(${r},${g},${b},${alpha})`;
            ictx.fill();
            if (s.size > 1.8 && Math.sin(s.twinkle * 3) > 0.85) {
                const sp = s.size * 3;
                ictx.strokeStyle = `rgba(${r},${g},${b},${alpha * 0.4})`;
                ictx.lineWidth = 0.5;
                ictx.beginPath(); ictx.moveTo(s.x - sp, s.y); ictx.lineTo(s.x + sp, s.y); ictx.stroke();
                ictx.beginPath(); ictx.moveTo(s.x, s.y - sp); ictx.lineTo(s.x, s.y + sp); ictx.stroke();
            }
        } else {
            s.labelLife++;
            const phase = s.labelLife / s.labelMaxLife;
            const kA = phase < 0.15 ? phase / 0.15 : phase > 0.75 ? (1 - phase) / 0.25 : 1;

            ictx.beginPath();
            ictx.arc(s.x, s.y, 2, 0, Math.PI * 2);
            ictx.fillStyle = `rgba(${r},${g},${b},${kA * 0.8})`;
            ictx.fill();

            const glow = ictx.createRadialGradient(s.x, s.y, 0, s.x, s.y, 8);
            glow.addColorStop(0, `rgba(${r},${g},${b},${kA * 0.3})`);
            glow.addColorStop(1, `rgba(${r},${g},${b},0)`);
            ictx.beginPath();
            ictx.arc(s.x, s.y, 8, 0, Math.PI * 2);
            ictx.fillStyle = glow;
            ictx.fill();

            const tx = s.x + Math.cos(DIAG_ANGLE - Math.PI / 2) * 10;
            const ty = s.y + Math.sin(DIAG_ANGLE - Math.PI / 2) * 10;
            ictx.save();
            ictx.translate(tx, ty);
            ictx.rotate(DIAG_ANGLE - Math.PI / 2 + 0.15);
            ictx.font = `600 ${s.labelSize}px 'Syne', sans-serif`;
            ictx.fillStyle = `rgba(${r},${g},${b},${kA * 0.75})`;
            ictx.fillText(s.label, 0, 0);
            ictx.restore();

            if (s.labelLife >= s.labelMaxLife) {
                s.labelLife = 0;
                s.label = TALENT_POOL[Math.floor(Math.random() * TALENT_POOL.length)];
                s.labelMaxLife = Math.random() * 200 + 80;
            }
        }

        const margin = 80;
        if (s.x > W + margin || s.y > H + margin) {
            if (Math.random() > 0.5) {
                s.x = Math.random() * (W + introCanvas.height * Math.tan(DIAG_ANGLE)) - introCanvas.height * Math.tan(DIAG_ANGLE);
                s.y = -margin;
            } else {
                s.x = -margin;
                s.y = Math.random() * H;
            }
            if (s.isTalent) {
                s.label = TALENT_POOL[Math.floor(Math.random() * TALENT_POOL.length)];
                s.labelLife = 0;
            }
        }
    }
    requestAnimationFrame(drawIntroStars);
}
drawIntroStars();

// ===== WORD MORPH SEQUENCE =====
const words = Array.from(document.querySelectorAll('.morph-word')).filter(el => el.id !== 'portfolio-reveal-text');
const portfolioText = document.getElementById('portfolio-reveal-text');
const enterBtn = document.getElementById('enter-btn');
const introSubText = document.getElementById('intro-sub');
let currentWord = 0;
let morphDone = false;

words.forEach((w, i) => { w.classList.remove('active', 'exit'); });

function showWord(idx) {
    words.forEach(w => w.classList.remove('active', 'exit'));
    if (idx < words.length) words[idx].classList.add('active');
}

function nextWord() {
    if (morphDone) return;
    words[currentWord].classList.add('exit');
    setTimeout(() => words[currentWord].classList.remove('active', 'exit'), 700);
    currentWord++;
    if (currentWord >= words.length) {
        morphDone = true;
        setTimeout(() => {
            portfolioText.classList.add('show');
            setTimeout(() => {
                introSubText.classList.add('show');
                setTimeout(() => {
                    document.getElementById('enter-btn-wrapper').style.opacity = '1';
                    enterBtn.classList.add('show');
                }, 450);
            }, 500);
        }, 200);
        return;
    }
    words[currentWord].classList.add('active');
    setTimeout(nextWord, 950);
}

setTimeout(() => {
    showWord(0);
    setTimeout(nextWord, 950);
}, 700);

// ===== ENTER BUTTON =====
enterBtn.addEventListener('click', () => {
    const shockRing = document.getElementById('shockwave-ring');
    shockRing.classList.add('fire');
    setTimeout(() => shockRing.classList.remove('fire'), 900);

    document.getElementById('cinematic-intro').classList.add('fade-out');
    introAnimRunning = false;

    setTimeout(() => {
        document.getElementById('cinematic-intro').style.display = 'none';
        const portfolio = document.getElementById('portfolio');
        portfolio.classList.add('visible');
        document.getElementById('nav').classList.add('visible');
        document.getElementById('scroll-indicator').classList.add('visible');
    }, 1000);
});