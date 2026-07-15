/* ============================================
   The Wax Box by MC — Component Injection
   Injects nav and footer into every page
   ============================================ */

function injectNav() {
  const navHTML = `
    <nav class="top-nav">
      <div class="nav-container">
        <a href="index.html" class="logo-link">
          <img src="images/logo.png" alt="The Wax Box by MC" class="logo">
        </a>
        <ul class="nav-links">
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="pricing.html">Pricing</a></li>
          <li><a href="location.html">Location</a></li>
          <li><a href="faq.html">FAQ</a></li>
          <li class="dropdown">
            <button class="dropdown-toggle" aria-haspopup="true" aria-expanded="false">
              Aftercare <span class="dropdown-arrow">▾</span>
            </button>
            <ul class="dropdown-menu">
              <li><a href="aftercare-waxing.html">Waxing Aftercare</a></li>
              <li><a href="aftercare-lash.html">Lash Aftercare</a></li>
            </ul>
          </li>
          <li><a href="policies.html">Policies</a></li>
          <li><a href="https://www.fresha.com/book-now/the-wax-room-ndhjrqek/all-offer?share=true&pId=2995913" class="btn-book-now" target="_blank" rel="noopener noreferrer">Book Now</a></li>
        </ul>
        <button class="hamburger" aria-label="Toggle menu" aria-expanded="false">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  `;

  const navPlaceholder = document.getElementById('nav-placeholder');
  if (navPlaceholder) {
    navPlaceholder.innerHTML = navHTML;
    setActiveNavLink();
  }
}

function injectFooter() {
  const footerHTML = `
    <footer class="site-footer">
      <div class="footer-container">
        <div class="footer-col">
          <h3>Contact Us</h3>
          <p>
            <a href="mailto:the.wax.box@outlook.com">the.wax.box@outlook.com</a><br>
            Phone: Coming soon<br><br>
            <a href="location.html">170 North Queen St., Unit K Suite #50<br>
            Etobicoke, ON M9C 1B1</a>
          </p>
        </div>

        <div class="footer-col">
          <h3>Quick Links</h3>
          <div class="footer-links-grid">
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="services.html">Services</a></li>
              <li><a href="pricing.html">Pricing</a></li>
              <li><a href="location.html">Location</a></li>
            </ul>
            <ul>
              <li><a href="faq.html">FAQ</a></li>
              <li><a href="aftercare-waxing.html">Waxing Aftercare</a></li>
              <li><a href="aftercare-lash.html">Lash Aftercare</a></li>
              <li><a href="policies.html">Policies</a></li>
            </ul>
          </div>
        </div>

        <div class="footer-col">
          <h3>Follow Us</h3>
          <a href="https://www.instagram.com/thewaxboxbymc" target="_blank" rel="noopener noreferrer" class="footer-instagram-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span>@THEWAXBOXBYMC</span>
          </a>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2026 The Wax Box by MC. All rights reserved.</p>
      </div>
    </footer>
  `;

  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) {
    footerPlaceholder.innerHTML = footerHTML;
  }
}

function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const page = currentPage === '' ? 'index.html' : currentPage;

  document.querySelectorAll('nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href && !href.startsWith('http') && href === page) {
      link.classList.add('active');
    }
  });

  if (page === 'aftercare-waxing.html' || page === 'aftercare-lash.html') {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    if (dropdownToggle) {
      dropdownToggle.classList.add('active');
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  injectNav();
  injectFooter();
});
