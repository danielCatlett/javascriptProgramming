var $ = function(id)
{
    return document.getElementById(id);
}

var today = new Date();
var currentMonth = today.getMonth() + 1;
var currentDate = today.getDate();
var currentYear = today.getFullYear();
var todayString = currentMonth + " / " + currentDate + " / " + currentYear;

function setDate()
{    
    $("todaysDate").innerHTML = today.toDateString();
}

function daysSinceFiveGods()
{
    var fiveGods = new Date(2016, 3, 18);
    var yearDifference = 0;
    var monthDifference = 0;
    
    if(today.getMonth < fiveGods.getMonth)
    {
        yearDifference = today.getFullYear() - fiveGods.getFullYear() - 1;
        monthDifference = fiveGods.getMonth() - today.getMonth();
    }
    else
    {
        yearDifference = today.getFullYear() - fiveGods.getFullYear();
        monthDifference = today.getMonth() - fiveGods.getMonth();
    }
    
    var yearString = " years and ";
    var monthString = " months";
    
    if(yearDifference === 1)
        yearString = " year and "
    if(monthDifference === 1)
        monthString = " month";
    
    $("timeSince").innerHTML = yearDifference + yearString + monthDifference + monthString;
}

function uniqueDayMessage()
{
    var dateStatement = "";
    var d = new Date();
    var todayIs = d.getDay();
    
    switch(todayIs)
    {
        case 0:
        case 6:
            dateStatement = "It's the weekend, PPMD would be playing in tournament today if he were back :(";
            break;
        case 1:
            dateStatement = "It's Monday. PPMD would be travelling home from another great tournament today if he were back :(";
            break;
        case 2:
            dateStatement = "It's Tuesday. PPMD would be training hard for the next tournament today if he were back :(";
            break;
        case 3:
            dateStatement = "It's Wednesday. PPMD would be getting ready to travel to the next tournament today if he were back :(";
            break;
        case 4:
            dateStatement = "It's Thursday. PPMD would be travelling to the next tournament today if he were back :(";
            break;
        case 5:
            dateStatement = "It's Friday. PPMD would be destroying scrubs in pools today if he were back :(";
            break;
        default:
            dateStatement = "The year is 20XX, time has lost all meaning. PPMD recently announced that he is feeling much better, and that he will be back soon. Some get excited when they hear this, but most know better, having heard him say that at least 6389 times.";
    }
    $("uniqueDayMessage").innerHTML = dateStatement;
}

function daysToAnniversary()
{
    var today = new Date();
    var anniversary = new Date("02/01/2018");
    
    var timeDiff = Math.abs(anniversary.getTime() - today.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 *24));
    
    var dayString = " days";
    if(diffDays === 1)
        dayString = " day";
    
    $("timeTill").innerHTML = diffDays + dayString;
}

window.onload = function()
{
    setDate();
    daysSinceFiveGods();
    uniqueDayMessage();
    daysToAnniversary();
}