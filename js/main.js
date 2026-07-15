/* ============================================
   The Wax Box by MC — Main Interactions
   Mobile menu, dropdown, FAQ, scroll effects
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  // ---- Elements ----
  const nav = document.querySelector('nav.top-nav');
  const hamburger = document.querySelector('.hamburger');
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const dropdownParent = document.querySelector('.dropdown');
  const navLinks = document.querySelector('.nav-links');
  const faqQuestions = document.querySelectorAll('.faq-question');

  // ---- Mobile Hamburger Menu Toggle ----
  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('nav-open');
      hamburger.setAttribute('aria-expanded', isOpen);
    });
  }

  // ---- Aftercare Dropdown Toggle (Mobile Only) ----
  if (dropdownToggle && dropdownParent) {
    dropdownToggle.addEventListener('click', (event) => {
      // Only toggle on mobile (< 768px)
      if (window.innerWidth < 768) {
        const isOpen = dropdownParent.classList.toggle('dropdown-open');
        dropdownToggle.setAttribute('aria-expanded', isOpen);
      }
    });
  }

  // ---- Close Mobile Menu on Nav Link Click ----
  if (navLinks && nav && hamburger) {
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('nav-open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ---- FAQ Accordion ----
  if (faqQuestions.length > 0) {
    faqQuestions.forEach(button => {
      button.addEventListener('click', () => {
        const faqItem = button.closest('.faq-item');
        const faqAnswer = faqItem.querySelector('.faq-answer');
        const isOpen = faqItem.classList.contains('open');

        // Close all other FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
          if (item !== faqItem) {
            item.classList.remove('open');
            const answer = item.querySelector('.faq-answer');
            if (answer) {
              answer.style.maxHeight = null;
            }
            const otherButton = item.querySelector('.faq-question');
            if (otherButton) {
              otherButton.setAttribute('aria-expanded', 'false');
            }
          }
        });

        // Toggle current item
        if (isOpen) {
          faqItem.classList.remove('open');
          faqAnswer.style.maxHeight = null;
          button.setAttribute('aria-expanded', 'false');
        } else {
          faqItem.classList.add('open');
          faqAnswer.style.maxHeight = faqAnswer.scrollHeight + 'px';
          button.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  // ---- Nav Scroll Shadow ----
  if (nav) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    });
  }

  // ---- Close Mobile Menu on Outside Click ----
  if (nav && hamburger) {
    document.addEventListener('click', (event) => {
      const isClickInsideNav = nav.contains(event.target);
      if (!isClickInsideNav) {
        nav.classList.remove('nav-open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }
});
