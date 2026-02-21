// ===================== MAIN ENTRY POINT =====================

// ===== LOADING SCREEN =====
window.addEventListener('load', () => {
    setTimeout(() => document.getElementById('loading').classList.add('hidden'), 1800);
});

// ===== UTILITY: Art tab filter =====
function toggleExpand(header) {
    header.classList.toggle('open');
    header.nextElementSibling.classList.toggle('open');
}

function filterArt(cat, btn) {
    document.querySelectorAll('.art-tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.art-cell').forEach(cell => {
        const show = cat === 'all' || cell.dataset.cat === cat;
        cell.style.opacity = show ? '1' : '0.15';
        cell.style.transform = show ? '' : 'scale(0.96)';
        cell.style.transition = 'all 0.4s cubic-bezier(0.16,1,0.3,1)';
    });
}