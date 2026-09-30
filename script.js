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

// =========================================================
// GALLERY FULLSCREEN IMAGE VIEWER
// =========================================================

const galleryImages = document.querySelectorAll(".gallery-item img");
const imageLightbox = document.getElementById("imageLightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxClose = document.getElementById("lightboxClose");

galleryImages.forEach(function (image) {

    image.addEventListener("click", function () {

        lightboxImage.src = image.src;

        lightboxImage.alt = image.alt;

        const galleryItem = image.closest(".gallery-item");
        const title = galleryItem.querySelector("h3");

        if (title) {
            lightboxCaption.textContent = title.textContent;
        } else {
            lightboxCaption.textContent = image.alt;
        }

        imageLightbox.classList.add("active");

        document.body.style.overflow = "hidden";
    });

});


/* CLOSE BUTTON */

if (lightboxClose) {

    lightboxClose.addEventListener("click", function () {

        imageLightbox.classList.remove("active");

        document.body.style.overflow = "";
    });

}


/* CLOSE WHEN CLICKING OUTSIDE IMAGE */

if (imageLightbox) {

    imageLightbox.addEventListener("click", function (event) {

        if (event.target === imageLightbox) {

            imageLightbox.classList.remove("active");

            document.body.style.overflow = "";
        }

    });

}


/* CLOSE WITH ESCAPE KEY */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        if (imageLightbox) {

            imageLightbox.classList.remove("active");

            document.body.style.overflow = "";
        }

    }

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

// =========================================================
// OPENING HOURS
// =========================================================

function updateOpeningStatus() {

    const openingStatus = document.getElementById("opening-status");

    if (!openingStatus) {
        return;
    }

    // Get current Kenya time
    const now = new Date();

    const kenyaTime = new Date(
        now.toLocaleString("en-US", {
            timeZone: "Africa/Nairobi"
        })
    );

    const hours = kenyaTime.getHours();
    const minutes = kenyaTime.getMinutes();

    const currentMinutes = (hours * 60) + minutes;

    // Opening and closing times
    const openingTime = (6 * 60) + 30;  // 6:30 AM
    const closingTime = 23 * 60;        // 11:00 PM

    // Open every day, Monday to Sunday
    const isOpen =
        currentMinutes >= openingTime &&
        currentMinutes < closingTime;

    if (isOpen) {
        openingStatus.textContent = "Open Now";
        openingStatus.classList.remove("closed");
        openingStatus.classList.add("open");
    } else {
        openingStatus.textContent = "Closed";
        openingStatus.classList.remove("open");
        openingStatus.classList.add("closed");
    }
}

updateOpeningStatus();

// Update the status every minute
setInterval(updateOpeningStatus, 60000);
