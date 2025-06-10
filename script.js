// script.js
// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Navbar Scroll Effect
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
      navbar.style.background = 'rgba(21, 23, 37, 0.95)';
  } else {
      navbar.style.background = 'var(--card-bg)';
  }
});

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      const isOpen = answer.style.maxHeight;

      document.querySelectorAll('.faq-answer').forEach(a => {
          a.style.maxHeight = null;
      });

      if (!isOpen) {
          answer.style.maxHeight = answer.scrollHeight + 'px';
      }
  });
});

// Testimonial Slider
const testimonialSlider = {
  currentSlide: 0,
  slides: document.querySelectorAll('.testimonial-slide'),
  
  init() {
      this.showSlide(this.currentSlide);
      setInterval(() => this.nextSlide(), 5000);
  },

  showSlide(n) {
      this.slides.forEach(slide => slide.style.display = 'none');
      this.slides[n].style.display = 'block';
  },

  nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
      this.showSlide(this.currentSlide);
  }
};

// Initialize slider
document.addEventListener('DOMContentLoaded', () => {
  testimonialSlider.init();
});

// Product Filter
const productFilter = {
  init() {
      const filterButtons = document.querySelectorAll('.filter-btn');
      filterButtons.forEach(btn => {
          btn.addEventListener('click', () => {
              const category = btn.dataset.category;
              this.filterProducts(category);
          });
      });
  },

  filterProducts(category) {
      const products = document.querySelectorAll('.product-card');
      products.forEach(product => {
          if (category === 'all' || product.dataset.category === category) {
              product.style.display = 'block';
          } else {
              product.style.display = 'none';
          }
      });
  }
};

productFilter.init();