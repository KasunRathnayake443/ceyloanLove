document.addEventListener("DOMContentLoaded", () => {

    const page = window.location.pathname.split("/").pop();

    // Loader presets
    const loaders = {
        "index.html": {
            img: "Source/img/elephant-silhouette.png",
            text: "Discover Sri Lanka"
        },
        "Beaches.html": {
            img: "../Source/img/loader-beach.png",
            text: "Feel the Ocean Breeze"
        },
        "kalpitiya.html": {
            img: "../Source/img/loader-beach.png",
            text: "Feel the Ocean Breeze"
        },
        "trinco.html": {
            img: "../Source/img/loader-beach.png",
            text: "Feel the Ocean Breeze"
        },
        "kandy.html": {
            img: "../Source/img/loader-kandy.png",
            text: "Explore Ancient Heritage"
        },
        "history.html": {
            img: "Source/img/loader-warrior.png",
            text: "Journey Through History"
        },
        "madu-river.html": {
            img: "../Source/img/loader-river.png",
            text: "Serene River Adventures"
        },
        "nuwaraeliya.html": {
            img: "../Source/img/loader-hill.png",
            text: "Escape to the Hills"
        },
        "pinnawala.html": {
            img: "../Source/img/elephant-silhouette.png",
            text: "Meet Gentle Giants"
        },
            "contact.html": {
            img: "Source/img/loader-contact.png",
            text: "Get in Touch with Us"
        },
            "about.html": {
            img: "Source/img/loader-about.png",
            text: "Learn More About Us"
        },
            "anuradhapura.html": {
            img: "../Source/img/loader-anuradhapura.png",
            text: "Discover Ancient Wonders"
        },
            "ambalangoda.html": {
            img: "../Source/img/loader-ambalangoda.png",
            text: "Experience Coastal Charm"
        }
    };

    // Default loader (fallback)
    const current = loaders[page] || {
        img: "Source/img/elephant-silhouette.png",
        text: "Welcome to Sri Lanka"
    };

    // Create loader
    const loader = document.createElement("div");
    loader.className = "page-loader";

    loader.innerHTML = `
        <div class="loader-content">
            <img src="${current.img}" alt="Page Loader">
            <p>${current.text}</p>
        </div>
    `;

    document.body.appendChild(loader);

    // Remove loader
    window.addEventListener("load", () => {
        setTimeout(() => {
            loader.classList.add("hidden");

            setTimeout(() => loader.remove(), 1000);
        }, 800);
    });
});
