(function ($) {
    'use strict';

    var browserWindow = $(window);

    // :: 1.0 Preloader Active Code
    browserWindow.on('load', function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

    // :: 2.0 Nav Active Code
    if ($.fn.classyNav) {
        $('#vcardNav').classyNav();
    }

    // :: 3.0 Masonary Gallery Active Code
    if ($.fn.imagesLoaded) {
        $('.vcard-portfolio').imagesLoaded(function () {
            // filter items on button click
            $('.portfolio-menu').on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });
            // init Isotope
            var $grid = $('.vcard-portfolio').isotope({
                itemSelector: '.single-portfolio-area',
                percentPosition: true,
                masonry: {
                    columnWidth: '.single-portfolio-area'
                }
            });
        });
    }

    // :: 4.0 Gallery Menu Style Active Code
    $('.portfolio-menu button.btn').on('click', function () {
        $('.portfolio-menu button.btn').removeClass('active');
        $(this).addClass('active');
    })

    // :: 5.0 Mobile Menu Active Code
    $('.nav-toggle').on('click', function () {
        $('.vcard-nav').toggleClass('on');
    })
    $('.vcard-nav').on('click', function () {
        $(this).removeClass('on');
    })

    // :: 6.0 Image Popup Active Code
    if ($.fn.magnificPopup) {
        $('.img-url').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    }

    // :: 7.0 ScrollUp Active Code
    if ($.fn.scrollUp) {
        browserWindow.scrollUp({
            scrollSpeed: 1500,
            scrollText: '<i class="fa fa-angle-up"></i>'
        });
    }

    // :: 8.0 CouterUp Active Code
    if ($.fn.counterUp) {
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });
    }

    // :: 9.0 Testimonials Slides Active Code
    if ($.fn.owlCarousel) {
        $(".testimonial-slides").owlCarousel({
            items: 3,
            loop: true,
            center: true,
            autoplay: true,
            smartSpeed: 1500,
            margin: 30,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                320: {
                    items: 1
                },
                576: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        })
    }

    // :: 10.0 Sticky Active Code
    browserWindow.on('scroll', function () {
        if (browserWindow.scrollTop() > 0) {
            $('.header-area').addClass('sticky');
        } else {
            $('.header-area').removeClass('sticky');
        }
    });

    // :: 11.0 wow Active Code
    if (browserWindow.width() > 767) {
        new WOW().init();
    }

    // :: 12.0 Progress Bar Active Code
    if ($.fn.circleProgress) {
        $('#circle').circleProgress({
            size: 180,
            emptyFill: "rgba(0, 0, 0, .0)",
            fill: '#ffb016',
            thickness: '16',
            reverse: true
        });
        $('#circle2').circleProgress({
            size: 180,
            emptyFill: "rgba(0, 0, 0, .0)",
            fill: '#ffb016',
            thickness: '16',
            reverse: true
        });
        $('#circle3').circleProgress({
            size: 180,
            emptyFill: "rgba(0, 0, 0, .0)",
            fill: '#ffb016',
            thickness: '16',
            reverse: true
        });
        $('#circle4').circleProgress({
            size: 180,
            emptyFill: "rgba(0, 0, 0, .0)",
            fill: '#ffb016',
            thickness: '16',
            reverse: true
        });
    }

    // :: 13.0 onePageNav Active Code
    if ($.fn.onePageNav) {
        $('#vcardMenu').onePageNav({
            currentClass: 'active',
            scrollSpeed: 2000,
            easing: 'easeOutQuad'
        });
    }

    // :: 14.0 Nice Scroll Active Code
    if ($.fn.niceScroll) {
        $(".page-content").niceScroll({
            cursorborder: "0 solid transparent",
        });
    }

    // :: 15.0 Tooltip Active Code
    if ($.fn.tooltip) {
        $('[data-toggle="tooltip"]').tooltip();
    }

    // :: 16.0 prevent default a click
    $('a[href="#"]').on('click', function ($) {
        $.preventDefault()
    });

})(jQuery);