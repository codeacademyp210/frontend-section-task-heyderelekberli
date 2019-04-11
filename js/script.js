"use strict";

let mainSlider = document.querySelector(".mainSlider");
let slide = Array.from(mainSlider.children);
let prevButton = document.querySelector(".prevSlider");
let nextButton = document.querySelector(".nextSlider");
let itemSize = slide[0].getBoundingClientRect();
let setSliderPosition = function(item, index){
    item.style.left = index * itemSize.width + "px";
};

slide.forEach(setSliderPosition);
prevButton.addEventListener("click", function (e) {
    let show = mainSlider.querySelector(".showSlider");
    if (show.previousElementSibling) {
        let prevItem = show.previousElementSibling;
        prevItem.classList.add("showSlider");
        show.classList.remove("showSlider");
        mainSlider.style.transform = "translateX(-" + prevItem.style.left + ")";
    }
});
nextButton.addEventListener("click", function (e) {
    let show = mainSlider.querySelector(".showSlider");
    console.log(show);
    if (show.nextElementSibling) {
        let next = show.nextElementSibling;
        next.classList.add("showSlider");
        show.classList.remove("showSlider");
        mainSlider.style.transform = "translateX(-" + next.style.left + ")";
    } 
});