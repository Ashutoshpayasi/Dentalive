jQuery(function ($) {
    'use strict'; $(window).on('scroll', function () {
        if ($(this).scrollTop() > 120) { $('.navbar-area').addClass("is-sticky"); }
        else { $('.navbar-area').removeClass("is-sticky"); }
    }); jQuery('.mean-menu').meanmenu({ meanScreenWidth: "991" }); $(".others-option-for-responsive .dot-menu").on("click", function () { $(".others-option-for-responsive .container .container").toggleClass("active"); }); $('.home-slides').owlCarousel({ loop: true, nav: true, dots: false, autoplayHoverPause: false, autoplay: false, items: 1, navText: ["<i class='flaticon-left-arrow-1'></i>", "<i class='flaticon-next'></i>"] }); $(".home-slides").on("translate.owl.carousel", function () { $(".main-slides-content .sub-title").removeClass("animated fadeInDown").css("opacity", "0"); $(".main-slides-content h1").removeClass("animated animate__animated animate__fadeInUp").css("opacity", "0"); $(".main-slides-content p").removeClass("animated animate__animated animate__fadeInUp").css("opacity", "0"); $(".main-slides-content .slides-btn .default-btn").removeClass("animated animate__animated animate__fadeInUp").css("opacity", "0"); $(".main-slides-content .slides-btn .optional-btn").removeClass("animated animate__animated animate__fadeInUp").css("opacity", "0"); $(".main-slides-content .slides-btn .checkup-content").removeClass("animated animate__animated animate__fadeInUp").css("opacity", "0"); }); $(".home-slides").on("translated.owl.carousel", function () { $(".main-slides-content .sub-title").addClass("animated fadeInDown").css("opacity", "1"); $(".main-slides-content h1").addClass("animated animate__animated animate__fadeInUp").css("opacity", "1"); $(".main-slides-content p").addClass("animated animate__animated animate__fadeInUp").css("opacity", "1"); $(".main-slides-content .slides-btn .default-btn").addClass("animated animate__animated animate__fadeInUp").css("opacity", "1"); $(".main-slides-content .slides-btn .optional-btn").addClass("animated animate__animated animate__fadeInUp").css("opacity", "1"); $(".main-slides-content .slides-btn .checkup-content").addClass("animated animate__animated animate__fadeInUp").css("opacity", "1"); }); $('.eye-care-slider').owlCarousel({ items: 1, loop: true, nav: true, dots: false, autoplay: false, autoplayHoverPause: false, navText: ["<i class='flaticon-left-arrow-1'></i>", "<i class='flaticon-next'></i>"] }); $('.review-slides').owlCarousel({ loop: true, nav: false, dots: true, autoplayHoverPause: true, autoplay: false, margin: 30, responsive: { 0: { items: 1, }, 768: { items: 2, }, 1200: { items: 3, } } }); $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current'); $('.tab ul.tabs li a').on('click', function (g) { var tab = $(this).closest('.tab'), index = $(this).closest('li').index(); tab.find('ul.tabs > li').removeClass('current'); $(this).closest('li').addClass('current'); tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp(); tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown(); g.preventDefault(); }); $('.accordion').find('.accordion-title').on('click', function () { $(this).toggleClass('active'); $(this).next().slideToggle('fast'); $('.accordion-content').not($(this).next()).slideUp('fast'); $('.accordion-title').not($(this)).removeClass('active'); }); $(".newsletter-form").validator().on("submit", function (event) {
        if (event.isDefaultPrevented()) { formErrorSub(); submitMSGSub(false, "Please enter your email correctly."); }
        else { event.preventDefault(); }
    }); function callbackFunction(resp) {
        if (resp.result === "success") { formSuccessSub(); }
        else { formErrorSub(); }
    }
    function formSuccessSub() { $(".newsletter-form")[0].reset(); submitMSGSub(true, "Thank you for subscribing!"); setTimeout(function () { $("#validator-newsletter").addClass('hide'); }, 4000) }
    function formErrorSub() { $(".newsletter-form").addClass("animated shake"); setTimeout(function () { $(".newsletter-form").removeClass("animated shake"); }, 1000) }
    function submitMSGSub(valid, msg) {
        if (valid) { var msgClasses = "validation-success"; }
        else { var msgClasses = "validation-danger"; }
        $("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
    }
    $(".newsletter-form").ajaxChimp({ url: "https://envytheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9", callback: callbackFunction }); function makeTimer() {
        var endTime = new Date("September 13, 2025 18:00:00 PDT"); var endTime = (Date.parse(endTime)) / 1000; var now = new Date(); var now = (Date.parse(now) / 1000); var timeLeft = endTime - now; var days = Math.floor(timeLeft / 86400); var hours = Math.floor((timeLeft - (days * 86400)) / 3600); var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60); var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60))); if (hours < "10") { hours = "0" + hours; }
        if (minutes < "10") { minutes = "0" + minutes; }
        if (seconds < "10") { seconds = "0" + seconds; }
        $("#days").html(days + "<span>Days</span>"); $("#hours").html(hours + "<span>Hours</span>"); $("#minutes").html(minutes + "<span>Minutes</span>"); $("#seconds").html(seconds + "<span>Seconds</span>");
    }
    setInterval(function () { makeTimer(); }, 0); $('select').niceSelect(); $('.popup-youtube').magnificPopup({ disableOn: 320, type: 'iframe', mainClass: 'mfp-fade', removalDelay: 160, preloader: false, fixedContentPos: false }); $('.odometer').appear(function (e) { var odo = $(".odometer"); odo.each(function () { var countNumber = $(this).attr("data-count"); $(this).html(countNumber); }); }); $(window).on('scroll', function () { var scrolled = $(window).scrollTop(); if (scrolled > 600) $('.go-top').addClass('active'); if (scrolled < 600) $('.go-top').removeClass('active'); }); $('.go-top').on('click', function () { $("html, body").animate({ scrollTop: "0" }, 500); }); $(window).on('load', function () { if ($(".wow").length) { var wow = new WOW({ boxClass: 'wow', animateClass: 'animated', offset: 20, mobile: true, live: true, }); wow.init(); } }); $(window).on('load', function () { $('.preloader').fadeOut(); }); $('.dental-tourism-services-slides').owlCarousel({ loop: true, nav: false, dots: false, autoplayHoverPause: true, autoplay: false, margin: 30, responsive: { 0: { items: 1, }, 768: { items: 2, }, 1200: { items: 4, } } }); $('.dental-tourism-dentist-slides').owlCarousel({ loop: true, nav: false, dots: true, autoplayHoverPause: true, autoplay: false, margin: 30, responsive: { 0: { items: 1, }, 768: { items: 2, }, 1200: { items: 3, } } }); $('.dental-tourism-review-slides').owlCarousel({ loop: true, nav: false, dots: true, autoplayHoverPause: true, autoplay: false, margin: 30, responsive: { 0: { items: 1, }, 768: { items: 2, }, 1200: { items: 2, } } }); $('.skin-care-review-slides').owlCarousel({ loop: true, nav: false, dots: true, autoplayHoverPause: true, autoplay: false, margin: 30, responsive: { 0: { items: 1, }, 768: { items: 2, }, 1200: { items: 3, } } }); $('.skin-care-before-after-slides').owlCarousel({ stagePadding: 200, loop: true, margin: 10, nav: true, dots: false, items: 1, lazyLoad: true, navText: ["<i class='bx bx-left-arrow-alt'></i>", "<i class='bx bx-right-arrow-alt'></i>"], responsive: { 0: { items: 1, stagePadding: 60 }, 600: { items: 1, stagePadding: 100 }, 1000: { items: 1, stagePadding: 200 }, 1200: { items: 1, stagePadding: 250 }, 1400: { items: 1, stagePadding: 300 }, 1600: { items: 1, stagePadding: 350 }, 1800: { items: 1, stagePadding: 400 } } }); $('.skin-care-partner-slides').owlCarousel({ loop: true, nav: false, dots: false, autoplayHoverPause: true, autoplay: false, margin: 25, responsive: { 0: { items: 1, }, 768: { items: 3, }, 1200: { items: 5, } } }); $('.eye-care-services-slides').owlCarousel({ loop: true, nav: true, dots: false, autoplayHoverPause: true, autoplay: false, margin: 25, navText: ["<i class='bx bx-left-arrow-alt'></i>", "<i class='bx bx-right-arrow-alt'></i>"], responsive: { 0: { items: 1, }, 768: { items: 2, }, 1200: { items: 3, } } }); $('.eye-care-team-slides').owlCarousel({ loop: true, nav: false, dots: true, autoplayHoverPause: true, autoplay: false, margin: 30, responsive: { 0: { items: 1, }, 768: { items: 2, }, 1200: { items: 3, } } }); $('.eye-care-review-slides').owlCarousel({ loop: true, nav: false, dots: true, autoplayHoverPause: true, autoplay: false, margin: 30, items: 1, }); 
    // $('body').append("<a href='https://themeforest.net/checkout/from_item/30448689?license=regular&support=bundle_6month&_ga=2.244106885.1464546313.1649253347-1356931366.1645330919&_gac=1.253162875.1649351773.Cj0KCQjwl7qSBhD-ARIsACvV1X34Yvc4XKSYFq60iQ6auDlKjNhJLJW5j_1joCsZJCKQ-4m75Uw8RNcaArtlEALw_wcB' target='_blank' class='buy-now-btn'><img src='assets/images/envato.png' alt='envato'/>Buy Now</a>"); 
    $('body').append("<div class='switch-box'><label id='switch' class='switch'><input type='checkbox' onchange='toggleTheme()' id='slider'><span class='slider round'></span></label></div>"); try { $("#country_selector").countrySelect({ preferredCountries: ['ca', 'gb', 'us'] }); } catch (err) { }
    $('.covid-tracker-slides').owlCarousel({ loop: true, nav: true, dots: true, autoplayHoverPause: true, autoplay: false, margin: 25, navText: ["<i class='bx bx-left-arrow-alt'></i>", "<i class='bx bx-right-arrow-alt'></i>"], responsive: { 0: { items: 1, }, 768: { items: 2, }, 1200: { items: 3, } } }); $('.covid-testimonials-slides').owlCarousel({ loop: true, nav: false, dots: true, autoplayHoverPause: true, autoplay: false, margin: 25, items: 1, }); $('.covid-testimonials-wrap-slides').owlCarousel({ loop: true, nav: false, dots: true, autoplayHoverPause: true, autoplay: false, margin: 25, navText: ["<i class='bx bx-left-arrow-alt'></i>", "<i class='bx bx-right-arrow-alt'></i>"], responsive: { 0: { items: 1, }, 768: { items: 2, }, 1200: { items: 3, } } }); $('.covid-blog-slides').owlCarousel({ loop: true, nav: true, dots: true, autoplayHoverPause: true, autoplay: false, margin: 25, navText: ["<i class='bx bx-left-arrow-alt'></i>", "<i class='bx bx-right-arrow-alt'></i>"], responsive: { 0: { items: 1, }, 768: { items: 2, }, 1200: { items: 3, } } }); $('.covid-doctors-slides').owlCarousel({ loop: true, nav: true, dots: true, autoplayHoverPause: true, autoplay: false, margin: 25, navText: ["<i class='bx bx-left-arrow-alt'></i>", "<i class='bx bx-right-arrow-alt'></i>"], responsive: { 0: { items: 1, }, 768: { items: 2, }, 1200: { items: 3, } } }); $('.hospital-services-slides').owlCarousel({ loop: true, nav: true, dots: false, autoplayHoverPause: true, autoplay: false, margin: 25, navText: ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"], responsive: { 0: { items: 1, }, 576: { items: 2, }, 768: { items: 2, }, 1200: { items: 4, } } }); if ($('.progress-line').length) { $('.progress-line').appear(function () { var el = $(this); var percent = el.data('width'); $(el).css('width', percent + '%'); }, { accY: 0 }); }
    if ($('.count-box').length) { $('.count-box').appear(function () { var $t = $(this), n = $t.find(".count-text").attr("data-stop"), r = parseInt($t.find(".count-text").attr("data-speed"), 10); if (!$t.hasClass("counted")) { $t.addClass("counted"); $({ countNum: $t.find(".count-text").text() }).animate({ countNum: n }, { duration: r, easing: "linear", step: function () { $t.find(".count-text").text(Math.floor(this.countNum)); }, complete: function () { $t.find(".count-text").text(this.countNum); } }); } }, { accY: 0 }); }
    $('.hospital-team-slides').owlCarousel({ loop: true, nav: true, dots: false, autoplayHoverPause: true, autoplay: false, margin: 25, navText: ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"], responsive: { 0: { items: 1, }, 768: { items: 2, }, 1200: { items: 3, } } }); $('.hospital-testimonials-slides').owlCarousel({ loop: true, nav: true, dots: false, autoplayHoverPause: true, autoplay: false, margin: 35, navText: ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"], responsive: { 0: { items: 1, }, 768: { items: 2, }, 1200: { items: 2, } } }); $('.hospital-testimonials-wrap-slides').owlCarousel({ loop: true, nav: true, dots: false, autoplayHoverPause: true, autoplay: false, margin: 35, navText: ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"], responsive: { 0: { items: 1, }, 768: { items: 2, }, 1200: { items: 2, } } });
}(jQuery)); function setTheme(themeName) { localStorage.setItem('grin_theme', themeName); document.documentElement.className = themeName; }
function toggleTheme() { if (localStorage.getItem('grin_theme') === 'theme-dark') { setTheme('theme-light'); } else { setTheme('theme-dark'); } }
(function () { if (localStorage.getItem('grin_theme') === 'theme-dark') { setTheme('theme-dark'); document.getElementById('slider').checked = false; } else { setTheme('theme-light'); document.getElementById('slider').checked = true; } })();