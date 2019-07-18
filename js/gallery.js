function activateGallery() {
    let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
    let mainImage = document.querySelector("#gallery-photo img");

    thumbnails.forEach(function (thumbnail) {
        thumbnail.addEventListener("click", function () {
            // Set clicked image as main image. 
            let newImageSource = thumbnail.dataset.largeVersion;
            let largeVersion = new Image();
            largeVersion.src = newImageSource; 
            // Set clicked image description for the main image.
            let newImageAlt = thumbnail.dataset.description;
            mainImage.setAttribute("src", newImageSource);
            mainImage.setAttribute("alt", newImageAlt);

            // Remove current class and add to the one clicked on 
            let currentClass = document.querySelector(".current");
            currentClass.classList.remove("current");

            thumbnail.parentNode.classList.add("current");

            //Change description
            let title = document.querySelector("#gallery-info h3");
            let description = document.querySelector("#gallery-info p");
            title.innerHTML = thumbnail.dataset.title;
            description.innerHTML = thumbnail.dataset.description;
        });
    });
}