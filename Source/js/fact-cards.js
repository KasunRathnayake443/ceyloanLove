document.addEventListener("DOMContentLoaded", () => {

    // Prevent running before HTML is injected
    const observer = new MutationObserver(() => {
        const cards = document.querySelectorAll(".fact-card");
        if (!cards.length) return;

        observer.disconnect();
        initFactCards(cards);
    });

    observer.observe(document.body, { childList: true, subtree: true });
});

function initFactCards(cards) {

    const DISPLAY_TIME = 10000; // 10s per card
    const START_DELAY = 3000;  // first card delay
    const COOLDOWN = 60000;    // 1 minute after close

    const lastClosed = localStorage.getItem("factCardsClosedAt");
    if (lastClosed && Date.now() - lastClosed < COOLDOWN) {
        return; // still cooling down
    }

    let index = 0;

    function showNextCard() {
        if (index >= cards.length) return;

        const card = cards[index];
        card.classList.add("show");

        const closeBtn = card.querySelector(".close-btn");

        const hideCard = () => {
            card.classList.remove("show");
            index++;
            setTimeout(showNextCard, 800);
        };

        // Auto hide
        const timer = setTimeout(hideCard, DISPLAY_TIME);

        // Close button
        closeBtn.addEventListener("click", () => {
            clearTimeout(timer);
            localStorage.setItem("factCardsClosedAt", Date.now());
            cards.forEach(c => c.classList.remove("show"));
        }, { once: true });
    }

    setTimeout(showNextCard, START_DELAY);
}
