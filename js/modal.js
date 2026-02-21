// ===================== MODAL =====================

function openModal(key) {
    const data = modals[key];
    if (!data) return;
    document.getElementById('modal-content').innerHTML = `<h2 style="font-family:'Syne',sans-serif;font-size:1.4rem;font-weight:800;margin-bottom:1.5rem;padding-right:2rem;">${data.title}</h2>${data.content}`;
    document.getElementById('modal').classList.add('open');
}

function closeModal() {
    document.getElementById('modal').classList.remove('open');
}

document.getElementById('modal-close').onclick = closeModal;
document.getElementById('modal').onclick = (e) => {
    if (e.target === document.getElementById('modal')) closeModal();
};