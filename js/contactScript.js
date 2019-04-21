"use strict";


document.querySelector(".messenger").addEventListener("mouseover", function () {
    let envatoOver = document.querySelector(".bottom-button");
    envatoOver.style.borderColor = ("#6BC868");
})

document.querySelector(".messenger").addEventListener("mouseout", function () {
    let envatoOut = document.querySelector(".bottom-button");
    envatoOut.style.borderColor = ("#72727256");

})


document.querySelector(".bottom-button").addEventListener("mouseover", function () {
    let buttonOver = document.querySelector(".messenger");
    buttonOver.style.borderColor = ("#6BC868");
})

document.querySelector(".bottom-button").addEventListener("mouseout", function () {
    let buttonOut = document.querySelector(".messenger");
    buttonOut.style.borderColor = ("#72727256");
})


document.querySelector(".bottom-button").addEventListener("click", function () {
    let buttonHeight = document.querySelector(".messenger");
    buttonHeight.style.height = ("120px");
    console.log(buttonHeight)
})



let letterPattern = /^[a-zA-Z]*$/;
let phonePattern = /([0-9])/;
let emailPattern = /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/;

let inputName = document.forms["registerForm"]["inputName"];
let inputEmail = document.forms["registerForm"]["inputEmail"];
let inputPhone = document.forms["registerForm"]["inputPhone"];
let inputSubject = document.forms["registerForm"]["inputSubject"];
let inputMessaje = document.forms["registerForm"]["inputMessaje"];
let alertIcon1 = document.querySelector(".alert1");
let alertIcon2 = document.querySelector(".alert2");
let alertIcon3 = document.querySelector(".alert3");
let alertIcon4 = document.querySelector(".alert4");
let alertIcon5 = document.querySelector(".alert5");

function validateForm() {
    if (inputName.value == "" || inputEmail.value == "" || inputPhone.value == "" || inputSubject.value == "" || inputMessaje.value == "") {
        inputName.style.backgroundColor = ("#FEE9EA");
        inputName.style.borderColor = ("#DE888A");
        inputEmail.style.backgroundColor = ("#FEE9EA");
        inputEmail.style.borderColor = ("#DE888A");
        inputPhone.style.backgroundColor = ("#FEE9EA");
        inputPhone.style.borderColor = ("#DE888A");
        // inputSubject.style.backgroundColor = ("#FEE9EA");
        // inputSubject.style.borderColor = ("#DE888A");
        inputMessaje.style.backgroundColor = ("#FEE9EA");
        inputMessaje.style.borderColor = ("#DE888A");
        alertIcon1.style.color = ("#DE888A");
        alertIcon2.style.color = ("#DE888A");
        alertIcon3.style.color = ("#DE888A");
        alertIcon4.style.color = ("#DE888A");
        alertIcon5.style.color = ("#DE888A");
        return false;
    }

    if (!inputName.value.match(letterPattern)){
        alert("Name should consist only letters");
        return false;
    }
    if (!inputEmail.value.match(emailPattern)) {
        alert("Email format not correct");
        return false;
    }
    if (!inputPhone.value.match(phonePattern)) {
        alert("Phone number should consist only number");
        return false;
    }
    resetInputs();
    return false;
}


function resetInputs() {
    inputName.value = "";
    inputEmail.value = "";
    inputPhone.value = "";
    inputSubject.value = "";
    inputMessaje.value = "";
}