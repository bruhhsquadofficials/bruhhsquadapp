function padNumber(num, length) {
    return num.toString().padStart(length, '0');
}

// Generate 100 products
for (let i = 1; i <= 100; i++) {
    // Create product card
    let card = document.createElement("div");
    card.classList.add("card", "hide");

    // Container for product details
    let container = document.createElement("div");
    container.classList.add("container");

    // Title
    let title = document.createElement("h5");
    title.classList.add("product-title");
    title.innerText = padNumber(i, 4); // Title formatted as 0001, 0002, ..., 0100
    container.appendChild(title);

    // Video element
    let video = document.createElement("video");
    video.width = 320; // Width for 1:1 ratio
    video.height = 320; // Height for 1:1 ratio
    video.controls = true; // Show video controls
    let source = document.createElement("source");
    source.setAttribute("src", `video/videoplayback (${i}).mp4`); // Video file names from video/videoplayback (1).mp4 to video/videoplayback (100).mp4
    source.setAttribute("type", "video/mp4");
    video.appendChild(source);
    container.appendChild(video);

    // Append container to card
    card.appendChild(container);

    // Append card to products container
    document.getElementById("products").appendChild(card);
}

// Function to filter products (for future use if categories are added)
function filterProduct(value) {
    let elements = document.querySelectorAll(".card");
    elements.forEach((element) => {
        if (value === "all") {
            element.classList.remove("hide");
        } else {
            // This is a placeholder; currently, all cards are displayed
            element.classList.remove("hide");
        }
    });
}

// Search functionality
document.getElementById("search").addEventListener("click", () => {
    let searchInput = document.getElementById("search-input").value.toUpperCase();
    let elements = document.querySelectorAll(".product-title");
    let cards = document.querySelectorAll(".card");

    elements.forEach((element, index) => {
        if (element.innerText.includes(searchInput)) {
            cards[index].classList.remove("hide");
        } else {
            cards[index].classList.add("hide");
        }
    });
});

// Initially display all products
window.onload = () => {
    filterProduct("all");
};
