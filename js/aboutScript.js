"use strict";
// Accordion
let accord = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < accord.length; i++) {
  accord[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
// Slider
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

        mainSlayt.style.transform = "translateX(-" + next.style.left + ")";
    }
});