// Main JavaScript for BioAI Solutions Website

document.addEventListener('DOMContentLoaded', function() {
  // Initialize Swiper
  initializeSwiper();
  
  // Initialize back to top button
  initializeBackToTop();
  
  // Initialize smooth scrolling for navigation links
  initializeSmoothScrolling();
  
  // Initialize Jarallax effect
  initializeJarallax();
  
  // Initialize theme switcher
  initializeThemeSwitcher();
});

// Initialize Swiper slider
function initializeSwiper() {
  const swiperElements = document.querySelectorAll('.swiper');
  
  swiperElements.forEach(element => {
    const options = JSON.parse(element.getAttribute('data-swiper-options') || '{}');
    
    new Swiper(element, {
      slidesPerView: 1,
      spaceBetween: 8,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        prevEl: '#prev-news',
        nextEl: '#next-news'
      },
      breakpoints: {
        500: {
          slidesPerView: 2
        },
        700: {
          slidesPerView: 3
        },
        1000: {
          slidesPerView: 4
        }
      },
      ...options
    });
  });
}

// Initialize back to top button
function initializeBackToTop() {
  const backToTopButton = document.querySelector('.btn-scroll-top');
  
  if (!backToTopButton) return;
  
  // Show/hide button based on scroll position
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.add('show');
    } else {
      backToTopButton.classList.remove('show');
    }
  });
  
  // Smooth scroll to top when clicked
  backToTopButton.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Initialize smooth scrolling for navigation links
function initializeSmoothScrolling() {
  const navLinks = document.querySelectorAll('a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      if (href === '#') return;
      
      const targetElement = document.querySelector(href);
      
      if (targetElement) {
        e.preventDefault();
        
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        const offcanvas = document.querySelector('.offcanvas');
        if (offcanvas && offcanvas.classList.contains('show')) {
          const closeButton = offcanvas.querySelector('.btn-close');
          if (closeButton) {
            closeButton.click();
          }
        }
      }
    });
  });
}

// Initialize Jarallax effect
function initializeJarallax() {
  const jarallaxElements = document.querySelectorAll('[data-jarallax]');
  
  jarallaxElements.forEach(element => {
    const speed = element.getAttribute('data-speed') || 0.35;
    
    // Simple parallax effect
    window.addEventListener('scroll', function() {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -speed;
      
      const jarallaxImg = element.querySelector('.jarallax-img');
      if (jarallaxImg) {
        jarallaxImg.style.transform = `translateY(${rate}px)`;
      }
    });
  });
}

// Initialize theme switcher
function initializeThemeSwitcher() {
  const themeToggle = document.getElementById('theme-mode');
  
  if (!themeToggle) return;
  
  // Load saved theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-bs-theme', savedTheme);
    themeToggle.checked = savedTheme === 'dark';
  }
  
  // Handle theme toggle
  themeToggle.addEventListener('change', function() {
    const html = document.documentElement;
    
    if (this.checked) {
      html.setAttribute('data-bs-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html.setAttribute('data-bs-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  });
}

// Add fade-in animation on scroll
function initializeScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-up');
      }
    });
  }, observerOptions);
  
  // Observe elements for animation
  const animateElements = document.querySelectorAll('.card, .swiper-slide, .col');
  animateElements.forEach(el => {
    observer.observe(el);
  });
}

// Initialize scroll animations
document.addEventListener('DOMContentLoaded', function() {
  initializeScrollAnimations();
});

// Handle mobile menu
document.addEventListener('DOMContentLoaded', function() {
  const navbarToggler = document.querySelector('.navbar-toggler');
  const offcanvas = document.querySelector('.offcanvas');
  
  if (navbarToggler && offcanvas) {
    navbarToggler.addEventListener('click', function() {
      offcanvas.classList.toggle('show');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!offcanvas.contains(e.target) && !navbarToggler.contains(e.target)) {
        offcanvas.classList.remove('show');
      }
    });
  }
});

// Add loading animation
window.addEventListener('load', function() {
  const preloader = document.querySelector('.page-loading');
  if (preloader) {
    preloader.classList.remove('active');
    setTimeout(function() {
      preloader.remove();
    }, 1000);
  }
});

// Handle form submissions (if any)
document.addEventListener('DOMContentLoaded', function() {
  const forms = document.querySelectorAll('form');
  
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Add your form handling logic here
      console.log('Form submitted:', form);
    });
  });
});

// Add hover effects for service cards
document.addEventListener('DOMContentLoaded', function() {
  const serviceCards = document.querySelectorAll('.card-hover');
  
  serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
});

// Handle team member social links
document.addEventListener('DOMContentLoaded', function() {
  const socialLinks = document.querySelectorAll('.btn-icon');
  
  socialLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const platform = this.classList.contains('btn-facebook') ? 'Facebook' :
                      this.classList.contains('btn-linkedin') ? 'LinkedIn' :
                      this.classList.contains('btn-twitter') ? 'Twitter' : 'Social';
      
      console.log(`${platform} link clicked`);
      // Add your social media handling logic here
    });
  });
}); 