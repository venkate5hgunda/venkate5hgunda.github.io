/**
 * Venkatesh Gunda - Portfolio Interactive Script
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Toast Notification System
  const toastContainer = document.getElementById('toast-container');

  window.showToast = function (message, duration = 3000) {
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M20 6L9 17l-5-5"/>
      </svg>
      <span>${message}</span>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, duration);
  };

  // 2. Navigation Scroll Spy
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function highlightNavOnScroll() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightNavOnScroll);

  // 3. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobile-nav-toggle');
  const navLinksContainer = document.querySelector('.nav-links');

  if (mobileToggle && navLinksContainer) {
    mobileToggle.addEventListener('click', () => {
      const isVisible = navLinksContainer.style.display === 'flex';
      navLinksContainer.style.display = isVisible ? 'none' : 'flex';
      navLinksContainer.style.position = isVisible ? 'static' : 'absolute';
      navLinksContainer.style.top = '72px';
      navLinksContainer.style.left = '0';
      navLinksContainer.style.width = '100%';
      navLinksContainer.style.background = 'rgba(15, 23, 42, 0.95)';
      navLinksContainer.style.flexDirection = 'column';
      navLinksContainer.style.padding = '16px 24px';
      navLinksContainer.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 900) {
          navLinksContainer.style.display = 'none';
        }
      });
    });
  }

  // 4. Update Current Year
  const currentYearSpan = document.getElementById('current-year');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }
});
