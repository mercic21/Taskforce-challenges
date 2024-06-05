document.addEventListener('DOMContentLoaded', (event) => {
    // Get the modal element
    const modal = document.getElementById('myModal');

    // Get the image element inside the modal
    const modalImg = document.getElementById('img01');

    // Get the caption text element inside the modal
    const captionText = document.getElementById('caption');

    // Get the close button element
    const closeBtn = document.getElementsByClassName('close')[0];

    // Get all images inside the cards
    const images = document.querySelectorAll('.card img');

    // Get the previous button element
    const prevBtn = document.getElementById('prev');

    // Get the next button element
    const nextBtn = document.getElementById('next');

    // Variable to keep track of the current image index
    let currentIndex = 0;

    // Function to open the modal and display the image
    const openModal = (index) => {
        currentIndex = index; // Set the current index
        modal.style.display = 'block'; // Show the modal
        modalImg.src = images[index].src; // Set the image source
        captionText.innerHTML = images[index].alt; // Set the caption text
    };

    // Function to close the modal
    const closeModal = () => {
        modal.style.display = 'none'; // Hide the modal
    };

    // Function to show the previous image
    const showPrev = () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1; // Decrease the index or loop to the last image
        modalImg.src = images[currentIndex].src; // Set the new image source
        captionText.innerHTML = images[currentIndex].alt; // Set the new caption text
    };

    // Function to show the next image
    const showNext = () => {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0; // Increase the index or loop to the first image
        modalImg.src = images[currentIndex].src; // Set the new image source
        captionText.innerHTML = images[currentIndex].alt; // Set the new caption text
    };

    // Add click event listener to each image
    images.forEach((image, index) => {
        image.addEventListener('click', () => {
            openModal(index); // Open the modal with the clicked image
        });
    });

    // Add click event listener to the close button
    closeBtn.onclick = closeModal;

    // Add click event listener to the previous button
    prevBtn.onclick = showPrev;

    // Add click event listener to the next button
    nextBtn.onclick = showNext;

    // Add click event listener to close the modal when clicking outside of the image
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
});
