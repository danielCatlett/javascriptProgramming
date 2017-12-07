var $ = function (id) 
{
    return document.getElementById(id);
}

var calcCost = function ()
{
    var validValues = true;
    
    //front yard
    var frontLength = parseFloat($("frontLength").value);
    if(isNaN(frontLength))
        validValues = false;
    var frontWidth = parseFloat($("frontWidth").value);
    if(isNaN(frontWidth))
        validValues = false;
    
    //back yard
    var backLength = parseFloat($("backLength").value);
    if(isNaN(backLength))
        validValues = false;
    var backWidth = parseFloat($("backWidth").value);
    if(isNaN(backWidth))
        validValues = false;
    
    //left side
    var lSideLength = parseFloat($("lSideLength").value);
    if(isNaN(lSideLength))
        validValues = false;
    var lSideWidth = parseFloat($("lSideWidth").value);
    if(isNaN(lSideWidth))
        validValues = false;
    
    //right side
    var rSideLength = parseFloat($("rSideLength").value);
    if(isNaN(rSideLength))
        validValues = false;
    var rSideWidth = parseFloat($("rSideWidth").value);
    if(isNaN(rSideWidth))
        validValues = false;
    
    if(!validValues)
        alert("You have an invalid value. Please fix it and resubmit");
    else
    {
        var front = frontLength * frontWidth;
        var back = backLength * backWidth;
        var left = lSideLength * lSideWidth;
        var right = rSideLength * rSideWidth;
        var total = front + back + left + right;
        total = total.toFixed(2);
        alert("Your lawn will cost " + total + " to maintain.");
    }
}

window.onload = function ()
{
    
    $("submit").onclick = calcCost;
}