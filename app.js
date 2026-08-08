/* ===== Cream It Bakery — Core Application Logic ===== */

// ─── Dark / Light Mode ───
const ThemeManager = {
  init() {
    const saved = localStorage.getItem('sc-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = saved || (prefersDark ? 'dark' : 'light');
    this.set(theme, false);

    document.querySelectorAll('#theme-toggle, .theme-toggle').forEach(btn => {
      btn.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        this.set(current === 'dark' ? 'light' : 'dark', true);
      });
    });
  },

  set(theme, animate = true) {
    if (animate) {
      document.documentElement.style.transition = 'background-color 0.5s ease, color 0.5s ease';
    }
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('sc-theme', theme);
  }
};

// ─── Glassmorphism Nav ───
const NavManager = {
  init() {
    const nav = document.querySelector('.nav');
    if (!nav) return;

    const hamburger = document.querySelector('.nav__hamburger');
    const menu = document.querySelector('.nav__menu');

    // Scroll behavior
    let lastScroll = 0;
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 50) {
        nav.classList.add('nav--scrolled');
        nav.classList.remove('nav--transparent');
      } else {
        nav.classList.remove('nav--scrolled');
        // Only add transparent class on pages with hero
        if (document.querySelector('.hero')) {
          nav.classList.add('nav--transparent');
        }
      }
      lastScroll = scrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    // Hamburger toggle
    if (hamburger && menu) {
      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        menu.classList.toggle('open');
        document.body.classList.toggle('no-scroll');
      });

      // Close menu when clicking a link
      menu.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', () => {
          hamburger.classList.remove('open');
          menu.classList.remove('open');
          document.body.classList.remove('no-scroll');
        });
      });
    }

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (menu && menu.classList.contains('open') &&
        !menu.contains(e.target) && !hamburger.contains(e.target)) {
        hamburger.classList.remove('open');
        menu.classList.remove('open');
        document.body.classList.remove('no-scroll');
      }
    });
  }
};

// ─── Scroll-Triggered Reveal Animations ───
const RevealManager = {
  init() {
    const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    if (!reveals.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -60px 0px'
    });

    reveals.forEach(el => observer.observe(el));
  }
};

// ─── Parallax ───
const ParallaxManager = {
  init() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    if (!parallaxElements.length) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      parallaxElements.forEach(el => {
        const speed = parseFloat(el.dataset.parallax) || 0.3;
        const rect = el.getBoundingClientRect();
        const centerY = rect.top + rect.height / 2;
        const viewportCenter = window.innerHeight / 2;
        const offset = (centerY - viewportCenter) * speed;
        el.style.transform = `translateY(${offset}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
  }
};

// ─── Lazy Loading with Progressive Blur ───
const LazyLoadManager = {
  init() {
    const images = document.querySelectorAll('img[data-src]');
    if (!images.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const src = img.dataset.src;

          // Create a new image to preload
          const tempImg = new Image();
          tempImg.onload = () => {
            img.src = src;
            img.classList.add('loaded');
            img.removeAttribute('data-src');
          };
          tempImg.src = src;

          observer.unobserve(img);
        }
      });
    }, {
      rootMargin: '200px'
    });

    images.forEach(img => {
      img.style.filter = 'blur(8px)';
      img.style.transition = 'filter 0.5s ease';
      observer.observe(img);
    });

    // Style for loaded images
    const style = document.createElement('style');
    style.textContent = 'img.loaded { filter: blur(0) !important; }';
    document.head.appendChild(style);
  }
};

// ─── Smooth Scroll ───
const SmoothScrollManager = {
  init() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const id = anchor.getAttribute('href');
        if (id === '#') return;
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }
};

// ─── Animated Number Counter ───
const CounterManager = {
  init() {
    const counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animate(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(el => observer.observe(el));
  },

  animate(el) {
    const target = parseInt(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    const duration = 2000;
    const start = performance.now();

    const update = (currentTime) => {
      const elapsed = currentTime - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);
      el.textContent = current.toLocaleString() + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
  }
};

// ─── Testimonial Slider ───
const TestimonialSlider = {
  currentIndex: 0,
  interval: null,

  init() {
    const track = document.querySelector('.testimonials-track');
    const dots = document.querySelectorAll('.testimonials-dot');
    if (!track || !dots.length) return;

    this.track = track;
    this.dots = dots;
    this.total = dots.length;

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => this.goTo(i));
    });

    this.autoPlay();

    // Pause on hover
    const slider = document.querySelector('.testimonials-slider');
    if (slider) {
      slider.addEventListener('mouseenter', () => this.pause());
      slider.addEventListener('mouseleave', () => this.autoPlay());
    }
  },

  goTo(index) {
    this.currentIndex = index;
    this.track.style.transform = `translateX(-${index * 100}%)`;
    this.dots.forEach((d, i) => d.classList.toggle('active', i === index));
  },

  next() {
    this.goTo((this.currentIndex + 1) % this.total);
  },

  autoPlay() {
    this.pause();
    this.interval = setInterval(() => this.next(), 5000);
  },

  pause() {
    if (this.interval) clearInterval(this.interval);
  }
};

// ─── Button Ripple Effect ───
const RippleManager = {
  init() {
    document.querySelectorAll('.btn, .product-card__add-btn, .nav__action-btn').forEach(btn => {
      btn.addEventListener('click', function (e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.cssText = `
          position: absolute;
          width: ${size}px;
          height: ${size}px;
          left: ${x}px;
          top: ${y}px;
          background: rgba(255,255,255,0.3);
          border-radius: 50%;
          transform: scale(0);
          animation: ripple 0.6s linear;
          pointer-events: none;
        `;

        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
      });
    });
  }
};

// ─── Toast Notifications ───
const Toast = {
  container: null,

  init() {
    this.container = document.createElement('div');
    this.container.className = 'toast-container';
    document.body.appendChild(this.container);
  },

  show(message, type = 'success', duration = 3000) {
    const icons = { success: '✓', error: '✕', info: 'ℹ' };
    const toast = document.createElement('div');
    toast.className = `toast toast--${type}`;
    toast.innerHTML = `
      <span class="toast__icon">${icons[type] || icons.info}</span>
      <span>${message}</span>
    `;
    this.container.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('removing');
      setTimeout(() => toast.remove(), 300);
    }, duration);
  }
};

// ─── Initialize Everything ───
document.addEventListener('DOMContentLoaded', () => {
  ThemeManager.init();
  NavManager.init();
  RevealManager.init();
  ParallaxManager.init();
  LazyLoadManager.init();
  SmoothScrollManager.init();
  CounterManager.init();
  TestimonialSlider.init();
  RippleManager.init();
  Toast.init();
});
