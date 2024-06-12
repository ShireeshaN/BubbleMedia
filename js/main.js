(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


    // Team carousel
    $(".team-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 30,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    // Contact form sending details to whatsapp
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get form data
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validation
    let valid = true;
    if (!name) {
        document.getElementById("name").classList.add("is-invalid");
        valid = false;
    } else {
        document.getElementById("name").classList.remove("is-invalid");
    }

    if (!email) {
        document.getElementById("email").classList.add("is-invalid");
        valid = false;
    } else {
        document.getElementById("email").classList.remove("is-invalid");
    }

    if (!subject) {
        document.getElementById("subject").classList.add("is-invalid");
        valid = false;
    } else {
        document.getElementById("subject").classList.remove("is-invalid");
    }

    if (!message) {
        document.getElementById("message").classList.add("is-invalid");
        valid = false;
    } else {
        document.getElementById("message").classList.remove("is-invalid");
    }

    if (valid) {
        // Construct the WhatsApp message
        const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0ASubject: ${subject}%0AMessage: ${message}`;

        // WhatsApp number (including country code, but without any "+" sign)
        const whatsappNumber = "917013885821"; // Replace with your WhatsApp number

        // Construct the WhatsApp URL
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

        // Redirect to the WhatsApp URL
        window.location.href = whatsappURL;
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('myCanvas');

    function tryPlayVideo() {
        // Attempt to play the video
        video.muted = true
        var playPromise = video.play();

        // Check if play promise is returned
        if (playPromise !== undefined) {
            playPromise.then(function() {
                // Autoplay started!
                video.muted = false; // Ensure the sound is on
            }).catch(function(error) {
                // Autoplay was prevented, possibly due to browser's autoplay policy
                console.log('Autoplay was prevented: ', error);
                video.muted = true; // Mute the video so it can play
                video.play(); // Attempt to play again muted
            });
        }
    }

    video.addEventListener('canplaythrough', function() {
        tryPlayVideo();
    });

    // Ensure the video is loaded
    video.addEventListener('loadeddata', function() {
        
    });
});

    
})(jQuery);

