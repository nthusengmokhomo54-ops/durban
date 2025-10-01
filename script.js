
window.addEventListener('DOMContentLoaded', () => {
  const greetingEl = document.getElementById('greeting');
  if (greetingEl) {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    greetingEl.textContent = `Hello! Today is ${now.toLocaleDateString(undefined, options)} - ${now.toLocaleTimeString()}`;
  }
});
const colorButton = document.getElementById('colorButton');
if (colorButton) {
  colorButton.addEventListener('click', () => {
    const colors = ['#fceabb', '#ff9a9e', '#a1c4fd', '#d4fc79', '#fbc2eb'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.background = randomColor;
  });
}
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  const slides = document.getElementsByClassName('slides');
  if (!slides.length) return;
  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;
  for (let slide of slides) {
    slide.style.display = 'none';
  }
  slides[slideIndex - 1].style.display = 'block';
}
// ==== Fun Fact Feature ====
const funFacts = [
  "Durban has the largest Indian population outside of India.",
  "The Golden Mile is a famous stretch of beachfront in Durban.",
  "Durban hosted matches during the 2010 FIFA World Cup.",
  "Moses Mabhida Stadium features the iconic 'SkyCar' ride.",
  "The city’s Ushaka Marine World is one of the largest aquariums in the southern hemisphere.",
  "Durban’s climate is subtropical, perfect for year-round beach fun."
];

window.addEventListener("DOMContentLoaded", () => {
  // Display random fun fact
  const factEl = document.getElementById("fun-fact-text");
  const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
  factEl.textContent = randomFact;
});

// ==== Show More / Show Less Toggle ====
const toggleBtn = document.getElementById("toggle-btn");
const extraInfo = document.getElementById("extra-info");

toggleBtn.addEventListener("click", () => {
  const isHidden = extraInfo.classList.contains("hidden");
  extraInfo.classList.toggle("hidden");
  toggleBtn.textContent = isHidden ? "Show Less" : "Show More";
});

setInterval(() => plusSlides(1), 5000);
const funFactBtn = document.getElementById('funFactBtn');
if (funFactBtn) {
  const funFactEl = document.getElementById('funFact');
  funFactBtn.addEventListener('click', () => {
    if (funFactEl.classList.contains('hidden')) {
      funFactEl.classList.remove('hidden');
      funFactBtn.textContent = 'Hide Fun Fact';
    } else {
      funFactEl.classList.add('hidden');
      funFactBtn.textContent = 'Show Fun Fact';
    }
  });
}

const filterBtns = document.querySelectorAll('.filter-btn');
if (filterBtns.length) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-category');
      const items = document.querySelectorAll('.gallery-item');
      items.forEach(item => {
        if (category === 'all' || item.getAttribute('data-category') === category) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}
function openLightbox(img) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  lightbox.classList.remove('hidden');
  lightboxImg.src = img.src;
  lightboxCaption.textContent = img.alt;
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.classList.add('hidden');
}
// ==== Gallery Filter Buttons ====
document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const galleryItems = document.querySelectorAll(".gallery-item");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const selectedCategory = button.getAttribute("data-category");

      galleryItems.forEach(item => {
        const itemCategory = item.getAttribute("data-category");

        if (selectedCategory === "all" || selectedCategory === itemCategory) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
      const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Remove 'active' from all buttons
    filterButtons.forEach(btn => btn.classList.remove("active"));

    // Add 'active' to clicked button
    button.classList.add("active");
  });
});



      // Optional: highlight the active button
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
    });
  });
});

