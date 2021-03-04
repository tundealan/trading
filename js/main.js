$(document).ready(function(){
    $(".dropdown-toggle").dropdown();
});



// Division-5 slideshow
var slideIndex = 1;
showSlide(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClass("dot");
    if (n > slides.length) {slideIndex =1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("Active", "");
    }
    slides[slideIndex-1].getElementsByClassName.display = "block";
    dots[slideIndex-1].className += " Active";
}