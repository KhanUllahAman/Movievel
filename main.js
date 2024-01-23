(function (jQuery) {
  "use strict";
  jQuery(document).ready(function () {
    function activaTav(pill) {
      jQuery(pill).addClass('active show');
    }

    // sticky header anmation and height 
    function headerHeight() {
      var height = jQuery("#main-header").height();
      jQuery('.iq-height').css('height', height + 'px');
    }

    jQuery(function () {
      var header = jQuery("#main-header"),
        yOffset = 0,
        triggerPoint = 80;
      headerHeight();
      jQuery(window).resize(headerHeight);
      jQuery(window).in('scroll', function () {
        yOffset = jQuery(window).scrollTop();

        if (yOffset >= triggerPoint) {
          header.addClass("menu-sticky animated slideDown");
        } else {
          header.removeClass("menu-sticky animated slideDown");
        }
      });
    });

    // header menu dropdown 
    jQuery('[data-toggle=more-toggle]').on('click', function () {
      jQuery(this).next().toggleClass('show');
    });

    jQuery(document).on('click', function (e) {
      let myTargetElement = e.target;
      let selector, mainElement;
      if (jQuery(myTargetElement).hasClass('search-toggle') || jQuery(myTargetElement).parent().hasClass('search-toggle') || jQuery(myTargetElement).parent().parent().hasClass('search-toggle')) {
        if (jQuery(myTargetElement).hasClass('search-toggle')) {
          selector = jQuery(myTargetElement).parent();
          mainElement = jQuery(myTargetElement);
        } else if (jQuery(myTargetElement).parent().hasClass('search-toggle')) {
          selector = jQuery(myTargetElement).parent().parent();
          mainElement = jQuery(myTargetElement).parent();
        } else if (jQuery(myTargetElement).parent().parent().hasClass('search-toggle')) {
          selector = jQuery(myTargetElement).parent().parent().parent();
          mainElement = jQuery(myTargetElement).parent().parent();
        }
        if (!mainElement.hasClass('active') && jQuery('.navbar-list li').find('.active')) {
          jQuery('.navbar-right li').removeClass('.iq-show');
          jQuery('.navbar-right li .search-toggle').removeClass('active');
        }

        selector.toggleClass('iq-show');
        mainElement.toggleClass('active');
        e.preventDefault();
      } else if (jQuery(myTargetElement).is('search-input')) { } else {
        jQuery('.navbar-right li').removeClass('.iq-show');
        jQuery('.navbar-right li .search-toggle').removeClass('active');
      }
    });
    jQuery(document).on('click', function (event) {
      var $trigger = jQuery(".main-header .navbar");
      if ($trigger !== event.target && !$trigger.has(event.target).length) {
        jQuery(".main-header .navbar-collapse").collapse('hide');
        jQuery('body').removeClass('nav-open');
      }
    });
    jQuery('.c-toggler').on("click", function () {
      jQuery('body').addClass('nav-open');
    });


    $('#home-slider').slick({
      autoplay: false,
      speed: 800,
      lazyload: 'progressive',
      arrows: true,
      dots: false,
      prevArrow: '<div class="slick-nav prev-arrow"><i class="fa fa-chevron-right"></i></div>',
      nextArrow: '<div class="slick-nav next-arrow"><i class="fa fa-chevron-left"></i></div>',
      responsive: [
        {
          breakpoint: 992,
          settings: {
            dots: true,
            arrows: false,
          }
        }
      ]
    }).slickAnimation();
    $(".slick-nav").on("click touch", function (e) {
      e.preventDefault();

      var arrow = $(this);

      if (!arrow.hasClass('animate')) {
        arrow.addClass('animate');
        setTimeout(() => {
          arrow.removeClass('animate');
        }, 1600);
      }
    });

    jQuery('.favorites-slider').slick({
      dots: false,
      arrow: true,
      infinite: true,
      speed: 300,
      autoplay: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: '<a href="#" class="slick-arrow slick-next"><i class="fa fa-chevron-right"></i></a>',
      prevArrow: '<a href="#" class="slick-arrow slick-prev"><i class="fa fa-chevron-left"></i></a>',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
      ]
    });

    jQuery('#top-ten-slider').slick({
      slidesToScroll: 1,
      slidesToShow: 1,
      arrows: false,
      fade: true,
      asNavFor: '#top-ten-slider-nav',
      responsive: [
        {
          breakpoint: 992,
          settings: {
            asNavFor: false,
            arrows: true,
            nextArrow: '<button class="NextArrow"><i class="fa fa-angle-right"></i></button>',
            prevArrow: '<button class="PrevArrow"><i class="fa fa-angle-left"></i></button>',
          }
        }
      ]
    });
    jQuery('#top-ten-slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '#top-ten-slider',
      dots: false,
      arrows: true,
      infinite: true,
      vertical: true,
      verticalSwiping: true,
      centerMode: false,
      nextArrow: '<button class="NextArrow"><i class="fa fa-angle-down"></i></button>',
      prevArrow: '<button class="PrevArrow"><i class="fa fa-angle-up"></i></button>',
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 600,
          settings: {
            asNavFor: false,
          }
        },
      ]
    });


    jQuery("#trending-slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      draggable: false,
      asNavFor: "#trending-slider-nav",
    });

    jQuery("#trending-slider-nav").slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: "#trending-slider",
      dots: false,
      arrows: true,
      nextArrow: '<a href="#" class="slick-arrow slick-next"><i class="fa fa-chevron-right"></i></a>',
      prevArrow: '<a href="#" class="slick-arrow slick-prev"><i class="fa fa-chevron-left"></i></a>',
      infinite: true,
      centerMode: true,
      centerPadding: 0,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    });

    jQuery('.episodes-slider1').owlCarousel({
      loop: true,
      margin: 20,
      nav: true,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i> "],
      dots: false,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 4
        }
      }
    });


    jQuery('.trending-content').each(function () {
      var highestBox = 0;
      jQuery('.tab-pane', this).each(function () {
        if (jQuery(this).height() > highestBox) {
          highestBox = jQuery(this).height();
        }
      });
      jQuery('.tab-pane', this).height(highestBox);
    });

    if (jQuery('select').hasClass('season-select')) {
      jQuery('select').select2({
        theme: 'bootstrap4',
        allowClear: false,
        width: 'resolve'
      });
    }




  });
})(jQuery);
document.getElementById('header').innerHTML = `
 <header id="main-header">
 <div class="main-header">
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12">
        <nav class="navbar navbar-expand-lg navbar-light p-0">
          <a href="#" class="navbar-toggler c-toggler" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <div class="navbar-toggler-icon" data-toggle="collapse">
              <span class="navbar-menu-icon navbar-menu-icon--top"></span>
              <span class="navbar-menu-icon navbar-menu-icon--middle"></span>
              <span class="navbar-menu-icon navbar-menu-icon--bottom"></span>
            </div>
          </a>
          <a href="index.html" class="navbar-brand">
            <img src="images/MOVIEVEL-removebg-preview.png" class="img-fluid logo" alt="" />
          </a>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="menu-main-menu-container">
              <ul id="top-menu" class="navbar-nav ml-auto">
                <li class="menu-item"><a id="home" href="index.html">Home</a></li>
                <li class="menu-item"><a id="movies" href="movies1.html">Movies</a></li>
                <li class="menu-item"><a id="shows" href="show.html">Shows</a></li>
                <li class="menu-item"><a id="aboutus" href="about_us.html">About Us</a></li>
                <li class="menu-item"><a id="contactus" href="contactus.html">Contact Us</a></li>
        

              </ul>
            </div>
          </div>
      
          <div class="mobile-more-menu">
            <a href="javascript:void(0);" class="more-toggle" id="dropdownMenuButton" data-toggle="more-toggle"
              aria-haspopup="true" aria-expanded="false">
              <i class="fa fa-ellipsis-h"></i>
            </a>
            <div class="more-menu" aria-labelledby="dropdownMenuButton">
              <div class="navbar-right position-relative">
                <ul class="d-flex align-items-center justify-content-end list-inline m-0">
                  <li>
                    <a href="#" class="search-toggle">
                      <i class="fa fa-search"></i>
                    </a>
                    <div class="search-box iq-search-bar">
                      <form action="#" class="searchbox">
                        <div class="form-group position-relative">
                          <input type="text" class="text search-input font-size-12"
                            placeholder="type here to search..." />
                          <i class="search-link fa fa-search"></i>
                        </div>
                      </form>
                      
                    </div>
                  </li>
                  <li class="nav-item nav-icon">
                    <a href="#" class="search-toggle position-relative">
                      <i class="fa fa-bell"></i>
                      <span class="bg-danger dots"></span>
                    </a>
                    
                    <div class="iq-sub-dropdown">
                      <div class="iq-card shadow-none m-0">
                        <div class="iq-card-body">
                          <a href="#" class="iq-sub-card">
                            <div class="media align-items-center">
                              // <img src="images/notify/thumb-1.jpg" alt="" class="img-fluid mr-3" />
                              <div class="media-body">
                                <h6 class="mb-0">Captain Marvel</h6>
                                <small class="font-size-12">just now</small>
                              </div>
                            </div>
                          </a>
                          <a href="#" class="iq-sub-card">
                            <div class="media align-items-center">
                              <img src="images/notify/thumb-2.jpg" alt="" class="img-fluid mr-3" />
                              <div class="media-body">
                                <h6 class="mb-0">
                                  Dora and The Lost City of Gold
                                </h6>
                                <small class="font-size-12">25 mins ago</small>
                              </div>
                            </div>
                          </a>
                          <a href="#" class="iq-sub-card">
                            <div class="media align-items-center">
                              <img src="images/notify/thumb-3.jpg" alt="" class="img-fluid mr-3" />
                              <div class="media-body">
                                <h6 class="mb-0">Mulan</h6>
                                <small class="font-size-12">1h 30 mins ago</small>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    
                  </li>
                  
                  <li>
                    
                    <div class="iq-sub-dropdown iq-user-dropdown">
                      <div class="iq-card shadow-none m-0">
                        <div class="iq-card-body p-0 pl-3 pr-3">
                          <a href="#" class="iq-sub-card setting-dropdown">
                            <div class="media align-items-center">
                              <div class="right-icon">
                                <i class="fa fa-user text-primary"></i>
                              </div>
                              <div class="media-body ml-3">
                                <h6 class="mb-0">Manage Profile</h6>
                              </div>
                            </div>
                          </a>
                          <a href="#" class="iq-sub-card setting-dropdown">
                            <div class="media align-items-center">
                              <div class="right-icon">
                                <i class="fa fa-cog text-primary"></i>
                              </div>
                              <div class="media-body ml-3">
                                <h6 class="mb-0">Settings</h6>
                              </div>
                            </div>
                          </a>
                          <a href="#" class="iq-sub-card setting-dropdown">
                            <div class="media align-items-center">
                              <div class="right-icon">
                                <i class="fa fa-inr text-primary"></i>
                              </div>
                              <div class="media-body ml-3">
                                <h6 class="mb-0">Pricing Plan</h6>
                              </div>
                            </div>
                          </a>
                          <a href="#" class="iq-sub-card setting-dropdown">
                            <div class="media align-items-center">
                              <div class="right-icon">
                                <i class="fa fa-sign-out text-primary"></i>
                              </div>
                              <div class="media-body ml-3">
                                <h6 class="mb-0">Logout</h6>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="navbar-right menu-right">
            <ul class="d-flex align-items-center list-inline m-0">
              <li class="nav-item nav-icon">
                <a href="#" class="search-toggle device-search">
                  <i class="fa fa-search"></i>
                </a>
                <div class="search-box iq-search-bar d-search">
                  <form action="#" class="searchbox">
                    <div class="form-group position-relative">
                      <input type="text" class="text search-input font-size-12"
                        placeholder="type here to search..." />
                      <i class="search-link fa fa-search"></i>
                    </div>
                  </form>
                </div>
              </li>
              <li class="nav-item nav-icon">
                <a href="#" class="search-toggle" data-toggle="search-toggle">
                  <i class="fa fa-bell"></i>
                  <span class="bg-danger dots"></span>
                </a>
                <div class="iq-sub-dropdown">
                  <div class="iq-card shadow-none m-0">
                    <div class="iq-card-body">
                      <a href="#" class="iq-sub-card">
                        <div class="media align-items-center">
                          <img src="images/notify/thumb-1.jpg" alt="" class="img-fluid mr-3" />
                          <div class="media-body">
                            <h6 class="mb-0">Captain Marvel</h6>
                            <small class="font-size-12">just now</small>
                          </div>
                        </div>
                      </a>
                      <a href="#" class="iq-sub-card">
                        <div class="media align-items-center">
                          <img src="images/notify/thumb-2.jpg" alt="" class="img-fluid mr-3" />
                          <div class="media-body">
                            <h6 class="mb-0">
                              Dora and The Lost City of Gold
                            </h6>
                            <small class="font-size-12">25 mins ago</small>
                          </div>
                        </div>
                      </a>
                      <a href="#" class="iq-sub-card">
                        <div class="media align-items-center">
                          <img src="images/notify/thumb-3.jpg" alt="" class="img-fluid mr-3" />
                          <div class="media-body">
                            <h6 class="mb-0">Mulan</h6>
                            <small class="font-size-12">1h 30 mins ago</small>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li class="nav-item nav-icon">
                
                <div class="iq-sub-dropdown iq-user-dropdown">
                  <div class="iq-card shadow-none m-0">
                    <div class="iq-card-body p-0 pl-3 pr-3">
                      <a href="#" class="iq-sub-card setting-dropdown">
                        <div class="media align-items-center">
                          <div class="right-icon">
                            <i class="fa fa-user text-primary"></i>
                          </div>
                          <div class="media-body ml-3">
                            <h6 class="mb-0">Manage Profile</h6>
                          </div>
                        </div>
                      </a>
                      <a href="#" class="iq-sub-card setting-dropdown">
                        <div class="media align-items-center">
                          <div class="right-icon">
                            <i class="fa fa-cog text-primary"></i>
                          </div>
                          <div class="media-body ml-3">
                            <h6 class="mb-0">Settings</h6>
                          </div>
                        </div>
                      </a>
                      <a href="#" class="iq-sub-card setting-dropdown">
                        <div class="media align-items-center">
                          <div class="right-icon">
                            <i class="fa fa-inr text-primary"></i>
                          </div>
                          <div class="media-body ml-3">
                            <h6 class="mb-0">Pricing Plan</h6>
                          </div>
                        </div>
                      </a>
                      <a href="#" class="iq-sub-card setting-dropdown">
                        <div class="media align-items-center">
                          <div class="right-icon">
                            <i class="fa fa-sign-out text-primary"></i>
                          </div>
                          <div class="media-body ml-3">
                            <h6 class="mb-0">Logout</h6>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
  <a href="login.html">
          
<i class="fa fa-sign-out" aria-hidden="true" style="font-size:4.5vh;"></i> </a>

        </nav>
        
        <div class="nav-overlay"></div>
      </div>
    </div>
  </div>

</div>
</header>
`
document.getElementById('footer').innerHTML = `
<footer class="iq-bg-dark">
    <div class="footer-top">
      <div class="container-fluid">
        <div class="row footer-standard">
          <div class="col-lg-5">
            <div class="widget text-left">
              <div>
                <ul class="menu p-0">
                  <li><a href="#">Terms of Use</a></li>
                  <li><a href="#">Privacy-Policy</a></li>
                  <li><a href="#">FAQ</a></li>
                  <li><a href="#">Watch List</a></li>
                </ul>
              </div>
            </div>
            <div class="widget text-left">
              <div class="textwidget">
                <p><strong>In addition to the benefits for the blind, generating descriptions for video is an interesting task in itself, requiring the combination of core techniques from computer vision and computational linguistics.</strong></p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 mt-4 mt-lg-0">
            <h6 class="footer-link-title">
              Follow Us:
            </h6>
            <ul class="info-share">
              <li>
                <a href="#">
                  <i>
                  <fa class="fa fa-facebook"></fa>
                </a>
              </li>
              <li>
                <a href="#">
                  <i>
                  <fa class="fa fa-youtube"></fa>
                </a>
              </li>
              <li>
                <a href="#">
                  <i>
                  <fa class="fa fa-instagram"></fa>
                </a>
              </li>
            </ul>
          </div>
          <div class="col-lg-3 col-md-6 mt-4 mt-lg-0">
            <div class="widget text-left">
              <div class="textwidget">
                <h6 class="footer-link-title">
                  MOVIE <span class="vel">VEL</span>
                </h6>
                
                <div class="d-flex align-items-center">
                  <a href="#"><img src="images/footer/01.jpg" alt=""></a>
                  <br>
                  <a href="#" class="ml-3"><img src="images/footer/02.jpg" alt=""></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>`
// show video
let playButton = document.querySelector(".play-movie");
let video = document.querySelector(".video-container");
let myvideo = document.querySelector("#myvideo");
let closebtn = document.querySelector(".close-video");

playButton.onclick = () => {
  video.classList.add("show-video");
  // auto play video when click
  myvideo.play();
};
closebtn.onclick = () => {
  video.classList.remove("show-video");
  // puse on click
  myvideo.pause();
};


$(document).ready(function () {
  $("#home").css("color", "#ffb43a")
})
//  loader css
var loader = document.getElementById("preloader");
window.addEventListener("loader", function () {
  loader.style.display = "none";
})





