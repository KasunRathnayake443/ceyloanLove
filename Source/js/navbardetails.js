document.addEventListener("DOMContentLoaded", () => {

    fetch("../Source/components/navbardetails.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-placeholder").innerHTML = data;

            const hamburger = document.getElementById("hamburger");
            const navLinks = document.getElementById("navLinks");

            hamburger.addEventListener("click", () => {
                navLinks.classList.toggle("active");
            });

            document.querySelectorAll(".nav-links a").forEach(link => {
                link.addEventListener("click", () => {
                    navLinks.classList.remove("active");
                });
            });
        })
        .catch(error => console.error("Navbar load failed:", error));

});
