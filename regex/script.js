"use strict";
var $ = function(id)
{
    return document.getElementById(id);
}

var dataIsCorrect = true;

function submitFunction()
{
    validatePhone();
    validateCell();
    validateEmail();
    validateZip();
    if(dataIsCorrect)
        alert("Thank you, data has been recieved");
}

function validatePhone()
{
    var phone = $("phone").value;
    var phoneTest = new RegExp("^([\(]{1}[0-9]{3}[\)]{1}[ ]{1}[0-9]{3}[\-]{1}[0-9]{4})$");
    if(!phoneTest.test(phone))
    {
        alert("Phone number is invalid. Please enter a valid phone number");
        dataIsCorrect = false;
    }
}

function validateCell()
{
    var cell = $("cell").value;
    var cellTest = new RegExp("^([\(]{1}[0-9]{3}[\)]{1}[ ]{1}[0-9]{3}[\-]{1}[0-9]{4})$");
    if(!cellTest.test(cell))
    {
        alert("Cell number is invalid. Please enter a valid cell number");
        dataIsCorrect = false;
    }
}

function validateEmail()
{
    var email = $("email").value;
    var emailTest = new RegExp(".+\@.+\..+");
    if(!emailTest.test(email))
    {
        alert("Email is invalid. Please enter a valid email");
        dataIsCorrect = false;
    }
}

function validateZip()
{
    var zip = $("zip").value;
    var zipTest = new RegExp("^([0-9]{5})");
    if(!zipTest.test(zip))
    {
        alert("Zip-Code is not valid. Please enter a valid Zip-Code");
        dataIsCorrect = false;
    }
}