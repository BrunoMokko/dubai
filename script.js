// Modal Window

let modal = document.getElementById('myModal');
let introBtn = document.querySelector('.intro_btn')
let bookBtn = document.getElementById('bookBtn')
let bookBtnMob = document.getElementById('bookBtnMob')
let btn = document.getElementById('myBtn');
let span = document.getElementsByClassName('close')[0];

btn.onclick = function () {
    modal.style.display = "block";
}

introBtn.onclick = function () {
    modal.style.display = "block";
}

bookBtn.onclick = function () {
    modal.style.display = "block";
}

bookBtnMob.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

document.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//Burger

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})

//Slider

let sliderIndex = 1;
showSlides(sliderIndex);

//Создаем функцию, которая будет увеличивать наш Индекс=1 sliderIndex на 1 - это будет показывать следующий слайд

function plusSlider() {
    showSlides(sliderIndex += 1);
}

//Создаем функцию, которая будет уменшать наш Индекс=1 sliderIndex на 1 - это будет показывать предыдущий слайд
function minusSlider() {
    showSlides(sliderIndex -= 1);
}

//Создаем функцию, которая будет показывать конкретный слайд

function currentSlider(n) {
    showSlides(sliderIndex = n);
}

// Создаем основную функцию слайдера showSlides

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('item');
    let dots = document.getElementsByClassName('slider-dots_item');
    if(n > slides.length) {
        sliderIndex = 1;
    } if (n < 1) {
        sliderIndex=slides.length;
    }
    for (let i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }
    for (let i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(' active','');
    }
    slides[sliderIndex - 1].style.display = 'block';
    dots[sliderIndex - 1].className += ' active';
}

//DropDown

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

//FAQ

var acc = document.getElementsByClassName("faq-accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("scrollActive");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

//Footer Mobile

var footerMob = document.getElementsByClassName("footer_mob-accordion");
var j;

for (j = 0; j < footerMob.length; j++) {
    footerMob[j].addEventListener("click", function() {
        this.classList.toggle("scrollFooterActive");
        var footerMobPanel = this.nextElementSibling;
        if (footerMobPanel.style.maxHeight) {
            footerMobPanel.style.maxHeight = null;
        } else {
            footerMobPanel.style.maxHeight = footerMobPanel.scrollHeight + "px";
        }
    });
}

// Scroll Button

// Get the button
let mybutton = document.getElementById("scrollBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//jQuery

$(document).ready(function (){
    // Slick Carusel

     $(".regular").slick({
         dots: true,
         infinite: true,
         arrows: false,
         slidesToShow: 4,
         slidesToScroll: 3,
         responsive: [
             {
                 breakpoint: 480,
                 settings: {
                     arrows: false,
                     centerMode: true,
                     centerPadding: '40px',
                     slidesToShow: 1
                 }
             }
         ]

     });

// Comment Slick

    $('.comment').slick({
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 4,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.comment').on('afterChange', function(event, slick, currentSlide, nextSlide){
        $('.comment .slick-slide').removeClass('slick-active-first slick-active-last');
        $('.comment .slick-active').eq(0).addClass('slick-active-first');
        $('.comment .slick-active').eq(1).addClass('slick-active-last');

    }).trigger('afterChange');
});


