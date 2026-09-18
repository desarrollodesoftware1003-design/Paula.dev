document.addEventListener('DOMContentLoaded', function () {

  var thumbs = document.querySelectorAll('.project-thumb');

  thumbs.forEach(function (thumb) {

    thumb.addEventListener('click', function () {

      var target = document.getElementById(
        thumb.dataset.target
      );

      if (target) {
        target.src = thumb.dataset.full;
      }

      thumbs.forEach(function (item) {
        item.classList.remove('active');
      });

      thumb.classList.add('active');

    });

  });


  var animatedElements = document.querySelectorAll(
    '.service-card, .project-card, .featured-project, .about-grid, .contact-link-card'
  );

  if ('IntersectionObserver' in window) {

    var observer = new IntersectionObserver(
      function (entries) {

        entries.forEach(function (entry) {

          if (entry.isIntersecting) {

            entry.target.classList.add('visible');

            observer.unobserve(entry.target);

          }

        });

      },
      {
        threshold: 0.15
      }
    );

    animatedElements.forEach(function (element) {

      element.classList.add('fade-in');

      observer.observe(element);

    });

  } else {

    animatedElements.forEach(function (element) {
      element.classList.add('visible');
    });

  }

});