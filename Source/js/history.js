const observerOptions = {
    threshold: 0.1 // Triggers as soon as 10% of the element is visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Adds the class when scrolling DOWN into view
            entry.target.classList.add('active');
        } else {
            // Removes the class when scrolling UP (out of view)
            // This creates the "reverse" effect
            entry.target.classList.remove('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.history-item').forEach(item => {
    observer.observe(item);
});