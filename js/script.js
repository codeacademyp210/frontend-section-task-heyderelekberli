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

document.querySelector(".bulb").addEventListener("mouseover", function () {
  let header = document.querySelector(".user");
  header.style.color = ("#fd602c");
  console.log(header);
})

document.querySelector(".bulb").addEventListener("mouseout", function () {
  let header = document.querySelector(".user");
  header.style.color = ("black");
  console.log(header);
})

document.querySelector(".layer").addEventListener("mouseover", function () {
  let header2 = document.querySelector(".res");
  header2.style.color = ("#fd602c");
})

document.querySelector(".layer").addEventListener("mouseout", function () {
  let header2 = document.querySelector(".res");
  header2.style.color = ("black");
})






document.querySelector(".hoverHome").addEventListener("mouseover", function () {
  let homeOver = document.querySelector(".handleHome");
  homeOver.style.opacity = ("1");
});
document.querySelector(".hoverHome").addEventListener("mouseout", function () {
  let homeOut = document.querySelector(".handleHome");
  homeOut.style.opacity = ("0");
})

document.querySelector(".hoverAbout").addEventListener("mouseover", function () {
  let aboutOver = document.querySelector(".handleAbout");
  aboutOver.style.opacity = ("1");
});
document.querySelector(".hoverAbout").addEventListener("mouseout", function () {
  let aboutOut = document.querySelector(".handleAbout");
  aboutOut.style.opacity = ("0");
})
document.querySelector(".hoverTeam").addEventListener("mouseover", function () {
  let teamOver = document.querySelector(".handleTeam");
  teamOver.style.opacity = ("1");
});

document.querySelector(".hoverTeam").addEventListener("mouseout", function () {
  let teamOut = document.querySelector(".handleTeam");
  teamOut.style.opacity = ("0");
})
document.querySelector(".hoverService").addEventListener("mouseover", function () {
  let serviceOver = document.querySelector(".handleService");
  serviceOver.style.opacity = ("1");
});

document.querySelector(".hoverService").addEventListener("mouseout", function () {
  let serviceOut = document.querySelector(".handleService");
  serviceOut.style.opacity = ("0");
})
document.querySelector(".hoverCareers").addEventListener("mouseover", function () {
  let careersOver = document.querySelector(".handleCareers");
  careersOver.style.opacity = ("1");
});

document.querySelector(".hoverCareers").addEventListener("mouseout", function () {
  let careersOut = document.querySelector(".handleCareers");
  careersOut.style.opacity = ("0");
})
document.querySelector(".hoverFaq").addEventListener("mouseover", function () {
  let faqOver = document.querySelector(".handleFaq");
  faqOver.style.opacity = ("1");
});

document.querySelector(".hoverFaq").addEventListener("mouseout", function () {
  let faqOut = document.querySelector(".handleFaq");
  faqOut.style.opacity = ("0");
})
document.querySelector(".hoverRegister").addEventListener("mouseover", function () {
  let registerOver = document.querySelector(".handleRegister");
  registerOver.style.opacity = ("1");
});

document.querySelector(".hoverRegister").addEventListener("mouseout", function () {
  let registerOut = document.querySelector(".handleRegister");
  registerOut.style.opacity = ("0");
})
document.querySelector(".hoverPortfolio").addEventListener("mouseover", function () {
  let portOver = document.querySelector(".handlePortfolio");
  portOver.style.opacity = ("1");
});

document.querySelector(".hoverPortfolio").addEventListener("mouseout", function () {
  let portOut = document.querySelector(".handlePortfolio");
  portOut.style.opacity = ("0");
})
document.querySelector(".hoverBlog").addEventListener("mouseover", function () {
  let blogOver = document.querySelector(".handleBlog");
  blogOver.style.opacity = ("1");
});

document.querySelector(".hoverBlog").addEventListener("mouseout", function () {
  let blogOut = document.querySelector(".handleBlog");
  blogOut.style.opacity = ("0");
})
document.querySelector(".hoverContact").addEventListener("mouseover", function () {
  let contactOver = document.querySelector(".handleContact");
  contactOver.style.opacity = ("1");
});

document.querySelector(".hoverContact").addEventListener("mouseout", function () {
  let contactOut = document.querySelector(".handleContact");
  contactOut.style.opacity = ("0");
})




// Fixed Button


function fadeIn(elem, speed) {
  if (elem.style.opacity) {
      elem.style.opacity = 0;
      elem.style.display = "block";
  }
  var fadeInInterval = setInterval(function () {
      elem.style.opacity = Number(elem.style.opacity) + 0.02;
      if (elem.style.opacity >= 1) {
          clearInterval(fadeInInterval);
      }
  }, speed);
}

function fadeOut(elem, speed) {
  if (!elem.style.opacity) {
      elem.style.opacity = 1;
  }
  var fadeOutInterval = setInterval(function () {
      elem.style.opacity = Number(elem.style.opacity) - 0.02;
      if (elem.style.opacity <= 0) {
          clearInterval(fadeOutInterval);
          elem.style.display = "none";
      }
  }, speed);
}

window.onscroll = function () { scrollFunction() };

var isScrollUpDisplayed = false;
var scrollUpElem = document.querySelector(".scroll-top");

scrollUpElem.addEventListener("click", function () {
  var upInterval = setInterval(function () {
      if (document.documentElement.scrollTop <= 0) {
          console.log(document.body.scrollTop);
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
          clearInterval(upInterval);
      } else {
          document.body.scrollTop -= 20;
          document.documentElement.scrollTop -= 20;
      }
      console.log(document.body.scrollTop);

  }, 1);

});


function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      if (!isScrollUpDisplayed) {
          fadeIn(scrollUpElem, 10);
          isScrollUpDisplayed = true;
      }
  } else {
      if (isScrollUpDisplayed) {
          fadeOut(scrollUpElem, 10);
          isScrollUpDisplayed = false;
      }
  }
}


var section = document.querySelector(".simple-section");
section.addEventListener("click", function(){
  fadeOut(tabs[0], 20)
});

   



function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}