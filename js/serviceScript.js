"Use strict";




let buttons = document.querySelectorAll(".opacity-button");
let changeDiv = document.querySelectorAll(".change");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        let elementId = this.getAttribute("data-tab-target");
        for (let j = 0; j < changeDiv.length; j++) {
            changeDiv[j].style.display = "none";
        }
        document.querySelector("#" + elementId).style.display = "flex";
    });
}


