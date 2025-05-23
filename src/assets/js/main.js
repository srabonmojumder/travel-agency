//---------SEARCH BAR START----------//
$(document).ready(function () {
  const searchIcon = document.querySelector(`.search-icon`);
  const searchInput = document.querySelector(`.search-input`);

  const toggleSearch = (event) => {
    event.stopPropagation();

    if (!event.target.closest(".search-input")) {
      searchInput.classList.toggle("active");

      searchInput.classList.contains("active")
        ? document.addEventListener("click", toggleSearch)
        : document.removeEventListener("click", toggleSearch);
    }
  };

  searchIcon.addEventListener("click", toggleSearch);

  //---------SEARCH BAR END----------//

  //------------Best Tour Packages slider Start----------

  $(".main-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    margin: 10,
    autoplay: false,
    margin: "10px",
    dots: true,
    arrows: true,
    prevArrow:
      "<div class='nav-bar-left-arrow'><i class='fa-solid fa-chevron-left'></i></div>",
    nextArrow:
      "<div class='nav-bar-right-arrow'><i class='fa-solid fa-chevron-right'></i></div>",
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

  $(".main-special-packages-slider").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    dots: true,
    prevArrow:
      "<div class='left-nav-bar'><i class='fa-solid fa-chevron-left'></i></div>",
    nextArrow:
      "<div class='right-nav-bar'><i class='fa-solid fa-chevron-right'></i></div>",
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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  // <!-- ---------------Special Packages slider End---------->

  //   <!-- ---------------Instagram slider Start------------>

  $(".instagram-slider").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    infinite: true,
    arrows: true,
    prevArrow:
      "<div class='inner-nav-bar-left-arrow'><i class='fa-solid fa-chevron-left'></i></div>",
    nextArrow:
      "<div class='inner-nav-bar-right-arrow'><i class='fa-solid fa-chevron-right'></i></div>",
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
  $(".hover").mouseleave(function () {
    $(this).removeClass("hover");
  });

  // -----------imgae overlay End------------>

  // <-------Instagram slider End----------->

  //   <-----------TESTIMONIAL slider Start-------->

  // $('.testimonial-slider').slick({
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     autoplay: false,
  //     arrows: true,
  //     dots: true,
  //     prevArrow: "<div class='testimonial-left-nav'><i class='fa-solid fa-chevron-left'></i></div>",
  //     nextArrow: "<div class='testimonial-right-nav'><i class='fa-solid fa-chevron-right'></i></div>",
  //     responsive: [
  //         {
  //             breakpoint: 600,
  //             settings: {
  //                 slidesToShow: 1,
  //                 slidesToScroll: 1
  //             }
  //         },
  //     ]
  // });

  // $(".testimonial-slider .slick-dots li").append("<div class='testimonial-title'><p class=''> Jenifer Laurance</p> <span class=''>Florida, USA</span></div>");

  // $(".testimonial-slider ul li div").css("display", "none");

  // $('.testimonial-slider ul li').click(function () {
  //     if ($(this).hasClass('slick-active')) {
  //         $(".testimonial-slider ul li div").css("display", "none");
  //         $(this).children('div').css("display", "block");

  //     } else {
  //         $(this).children('div').css("display", "none");
  //     }
  // });

  // $(".testimonial-slider ul li.slick-active:first-child div").css("display", "block");

  $(".testimonial-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    dots: false,
    prevArrow:
      "<div class='testimonial-left-nav'><i class='fa-solid fa-chevron-left'></i></div>",
    nextArrow:
      "<div class='testimonial-right-nav'><i class='fa-solid fa-chevron-right'></i></div>",
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  // <----------TESTIMONIAL slider End------------>

  //   <------------Our  Blog slider Start------------>

  $(".our-latest-news-blog").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    dots: true,
    arrows: true,
    prevArrow:
      "<div class='nav-bar-left-arrow'><i class='fa-solid fa-chevron-left'></i></div>",
    nextArrow:
      "<div class='nav-bar-right-arrow'><i class='fa-solid fa-chevron-right'></i></div>",
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

  // <--------Initialize Pickadate.js Start-------->

  // Initialize Pickadate.js for Check-in
  var checkinPicker = $("#checkin")
    .pickadate({
      selectYears: true,
      selectMonths: true,
      selectTime: false,
      onClose: function () {
        var selectedDate = this.get();
        console.log("Check-in Date:", selectedDate);
      },
    })
    .pickadate("picker");

  // Set default Check-in time to 09:00 AM
  checkinPicker.set("select", "09:00", { format: "HH:i" });

  // Initialize Pickadate.js for Check-out
  var checkoutPicker = $("#checkout")
    .pickadate({
      selectYears: true,
      selectMonths: true,
      selectTime: false,
      onClose: function () {
        var selectedDate = this.get();
        console.log("Check-out Date:", selectedDate);
      },
    })
    .pickadate("picker");

  // Set default Check-out time to 05:00 PM
  checkoutPicker.set("select", "17:00", { format: "HH:i" });

  // <--------Initialize Pickadate.js Start-------->
});

//------------Island Paradise Getaways slider Start----------

$(".island-paradise-getaways-slider").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  margin: 10,
  autoplay: false,
  margin: "10px",
  dots: true,
  arrows: true,
  prevArrow:
    "<div class='island-paradise-nav-bar-left-arrow'><i class='fa-solid fa-chevron-left'></i></div>",
  nextArrow:
    "<div class='island-paradise-nav-bar-right-arrow'><i class='fa-solid fa-chevron-right'></i></div>",
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

//------------Island Paradise Getaways slider End----------->

//   <------------our-blog-page-latest-news-blog Start------------>

$(".our-blog-page-latest-news-blog").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  dots: true,
  arrows: true,
  prevArrow:
    "<div class='our-blog-page-nav-bar-left-arrow'><i class='fa-solid fa-chevron-left'></i></div>",
  nextArrow:
    "<div class='our-blog-page-nav-bar-right-arrow'><i class='fa-solid fa-chevron-right'></i></div>",
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
// <----------our-blog-page-latest-news-blog  End---------->

//       <!-- --------------- Trending News Start-------------------- -->

$(".trending-news").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  dots: true,
  arrows: true,
  prevArrow:
    "<div class='trending-news-nav-bar-left-arrow'><i class='fa-solid fa-chevron-left'></i></div>",
  nextArrow:
    "<div class='trending-news-nav-bar-right-arrow'><i class='fa-solid fa-chevron-right'></i></div>",
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
//    <!-- --------------- Trending News End-------------------- -->

//------------Island Paradise Getaways slider Start----------

$(".offer-packages-slider").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  margin: 10,
  autoplay: false,
  margin: "10px",
  dots: true,
  arrows: true,
  prevArrow:
    "<div class='island-paradise-nav-bar-left-arrow'><i class='fa-solid fa-chevron-left'></i></div>",
  nextArrow:
    "<div class='island-paradise-nav-bar-right-arrow'><i class='fa-solid fa-chevron-right'></i></div>",
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

//------------Island Paradise Getaways slider End----------->

// This Code Is For OffCanvus Open AND Close
$(".mobile-menu").on("click", function () {
  var $headerSidebar = $(".header-sidebar");

  // Check the current display property
  if ($headerSidebar.css("display") === "none") {
    // If it's currently hidden, show it
    $headerSidebar.css("display", "block");
  } else {
    // If it's currently visible, hide it
    $headerSidebar.css("display", "none");
  }
});

// For Close Button
$("#closeButton").on("click", function () {
  $(".header-sidebar").css("display", "none");
});
