console.log("Hi! Welcome to My Portfolio Site")

function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle') {
        x.className += ' responsive';
      } else {
        x.className = 'navtoggle';
      }
  }

  $(document).ready(function() {
    // Add smooth scrolling to all anchor links
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Animate smooth scroll
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      }
    });
  });