document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.getElementById("nav-menu");
    const dropdownToggles = document.querySelectorAll(".dropdown");

    // Toggle main nav menu
    hamburger.addEventListener("click", function () {
        navMenu.classList.toggle("show");
    });

    // Handle dropdown behavior based on screen width
    function handleDropdowns() {
        if (window.innerWidth <= 768) {
            dropdownToggles.forEach(dropdown => {
                dropdown.removeEventListener("click", toggleDropdown); // prevent duplicates
                dropdown.addEventListener("click", toggleDropdown);
            });
        } else {
            dropdownToggles.forEach(dropdown => {
                dropdown.classList.remove("show");
                dropdown.removeEventListener("click", toggleDropdown);
            });
        }
    }

    function toggleDropdown(e) {
        dropdownToggles.forEach(drop => {
            if (drop !== e.currentTarget) drop.classList.remove("show");
        });
        e.currentTarget.classList.toggle("show");
    }

    window.addEventListener("resize", handleDropdowns);
    handleDropdowns(); // Initial setup on load

    // Close dropdowns when clicking outside
    document.addEventListener("click", function (e) {
        if (![...dropdownToggles].some(el => el.contains(e.target))) {
            dropdownToggles.forEach(drop => drop.classList.remove("show"));
        }
    });

    // --- Tab Switching Logic ---
    const tabs = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove 'active' from all buttons and content
            tabs.forEach(btn => btn.classList.remove('active'));
            contents.forEach(content => content.classList.remove('active'));

            // Add 'active' to clicked tab and corresponding content
            tab.classList.add('active');
            document.getElementById(tab.dataset.tab).classList.add('active');
        });
    });
});




// FAQ Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      
      question.addEventListener('click', () => {
        // Close all other FAQs
        faqItems.forEach(otherItem => {
          if (otherItem !== item && otherItem.classList.contains('active')) {
            otherItem.classList.remove('active');
            otherItem.querySelector('.faq-toggle').textContent = '+';
          }
        });
        
        // Toggle current FAQ
        item.classList.toggle('active');
        const toggle = item.querySelector('.faq-toggle');
        toggle.textContent = item.classList.contains('active') ? '-' : '+';
      });
    });
  });


  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });