"use strict";



document.querySelector(".blog-images").addEventListener("mouseover", function () {
    let hover = document.querySelector(".round-icon");
    hover.style.transform =("translate(0px,245px)");
    hover.style.opacity = ("1")
 
  })
  
  document.querySelector(".blog-images").addEventListener("mouseout", function () {
    let hoverOut = document.querySelector(".round-icon");
    hoverOut.style.transform =("translate(0px,0px)")
    hoverOut.style.opacity = ("0")
  })
  document.querySelector(".blog-images-second").addEventListener("mouseover", function () {
    let secondOver = document.querySelector(".round-icon-second");
    secondOver.style.transform =("translate(0px,245px)");
    secondOver.style.opacity = ("1")
 
  })
  
  document.querySelector(".blog-images-second").addEventListener("mouseout", function () {
    let secondOut = document.querySelector(".round-icon-second");
    secondOut.style.transform =("translate(0px,0px)")
    secondOut.style.opacity = ("0")
  })