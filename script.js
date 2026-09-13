const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
  document.body.classList.toggle("menu-open");
});

// Close menu when navigation link is clicked

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    nav.classList.remove("active");
    document.body.classList.remove("menu-open");
  });
});

// property photo modal
const modal = document.getElementById("photoModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalLocation = document.getElementById("modalLocation");

const modalClose = document.getElementById("modalClose");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const propertyCards = document.querySelectorAll(".property-card");

let currentImages = [];
let currentIndex = 0;

// Open modal

propertyCards.forEach((card) => {
  const photoButton = card.querySelector(".photo-btn");

  photoButton.addEventListener("click", () => {
    currentImages = card.dataset.images.split(",");
    currentIndex = 0;

    modalTitle.textContent = card.dataset.title;
    modalLocation.textContent = card.dataset.location;

    showImage();

    modal.classList.add("active");

    document.body.style.overflow = "hidden";
  });
});

// Display current image

function showImage() {
  modalImage.src = currentImages[currentIndex];
}

// Next image

nextBtn.addEventListener("click", () => {
  currentIndex++;

  if (currentIndex >= currentImages.length) {
    currentIndex = 0;
  }

  showImage();
});

// Previous image

prevBtn.addEventListener("click", () => {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = currentImages.length - 1;
  }

  showImage();
});

// Close modal

function closeModal() {
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

modalClose.addEventListener("click", closeModal);

// Close when clicking outside image

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// Keyboard controls

document.addEventListener("keydown", (e) => {
  if (!modal.classList.contains("active")) return;

  if (e.key === "Escape") {
    closeModal();
  }

  if (e.key === "ArrowRight") {
    nextBtn.click();
  }

  if (e.key === "ArrowLeft") {
    prevBtn.click();
  }
});
