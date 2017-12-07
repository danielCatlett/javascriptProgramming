"use strict";
var $ = function (id) 
{
    return document.getElementById(id);
}

var calcCost = function ()
{
    var validValues = true;
    
    //front yard
    var frontLength = parseFloat($("frontLength").value);
    if(isNaN(frontLength) || frontLength > 500)
        validValues = false;
    var frontWidth = parseFloat($("frontWidth").value);
    if(isNaN(frontWidth) || frontWidth > 500)
        validValues = false;
    console.log(frontLength, frontWidth);
    
    //back yard
    var backLength = parseFloat($("backLength").value);
    if(isNaN(backLength) || backLength > 500)
        validValues = false;
    var backWidth = parseFloat($("backWidth").value);
    if(isNaN(backWidth) || backWidth > 500)
        validValues = false;
    console.log(backLength, backWidth);
    
    //left side
    var lSideLength = parseFloat($("lSideLength").value);
    if(isNaN(lSideLength) || lSideLength > 500)
        validValues = false;
    var lSideWidth = parseFloat($("lSideWidth").value);
    if(isNaN(lSideWidth) || lSideWidth > 500)
        validValues = false;
    console.log(lSideLength, lSideWidth);
    
    //right side
    var rSideLength = parseFloat($("rSideLength").value);
    if(isNaN(rSideLength) || rSideLength > 500)
        validValues = false;
    var rSideWidth = parseFloat($("rSideWidth").value);
    if(isNaN(rSideWidth)  || rSideWidth > 500)
        validValues = false;
    console.log(rSideLength, rSideWidth);
    
    if(!validValues)
        alert("You have an invalid value or a number that is above 500. Please fix it and resubmit");
    else
    {
        var front = frontLength * frontWidth;
        var back = backLength * backWidth;
        var left = lSideLength * lSideWidth;
        var right = rSideLength * rSideWidth;
        var total = front + back + left + right;
        console.log(total);
        total = total.toFixed(2);
        alert("Your lawn will cost " + total + " to maintain.");
    }
}

window.onload = function ()
{
    
    $("submit").onclick = calcCost;
}