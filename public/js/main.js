(function() {
  'use strict';

  // ===== NAVBAR SCROLL EFFECT =====
  var navbar = document.getElementById('navbar');
  var scrolled = false;

  // Hide navbar at the top of the page
  navbar.classList.add('nav-hidden');

  function onScroll() {
    if (window.scrollY > 50 && !scrolled) {
      navbar.classList.add('nav-scrolled');
      navbar.classList.remove('nav-hidden');
      scrolled = true;
    } else if (window.scrollY <= 50 && scrolled) {
      navbar.classList.remove('nav-scrolled');
      navbar.classList.add('nav-hidden');
      scrolled = false;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  // ===== MOBILE MENU =====
  var menuToggle = document.getElementById('menu-toggle');
  var mobileMenu = document.getElementById('mobile-menu');
  var menuIcon = document.getElementById('menu-icon');
  var closeIcon = document.getElementById('close-icon');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
      menuIcon.classList.toggle('hidden');
      closeIcon.classList.toggle('hidden');
    });

    mobileMenu.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      });
    });
  }

  // ===== SCROLL REVEAL =====
  var revealObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  document.querySelectorAll('.reveal').forEach(function(el) {
    revealObserver.observe(el);
  });


})();
