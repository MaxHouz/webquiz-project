var slideIndex = 0;
var slides = document.querySelectorAll(".slide");
var slideBtns = document.querySelectorAll(".slide-btn");
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(n);
}

function showSlides(n) {
    var activeSlide = document.querySelector(".slide.active");
    var activeBtn = document.querySelector(".slide-btn.active");

    activeBtn.classList.remove("active");
    activeSlide.classList.remove("active");

    slideBtns[n].classList.add("active");
    slides[n].classList.add("active");

    slideIndex = n;
}

setInterval(function() {
    slideIndex++;
    if (slideIndex > slides.length - 1) { // тернарный оператор
        slideIndex = 0;
    }
    showSlides(slideIndex);
}, 2000)