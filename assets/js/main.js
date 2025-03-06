$(function () {
  "use strict";

  //===== Prealoder

  $(window).on("load", function (event) {
    $(".preloader").delay(500).fadeOut(500);
  });

  //===== Sticky

  $(window).on("scroll", function (event) {
    var scroll = $(window).scrollTop();
    if (scroll < 20) {
      $(".header_navbar").removeClass("sticky");
      $(".header_navbar img").attr("src", "assets/images/logo_white.png");
    } else {
      $(".header_navbar").addClass("sticky");
      $(".header_navbar img").attr("src", "assets/images/logo_white.png");
    }
  });

  //===== Section Menu Active

  var scrollLink = $(".page-scroll");
  // Active link switching
  $(window).scroll(function () {
    var scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function () {
      var sectionOffset = $(this.hash).offset().top - 73;

      if (sectionOffset <= scrollbarLocation) {
        $(this).parent().addClass("active");
        $(this).parent().siblings().removeClass("active");
      }
    });
  });

  //===== close navbar-collapse when a  clicked

  $(".navbar-nav a").on("click", function () {
    $(".navbar-collapse").removeClass("show");
  });

  $(".navbar-toggler").on("click", function () {
    $(this).toggleClass("active");
  });

  $(".navbar-nav a").on("click", function () {
    $(".navbar-toggler").removeClass("active");
  });

  //===== Counter Up

  $(".counter").counterUp({
    delay: 10,
    time: 3000,
  });

  //===== Back to top

  // Show or hide the sticky footer button
  $(window).on("scroll", function (event) {
    if ($(this).scrollTop() > 600) {
      $(".back-to-top").fadeIn(200);
    } else {
      $(".back-to-top").fadeOut(200);
    }
  });

  //Animate the scroll to yop
  $(".back-to-top").on("click", function (event) {
    event.preventDefault();

    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1500
    );
  });

  //===== Nice Select

  $("select").niceSelect();

  //=====  WOW active

  var wow = new WOW({
    boxClass: "wow", //
    mobile: false, //
  });
  wow.init();
});
//=====  slider
const btnLeft = document.querySelector(".btn_left"),
  btnRight = document.querySelector(".btn_right"),
  slider = document.querySelector("#slider"),
  sliderSection = document.querySelectorAll(".slider_section");

btnLeft.addEventListener("click", (e) => moveToLeft());
btnRight.addEventListener("click", (e) => moveToRight());

setInterval(() => {
  moveToRight();
}, 4000);
let operation = 0;
(counter = 0), (widthImg = 100 / sliderSection.length);

function moveToRight() {
  if (counter >= sliderSection.length - 1) {
    counter = 0;
    operation = 0;
    slider.style.transform = `translate(-${operation}%)`;
    slider.style.transition = "ease .6";
    return;
  }
  counter++;
  operation = operation + widthImg;
  slider.style.transform = `translate(-${operation}%)`;
  slider.style.transition = "all ease .6s";
}

function moveToLeft() {
  counter--;
  if (counter < 0) {
    counter = sliderSection.length - 1;
    operation = widthImg * (sliderSection.length - 1);
    slider.style.transform = `translate(-${operation}%)`;
    slider.style.transition = "ease .6";
    return;
  }
  operation = operation - widthImg;
  slider.style.transform = `translate(-${operation}%)`;
  slider.style.transition = "all ease .6s";
}
//======= slider product
function currentDiv(n) {
  showDivs((slideIndex = n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" demo-hover", "");
  }
  x[slideIndex - 1].style.display = "inline";
  dots[slideIndex - 1].className += " demo-hover";
}
//===========modal
const myModal = document.getElementById("myModal");
const myInput = document.getElementById("myInput");

myModal.addEventListener("shown.bs.modal", () => {
  myInput.focus();
});
