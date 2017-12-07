var $ = function(id) {
    return document.getElementById(id);
}

var timer;
var currentSlide = 0;
var image = new Image();

//arrays
var imageArray = ["game.jpg", "comp.png", "deathstar.jpg", "2tall2draw.jpg", "mario.jpg", "pinoccio.jpg", "atmosphere.png", "go.png", "dealwithit.jpg", "shining.jpg"];
var titleArray = ["In-Game Image", "Comparison", "The Death Star", "2 Tall 2 Draw", "Mario Flag Pole", "Pinoccio Nose", "IN SPAAAAAACE", "New Pokemon Go Version", "#dealwithit", "HERE'S EGGY"];
var captionArray = ["A picture of Alolan Exeggutor in it's natural habitat", "A comparison shot between standard and Alolan Exeggutor", "Turns out the battle station may not have been fully operational after all", "Aren't you a little tall for a Pokemon?", "When glorified dog fights aren't enough to pay the bills, many Alolan Exeggutors are forced to find side jobs. Being a flag pole for Mario pays surprisingly well, after you add in the gold coin tips", "Legend says that it wasn't evolution that caused Alolan Exeggutor to grow so tall, but one lying Disney icon", "When you run out of ideas for your franchise, there is nothing left to do but send it to space. Game Freak isn't at that point yet, but they are sending people up to see what it's like up there", "I don't remember this Pokemon Go update", "#nuffsaid", "I haven't actually seen The Shining, so I can't make another reference here. Sorry :("];

/*
var preload = function() {
    for(var i = 0; i < imageArray.length; i++) {
        image.src = imageArray[i];
        imageArray.push(image);
    }
}
*/

var displayImage = function() {
    if(currentSlide > 9)
        currentSlide = 0
    $("main").src = imageArray[currentSlide];
    $("title").innerHTML = titleArray[currentSlide];
    $("caption").innerHTML = captionArray[currentSlide];
    
    currentSlide++;
    timer = setTimeout(displayImage, 5000);
}

window.onload = function() {
    //preload();
    displayImage();
}