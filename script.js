document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
      let rows = document.querySelectorAll('.carousel.slide');
      rows.forEach(function(row) {
        let rect = row.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          // La riga è visibile, mostra il carosello
          var carousel = row.querySelector('.carousel-inner');
          carousel.style.display = 'block';
        }
      });
    });
  });


 