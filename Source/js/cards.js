const cards = document.querySelectorAll(".testimonial-card");
const carousel = document.getElementById("carousel");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let angle = 0;
const step = 360 / cards.length;
const radius = 185;

/* Normalize angle so it never grows infinitely */
function normalizeAngle(a) {
    return ((a % 360) + 360) % 360;
}

function positionCards() {
    angle = normalizeAngle(angle);

    cards.forEach((card, index) => {
        const cardAngle = normalizeAngle(angle + index * step);
        const rad = cardAngle * Math.PI / 180;

        const x = Math.sin(rad) * radius;
        const z = Math.cos(rad); // -1 to 1

        /* scale: clamp so cards never vanish */
        const scale = 0.75 + ((z + 1) / 2) * 0.35;

        /* opacity: smooth fade, never zero */
        const opacity = 0.4 + ((z + 1) / 2) * 0.6;

        card.style.left = "50%";
        card.style.top = "50%";

        card.style.transform = `
            translate(-50%, -50%)
            translateX(${x}px)
            scale(${scale})
        `;

        card.style.opacity = opacity;
        card.style.zIndex = Math.round(z * 100);
    });
}

/* ---------- Auto rotate ---------- */
let autoRotate = setInterval(() => {
    angle -= step;
    positionCards();
}, 3000);

/* ---------- Mouse drag ---------- */
let isDragging = false;
let startX = 0;

carousel.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.clientX;
    clearInterval(autoRotate);
});

window.addEventListener("mouseup", () => {
    if (!isDragging) return;
    isDragging = false;

    autoRotate = setInterval(() => {
        angle -= step;
        positionCards();
    }, 3000);
});

window.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    const diff = e.clientX - startX;

    if (Math.abs(diff) > 40) {
        angle += diff > 0 ? step : -step;
        startX = e.clientX;
        positionCards();
    }
});

/* ---------- Buttons ---------- */
prevBtn.addEventListener("click", () => {
    angle += step;
    positionCards();
});

nextBtn.addEventListener("click", () => {
    angle -= step;
    positionCards();
});

/* Init */
positionCards();
