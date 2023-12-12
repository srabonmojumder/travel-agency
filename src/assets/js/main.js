//---------SEARCH BAR START----------//
$(document).ready(function () {
    const searchIcon = document.querySelector(`.search-icon`)
    const searchInput = document.querySelector(`.search-input`)

    const toggleSearch = event => {
        event.stopPropagation();

        if (!event.target.closest('.search-input')) {

            searchInput.classList.toggle('active');

            searchInput.classList.contains('active')
                ? document.addEventListener('click', toggleSearch)
                : document.removeEventListener('click', toggleSearch);
        }
    }

    searchIcon.addEventListener('click', toggleSearch);

    //---------SEARCH BAR END----------//


    //------------Best Tour Packages slider Start---------- 

    $('.main-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        margin: 10,
        autoplay: false,
        margin: '10px',
        dots: true,
        arrows: true,
        prevArrow: "<div class='nav-bar-left-arrow'><i class='fa-solid fa-chevron-left'></i></div>",
        nextArrow: "<div class='nav-bar-right-arrow'><i class='fa-solid fa-chevron-right'></i></div>",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1008,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });


    //------------Best Tour Packages slider End----------->


    //-----------Special Packages slider Start------------>

    $('.main-special-packages-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        dots: true,
        prevArrow: "<div class='left-nav-bar'><i class='fa-solid fa-chevron-left'></i></div>",
        nextArrow: "<div class='right-nav-bar'><i class='fa-solid fa-chevron-right'></i></div>",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1008,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
    // <!-- ---------------Special Packages slider End---------->


    //   <!-- ---------------Instagram slider Start------------>

    $('.instagram-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        infinite: true,
        arrows: true,
        prevArrow: "<div class='inner-nav-bar-left-arrow'><i class='fa-solid fa-chevron-left'></i></div>",
        nextArrow: "<div class='inner-nav-bar-right-arrow'><i class='fa-solid fa-chevron-right'></i></div>",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1008,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },

            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });

    // -----------imgae overlay start---------->
    $(".hover").mouseleave(
        function () {
            $(this).removeClass("hover");
        }
    );

    // -----------imgae overlay End------------>

    // <-------Instagram slider End----------->


    //   <-----------TESTIMONIAL slider Start-------->

    $('.testimonial-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        dots: true,
        prevArrow: "<div class='testimonial-left-nav'><i class='fa-solid fa-chevron-left'></i></div>",
        nextArrow: "<div class='testimonial-right-nav'><i class='fa-solid fa-chevron-right'></i></div>",
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    });
    // <----------TESTIMONIAL slider End------------>


    //   <------------Our  Blog slider Start------------>

    $('.our-latest-news-blog').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        dots: true,
        arrows: true,
        prevArrow: "<div class='nav-bar-left-arrow'><i class='fa-solid fa-chevron-left'></i></div>",
        nextArrow: "<div class='nav-bar-right-arrow'><i class='fa-solid fa-chevron-right'></i></div>",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1008,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },

            {
                breakpoint: 775,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
    // <----------Our  Blog slider  End---------->

    $(".testimonial-slider .slick-dots li").append("<div class='testimonial-title'><p class=''> Jenifer Laurance</p> <span class=''>Florida, USA</span></div>");

    $(".testimonial-slider ul li div").css("display", "none");

    $('.testimonial-slider ul li').click(function () {
        if ($(this).hasClass('slick-active')) {
            $(".testimonial-slider ul li div").css("display", "none");
            $(this).children('div').css("display", "block");

        } else {
            $(this).children('div').css("display", "none");
        }
    });


    // $(".testimonial-slider ul li:nth-child(2) div").css("display", "none");
    // $(".testimonial-slider ul li:nth-child(3) div").css("display", "none");
    // $(".testimonial-slider ul li:nth-child(4) div").css("display", "none");
    // $(".testimonial-slider ul li:nth-child(5) div").css("display", "none");

    $(".testimonial-slider ul li.slick-active:first-child div").css("display", "block");


    // $(".testimonial-slider ul li span> :nth-child(2)").css("display", "block");


});



