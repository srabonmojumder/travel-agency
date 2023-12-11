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
        arrows: true,
        prevArrow: "<div class='nav-bar-left-arrow'><i class='fa-solid fa-chevron-left'></i></div>",
        nextArrow: "<div class='nav-bar-right-arrow'><i class='fa-solid fa-chevron-right'></i></div>",
        responsive: [
            {
                breakpoint: 1279,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 767,
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
    // <----------Our  Blog slider  End---------->




    //   <------------Our  Blog slider Start------------>

    $('.our-latest-news-blog-two').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
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
    // <----------Our  Blog slider  End---------->

});



