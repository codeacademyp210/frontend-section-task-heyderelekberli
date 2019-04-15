"use strict";

function myFunction() {
    var x = document.getElementById("listSection");
    if (x.className === "listPart") {
      x.className += " responsive";
    } else {
      x.className = "listPart";
    }
  }
 
  
const mainSlayt = document.querySelector(".mainSlider");
const slide = Array.from(mainSlayt.children);
const prevButton = document.querySelector(".prevBtn");
const nextButton = document.querySelector(".nextBtn");
let itemSize = slide[0].getBoundingClientRect();
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
nextButton.addEventListener("click", function (e) {
    let showSlider = mainSlayt.querySelector(".show");
    if (showSlider.nextElementSibling) {
        let next = showSlider.nextElementSibling;
        next.classList.add("show");
        showSlider.classList.remove("show");
        next.querySelector(".slider-content").classList.add("animated", "bounceInRight");
        showSlider.querySelector(".slider-content").classList.remove("animated", "bounceInRight", "bounceInLeft");
        mainSlayt.style.transform = "translateX(-" + next.style.left + ")";
    }
});
 
document.querySelector(".bulb").addEventListener("mouseover", function(){
  let header = document.querySelector(".user");
  header.style.color=("#fd602c");
  console.log(header);
})
 
document.querySelector(".bulb").addEventListener("mouseout", function(){
  let header = document.querySelector(".user");
  header.style.color=("black");
  console.log(header);
})

document.querySelector(".layer").addEventListener("mouseover", function(){
  let header2 = document.querySelector(".res");
  header2.style.color=("#fd602c");
})
 
document.querySelector(".layer").addEventListener("mouseout", function(){
  let header2 = document.querySelector(".res");
  header2.style.color=("black");
})





document.querySelector(".pic").addEventListener("mouseover", function(){
  let img = document.querySelector(".jk");
  img.style.transform = ("scale(1.1)");
})
 
document.querySelector(".pic").addEventListener("mouseout", function(){
  let img = document.querySelector(".jk");
  img.style.transform = ("scale(1)");
  console.log(img);
})