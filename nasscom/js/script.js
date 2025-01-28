
window.onload = function () {

    const textanimation = document.querySelector('.hero_section .content h1');

    const text = textanimation.textContent;
    textanimation.textContent = '';

    text.split('').forEach((letter, index) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.animationDelay = `${index * 0.07}s`;
        textanimation.appendChild(span);
    });
};

document.addEventListener("DOMContentLoaded", function () {
    const categoryItems = document.querySelectorAll(".category-items");

    const images = {
        1: document.getElementById("image1"),
        2: document.getElementById("image2"),
        3: document.getElementById("image3"),
        4: document.getElementById("image4"),
    };

    function hideAllImages() {
        for (const key in images) {
            images[key].style.display = "none";
        }
    }

    const defaultImageId = 1;
    images[defaultImageId].style.display = "block";

    categoryItems[0].classList.add("active");

    categoryItems.forEach((item, index) => {
        item.addEventListener("mouseenter", function () {
            const imageId = item.getAttribute("data-image");
            hideAllImages();
            if (images[imageId]) {
                images[imageId].style.display = "block";
            }
            categoryItems.forEach((item) => {
                item.classList.remove("active");
            });
            item.classList.add("active");
        });

        item.addEventListener("mouseleave", function () {
            hideAllImages();
            images[defaultImageId].style.display = "block";
            categoryItems.forEach((item) => {
                item.classList.remove("active");
            });
            categoryItems[0].classList.add("active");
        });
    });
});


// JavaScript to toggle sticky header visibility
window.addEventListener('scroll', function () {
    const stickyHeader = document.getElementById('stickyHeader');
    if (window.scrollY > 50) {
        stickyHeader.classList.add('visible');
    } else {
        stickyHeader.classList.remove('visible');
    }
});


// const stickyHeader = document.querySelector('#stickyHeader');
// const headerHeight = stickyHeader.offsetHeight;
// document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);


const header = document.querySelector('header');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
        header.classList.add('hide');
    } else {
        header.classList.remove('hide');
    }
    lastScrollY = currentScrollY;
});

const toggleBtn = document.getElementById('toggleBtn');
const navbar = document.getElementById('navbar');

toggleBtn.addEventListener('click', () => {
    navbar.classList.toggle('show');
    toggleBtn.classList.toggle('open'); 
    document.body.classList.toggle('nav-open');
});

const navLinks = document.querySelectorAll('#navbar ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('show');
        toggleBtn.classList.remove('open');
        document.body.classList.remove('nav-open');
    });
});
// Get the header element

// Set the threshold for changing the header color
const threshold = 100;

// Add an event listener to the window's scroll event
window.addEventListener('scroll', () => {
  // Get the current scroll position
  const scrollPosition = window.scrollY;

  // Check if the scroll position is greater than the threshold
  if (scrollPosition > threshold) {
    // Add a class to the header to change its color
    header.classList.add('scrolled');
  } else {
    // Remove the class from the header to reset its color
    header.classList.remove('scrolled');
  }
});