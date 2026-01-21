document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".testimonial-card");
    const prevBtn = document.querySelector(".carousel-btn.prev");
    const nextBtn = document.querySelector(".carousel-btn.next");

    if (!cards.length) return;

    let index = 0;
    const INTERVAL = 5000; // 5 seconds
    let autoRotate;

    function showCard(i) {
        cards.forEach(card => card.classList.remove("active"));
        cards[i].classList.add("active");
    }

    function nextCard() {
        index = (index + 1) % cards.length;
        showCard(index);
    }

    function prevCard() {
        index = (index - 1 + cards.length) % cards.length;
        showCard(index);
    }

    nextBtn.addEventListener("click", () => {
        nextCard();
        resetAutoRotate();
    });

    prevBtn.addEventListener("click", () => {
        prevCard();
        resetAutoRotate();
    });

    function startAutoRotate() {
        autoRotate = setInterval(nextCard, INTERVAL);
    }

    function resetAutoRotate() {
        clearInterval(autoRotate);
        startAutoRotate();
    }

    showCard(index);
    startAutoRotate();
});
