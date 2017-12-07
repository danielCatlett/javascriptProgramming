window.onload = function()
{
    "use strict";
    
    //variable setup
    var h2Elements = document.getElementsByTagName("h2");
    var pElements = document.getElementsByTagName("p");
    var h2Node;
    //set up parallel array for tracking if the corresponding p elements are visible or not
    var visArray = [];
    
    
    /* Possible solution testing
    var element = document.getElementById("pOne");
    element.style.display = "none";
    element.style.display = "block";
    element.parentNode.removeChild(element);
    var sameElement = document.getElementById("pOne");
    sameElement.parentNode.addChild(sameElement);
    */
    
    //for each h2 element, have a corresponding variable declaring whether or not it is visible
    for(var j = 0; j < h2Elements.length; j++)
    {
        var visibility = false;
        visArray.push(visibility);
        //actually make the element invisible
        pElements[j].style.display = "none";
        //console.log(j, visArray[j]);
    }
    
    //for each h2 element on the page
    for(var i = 0; i < h2Elements.length; i++)
    {
        h2Node = h2Elements[i];
        
        h2Node.onclick = function()
        {
            var h2 = this; //current h2 node
            //console.log(this.getAttribute("id"), visArray[i], i);
            
            var h2ID = h2.getAttribute("id");
            var idAsNum = convertToNum(h2ID);
            
            //if the element that was clicked on is already visible
            if(visArray[idAsNum] === true)
            {
                if(h2.getAttribute("id") === "one")
                {
                    //console.log("Made it");
                    document.getElementById("pOne").style.display = "none";
                    visArray[0] = false;
                }
                else if(h2.getAttribute("id") === "two")
                {
                    document.getElementById("pTwo").style.display = "none";
                    visArray[1] = false;
                }
                else if(h2.getAttribute("id") === "three")
                {
                    //console.log("Made it");
                    document.getElementById("pThree").style.display = "none";
                    visArray[2] = false;
                }
                else if(h2.getAttribute("id") === "four")
                {
                    document.getElementById("pFour").style.display = "none";
                    visArray[3] = false;
                }
                else if(h2.getAttribute("id") === "five")
                {
                    document.getElementById("pFive").style.display = "none";
                    visArray[4] = false;
                }
                else if(h2.getAttribute("id") === "six")
                {
                    document.getElementById("pSix").style.display = "none";
                    visArray[5] = false;
                }
            }
            //if the element that was clicked on is not visible
            else
            {
                if(h2.getAttribute("id") === "one")
                {
                    document.getElementById("pOne").style.display = "block";
                    visArray[0] = true;
                    //console.log(visArray[0]);
                }
                else if(h2.getAttribute("id") === "two")
                {
                    document.getElementById("pTwo").style.display = "block";
                    visArray[1] = true;
                }
                else if(h2.getAttribute("id") === "three")
                {
                    document.getElementById("pThree").style.display = "block";
                    visArray[2] = true;
                }
                else if(h2.getAttribute("id") === "four")
                {
                    document.getElementById("pFour").style.display = "block";
                    visArray[3] = true;
                }
                else if(h2.getAttribute("id") === "five")
                {
                    document.getElementById("pFive").style.display = "block";
                    visArray[4] = true;
                }
                else if(h2.getAttribute("id") === "six")
                {
                    document.getElementById("pSix").style.display = "block";
                    visArray[5] = true;
                }
            }
        }
    }
}

function convertToNum(h2ID)
{
    if(h2ID === "one")
       return 0;
    else if(h2ID === "two")
       return 1;
    else if(h2ID === "three")
       return 2;
    else if(h2ID === "four")
       return 3;
    else if(h2ID === "five")
       return 4;
    else //if(h2ID === "six")
       return 5;
}