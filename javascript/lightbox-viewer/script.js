const gallery = document.querySelector(".gallery");
const galleryImages = document.querySelectorAll(".gallery-item");

const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const closeBtn = document.querySelector("#close-btn");

function openLightbox(imageSrc) {
    // Parse the given src.
    let fullImageSrc = imageSrc.replace("-thumbnail", "");
    lightbox.style.display = "flex";
    lightboxImage.src = fullImageSrc;
    console.log(lightboxImage.src);
}

function closeLightbox() {
    lightbox.style.display = "none";
}

galleryImages.forEach((img) => {
    img.addEventListener("click", (event) => {
        // ChatGPT assisted with the following line of code.
        let imageElement = event.target;

        openLightbox(event.target.src);
    })
}
);

closeBtn.addEventListener("click", () => closeLightbox());

lightbox.addEventListener("click", () => closeLightbox());