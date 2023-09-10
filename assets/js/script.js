(function ($) {
    "use strict";

    var msy_qa = {
        
        /* ============================================================ */
        /* PRELOADER
        /* ============================================================ */
        preloader: function(){
            $(window).on('load', function() {
                $(".preloader").fadeOut();     
            });
        },

        /* ============================================================ */
        /* Mobile Menu Integration
        /* ============================================================ */
        mobile_menu: function() {
            
            function mobile_menu(selector, actionSelector) {
                var mobile_menu = $(selector);
                mobile_menu.on("click", function() {
                    $(selector).toggleClass('is-menu-open');
                });
                
                var hamburgerbtn = $(selector);
                hamburgerbtn.on("click", function() {
                    $(actionSelector).toggleClass('is-menu-open');
                });
        
                $(document).on('click', function(e) {
                    var selectorType = $(actionSelector).add(mobile_menu);
                    if (selectorType.is(e.target) !== true && selectorType.has(e.target).length === 0) {
                        $(actionSelector).removeClass("is-menu-open");
                        $(selector).removeClass("is-menu-open");
                    }          
                });
            
            };
            mobile_menu('.menu-toggler, .close-menu', '.mobile-menu');  
            	
            $('.mobile-menu ul li.menu-has-children > a').on('click', function () {
                $('.mobile-menu ul li.menu-has-children .submenu').each(function() { 
                    if($(this).is(":visible")) { 
                        $(this).slideUp(); 
                    }
                }); 
                if($(this).parent('li').children('.submenu').length) {
                    if(!$(this).parent('li').children('.submenu').is(":visible")) { 
                        $(this).parent('li').children('.submenu').slideToggle();
                    }
                    return false; 
                }
            });
        },
        
        /* ============================================================ */
        /* Random
        /* ============================================================ */
        commonActivation: function(){    
            // Visualizing things on Hover
            $('.rating-stars li').on('mouseover', function() {
                var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on
                // Now highlight all the stars that's not after the current hovered star
                $(this).parent().children('li.star').each(function(e) {
                    if (e < onStar) {
                        $(this).addClass('hover');
                    } else {
                        $(this).removeClass('hover');
                    }
                });
            }).on('mouseout', function() {
                $(this).parent().children('li.star').each(function(e) {
                    $(this).removeClass('hover');
                });
            });
            // Action to perform on click 
            $('.rating-stars li').on('click', function() {
                var onStar = parseInt($(this).data('value'), 10); // The star currently selected
                var stars = $(this).parent().children('li.star');

                for ( var i = 0; i < stars.length; i++) {
                    $(stars[i]).removeClass('selected');
                }

                for ( var i = 0; i < onStar; i++) {
                    $(stars[i]).addClass('selected');
                }
            });
        },

        /* ============================================================ */
        /* Hero Slider
        /* ============================================================ */
        heroSlider: function() {
            var heroSlider = $('.hero-carousel .owl-carousel');
            heroSlider.owlCarousel({
                items: 1,
                loop: 1,
                dots: 1,
                nav: !1,
                rtl: 1,
                autoplay: 1,
                autoplaySpeed: 800,
                autoplayTimeout: 5000
            });
        },
        /* ============================================================ */
        /* Service Slider
        /* ============================================================ */
        serviceSlider: function() {
            var serviceSlider = $('.service-carousel.owl-carousel');
            serviceSlider.owlCarousel({
                items: 1,
                loop: 1,
                dots: !1,
                nav: !1,
                rtl: 1,
                autoplay: 1,
                autoplaySpeed: 800,
                autoplayTimeout: 5000,
                margin: 30,
                responsive: {
                    576: {
                        items: 2,
                        margin: 20,
                    },
                    768: {
                        items: 2,
                        margin: 30,
                    },
                    992: {
                        items: 3,
                        margin: 20,
                    },
                    1200: {
                        items: 4,
                        margin: 20,
                    },
                }
            });
        },
        /* ============================================================ */
        /* Clubs Slider
        /* ============================================================ */
        clubsSlider: function() {
            var clubsSlider = $('.centers-club .partner-carousel');
            clubsSlider.owlCarousel({
                items: 3,
                loop: 1,
                dots: !1,
                nav: !1,
                rtl:1,
                autoplay: 1,
                autoplaySpeed: 800,
                autoplayTimeout: 7000,
                // margin: 150,
                margin: 40,
                responsive: {
                    576: {
                        items: 4,
                        margin: 40,
                    },
                    768: {
                        items: 4,
                        margin: 60,
                    },
                    992: {
                        items: 5,
                        margin: 80,
                    },
                }
            });
        },
        /* ============================================================ */
        /* Blog Slider
        /* ============================================================ */
        newsSlider: function() {
            var newsSlider = $('.news.owl-carousel');
            newsSlider.owlCarousel({
                items: 1,
                loop: 1,
                dots: !1,
                nav: !1,
                rtl: 1,
                autoplay: 1,
                autoplaySpeed: 800,
                autoplayTimeout: 5000,
                margin: 30,
                responsive: {
                    576: {
                        items: 2,
                        margin: 10,
                    },
                    1200: {
                        items: 3,
                        margin: 20,
                    },
                }
            });
        },
        
        
        /* ============================================================ */
        /* Mobile Menu Intigration
        /* ============================================================ */
        eventCalander: function() {
            var today = new Date();
            var week_date = [];
            $('#evoCalendar').evoCalendar({
                format: "MM dd, yyyy",
                titleFormat: "MM",
                calendarEvents: [{
                    id: "d8jai7s",
                    name: "Author's Birthday",
                    description: "Author's note: Thank you for using EvoCalendar! :)",
                    date: "February/15/1999",
                    type: "birthday",
                    everyYear: !0
                }, {
                    id: "sKn89hi",
                    name: "1-Week Coding Bootcamp",
                    description: "Lorem ipsum dolor sit amet.",
                    badge: "5-day event",
                    date: [ today.getMonth() + 1 + "/" + week_date.start + "/" + today.getFullYear(), today.getMonth() + 1 + "/" + week_date.end + "/" + today.getFullYear() ],
                    type: "event",
                    everyYear: !0
                }, {
                    id: "in8bha4",
                    name: "Holiday #2",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    date: today,
                    type: "holiday"
                }, {
                    id: "in8bha4",
                    name: "Event #2",
                    date: today,
                    type: "event"
                }]
            });
        },

        /* ============================================================ */
        /* Scroll Top
        /* ============================================================ */
        scroll_to_top: function() {
            $('body').append(
                "<a href='#top' id='scroll-top' class='topbutton btn-hide'><span class='fas fa-level-up-alt'></span></a>"
            );
            var $scrolltop = $('#scroll-top');
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > $(this).height()) {
                    $scrolltop.addClass('btn-show').removeClass('btn-hide');
                } else {
                    $scrolltop.addClass('btn-hide').removeClass('btn-show');
                }
            });
            $("a[href='#top']").on('click', function () {
                $('html, body').animate(
                    {
                        scrollTop: 0,
                    },
                    'normal'
                );
                return false;
            });
        },

        /* ============================================================ */
        /* Background Image
        /* ============================================================ */
        background_image: function() {
            $("[data-bg-color], [data-bg-image], [data-bg-particles]").each(function() {
                var $this = $(this);
    
                if( $this.hasClass("pt-separate-bg-element") ){
                    $this.append('<div class="pt-background">');
    
                    // Background Color    
                    if( $("[data-bg-color]") ){
                        $this.find(".pt-background").css("background-color", $this.attr("data-bg-color") );
                    }
    
                    // Background Image
                    if( $this.attr("data-bg-image") !== undefined ){
                        $this.find(".pt-background").append('<div class="pt-background-image">');
                        $this.find(".pt-background-image").css("background-image", "url("+ $this.attr("data-bg-image") +")" );
                        $this.find(".pt-background-image").css("background-size", $this.attr("data-bg-size") );
                        $this.find(".pt-background-image").css("background-position", $this.attr("data-bg-position") );
                        $this.find(".pt-background-image").css("opacity", $this.attr("data-bg-image-opacity") );
    
                        $this.find(".pt-background-image").css("background-size", $this.attr("data-bg-size") );
                        $this.find(".pt-background-image").css("background-repeat", $this.attr("data-bg-repeat") );
                        $this.find(".pt-background-image").css("background-position", $this.attr("data-bg-position") );
                        $this.find(".pt-background-image").css("background-blend-mode", $this.attr("data-bg-blend-mode") );
                    }
    
                    // Parallax effect    
                    if( $this.attr("data-bg-parallax") !== undefined ){
                        $this.find(".pt-background-image").addClass("pt-parallax-element");
                    }
                }
                else {
    
                    if(  $this.attr("data-bg-color") !== undefined ){                        
                        $this.css("background-color", $this.attr("data-bg-color") );
                        if( $this.hasClass("btn") ) {
                            $this.css("border-color", $this.attr("data-bg-color"));
                        }
                    }
    
                    if( $this.attr("data-bg-image") !== undefined ){
                        $this.css("background-image", "url("+ $this.attr("data-bg-image") +")" );    
                        $this.css("background-size", $this.attr("data-bg-size") );
                        $this.css("background-repeat", $this.attr("data-bg-repeat") );
                        $this.css("background-position", $this.attr("data-bg-position") );
                        $this.css("background-blend-mode", $this.attr("data-bg-blend-mode") );
                    }
                }
            });
        },


        initializ: function() {
			msy_qa.preloader();
			// msy_qa.sidebarMenu();
			msy_qa.mobile_menu();
			msy_qa.commonActivation();
			msy_qa.heroSlider();
			msy_qa.serviceSlider();
			msy_qa.clubsSlider();
			msy_qa.newsSlider();
			msy_qa.eventCalander();
			// msy_qa.sticky_menu();
			// msy_qa.lightGallery();
			msy_qa.background_image();
		}

    };
    $(function() {
		msy_qa.initializ();
	});


})(jQuery);