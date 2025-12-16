const gallery = document.querySelector(".gallery");
const leftBtn = document.querySelector(".scroll-left");
const rightBtn = document.querySelector(".scroll-right");

// Function to get current width of one gallery item
function getItemWidth() {
  const firstItem = gallery.querySelector(".gallery img");
  return firstItem ? firstItem.offsetWidth : 0;
}

// Scroll right (reuse from button)
function scrollRight() {
  const itemWidth = getItemWidth();
  if (gallery.scrollLeft + gallery.clientWidth >= gallery.scrollWidth) {
    gallery.scrollTo({ left: 0, behavior: "smooth" });
  } else {
    gallery.scrollBy({ left: itemWidth, behavior: "smooth" });
  }
}

// Scroll left (reuse from button)
function scrollLeft() {
  const itemWidth = getItemWidth();
  if (gallery.scrollLeft === 0) {
    gallery.scrollTo({ left: gallery.scrollWidth, behavior: "smooth" });
  } else {
    gallery.scrollBy({ left: -itemWidth, behavior: "smooth" });
  }
}

// Button clicks
rightBtn.addEventListener("click", scrollRight);
leftBtn.addEventListener("click", scrollLeft);

// Arrow key handling
document.addEventListener("keydown", (event) => {
  // Optional: only trigger if gallery is visible
  const rect = gallery.getBoundingClientRect();
  const inView = rect.top < window.innerHeight && rect.bottom > 0;

  if (!inView) return;

  if (event.key === "ArrowRight") {
    scrollRight();
  } else if (event.key === "ArrowLeft") {
    scrollLeft();
  }
});
