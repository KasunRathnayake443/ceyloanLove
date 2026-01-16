// Fade-in animation when scrolling
const observers = document.querySelectorAll('.fade-in');

const reveal = () => {
    observers.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 50) {
            el.classList.add('show');
        }
    });
};

window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);
