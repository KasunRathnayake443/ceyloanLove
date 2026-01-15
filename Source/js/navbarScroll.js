// Smart hide/show navbar on scroll
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if(scrollTop > lastScrollTop && scrollTop > 50){
        // Scrolling down
        navbar.classList.add('collapsed');
    } else {
        // Scrolling up
        navbar.classList.remove('collapsed');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});
