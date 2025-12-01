document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle Functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.getElementById('navMenu');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close the menu when a link is clicked (optional but good practice)
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // 2. Portfolio Years Toggle Functionality
    const toggleBtn = document.getElementById('toggleYearsBtn');
    const olderYearsContent = document.getElementById('olderYears');

    if (toggleBtn && olderYearsContent) {
        toggleBtn.addEventListener('click', () => {
            // Toggles the 'active' class which controls max-height in CSS
            olderYearsContent.classList.toggle('active');
            
            // Update the button text
            if (olderYearsContent.classList.contains('active')) {
                toggleBtn.innerHTML = 'Hide Older Years (2022 - 2017) ↑';
            } else {
                toggleBtn.innerHTML = 'Show Older Years (2022 - 2017) ↓';
            }
        });
    }

    // Note: The contact form requires a backend script (PHP/Node/etc.) to actually submit the data.
    // This frontend code only provides the structure.
});
document.addEventListener('DOMContentLoaded', function() {
    // --- 1. Mobile Menu Toggle ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked (for single-page navigation)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    // --- 2. Image Lightbox Functionality ---
    const portfolioImages = document.querySelectorAll('.portfolio-scroller img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    // Function to open the lightbox
    function openLightbox(src) {
        lightboxImg.src = src;
        lightbox.classList.add('active');
    }

    // Add click listener to all gallery images
    portfolioImages.forEach(img => {
        img.addEventListener('click', function() {
            openLightbox(this.src);
        });
    });

    // Function to close the lightbox when clicking anywhere on the overlay
    lightbox.addEventListener('click', function() {
        lightbox.classList.remove('active');
        // Optional: Reset source or perform cleanup if needed later
    });

    // Prevent closing the lightbox if the click is on the image itself
    lightboxImg.addEventListener('click', function(e) {
        e.stopPropagation(); 
    });
});