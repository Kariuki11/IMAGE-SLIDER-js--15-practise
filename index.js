//IMAGE SLIDER

const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let slideIntervalId = null;

// initializeSlider();
document.addEventListener("DOMContentLoaded", initializeSlider)

function initializeSlider(){

    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide")
        IntervalId = setInterval(nextSlide, 5000);
    }
    }
    
function showSlide(index){

}
function prevSlide(){

}
function nextSlide(){

}