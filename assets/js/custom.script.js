
(function($) {
    "use strict";

    $(document).ready(function() {


        /*=========================================================================
         ===  MENU SCROLL FIXED
         ========================================================================== */
        var s = $(".lgx-header-bottom");
        var pos = s.position();

        $(window).on('scroll', function () {
            var windowpos = $(window).scrollTop();
            if (windowpos >= pos.top) {
                s.addClass("menu-onscroll");
            } else {
                s.removeClass("menu-onscroll");
            }
        });

        //Effective For Mobile Device
        /*$('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function () {
         $('.navbar-toggle:visible').click();
         });*/

        /*=========================================================================
         ===  MENU SCROLL FIXED END
         ========================================================================== */



        /*=========================================================================
         ===  MENU Search END
         ========================================================================== */
        $('a[href="#toggle-search"], .lgx-navbar-search .lgx-menu-search .input-group-btn > .btn[type="reset"]').on('click', function(event) {
            event.preventDefault();
            $('.lgx-navbar-search .lgx-menu-search .input-group > input').val('');
            $('.lgx-navbar-search .lgx-menu-search').toggleClass('open');
            $('a[href="#toggle-search"]').closest('li').toggleClass('active');

            if ($('.lgx-navbar-search .lgx-menu-search').hasClass('open')) {
                /* I think .focus dosen't like css animations, set timeout to make sure input gets focus */
                setTimeout(function() {
                    $('.lgx-navbar-search .lgx-menu-search .form-control').focus();
                }, 100);
            }
        });

        $(document).on('keyup', function(event) {
            if (event.which == 27 && $('.lgx-navbar-search .lgx-menu-search').hasClass('open')) {
                $('a[href="#toggle-search"]').trigger('click');
            }
        });
        /*=========================================================================
         ===  MENU Search END
         ========================================================================== */




        /*=========================================================================
         ===  Circular CountDown
         ========================================================================== */
        if ( $('#circular-countdown').length ) {
            $("#circular-countdown").TimeCircles({
                "animation": "smooth",
                "bg_width": 1.0,
                "fg_width": 0.1,
                "circle_bg_color": "#ddd",
                "time": {
                    "Days": {
                        "text": "Days",
                        "color": "#ff8a00",
                        "show": true
                    },
                    "Hours": {
                        "text": "Hours",
                        "color": "#dc4e41",
                        "show": true
                    },
                    "Minutes": {
                        "text": "Minutes",
                        "color": "#00b9ff",
                        "show": true
                    },
                    "Seconds": {
                        "text": "Seconds",
                        "color": "#42bd41",
                        "show": true
                    }
                }
            });
        }
        /*=========================================================================
         ===  Circular CountDown End
         ========================================================================== */




        /*=========================================================================
         ===  // SITE PATH
         ========================================================================== */
        var lgx_path = window.location.protocol + '//' + window.location.host;
        var pathArray = window.location.pathname.split('/');
        for (var i = 1; i < (pathArray.length - 1); i++) {
            lgx_path += '/';
            lgx_path += pathArray[i];
        }

        /*=========================================================================
         ===  // SITE PATH END
         ========================================================================== */


        /*=========================================================================
         ===  COUNTER START
         ========================================================================== */
        var lgxCounter = $('.lgx-counter');
        if (lgxCounter.length) {
            lgxCounter.counterUp({
                delay: 10,
                time: 5000
            });
        }
        /*=========================================================================
         ===  COUNTER END
         ========================================================================== */


        /*=========================================================================
         ===  Modal Video
         ========================================================================== */
        /* Get iframe src attribute value i.e. YouTube video url
         and store it in a variable */
        var url = $("#modalvideo").attr('src');

        /* Remove iframe src attribute on page load to
         prevent autoplay in background */
        $("#modalvideo").attr('src', '');

        /* Assign the initially stored url back to the iframe src
         attribute when modal is displayed */
        $("#lgx-modal").on('shown.bs.modal', function(){
            $("#modalvideo").attr('src', url);
        });

        /* Assign empty url value to the iframe src attribute when
         modal hide, which stop the video playing */
        $("#lgx-modal").on('hide.bs.modal', function(){
            $("#modalvideo").attr('src', '');
        });
        /*=========================================================================
         ===  Modal Video END
         ========================================================================== */




        /*=========================================================================
         ===  countdown
         ========================================================================== */
        if ( $('#lgx-countdown').length ) {

            var dataTime = $('#lgx-countdown').data('date'); // Date Format : Y/m/d

            $('#lgx-countdown').countdown(dataTime, function(event) {
                var $this = $(this).html(event.strftime(''
                        /*+ '<span class="lgx-weecks">%w <i> weeks </i></span> '*/
                    + '<span class="lgx-days">%D <i> Days </i></span> '
                    + '<span class="lgx-hr">%H <i> Hours </i></span> '
                    + '<span class="lgx-min">%M <i> Minutes </i></span> '
                    + '<span class="lgx-sec">%S <i> Seconds </i></span>'
                ));
            });
        }

        /*=========================================================================
         ===  countdown END
         ========================================================================== */




        /*=========================================================================
         ===  SMOOTH SCROLL - REQUIRES JQUERY EASING PLUGIN
         ========================================================================== */

        $( 'a.lgx-scroll' ).on( 'click', function(event) {
            var $anchor = $(this);
            var topTo   = $( $anchor.attr('href') ).offset().top;

            if ( window.innerWidth < 768 ) {
                topTo = ( topTo - 90 );
            }

            $( 'html, body' ).stop().animate({
                scrollTop: topTo
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
            return false;
        } );

        /*=========================================================================
         ===  SMOOTH SCROLL END
         ========================================================================== */



        /*=========================================================================
         ===  magnific popup
         ========================================================================== */
        $('#lgx-photo-gallery').magnificPopup({
            delegate: 'a', // child items selector, by clicking on it popup will open
            type: 'image',
            gallery: {
                enabled: true
            },
            image: {
                titleSrc: 'title'
            }
            // other options
        });
        /*=========================================================================
         ===  magnific popup END
         ========================================================================== */
        if($('#instafeed').length){
            var userFeed = new Instafeed({
                get: 'user',
                userId: '899354552',
                clientId: 'dec2564e767040c5b44161009e80938e',
                accessToken: '899354552.dec2564.2449f199a747499da6b2a4dde25602c2',
                resolution: 'standard_resolution',
                template: '<a href="{{link}}" target="_blank" id="{{id}}"><img src="{{image}}" /></a>',
                sortBy: 'most-recent',
                limit: 6,
                links: false
            });
            userFeed.run();
        }

        /*=========================================================================
         ===  HOME PAGE Slider
         ========================================================================== */
        if ($("#lgx-main-slider").length) {
            $("#lgx-main-slider").owlCarousel({
                margin: 0,
                items: 1,
                loop: true,
                animateOut: 'fadeOut',
                autoplay:true,
                dots: false,
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                autoplayTimeout: 7000,
                autoplaySpeed: 500,
                nav: false,
                addClassActive : true
            });
        }
        /*=========================================================================
         ===  HOME PAGE Slider END
         ========================================================================== */




        /*=========================================================================
         ===  TEACHERS SLIDER
         ========================================================================== */
        if ($('#lgx-owlteachers').length) {
            $("#lgx-owlteachers").owlCarousel({
                margin: 0,
                loop: true,
                autoplay:true,
                dots: false,
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                autoplayTimeout: 5000,
                autoplaySpeed: 500,
                nav: true,
                addClassActive : true,
                responsive:{
                    0:{
                        items:1
                    },
                    480:{
                        items:2
                    },
                    992:{
                        items:3
                    }
                }

            });
        }
        /*=========================================================================
         ===  TEACHERS SLIDER END
         ========================================================================== */



        /*=========================================================================
         ===  NEWS SLIDER
         ========================================================================== */
        if ($('#lgx-owlnews').length) {
            $("#lgx-owlnews").owlCarousel({
                margin: 0,
                items: 3,
                loop: true,
                autoplay:true,
                dots: false,
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                autoplayTimeout: 5000,
                autoplaySpeed: 500,
                nav: true,
                addClassActive : true,
                responsive:{
                    0:{
                        items:1
                    },
                    480:{
                        items:2
                    },
                    992:{
                        items:3
                    }
                }

            });
        }
        /*=========================================================================
         ===  NEWS SLIDER END
         ========================================================================== */

        /*=========================================================================
         ===  TESTIMONIAL SLIDER
         ========================================================================== */
        if ($('#lgx-owltestimonial').length) {
            $("#lgx-owltestimonial").owlCarousel({
                margin: 0,
                items: 2,
                loop: true,
                autoplay:true,
                dots: false,
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                autoplayTimeout: 5000,
                autoplaySpeed: 500,
                nav: true,
                addClassActive : true,
                responsive:{
                    0:{
                        items:1
                    },
                    787:{
                        items:2
                    }
                }
            });
        }
        /*=========================================================================
         ===  TESTIMONIAL SLIDER END
         ========================================================================== */

        /*=========================================================================
         ===  PORTFOLIO FILTER
         ========================================================================== */
        if ( $( '#lgx-courses').length ) {

            var dataAttr = $('#lgx-grid-wrapper').data();

            var $grid = $('#lgx-grid-wrapper').isotope({
                // options
                itemSelector: '.lgx-grid-item',
                layoutMode: 'masonry'//fitRows, vertical
            });

            $(window).load(function () {
                    // show all items
                    $grid.isotope({filter: '*'});
                }
            );

            // Filter items on button click
            $('#lgx-filter').on('click', 'a.lgx-filter-item', function () {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({filter: filterValue});
            });

            $('#lgx-filter').on('click', 'a.lgx-filter-item', function (e) {
                e.preventDefault();
                var link = $(this);

                $("#lgx-filter").find(".active").removeClass("active");
                link.parent().addClass("active");
                return false;
            });
        }//if

        /*=========================================================================
         ===  PORTFOLIO FILTER END
         ========================================================================== */

        if ($(window).width() < 991) {
            $('#lgx-grid-wrapper').removeClass('lgx-list-wrapper');
        }




        /*=========================================================================
         ===  Typed Animation START
         ========================================================================== */
        if($('#lgx-typed-string').length){
            $('#lgx-typed-string').typed({
                strings: ["Education Industry", "Digital University","Online University"],
                // typing speed
                typeSpeed: 10,
                // time before typing starts
                startDelay: 0,
                // backspacing speed
                backSpeed: 0,
                // shuffle the strings
                shuffle: false,
                // time before backspacing
                backDelay: 500,
                // loop
                loop: true,
                // false = infinite
                loopCount: false,
                // show cursor
                showCursor: true,
                // character for cursor
                cursorChar: "|",
                // either html or text
                contentType: 'html'
            });
        }

        /*=========================================================================
         ===  Typed Animation END
         ========================================================================== */







        /*=========================================================================
         ===  GOOGLE MAP
         ========================================================================== */
        if (typeof google != 'undefined') {
            //for Default  map
            if ($('.map-canvas-default').length) {
                $(".map-canvas-default").googleMap({
                    zoom: 8, // Initial zoom level (optiona
                    coords: [40.7127, 74.0059], // Map center (optional)
                    type: "ROADMAP", // Map type (optional),
                    mouseZoom: false
                });

                //for marker
                $(".map-canvas-default").addMarker({
                    coords: [40.7127, 74.0059], // GPS coords
                    title: 'Eventpoint',
                    text: '121 King St, Melbourne VIC 3000, Australia',
                    icon: lgx_path + '/assets/img/map/map-icon.png'
                });
            }

            // FOR DARK MAP
            if ($('.map-canvas-dark').length) {
                $(".map-canvas-dark").googleMap({
                    zoom: 8, // Initial zoom level (optiona
                    coords: [40.7127, 74.0059], // Map center (optional)
                    type: "HYBRID", // Map type (optional),
                    mouseZoom: false
                });

                //for marker
                $(".map-canvas-dark").addMarker({
                    coords: [40.7127, 74.0059], // GPS coords
                    title: 'Eventpoint',
                    text: '121 King St, Melbourne VIC 3000, Australia',
                    icon: lgx_path + '/assets/img/map/map-icon.png'
                });
            }
        }


        /*=========================================================================
         ===  //GOOGLE MAP END
         ========================================================================== */



        /* ==========================================================================
         SUBSCRIPTION & AJAX SUBMISSION
         ========================================================================== */

        var isEmail = function (email) {
            var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return regex.test(email);
        }

        $('form.lgx-subscribe-form').on('submit', function (evnt) {
            evnt.preventDefault();
            //  console.log(lgx_path);
            // console.log('subs submit');
            var $subform = $(this);
            var emailInput = $('form.lgx-subscribe-form').find('input#subscribe');
            if (isEmail(emailInput.val())) {
                // console.log('ok');
                $.ajax({
                    url: lgx_path + '/assets/php/subscribe.php',
                    type: 'post',
                    data: {'email': emailInput.val().toLowerCase()},
                    beforeSubmit: function (argument) {
                        // body...
                    },
                    success: function (ajaxResponse) {

                        var ajaxResponse = $.parseJSON(ajaxResponse);
                        // console.log(ajaxResponse);

                        $('#lgx-subalert').addClass("alert alert-success lgx-sub-alert").html(ajaxResponse.message);

                        try {
                            var ajaxResponse = $.parseJSON(ajaxResponse);
                            if (!ajaxResponse.error) {
                                emailInput.css('color', '#0f0');
                            } else {
                                emailInput.removeAttr('style'); //css('color', '#f00');
                                throw ajaxResponse.message;
                            }
                            //alert( ajaxResponse.message );
                        } catch (e) {
                            // e.message;
                            // alert(e.message );

                        }
                    },
                    error: function (argument) {
                        var ajaxResponse = $.parseJSON(ajaxResponse);
                        $('#lgx-subalert').addClass("alert alert-danger lgx-sub-alert").html(ajaxResponse.message);
                        // body...
                    }
                });
                $subform[0].reset();
            } else {
                emailInput.css('color', '#f00');
                return false;
            }
        });

        $('form.subscribe-form input#subscribe').on('keyup', function (evnt) {
            var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            this.style.color = (isEmail($(this).val())) ? '#f5832b' : '#f00';
        });

        /* ==========================================================================
         SUBSCRIPTION & AJAX SUBMISSION
         ========================================================================== */



        /*=========================================================================
         ===  Start Contact Form Validation And Ajax Submission
         ========================================================================== */

        var alertInterval;//store the timeout interval ID

        //clear interval for alert message window
        $('#lgx-form-modal').on('hide.bs.modal', function (ev) {
            clearInterval(alertInterval);
        });

        var $contactForm = $('form.lgx-contactform');
        $contactForm.validate({
            submitHandler: function (form) {
                //console.log(form);
                var $form = $(form);
                //console.log($form.serialize());
                $.ajax({
                    url: lgx_path + '/assets/php/contact.php',
                    type: 'post',
                    data: $form.serialize(),
                    beforeSubmit: function (argument) {
                        //ajax loading icon
                    },
                    success: function (ajaxResponse) {
                        try {
                            var ajaxResponse = $.parseJSON(ajaxResponse);
                            if (ajaxResponse.error) {
                                //for field error
                                //console.log(ajaxResponse.error_field);
                                for (var i = 0; i < ajaxResponse.error_field.length; i++) {
                                    if ($('p#' + ajaxResponse.error_field[i] + '-error').length) {
                                        $('p#' + ajaxResponse.error_field[i] + '-error').text(ajaxResponse.message[ajaxResponse.error_field[i]]);
                                    } else {
                                        $('#' + ajaxResponse.error_field[i]).after('<p id="' + ajaxResponse.error_field[i] + '-error" class="help-block">' + ajaxResponse.message[ajaxResponse.error_field[i]] + '</p>');
                                    }
                                }

                            } else {
                                $('.lgx-form-msg').removeClass('alert-danger').addClass('alert-success').text(ajaxResponse.message);
                                $('#lgx-form-modal').modal('show');
                                alertInterval = setInterval(function () {
                                    $('#lgx-form-modal').modal('hide');
                                }, 5000);
                                $form[0].reset();
                            }
                        } catch (e) {
                            $('.lgx-form-msg').removeClass('alert-success').addClass('alert-danger').text('Sorry, we are failed to contact with you. Please reload the page and try again.');
                            $('#lgx-form-modal').modal('show');
                            alertInterval = setInterval(function () {
                                $('#lgx-form-modal').modal('hide');
                            }, 5000);
                        }
                    },
                    error: function (argument) {
                        $('.lgx-form-msg').removeClass('alert-success').addClass('alert-danger').text('Sorry, we can not communicate with you. Please make sure you are connected with internet.');
                        $('#lgx-form-modal').modal('show');
                        alertInterval = setInterval(function () {
                            $('#lgx-form-modal').modal('hide');
                        }, 5000);
                    },
                    complete: function () {

                    }
                });

                return false;
            },
            errorElement: 'p',
            errorClass: 'help-block',
            rules: {
                'lgxname': {
                    required: true,
                    minlength: 3
                },

                'lgxemail': {
                    required: true,
                    email: true
                },

                'lgxsubject': {
                    required: true,
                    minlength: 5
                },

                'lgxmessage': {
                    required: true,
                    minlength: 5
                }
            }
        });

        /*=========================================================================
         ===  Start Contact Form Validation And Ajax Submission END
         ========================================================================== */

    });//DOM READY


})(jQuery);





