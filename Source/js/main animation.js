document.addEventListener("DOMContentLoaded", () => {
    // Create the observer
    const observerOptions = {
        threshold: 0.15 // Trigger when 15% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add class when scrolling DOWN into view
                entry.target.classList.add('active');
            } else {
                // Remove class when scrolling UP/DOWN out of view (reverses animation)
                entry.target.classList.remove('active');
            }
        });
    }, observerOptions);

    // Select all elements you want to animate
    const elementsToAnimate = document.querySelectorAll('.culture-card, .place-card');
    
    elementsToAnimate.forEach(el => {
        el.classList.add('reveal'); // Add the initial hidden class via JS
        observer.observe(el);
    });
});