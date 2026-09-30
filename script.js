// ========================================
// MOBILE MENU
// ========================================

const menuIcon = document.getElementById("menu-icon");
const navbar = document.getElementById("navbar");

if (menuIcon && navbar) {

    menuIcon.addEventListener("click", function () {

        navbar.classList.toggle("active");

    });

}


// ========================================
// CLOSE MOBILE MENU AFTER CLICKING A LINK
// ========================================

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navbar) {
            navbar.classList.remove("active");
        }

    });

});


// ========================================
// HOME IMAGE SLIDER
// ========================================

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let currentSlideIndex = 0;
let autoSlide;


// ========================================
// SHOW SLIDE
// ========================================

function showSlide(index) {

    if (slides.length === 0) {
        return;
    }

    // Go back to first slide
    if (index >= slides.length) {
        currentSlideIndex = 0;
    }

    // Go to last slide
    else if (index < 0) {
        currentSlideIndex = slides.length - 1;
    }

    else {
        currentSlideIndex = index;
    }


    // Remove active from all slides
    slides.forEach(function (slide) {

        slide.classList.remove("active");

    });


    // Remove active from all dots
    dots.forEach(function (dot) {

        dot.classList.remove("active");

    });


    // Activate current slide
    slides[currentSlideIndex].classList.add("active");


    // Activate current dot
    if (dots[currentSlideIndex]) {

        dots[currentSlideIndex].classList.add("active");

    }

}


// ========================================
// NEXT SLIDE
// ========================================

function nextSlide() {

    showSlide(currentSlideIndex + 1);

    restartAutoSlide();

}


// ========================================
// PREVIOUS SLIDE
// ========================================

function previousSlide() {

    showSlide(currentSlideIndex - 1);

    restartAutoSlide();

}


// ========================================
// NEXT BUTTON
// ========================================

if (nextBtn) {

    nextBtn.addEventListener("click", function () {

        nextSlide();

    });

}


// ========================================
// PREVIOUS BUTTON
// ========================================

if (prevBtn) {

    prevBtn.addEventListener("click", function () {

        previousSlide();

    });

}


// ========================================
// SLIDER DOTS
// ========================================

dots.forEach(function (dot, index) {

    dot.addEventListener("click", function () {

        showSlide(index);

        restartAutoSlide();

    });

});


// ========================================
// AUTOMATIC SLIDING
// ========================================

function startAutoSlide() {

    autoSlide = setInterval(function () {

        showSlide(currentSlideIndex + 1);

    }, 5000);

}


// ========================================
// RESTART AUTOMATIC SLIDING
// ========================================

function restartAutoSlide() {

    clearInterval(autoSlide);

    startAutoSlide();

}


// ========================================
// START SLIDER
// ========================================

if (slides.length > 0) {

    showSlide(0);

    startAutoSlide();

}


// ========================================
// AUTOMATIC FOOTER YEAR
// ========================================

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}
