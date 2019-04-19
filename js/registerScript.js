"use strict";

document.querySelector(".envato").addEventListener("mouseover", function () {
    let envatoOver = document.querySelector(".envato-input");
    envatoOver.style.borderColor = ("#6BC868");
  })
  
  document.querySelector(".envato").addEventListener("mouseout", function () {
    let envatoOut = document.querySelector(".envato-input");
    envatoOut.style.borderColor = ("rgba(119, 119, 119, 0.397)");
    console.log(envatoOut)
  })
