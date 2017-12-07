var $ = function (id) {
    "use strict";
    return document.getElementById(id);
};

//keeping track of thumbnails
//actually using an array for this
/*
var thumbZero = 0;
var thumbOne = 1;
var thumbTwo = 2;
var thumbThree = 3;
var thumbFour = 4;
*/

//for preloading
/*
var imageSmall = new Image();
var imageLarge = new Image();
*/

//arrays
var thumbArray = [0, 1, 2, 3, 4];
var imageArrayLarge = ["game.jpg", "comp.png", "deathstar.jpg", "2tall2draw.jpg", "mario.jpg", "pinoccio.jpg", "atmosphere.png", "go.png", "dealwithit.jpg", "shining.jpg"];
var imageArraySmall = ["gameSmall.jpg", "compSmall.png", "deathstarSmall.jpg", "2tall2drawSmall.jpg", "marioSmall.jpg", "pinoccioSmall.jpg", "atmosphereSmall.png", "goSmall.png", "dealwithitSmall.jpg", "shiningSmall.jpg"];
var titleArray = ["In-Game Image", "Comparison", "The Death Star", "2 Tall 2 Draw", "Mario Flag Pole", "Pinoccio Nose", "IN SPAAAAAACE", "New Pokemon Go Version", "#dealwithit", "HERE'S EGGY"];
var captionArray = ["A picture of Alolan Exeggutor in it's natural habitat", "A comparison shot between standard and Alolan Exeggutor", "Turns out the battle station may not have been fully operational after all", "Aren't you a little tall for a Pokemon?", "When glorified dog fights aren't enough to pay the bills, many Alolan Exeggutors are forced to find side jobs. Being a flag pole for Mario pays surprisingly well, after you add in the gold coin tips", "Legend says that it wasn't evolution that caused Alolan Exeggutor to grow so tall, but one lying Disney icon", "When you run out of ideas for your franchise, there is nothing left to do but send it to space. Game Freak isn't at that point yet, but they are sending people up to see what it's like up there", "I don't remember this Pokemon Go update", "#nuffsaid", "I haven't actually seen The Shining, so I can't make another reference here. Sorry :("];

var count = imageArrayLarge.length;

//function preload(){}

function buttonZero() {
    "use strict";
    $("large").src = imageArrayLarge[thumbArray[0]];
    $("title").innerHTML = titleArray[thumbArray[0]];
    $("caption").innerHTML = captionArray[thumbArray[0]];
}

function buttonOne() {
    "use strict";
    $("large").src = imageArrayLarge[thumbArray[1]];
    $("title").innerHTML = titleArray[thumbArray[1]];
    $("caption").innerHTML = captionArray[thumbArray[1]];
}

function buttonTwo() {
    "use strict";
    $("large").src = imageArrayLarge[thumbArray[2]];
    $("title").innerHTML = titleArray[thumbArray[2]];
    $("caption").innerHTML = captionArray[thumbArray[2]];
}

function buttonThree() {
    "use strict";
    $("large").src = imageArrayLarge[thumbArray[3]];
    $("title").innerHTML = titleArray[thumbArray[3]];
    $("caption").innerHTML = captionArray[thumbArray[3]];
}

function buttonFour() {
    "use strict";
    $("large").src = imageArrayLarge[thumbArray[4]];
    $("title").innerHTML = titleArray[thumbArray[4]];
    $("caption").innerHTML = captionArray[thumbArray[4]];
}

function forwardButton() {
    "use strict";
    
    incrementThumb(0, false);
    $("buttonZero").src = imageArraySmall[thumbArray[0]];
    
    incrementThumb(1, false);
    $("buttonOne").src = imageArraySmall[thumbArray[1]];
    
    incrementThumb(2, false);
    $("buttonTwo").src = imageArraySmall[thumbArray[2]];
    
    incrementThumb(3, false);
    $("buttonThree").src = imageArraySmall[thumbArray[3]];
    
    incrementThumb(4, false);
    $("buttonFour").src = imageArraySmall[thumbArray[4]];
}

function backButton() {
    "use strict";
    
    incrementThumb(0, true);
    $("buttonZero").src = imageArraySmall[thumbArray[0]];
    
    incrementThumb(1, true);
    $("buttonOne").src = imageArraySmall[thumbArray[1]];
    
    incrementThumb(2, true);
    $("buttonTwo").src = imageArraySmall[thumbArray[2]];
    
    incrementThumb(3, true);
    $("buttonThree").src = imageArraySmall[thumbArray[3]];
    
    incrementThumb(4, true);
    $("buttonFour").src = imageArraySmall[thumbArray[4]];
}

function incrementThumb(i, goUp) {
    //increment up if true (forward), or down if false (back)
    if(goUp === false)
        thumbArray[i]++;
    else
        thumbArray[i]--;
    if(thumbArray[i] === count)
        thumbArray[i] = 0;
    else if(thumbArray[i] === -1)
        thumbArray[i] = (count - 1);        
}

/*
function onload() {
    "use strict"
    console.log("Something is working");
}
*/