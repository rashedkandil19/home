const links = document.querySelectorAll("nav ul li a");
const sections = document.querySelectorAll("section");

function updateActiveLink() {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 80;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });
  links.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", updateActiveLink);

document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("sliderTrack");
  const slides = track.getElementsByClassName("container");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  let currentIndex = 0;
  let startX = 0;
  let isDragging = false;

  function updateSlidePosition() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  function goToSlide(index) {
    currentIndex = (index + slides.length) % slides.length;
    updateSlidePosition();
  }

  nextBtn.addEventListener("click", () => {
    goToSlide(currentIndex + 1);
  });

  prevBtn.addEventListener("click", () => {
    goToSlide(currentIndex - 1);
  });

  track.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
  });

  track.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = startX - currentX;
    if (Math.abs(diff) > 50) {
      goToSlide(diff > 0 ? currentIndex + 1 : currentIndex - 1);
      isDragging = false;
    }
  });

  track.addEventListener("touchend", () => {
    isDragging = false;
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") goToSlide(currentIndex + 1);
    if (e.key === "ArrowLeft") goToSlide(currentIndex - 1);
  });
});

let link = document.getElementById("links");
let nav = document.getElementById("nav");
let menu = document.querySelector("nav .fa-solid");

function showMenu() {
  const links = document.getElementById("links");
  links.classList.toggle("open");
}

let scrollBtn = document.getElementById("scrollToUp");
window.addEventListener("scroll", () => {
  if ((window, scrollY > 300)) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
