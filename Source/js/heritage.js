document.addEventListener("DOMContentLoaded", () => {
    const blocks = document.querySelectorAll(".heritage-block");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, { threshold: 0.2 });

    blocks.forEach(block => observer.observe(block));
});
