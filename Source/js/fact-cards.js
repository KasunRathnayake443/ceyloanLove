document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".fact-card");

    if (!cards.length) return;

    const SHOW_DELAY = 3000;      // 3s after page load
    const STAGGER = 200;          // delay between cards
    const VISIBLE_TIME = 10000;   // stay visible for 10s

    // Show cards
    setTimeout(() => {
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add("show");
            }, index * STAGGER);
        });
    }, SHOW_DELAY);

    // Hide cards
    setTimeout(() => {
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.remove("show");
            }, index * STAGGER);
        });
    }, SHOW_DELAY + VISIBLE_TIME);
});
