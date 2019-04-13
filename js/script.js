"use strict";

const mainSlayt = document.querySelector(".mainSlider");
const slide = Array.from(mainSlayt.children);
const prevButton = document.querySelector(".prevBtn");
const nextButton = document.querySelector(".nextBtn");
let itemSize = slide[0].getBoundingClientRect();
console.log(itemSize);
const setSliderPosition = (item, index) => {
    item.style.left = index * itemSize.width + "px";
};

slide.forEach(setSliderPosition);

prevButton.addEventListener("click", function (e) {
    let showSlider = mainSlayt.querySelector(".show");
    if (showSlider.previousElementSibling) {
        let prev = showSlider.previousElementSibling;
        prev.classList.add("show");
        showSlider.classList.remove("show");

        prev.querySelector(".slider-content").classList.add("animated", "bounceInLeft");
        showSlider.querySelector(".slider-content").classList.remove("animated", "bounceInLeft", "bounceInRight");
        mainSlayt.style.transform = "translateX(-" + prev.style.left + ")";
    }
});
// Click next button, slider move to the right
nextButton.addEventListener("click", function (e) {
    let showSlider = mainSlayt.querySelector(".show");
    console.log(showSlider);
    if (showSlider.nextElementSibling) {
        let next = showSlider.nextElementSibling;
        next.classList.add("show");
        showSlider.classList.remove("show");

        next.querySelector(".slider-content").classList.add("animated", "bounceInRight");
        showSlider.querySelector(".slider-content").classList.remove("animated", "bounceInRight", "bounceInLeft");
        mainSlayt.style.transform = "translateX(-" + next.style.left + ")";
    }
});