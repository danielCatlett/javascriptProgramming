$(document).ready(function()
{
    "use strict";
    var nextSlide = $("#slides img:first-child");
    var nextSlideSource;
    
    var runSlideshow = function()
    {
        $("#slide").delay(3000).slideDown(2000, function()
        {
            if(nextSlide.next().length === 0)
                nextSlide = $("#slides img:first-child");
            else
                nextSlide = nextSlide.next();
                nextSlideSource = nextSlide.attr("src");
                $("#slide").attr("src", nextSlideSource).slideUp(2000);
        });
    };
    
    //start slideshow
    var timer1 = setInterval(runSlideshow, 4000);
    
    //starting/stopping
    
    $("#slide").click(function()
    {
        if(timer1 !== null)
        {
            clearInterval(timer1);
            timer1= null;
        }
        else
            timer1 = setInterval(runSlideshow, 3000);
    });
});