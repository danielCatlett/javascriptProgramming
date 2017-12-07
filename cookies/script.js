"use strict";
$(document).ready(function()
{
    $("#submitButton").click(function()
    {
        var nameBox = $("#name");
        var name = nameBox.val();
        var dobBox = $("#dob");
        var dob = dobBox.val();
        var ssnBox = $("#ssn");
        var ssn = ssnBox.val();
        var ccnBox = $("#ccn");
        var ccn = ccnBox.val();
        
        if(name === "" || dob === "" || ssn === "" || ccn === "")
        {
            alert("Please ensure that all fields are filled out");
            if(name === "")
                nameBox.focus();
            else if(dob === "")
                dobBox.focus();
            else if(ssn === "")
                ssnBox.focus();
            else
                ccnBox.focus();
        }
        else
        {
            var people = localStorage.storePeople || "";
            localStorage.storePeople = people.concat(name + "\nDOB: " + dob + "\nSSN: " + ssn + "\nCCN: " + ccn + "\n");
            nameBox.val("");
            dobBox.val("");
            ssnBox.val("");
            ccnBox.val("");
            document.getElementById("preview").innerHTML = localStorage.storePeople;
            nameBox.focus();
        }
    });
    $("#clearButton").click(function()
    {
        localStorage.removeItem("storePeople");
        document.getElementById("preview").innerHTML = "";
        $("#name").focus();
    });
    if(localStorage.storePeople !== undefined)
        document.getElementById("preview").innerHTML = localStorage.storePeople;
    $("#name").focus();
});