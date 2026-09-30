// ========================================
// MOBILE MENU
// ========================================

const menuIcon = document.getElementById("menu-icon");
const navbar = document.getElementById("navbar");

menuIcon.addEventListener("click", function () {

    navbar.classList.toggle("active");

});


// Close mobile menu after clicking a link

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navbar.classList.remove("active");

    });

});


// ========================================
// AUTOMATIC FOOTER YEAR
// ========================================

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();