// Mobil menü aç/kapat
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }
};

showMenu('nav-toggle', 'nav-menu');

// Aktif menü bağlantısı
const navLink = document.querySelectorAll('.nav-link');

function linkAction() {
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

// Kaydırırken aktif bağlantıyı güncelle
const sections = document.querySelectorAll('main section[id]');

window.addEventListener('scroll', () => {
    const y = window.scrollY + 120;
    sections.forEach(sec => {
        const link = document.querySelector('.nav-link[href="#' + sec.id + '"]');
        if (link && y >= sec.offsetTop && y < sec.offsetTop + sec.offsetHeight) {
            navLink.forEach(n => n.classList.remove('active'));
            link.classList.add('active');
        }
    });
});

// Scroll Reveal (kütüphane yüklenemezse sayfa yine çalışır)
if (typeof ScrollReveal !== 'undefined') {
    const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true
    });

    sr.reveal('.home-title', {});
    sr.reveal('.home-img', { delay: 400 });
    sr.reveal('.home-social', { delay: 400 });
    sr.reveal('.section-title', {});
}
