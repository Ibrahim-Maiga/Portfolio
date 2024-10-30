document.addEventListener("DOMContentLoaded", function () {
    // Get all elements that need animations
    const avatar = document.querySelector('.avatar-circle');
    const title = document.querySelector('.portrait-title');
    const location = document.querySelector('.location');
    const networkIcons = document.querySelectorAll('.network-icon');

    // Function to trigger animations
    function triggerAnimations() {
        // Remove animation classes to reset animations
        avatar.classList.remove('animate');
        title.classList.remove('animate');
        location.classList.remove('animate');
        networkIcons.forEach(icon => icon.classList.remove('animate'));

        // Force reflow to reset the animation
        void avatar.offsetWidth; // This forces a reflow
        void title.offsetWidth;
        void location.offsetWidth;
        networkIcons.forEach(icon => void icon.offsetWidth);

        // Add the animation classes back
        avatar.classList.add('animate');
        title.classList.add('animate');
        location.classList.add('animate');
        networkIcons.forEach((icon, index) => {
            icon.classList.add('animate');
            icon.style.animationDelay = `${index * 0.1}s`; // Stagger the animations
        });
    }

    // Trigger animations on page load
    triggerAnimations();

    // Optionally, you can trigger animations again when navigating back to the profile page
    window.addEventListener("popstate", function () {
        triggerAnimations();
    });
});
