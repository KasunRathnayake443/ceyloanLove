function openDetails(place) {
    const modal = document.getElementById("details-modal");
    const title = document.getElementById("modal-title");
    const body = document.getElementById("modal-body");

    if (place === "mirissa") {
        title.textContent = "Mirissa & Unawatuna";

        body.innerHTML = `
            <p>
                Mirissa and Unawatuna are two of Sri Lanka’s most loved beach destinations
                known for surfing, whale watching and relaxing tropical experiences.
            </p>

            <div class="modal-img-group">
                <img src="images/mirissa1.jpg">
                <img src="images/mirissa2.jpg">
                <img src="images/mirissa3.jpg">
            </div>

            <p><strong>Highlights:</strong></p>
            <ul>
                <li>Golden sandy beaches</li>
                <li>Blue whale watching tours</li>
                <li>Surfing & snorkeling spots</li>
                <li>Night beach restaurants & bars</li>
                <li>Nearby coral reefs and turtle sanctuaries</li>
            </ul>

            <p><strong>Best Time to Visit:</strong> November – April</p>
            <p><strong>Famous For:</strong> Water sports, marine life, sunsets, seafood</p>
        `;
    }

    modal.style.display = "flex";
}

function closeDetails() {
    document.getElementById("details-modal").style.display = "none";
}

window.onclick = function(e) {
    const modal = document.getElementById("details-modal");
    if (e.target === modal) modal.style.display = "none";
}
