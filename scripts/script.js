/*
    Name: Ashley Elgar
    File Name: script.js
    Date: 11/23/2024
*/

document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links li a");

    // Toggle navigation menu on mobile
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Smooth scroll to sections when clicking on navigation links
    links.forEach(link => {
        link.addEventListener("click", event => {
            const targetId = link.getAttribute("href");
            if (targetId.startsWith("#")) {
                event.preventDefault();
                const targetElement = document.querySelector(targetId);
                targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
                navLinks.classList.remove("active"); // Close menu after clicking
            }
        });
    });

    // Close navigation menu when clicking outside (for mobile users)
    document.addEventListener("click", (event) => {
        if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
            navLinks.classList.remove("active");
        }
    });
});
