var foxPosition = 0;
var foxActions = 3;

var marthPosition = 4;
var marthActions = 3;
var NPCStocks = 4;

var NPCData;

var currentNPC = 0;

$(document).ready(function()
{
    $.getJSON("NPCData.json", function(data)
    {
        NPCData = data;
    }); 
    
    talkToScar();
    
    var textCounter = 0;
    $(document).on("keypress", function(e) 
    {
        var text = ["I'm here because you are embarking on journey today, your journey through the Smash community. I'm going to guide you through this journey, and teach you how to succeed in Smash.", "It will be a long and hard journey, and you will encounter hardship along the way. You will lose to jank, get wobbled, and get extremely salty more times than you can count.", "But if you stick with it, you may some day be good enough to play with the best of the best!", "Some day, you may even become the GOAT!", "But let's not get ahead of ourselves. Your first opponent is here, and ready to play. Normally coaching is banned, but we can make an exception this time, so that I can teach you the basics."];
        $("#speech").text(text[textCounter]);
        textCounter++;
        if(textCounter === 6)
            playerIntro();
    });
});

function talkToScar()
{
    disableButtons();
    $("#background").attr('src', 'bobbyscar.jpg');
    $("#fox").hide();
    $("#marth").hide();
    $("#actions").hide();
    $("#playerTag").hide();
    $("#playerName").hide();
    $("#playerMain").hide();
    $("#playerLine").hide();
}


function playerIntro()
{
    //hide Scar elements
    $("#speechbubble").hide();
    $("#speech").hide();
    
    //hide match elements
    $("#fox").hide();
    $("#marth").hide();
    $("#actions").hide();
    
    //Set text for NPC introduction elements
    $("#playerTag").text(getNPCTag(currentNPC));
    $("#playerName").text(getNPCName(currentNPC));
    $("#playerMain").text(getNPCMain(currentNPC));
    $("#playerLine").text(getNPCOpeningLine(currentNPC));
    $("#background").attr('src', 'playerIntro.png');
    
    //show player elements
    $("#playerTag").fadeIn(500);
    $("#playerName").fadeIn(1000);
    $("#playerMain").fadeIn(1500);
    $("#playerLine").fadeIn(2000);
    
    $(document).on("keypress", function(e) 
    {
        switchToGame();
    });
}

function playerOutro()
{
    //hide match elements
    $("#fox").hide();
    $("#marth").hide();
    $("#actions").hide();
    
    //Set text for NPC closing elements
    $("#playerTag").text(getNPCTag(currentNPC));
    $("#playerName").text(getNPCName(currentNPC));
    $("#playerMain").text(getNPCMain(currentNPC));
    $("#playerLine").text(getNPCClosingLine(currentNPC));
    $("#background").attr('src', 'playerIntro.png');
    
    //show player elements
    $("#playerTag").fadeIn(500);
    $("#playerName").fadeIn(1000);
    $("#playerMain").fadeIn(1500);
    $("#playerLine").fadeIn(2000);
    
    currentNPC++ //Move on to the next opponent
    
    $(document).on("keypress", function(e) 
    {
        playerIntro();
    });
}

function getNPCTag(index)
{
    var tag = NPCData.players[index].tag;
    return tag;
}

function getNPCName(index)
{
    var name = NPCData.players[index].name;
    return name;
}

function getNPCMain(index)
{
    var main = NPCData.players[index].main;
    return main;
}

function getNPCOpeningLine(index)
{
    var openingLine = NPCData.players[index].openingLine;
    return openingLine;
}

function getNPCClosingLine(index)
{
    var closingLine = NPCData.players[index].defeatLine;
    return closingLine;
}

function switchToGame()
{
    //hide all non match elements
    $("#speechbubble").hide();
    $("#speech").hide();
    $("#playerTag").hide();
    $("#playerName").hide();
    $("#playerMain").hide();
    $("#playerLine").hide();
    
    //reset characters
    document.getElementById('fox').style = "position: absolute; top: 260px; left: 200px;";
    foxPosition = 0;
    document.getElementById('marth').style = "position: absolute; top: 260px; left: 700px;";
    marthPosition = 4;
    
    //Show match elements
    $("#background").attr('src', 'finaldestinationLarge.jpg');
    $("#background").show();
    $("#fox").show();
    $("#marth").show();
    $("#actions").show();
    enableButtons();
}

//move fox right
function right()
{
    if(foxPosition !== 4)
    {
        //buttons disable to prevent user from buffering 
        //inputs
        disableButtons();
        foxPosition++;
        if(foxActions > 1)
            $("#fox").animate({left:'+=125px',}, 1000, enableButtons);
        else
            $("#fox").animate({left:'+=125px',}, 1000, moveMarth);
        handleActions();
    }
}

//move fox left
function left()
{
    if(foxPosition !== 0)
    {
        disableButtons();
        foxPosition--;
        if(foxActions > 1)
            $("#fox").animate({left:'-=125px',}, 1000, enableButtons);
        else
            $("#fox").animate({left:'-=125px',}, 1000, moveMarth);
        handleActions();
    }
}

