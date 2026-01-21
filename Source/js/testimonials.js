document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".testimonial-card");
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");

  if (!cards.length) return;

  let index = 0;
  const INTERVAL = 5000;
  let autoRotate;

  function showCard(nextIndex, direction = "right") {
    if (nextIndex === index) return;

    const currentCard = cards[index];
    const nextCard = cards[nextIndex];

    // Clear all animation classes
    cards.forEach(card => card.classList.remove(
      "slide-in-left","slide-in-right",
      "slide-out-left","slide-out-right",
      "active"
    ));

    // Animate current card out
    currentCard.classList.add(direction === "right" ? "slide-out-left" : "slide-out-right");

    // Prepare next card
    nextCard.classList.add(direction === "right" ? "slide-in-right" : "slide-in-left");

    // Force reflow
    nextCard.offsetWidth;

    // Make next card active
    nextCard.classList.add("active");
    nextCard.classList.remove(direction === "right" ? "slide-in-right" : "slide-in-left");

    index = nextIndex;
  }

  function nextCard() {
    let nextIndex = (index + 1) % cards.length;
    showCard(nextIndex, "right");
  }

  function prevCard() {
    let prevIndex = (index - 1 + cards.length) % cards.length;
    showCard(prevIndex, "left");
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

  // Initialize first card
  cards[index].classList.add("active");
  startAutoRotate();
});
