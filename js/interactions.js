// ===================== INTERACTIONS =====================

// ===== SPOTLIGHT on tech cards =====
document.querySelectorAll('.tech-card').forEach(card => {
    const spotlight = card.querySelector('.tech-card-spotlight');
    if (!spotlight) return;
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        spotlight.style.left = (e.clientX - rect.left) + 'px';
        spotlight.style.top = (e.clientY - rect.top) + 'px';
    });
});

// ===== RIPPLE on click =====
document.querySelectorAll('.ripple-container').forEach(el => {
    el.addEventListener('click', e => {
        const rect = el.getBoundingClientRect();
        const ripple = document.createElement('span');
        ripple.classList.add('ripple-effect');
        const size = Math.max(rect.width, rect.height);
        ripple.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX - rect.left - size / 2}px;top:${e.clientY - rect.top - size / 2}px;`;
        el.appendChild(ripple);
        setTimeout(() => ripple.remove(), 700);
    });
});

// ===== 3D TILT on bento/cert cards =====
document.querySelectorAll('.bento-card, .tech-card, .cert-card, .model-card').forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(800px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale(1.03)`;
    });
    card.addEventListener('mouseleave', () => {
        card.style.transition = 'transform 0.6s cubic-bezier(0.16,1,0.3,1)';
        card.style.transform = '';
    });
    card.addEventListener('mouseenter', () => {
        card.style.transition = 'transform 0.15s ease';
    });
});

// ===== MAGNETIC BUTTONS =====
document.querySelectorAll('.magnetic').forEach(el => {
    el.addEventListener('mousemove', e => {
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) * 0.35;
        const y = (e.clientY - rect.top - rect.height / 2) * 0.35;
        el.style.transform = `translate(${x}px, ${y}px)`;
    });
    el.addEventListener('mouseleave', () => {
        el.style.transition = 'transform 0.4s cubic-bezier(0.16,1,0.3,1)';
        el.style.transform = '';
    });
    el.addEventListener('mouseenter', () => { el.style.transition = 'transform 0.1s'; });
});

// ===== FLOATING TAGS ELASTIC SPRING =====
document.querySelectorAll('.floating-tag').forEach(tag => {
    let ox = 0, oy = 0, vx = 0, vy = 0;
    tag.addEventListener('mouseenter', () => {
        vx = (Math.random() - 0.5) * 6;
        vy = (Math.random() - 0.5) * 6;
    });
    (function springLoop() {
        const stiffness = 0.12, damping = 0.72;
        vx += (-ox - ox * stiffness) * stiffness;
        vy += (-oy - oy * stiffness) * stiffness;
        vx *= damping; vy *= damping;
        ox += vx; oy += vy;
        if (Math.abs(ox) > 0.01 || Math.abs(oy) > 0.01) {
            tag.style.marginLeft = ox + 'px';
            tag.style.marginTop = oy + 'px';
        }
        requestAnimationFrame(springLoop);
    })();
});