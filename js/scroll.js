// ===================== SCROLL =====================

// ===== SCROLL PROGRESS + DOTS =====
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const totalH = document.body.scrollHeight - window.innerHeight;
    document.getElementById('scroll-progress').style.width = (scrollY / totalH * 100) + '%';

    const sections = ['profile', 'tech', 'art', 'entrepreneur', 'activities', 'certs'];
    const dots = document.querySelectorAll('.scroll-dot');
    sections.forEach((id, i) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.5) {
            dots.forEach(d => d.classList.remove('active'));
            if (dots[i]) dots[i].classList.add('active');
        }
    });
});

document.querySelectorAll('.scroll-dot').forEach((dot, i) => {
    dot.addEventListener('click', () => {
        const targets = ['profile', 'tech', 'art', 'entrepreneur', 'activities', 'certs'];
        const el = document.getElementById(targets[i]);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    });
});

// ===== PARALLAX =====
window.addEventListener('scroll', () => {
    const sy = window.scrollY;
    document.querySelectorAll('.parallax-slow').forEach(el => {
        el.style.transform = `translateY(${sy * 0.08}px)`;
    });
    document.querySelectorAll('.parallax-med').forEach(el => {
        el.style.transform = `translateY(${sy * 0.15}px)`;
    });
});

// ===== SCROLL REVEAL =====
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.querySelectorAll('.skill-bar-fill, .perf-bar-fill').forEach(bar => {
                setTimeout(() => { bar.style.width = bar.dataset.w + '%'; }, 200);
            });
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-pop, .reveal-flip, .reveal-blur, .stagger-children').forEach(el => observer.observe(el));