//jumping, currently not useful, but it's here
function up()
{
    disableButtons();
    if(foxActions > 1)
    {
        $("#fox").animate({top:'-=75px',}, 1000);
        $("#fox").animate({top:'+=75px',}, 1000, enableButtons);
    }
    else
    {
        $("#fox").animate({top:'-=75px',}, 1000);
        $("#fox").animate({top:'+=75px',}, 1000, moveMarth);
    }
    handleActions();
}

//shine, used for trying to get Marth off screen
function shine()
{
    disableButtons();
    $("#fox").attr('src', 'shine.png');
    if(foxPosition === marthPosition)
    {
        shineMarth();
        if(foxPosition === 0 || foxPosition === 4)
            foxActions = 0;
    }
    setTimeout(unshine, 1000);
}

//revert fox to unshined state, handle all of the 
//post movement functions
function unshine()
{
    $("#fox").attr('src', 'foxRight.png');
    if(foxActions > 1)
        enableButtons();
    else
        moveMarth();
    handleActions();
}

//updating the user on how many actions they have left
function handleActions()
{
    if(foxActions > 1)
        foxActions--;
    else
        foxActions = 3;
    $("#actions").text("Actions Left: " + foxActions.toString());
}

//decides where Marth is going to move
function moveMarth()
{
    while(marthActions > 0)
    {
        if(marthPosition === 0)
        {
            moveMarthRight();
        }
        else if(marthPosition === 4)
        {
            moveMarthLeft();
        }
        else
        {
            randomlyMoveMarth();
        }
        marthActions--;
    }
    marthActions = 3;
}

//If Marth is in the center of the screen, move him randomly
function randomlyMoveMarth()
{
    var rngesus = Math.random();
    if(rngesus < .5)
    {
        moveMarthLeft();
    }
    else
    {
        moveMarthRight();
    }
}

//self explanitory
function moveMarthLeft()
{
    /*
    If this is the final action marth is taking
    this turn, enable movement again after he is done
    
    The second condition is for if this method is called 
    to move Marth because he has been shined. Otherwise,
    the buttons would never reenable after shining Marth
    */
    if(marthActions - 1 === 0 || foxActions !== 3)
        $("#marth").animate({left:'-=125px',}, 1000, enableButtons);
    else
        $("#marth").animate({left:'-=125px',}, 1000);
    marthPosition--;
}

//self explanitory
function moveMarthRight()
{
    //same notes as moveMarthleft
    if(marthActions - 1 === 0 || foxActions !== 3)
        $("#marth").animate({left:'+=125px',}, 1000, enableButtons);
    else
        $("#marth").animate({left:'+=125px',}, 1000);
    marthPosition++;
}

//if Marth gets shined, decide what is going to happen 
//to him based off his current position
function shineMarth()
{
    switch(marthPosition)
    {
        case 0:
            shineSpikeLeft();
            break;
        case 1:
            moveMarthLeft();
            break;
        case 2:
            randomlyMoveMarth();
            break;
        case 3:
            moveMarthRight();
            break;
        case 4:
            shineSpikeRight();
    }
}

//Kill Marth off the left if he gets shined while 
//all the way to the left
function shineSpikeLeft()
{
    NPCStocks--;
    if(NPCStocks === 0)
    {
        NPCStocks = 4;
        $("#marth").animate({left:'-=100px',}, 500);
        $("#marth").fadeOut({queue: false, duration: 1300});
        $("#marth").animate({left:'-=125px', top:'+=300px'}, 1000, playerOutro);
    }
    else
    {
        marthPosition = 2;
        $("#marth").animate({left:'-=100px',}, 500);
        $("#marth").fadeOut({queue: false, duration: 1300});
        $("#marth").animate({left:'-=125px', top:'+=300px'}, 1000, respawn);
    }
}

//Kill Marth off the right if he gets shined while 
//all the way to the right
function shineSpikeRight()
{
    NPCStocks--;
    if(NPCStocks === 0)
    {
        NPCStocks = 4;
        $("#marth").animate({left:'+=100px',}, 500);
        $("#marth").fadeOut({queue: false, duration: 1300});
        $("#marth").animate({left:'+=125px', top:'+=300px'}, 1000, playerOutro);
    }
    else
    {
        marthPosition = 2;
        $("#marth").animate({left:'+=100px',}, 500);
        $("#marth").fadeOut({queue: false, duration: 1300});
        $("#marth").animate({left:'+=125px', top:'+=300px'}, 1000, respawn);
    }
}

//bring Marth back after he dies
function respawn()
{
    document.getElementById('marth').style = "position: absolute; top: 260px; left: 450px;"; //respawn platform will be top 175
    $("#marth").show("fade", 500, enableButtons);
    //$("#marth").animate({top:'+=85px',}, 1000);
}

//don't let the user use buttons until the current movement
//is finished
function disableButtons()
{
    document.getElementById("up").disabled = true;
    document.getElementById("left").disabled = true;
    document.getElementById("shine").disabled = true;
    document.getElementById("right").disabled = true;
}

//The user is allowed to use the buttons again
function enableButtons()
{
    document.getElementById("up").disabled = false;
    document.getElementById("left").disabled = false;
    document.getElementById("shine").disabled = false;
    document.getElementById("right").disabled = false;
}