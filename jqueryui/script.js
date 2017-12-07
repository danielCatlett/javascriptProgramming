function explosionButton()
{
    $("#ship").attr('src', 'explosion.png');
    $("#ship").hide("explode", 1000)
}

$(function() 
{
    $("#draggable").draggable();
});