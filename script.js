const mosaicContainer = document.querySelector(".mosaic-container");

// Generate the grid
for (let i = 0; i < 10000; i++) { // 100x100 grid = 10,000 tiles
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");

    // Add click event to open a new page
    pixel.addEventListener("click", () => {
        const url = prompt("Enter the URL to open:", "https://example.com");
        if (url) {
            window.open(url, "_blank"); // Open the URL in a new tab
        }
    });

    mosaicContainer.appendChild(pixel);
}
