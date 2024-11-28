const thumbnails = document.querySelectorAll(".picture_list img");
    const images = Array.from(thumbnails).map(img => img.src);

    let currentIndex = 0;
    const displayedImage = document.getElementById("displayed-image");

    displayedImage.src = images[0];

    function updateImage() {
        currentIndex = (currentIndex + 1) % images.length;
        displayedImage.src = images[currentIndex];
    }

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener("click", () => {
            displayedImage.src = images[index];
            currentIndex = index; 
        });
    });

setInterval(updateImage, 3000);
