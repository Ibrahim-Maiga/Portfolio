document.addEventListener("DOMContentLoaded", function () {
    // Get all elements that need animations
    const avatar = document.querySelector('.avatar-circle');
    const title = document.querySelector('.portrait-title');
    const location = document.querySelector('.location');
    const networkIcons = document.querySelectorAll('.network-icon');

    // Function to trigger animations
    function triggerAnimations() {
        // Add animation classes
        avatar.classList.add('animate');
        title.classList.add('animate');
        location.classList.add('animate');
        networkIcons.forEach((icon, index) => {
            icon.classList.add('animate');
            icon.style.animationDelay = `${index * 0.1}s`; // Stagger the animations
        });
    }

    // Create an intersection observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                triggerAnimations(); // Trigger animations when visible
                observer.unobserve(entry.target); // Stop observing after triggering
            }
        });
    }, { threshold: 0.1 }); // Adjust threshold as needed

    // Observe the profile section or the main content container
    const profileSection = document.querySelector('#profile');
    if (profileSection) {
        observer.observe(profileSection);
    }
});
