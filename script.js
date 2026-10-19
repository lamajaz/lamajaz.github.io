const greetings = ['Welcome!', 'مرحبا نَوَّرْت', '¡Bienvenidos al lugar donde mi historia y mi trabajo se encuentran!', 'Merci d\'être ici'];
const greetingEl = document.getElementById('greeting');

if (greetingEl) {
    let greetingIndex = 0;
    setInterval(() => {
        greetingIndex = (greetingIndex + 1) % greetings.length;
        greetingEl.textContent = greetings[greetingIndex];
    }, 2500);
}

const navToggle = document.querySelector('.nav-toggle');
const topNav = document.getElementById('top-nav');

if (navToggle && topNav) {
    navToggle.addEventListener('click', () => {
        const isOpen = topNav.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', String(isOpen));
    });
}
