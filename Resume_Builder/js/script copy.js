// script.js
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.image-flipper img');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    let currentIndex = 0;
    let intervalId;

    function showImage(index) {
        images.forEach((img, i) => {
            if (i === index) {
                img.style.transform = 'rotateY(0deg)';
                img.style.zIndex = 1;
            } else {
                img.style.transform = 'rotateY(180deg)';
                img.style.zIndex = 0;
            }
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    function startAutoFlip() {
        intervalId = setInterval(nextImage, 3000); // Adjust the interval as needed (in milliseconds)
    }

    function stopAutoFlip() {
        clearInterval(intervalId);
    }

    nextBtn.addEventListener('click', () => {
        stopAutoFlip();
        nextImage();
        startAutoFlip();
    });

    prevBtn.addEventListener('click', () => {
        stopAutoFlip();
        prevImage();
        startAutoFlip();
    });

    // Start auto flipping initially
    startAutoFlip();
});