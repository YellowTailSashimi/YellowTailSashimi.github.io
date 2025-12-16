const menuToggle = document.getElementById("menu-toggle");
const mobileNav = document.getElementById("mobile-nav");
const desktopMenu = document.getElementById("nav-links");
const mobileMenu = document.getElementById("mobile-menu");

// Clone desktop menu items into mobile menu
mobileMenu.innerHTML = desktopMenu.innerHTML;

// Centralized open/close functions
function openMenu() {
  mobileNav.classList.add("open");
  menuToggle.classList.add("open");
  menuToggle.setAttribute("aria-expanded", "true");
  document.body.style.overflow = "hidden"; // lock scroll
}

function closeMenu() {
  mobileNav.classList.remove("open");
  menuToggle.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  document.body.style.overflow = ""; // restore scroll
}

// Toggle menu on hamburger click
menuToggle.addEventListener("click", () => {
  if (mobileNav.classList.contains("open")) {
    closeMenu();
  } else {
    openMenu();
  }
});

// ESC closes menu
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && mobileNav.classList.contains("open")) {
    closeMenu();
  }
});

// Close mobile nav if window is resized above 800px
window.addEventListener('resize', () => {
  if (window.innerWidth > 800 && mobileNav.classList.contains("open")) {
    closeMenu();
  }
});

