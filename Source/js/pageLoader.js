document.addEventListener("DOMContentLoaded", () => {

    // Create loader dynamically (NO HTML editing)
    const loader = document.createElement("div");
    loader.className = "page-loader";

    loader.innerHTML = `
        <div class="loader-content">
            <img src="Source/img/elephant-silhouette.png" alt="Sri Lanka Elephant">
            <p>SRI LANKA</p>
        </div>
    `;

    document.body.appendChild(loader);

    // Remove loader after page is ready
    window.addEventListener("load", () => {
        setTimeout(() => {
            loader.classList.add("hidden");

            // Cleanup
            setTimeout(() => loader.remove(), 1000);
        }, 800); // minimum visible time
    });
});
