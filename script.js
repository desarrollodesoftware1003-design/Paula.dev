document.addEventListener('DOMContentLoaded', function () {
  var thumbs = document.querySelectorAll('.project-thumb');

  thumbs.forEach(function (thumb) {
    thumb.addEventListener('mouseenter', function () {
      var target = document.getElementById(thumb.dataset.target);
      if (target) {
        target.src = thumb.dataset.full;
      }
    });
  });
});

// Animación al hacer scroll
var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0 });

document.querySelectorAll('.service-card, .project-card, .featured-project, .about-grid, .contact-link-card').forEach(function (el) {
  el.classList.add('fade-in');
  observer.observe(el);
});