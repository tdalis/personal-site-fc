var slideIndex = 0;

// try to understand this better: https://medium.com/better-programming/make-a-slideshow-with-automatic-and-manual-controls-using-html-css-and-javascript-b7e9305168f9

// Next/previous controls
function plusSlides(n) {
    clearInterval(myTimer);
    if (n < 0){
        showSlides(slideIndex -= 1);
    } else {
        showSlides(slideIndex += 1);
    }
    if (n === -1){
        myTimer = setInterval(function(){plusSlides(n + 2)}, 4000);
    } else {
        myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
    }
}

function minusSlides(n) {
    showSlides(slideIndex -= n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("carousel_img");
    var dots = document.getElementsByClassName("button_change");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

// Set everything in motion
window.addEventListener("load",function(){
    showSlides(slideIndex);
    myTimer = setInterval(function(){plusSlides(1)}, 4000);
})

function currentSlide(n) {
    clearInterval(myTimer);
    myTimer = setInterval(function(){plusSlides(n +1)}, 4000);
    showSlides(slideIndex = n);
}


// i'd like to add a pauseSlides functionality when I get some extra time
/* function resumeSlides() {
    nextSlide();
}

function pauseSlides() {
    clearInterval(interval);
} */