/**
 * CSST102-3A Portfolio - Main Scripts
 * Shared JavaScript functionality for all pages
 */

// Page load animation
function initPageLoad() {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.3s ease-in-out';
  
  window.addEventListener('load', () => {
    document.body.style.opacity = '1';
  });
}

// Mobile menu toggle with accessibility
function initMobileMenu() {
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.toggle('hidden');
      menuBtn.setAttribute('aria-expanded', !isHidden);
      
      // Add smooth animation
      if (!isHidden) {
        mobileMenu.style.maxHeight = '0';
        mobileMenu.style.overflow = 'hidden';
        mobileMenu.style.transition = 'max-height 0.3s ease-out';
        requestAnimationFrame(() => {
          mobileMenu.style.maxHeight = mobileMenu.scrollHeight + 'px';
        });
      }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!menuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.add('hidden');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.focus();
      }
    });
  }
}

// Navbar scroll effect
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('nav-scrolled');
      } else {
        navbar.classList.remove('nav-scrolled');
      }
    });
  }
}

// Scroll-triggered fade-in animations
function initScrollAnimations() {
  // Respect reduced motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Animate activity cards with stagger
  document.querySelectorAll('.activity-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    fadeObserver.observe(card);
  });

  // Animate info cards
  document.querySelectorAll('.info-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = `opacity 0.5s ease ${index * 0.15}s, transform 0.5s ease ${index * 0.15}s`;
    fadeObserver.observe(card);
  });

  // Animate glass cards
  document.querySelectorAll('.glass-card').forEach((card, index) => {
    if (!card.classList.contains('activity-card') && !card.classList.contains('info-card')) {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
      fadeObserver.observe(card);
    }
  });
}

// Smooth scroll for anchor links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId !== '#' && targetId !== '#main-content') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
}

// Initialize all main functionality
function initMain() {
  initMobileMenu();
  initNavbarScroll();
  initScrollAnimations();
  initSmoothScroll();
}

// Initialize page load animation early
initPageLoad();

// If components.js is not being used, initialize directly
// Otherwise, components.js will call initMain() after injecting components
if (document.getElementById('navbar')) {
  // Navbar already exists in HTML (not using components.js)
  document.addEventListener('DOMContentLoaded', initMain);
}

