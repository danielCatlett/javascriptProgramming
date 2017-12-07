$(document).ready(function()
{
    "use strict";
    //console.log("something");
    
    $("#theBestForm").submit(function(event) 
    {
        console.log("here");
        /*var isValid = true;
        
        //email checking
        var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
        var email = $("email").val().trim();
        if(email === "")
        {
            $("#email").next().text("This field is required");
            isValid = false;
        }
        else if(!emailPattern.test(email))
        {
            $("#email").next().text("Must be a valid email address.");
            isValid = false;
        }
        else
            $("#email").next().text("");
        $("#email").val(email);
        
        //password checking
        var password = $("#password").val().trim();
        if (password.length < 8) 
        {
            $("#password").next().text("Must be 8 or more characters.");
            isValid = false;
        }
        else
            $("#password").next().text("");
        $("#password").val(password);
        
        //checking the verify password field
        var passwordVerify = $("#passwordVerify").val().trim();
        if(passwordVerify === "")
        {
            $("#passwordVerify").next().text("This field is required.");
            isValid = false;
        }
        else if (passwordVerify !== password) 
        {
            $("#passwordVerify").next().text("Must equal first password entry.");
            isValid = false;
        }
        else
            $("#passwordVerify").next().text("");
        $("#passwordVerify").val(passwordVerify);
        
        //validate the first name
        var first = $("#first").val().trim();
        if (first === "") 
        {
            $("#first").next().text("This field is required.");
            isValid = false;
        }
        else
            $("#first").next().text("");
        $("#first").val(first);
        
        //validate the last name
        var last = $("#last").val().trim();
        if (last === "")
        {
            $("#last").next().text("This field is required.");
            isValid = false;
        }
        else
            $("#last").next().text("");
        $("#last").val(last);
        
        //validate phone number
        var phonePattern = /^\d{3}-\d{3}-\d{4}$/;
        var phone = $("#phone").val().trim();
        if (phone === "") 
        {
            $("#phone").next().text("This field is required.");
            isValid = false;
        }
        else if (!phonePattern.test(phone))
        {
            $("#phone").next().text("Use 999-999-9999 format.");
            isValid = false;
        }
        else
            $("#phone").next().text("");
        $("#phone").val(phone);
        
        //if any entry is invalid, do not submit
        if (isValid === false) 
        {
            event.preventDefault();
            window.alert("Fix whatever is not working, and try again");
            console.log("making it here");
        }
        */
    });
});