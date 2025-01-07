"use strict";
var custom_js = {
    init: function () {
        // Introduce toggle
        jQuery(".introduce1").on("click", function () {
            jQuery(".introduce").css("display", "block");
        });

        // Search header toggle
        jQuery(".search-header1").on("click", function () {
            jQuery(".search-header").css("display", "block");
            jQuery(".header-right").css("display", "none");
        });

        // Close introduce
        jQuery(".close-introduce").on("click", function () {
            jQuery(".introduce").css("display", "none");
        });

        // Close search
        jQuery(".close-search").on("click", function () {
            jQuery(".search-header").css("display", "none");
            jQuery(".header-right").css("display", "block");
        });

        // Lost password handling
        jQuery(".lost-password").on("click", function () {
            jQuery(".content-my-account-right").css("display", "none");
            jQuery(".content-my-account-left").css("display", "none");
            jQuery(".form-lost-password").css("display", "block");
        });

        // Reset password
        jQuery(".reset-password").on("click", function () {
            jQuery(".content-my-account-right").css("display", "block");
            jQuery(".content-my-account-left").css("display", "block");
            jQuery(".form-lost-password").css("display", "none");
        });

        // Mobile menu toggle
        jQuery(".click-mobile").on("click", function (e) {
            e.preventDefault();
            jQuery(".menu-mobile").toggleClass("show");

            if (jQuery(this).hasClass("lnr-menu")) {
                jQuery(this).removeClass("lnr-menu").addClass("lnr-cross");
            } else {
                jQuery(this).removeClass("lnr-cross").addClass("lnr-menu");
            }
        });

        // Dropdown menu
        jQuery(".drop-link").on("click", function (e) {
            e.preventDefault();
            e.stopPropagation();
            jQuery(this).siblings(".drop-menu").slideToggle();
            jQuery(this).toggleClass("clicked");
        });

        // Payment toggle
        jQuery(".showpayment").on("click", function (e) {
            jQuery(this).parent().toggleClass("active");
        });

        // Product quantity controls
        jQuery(".prev").on("click", function (e) {
            e.stopImmediatePropagation();
            var btn_group_parent = jQuery(this).closest(".btn-group");
            var show_number = btn_group_parent.find(".show-number");
            var current = parseInt(show_number.text());
            show_number.text(current > 1 ? current - 1 : 1);
        });

        jQuery(".next").on("click", function (e) {
            e.stopImmediatePropagation();
            var btn_group_parent = jQuery(this).closest(".btn-group");
            var show_number = btn_group_parent.find(".show-number");
            var current = parseInt(show_number.text());
            show_number.text(current + 1);
        });

        // Share toggle
        jQuery(".share").on("click", function (e) {
            jQuery(this).parent().toggleClass("active");
        });

        // Checkout form toggles
        jQuery(".woocommerce-form-login").hide();
        jQuery(".showlogin").on("click", function () {
            jQuery(".woocommerce-form-login").slideToggle();
        });

        jQuery(".checkout_coupon").hide();
        jQuery(".showcoupon").on("click", function () {
            jQuery(".checkout_coupon").slideToggle();
        });
    },

    // Carousel initialization
    generateCarousel: function () {
        if (jQuery().owlCarousel) {
            jQuery(".owl-carousel").owlCarousel({
                loop: true,
                margin: 10,
                nav: false,
                responsive: {
                    0: {
                        items: 1,
                    },
                    600: {
                        items: 3,
                    },
                    1000: {
                        items: 5,
                    },
                },
            });
        }
    },

    // Product slider initialization
    singleSlider: function () {
        if (jQuery().flexslider) {
            jQuery("#carousel").flexslider({
                animation: "slide",
                controlNav: false,
                animationLoop: false,
                slideshow: false,
                itemWidth: 120,
                itemMargin: 20,
                asNavFor: "#slider",
                directionNav: true,
                prevText: "",
                nextText: "",
            });

            jQuery("#slider").flexslider({
                animation: "slide",
                controlNav: false,
                animationLoop: false,
                slideshow: false,
                sync: "#carousel",
                directionNav: false,
                start: function (slider) {
                    jQuery("body").removeClass("loading");
                },
            });

            jQuery("#flex-slider").flexslider({
                animation: "slide",
                controlNav: false,
                animationLoop: false,
                slideshow: false,
                sync: "#flex-carousel",
            });

            jQuery("#flex-carousel").flexslider({
                animation: "slide",
                controlNav: false,
                animationLoop: false,
                slideshow: false,
                itemWidth: 114,
                itemMargin: 20,
                asNavFor: "#flex-slider",
            });
        }
    },
};

// Initialize on document ready
jQuery(document).ready(function () {
    custom_js.init();
    custom_js.generateCarousel();
    custom_js.singleSlider();
});

// Deal countdown timer
var countDownDate = new Date(Date.parse(new Date()) + 6 * 24 * 60 * 60 * 1000);

var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    var dealday = document.getElementById("dealday");
    if (dealday != null) {
        document.getElementById("dealdays").innerHTML = days;
        document.getElementById("dealhours").innerHTML = hours;
        document.getElementById("dealminutes").innerHTML = minutes;
        document.getElementById("dealseconds").innerHTML = seconds;

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("dealday").innerHTML = "EXPIRED";
        }
    }
}, 1000);
