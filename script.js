document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.getElementById("nav-menu");
    const dropdownToggles = document.querySelectorAll(".dropdown");

    // Toggle main nav menu
    hamburger.addEventListener("click", function () {
        navMenu.classList.toggle("show");
    });

    // Only apply dropdown click behavior on small screens
    function handleDropdowns() {
        if (window.innerWidth <= 768) {
            dropdownToggles.forEach(dropdown => {
                dropdown.removeEventListener("click", toggleDropdown); // avoid duplicate bindings
                dropdown.addEventListener("click", toggleDropdown);
            });
        } else {
            // Reset for large screens
            dropdownToggles.forEach(dropdown => {
                dropdown.classList.remove("show");
                dropdown.removeEventListener("click", toggleDropdown);
            });
        }
    }

    function toggleDropdown(e) {
        // Close other dropdowns
        dropdownToggles.forEach(drop => {
            if (drop !== e.currentTarget) drop.classList.remove("show");
        });
        e.currentTarget.classList.toggle("show");
    }

    window.addEventListener("resize", handleDropdowns);
    handleDropdowns(); // Run on page load
});

