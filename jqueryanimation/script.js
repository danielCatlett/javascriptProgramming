$(document).ready(function()
{
    var slider = $("#slides");
    var numSlots = 10;
    var count = 0;
    
    $("#rightButton").click(function()
    {
        count += 1;
        if(count >= numSlots)
        {
            count = 0;
            slider.animate(
            {
                left: '-=100%'
            })
            slider.animate(
            {
                left: "+=500%"
            }, 0);
        }
        else
        {
            slider.animate(
            {
                left: '-=100%'
            });
        }
    });
    
    $("#leftButton").click(function()
    {
        console.log("we made it");
        count -= 1;
        if(count <= 0)
        {
            count = 10;
            slider.animate(
            {
                left: '+=100%'
            })
            slider.animate(
            {
                left: "-=500%"
            }, 0);
        }
        else
        {
            slider.animate(
            {
                left: '+=100%'
            });
        }
    });
});