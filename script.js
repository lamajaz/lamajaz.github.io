const greetings = ['Welcome', 'مرحبا', 'Bienvenidos', 'Bienvenue'];
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
