$(document).ready(function() {
    // Smooth scrolling for navigation links
    $('a.nav-link').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

    // Scroll to top button
    var scrollTopButton = $('<button id="scrollTopButton" class="btn btn-primary">Top</button>').appendTo('body');
    scrollTopButton.hide();

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            scrollTopButton.fadeIn();
        } else {
            scrollTopButton.fadeOut();
        }
    });

    scrollTopButton.on('click', function() {
        $('html, body').animate({scrollTop: 0}, 600);
        return false;
    });

    // Hover effect for dropdown
    $('.nav-item.dropdown').hover(function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
    }, function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
    });      
  
});



