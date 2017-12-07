var $ = function(id) 
{
    "use strict";
    return document.getElementById(id);
};

var submitInfo = function()
{
    "use strict";
    
    var addiction = "";
    
    //save the basic data from the textboxes
    var first = $("first").value;
    var last = $("last").value;
    var phone = $("phone").value;
    var email = $("email").value;
    
    //get the radio button choice
    var reason = "";
    if($("here").checked)
    {
        reason = "Because it's here";    
    }
    else if($("obligation").checked)
    {
        reason = "Out of a sense of obligation";
    }
    else if($("addiction").checked)
    {
        reason = "I have a crushing addiction, and the only relief I get is filling out online forms";
        addiction = " And please get help for your addiction. You have people who care about you in your life, and don't want to see you go down this self destructive path.";
    }
    else if($("meri").checked)
    {
        reason = "Because my name is Meri and I need to make sure this form works";
    }
    else if($("daniel").checked)
    {
        reason = "Because my name is Daniel and I need to make sure this form works";
    }
    else if($("other").checked)
    {
        reason = "Other";
    }
    if(first == "" || last == "")
    {
        window.alert("You must fill out the first name and last name fields.")
    }
    else
    {
        window.alert("Thank you " + first + "." + addiction);
    }
};

var resetForm = function(){
    "use strict";
    document.getElementById("register").reset();
}