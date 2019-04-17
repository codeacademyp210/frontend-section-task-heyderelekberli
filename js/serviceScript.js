

let buttons = document.querySelectorAll(".tab-button");
let tabs = document.querySelectorAll(".tab-content");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        let elementId = this.getAttribute("data-tab-target");
        for (let j = 0; j < tabs.length; j++) {
            tabs[j].style.display = "none";
        }
        document.querySelector("#" + elementId).style.display = "block";
    });
}

