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


let letterPattern = /^[a-zA-Z]*$/;
let emailPattern = /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/;
let dayPattern = /([0-9]{2})/;
let yearPattern = /([0-9]{4})*$/;
let phonePattern = /([0-9])/;


let inputName = document.forms["registerForm"]["inputName"];
let inputLastname = document.forms["registerForm"]["inputLastname"];
let inputDay = document.forms["registerForm"]["inputDay"];
let inputYear = document.forms["registerForm"]["inputYear"];
let inputEmail = document.forms["registerForm"]["inputEmail"];
let inputPhone = document.forms["registerForm"]["inputPhone"];
let inputEnvato = document.forms["registerForm"]["inputEnvato"];
let inputPassword = document.forms["registerForm"]["inputPassword"];
let inputConfirm = document.forms["registerForm"]["inputConfirm"];


function validateForm() {
  if (inputName.value == "" || inputLastname.value == "" || inputDay.value == ""
    || inputEmail.value == "" || inputYear.value == "" || inputPhone.value == ""
    || inputEnvato.value == "" || inputPassword.value == "" || inputConfirm.value == "") {
    alert("Inputs shouldn't be empty");
    return false;
  }

  if (!inputName.value.match(letterPattern) || !inputLastname.value.match(letterPattern)) {
    alert("Name or Lastname should consist only letters");
    return false;
  }

  if (!inputDay.value.match(dayPattern)) {
    alert("Please, enter correct day format");
    return false;
  }
  if (!inputYear.value.match(yearPattern)) {
    alert("Please, enter correct year format");
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
  inputLastname.value = "";
  inputDay.value = "";
  inputYear.value = "";
  inputEmail.value = "";
  inputPhone.value = "";
  inputEnvato.value = "";
  inputPassword.value = "";
  inputConfirm.value = "";
}