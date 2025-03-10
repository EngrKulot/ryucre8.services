// Get elements
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const images = document.querySelectorAll(".clickable");

// Open Lightbox on Click
images.forEach((img) => {
    img.addEventListener("click", function () {
        lightbox.style.display = "flex";
        lightboxImg.src = this.src;
    });
});

// Close Lightbox on Click
lightbox.addEventListener("click", function () {
    lightbox.style.display = "none";
});
