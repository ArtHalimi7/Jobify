<<<<<<< HEAD
//navbar color change
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll>150) {
            $(".navbar").css("background", "#000000");
            $(".navbar").css("box-shadow", "rgba(0,0,0,0.1) 0px 4px 12px")
        }
        else {
            $(".navbar").css("background", "transparent");
            $(".navbar").css("box-shadow", "none");
        }
    })
})

//smooth scroll
var navbarHeight = $(".navbar").outerHeight();
$(".navbar-menu a").click(function(e){
    var targetHref = $(this).attr("href");
    $("html,body").animate({
        scrollTop: $(targetHref).offset().top - navbarHeight
    }, 1000)
    e.preventDefault();
});

//mobile nav
const mobile = document.querySelector(".menu-toggle");
const mobileLink = document.querySelector(".navbar-menu");

mobile.addEventListener("click", function(){
    mobile.classList.toggle("is-active");
    mobileLink.classList.toggle("active");
})

mobileLink.addEventListener("click", function(){
    const menuBars = document.querySelector(".is-active");
    if(window.innerWidth <=769 && menuBars) {
        mobile.classList.toggle("is-active");
        mobileLink.classList.remove("active");
    }
})

//swiper
var swiper = new Swiper(".mySwiper",
{
    loop: false,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    slidesPerView:1,
    spaceBetween:10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints:{
        640:{
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768:{
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView:3,
            spaceBetween:50.
        }
    }
})
function myFunction() {
    var x = document.getElementById("myDiv");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
=======
//navbar color change
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll>150) {
            $(".navbar").css("background", "#000000");
            $(".navbar").css("box-shadow", "rgba(0,0,0,0.1) 0px 4px 12px")
        }
        else {
            $(".navbar").css("background", "transparent");
            $(".navbar").css("box-shadow", "none");
        }
    })
})

//smooth scroll
var navbarHeight = $(".navbar").outerHeight();
$(".navbar-menu a").click(function(e){
    var targetHref = $(this).attr("href");
    $("html,body").animate({
        scrollTop: $(targetHref).offset().top - navbarHeight
    }, 1000)
    e.preventDefault();
});

//mobile nav
const mobile = document.querySelector(".menu-toggle");
const mobileLink = document.querySelector(".navbar-menu");

mobile.addEventListener("click", function(){
    mobile.classList.toggle("is-active");
    mobileLink.classList.toggle("active");
})

mobileLink.addEventListener("click", function(){
    const menuBars = document.querySelector(".is-active");
    if(window.innerWidth <=769 && menuBars) {
        mobile.classList.toggle("is-active");
        mobileLink.classList.remove("active");
    }
})

//swiper
var swiper = new Swiper(".mySwiper",
{
    loop: false,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    slidesPerView:1,
    spaceBetween:10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints:{
        640:{
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768:{
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView:3,
            spaceBetween:50.
        }
    }
})
function myFunction() {
    var x = document.getElementById("myDiv");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
>>>>>>> 1d3488bc7f6b6ee5eb2933f4d8cdaf8e78d32e19
  }