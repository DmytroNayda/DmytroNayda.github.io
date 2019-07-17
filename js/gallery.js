function activateGallery() {
    let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
    let mainImage = document.querySelector("#gallery-photo img"); 
    
    thumbnails.forEach(function (thumbnail) {
        thumbnail.addEventListener("click", function () {
            // Set clicked image as main image. 
            let newImageSource = thumbnail.dataset.largeVersion; 
            // Set clicked image description for the main image.
            let newImageAlt = thumbnail.dataset.description; 
            mainImage.setAttribute("src", newImageSource); 
            mainImage.setAttribute("alt", newImageAlt);
            // Add border styling for current thumbnail
        });
    });
}