// As far as I (Alex) am aware, all of this code is mine and therefore I apologize for any and all sins against humanity I've committed here

// Get all the elements I want to change on the History page
if(document.getElementsByTagName("body")[0].id == "history"){
    var body = document.getElementsByTagName("body")[0];
    var headerOne = document.getElementById("modernHeader1");
    var headerTwo = document.getElementById("modernHeader2");
    var images = document.getElementsByClassName("float-end");
    var navbar = document.getElementsByTagName("nav");
    var logo = document.getElementById("logo");
    var navbarLink1 = document.getElementById("nav-text-dark");
    var navbarLink2 = document.getElementById("modern2");
    var navbarLink3 = document.getElementById("modern3");
    var gamecubeText = document.getElementsByClassName("gamecube");
}
// Get all the elements I want to change on the Home page
if(document.getElementsByTagName("body")[0].id == "home"){
    var body = document.getElementsByTagName("body")[0];
    var gamecubeText = document.getElementsByClassName("gamecube");
    var navbarLink1 = document.getElementById("nav-text-dark");
    var navbarLink2 = document.getElementById("modern2");
    var navbarLink3 = document.getElementById("modern3");
    var navbar = document.getElementsByTagName("nav");
    var logo = document.getElementById("logo");
    var cards = [document.getElementById("card1"), document.getElementById("card2"), document.getElementById("card3")];
    var specsHeader = document.getElementById("normal");
}
// Get all the elements I want to change on the Gallery page
if(document.getElementsByTagName("body")[0].id == "gallery"){
    var body = document.getElementsByTagName("body")[0];
    var gamecubeText = document.getElementsByClassName("gamecube");
    var navbarLink1 = document.getElementById("nav-text-dark");
    var navbarLink2 = document.getElementById("modern2");
    var navbarLink3 = document.getElementById("modern3");
    var navbar = document.getElementsByTagName("nav");
    var logo = document.getElementById("logo");
    var header = document.getElementById("modern-header");
}


// The way I've done this is actually trash but it works and I'd like to think that's what matters
function retroThemeHistory(){
    // If the body's id isn't retro, make it retro and change a bunch of other elements to retro ids
    if(body.id != "retro"){
        body.id = "retro";
        headerOne.id = "retro1";
        headerTwo.id = "retro2";
        navbar[0].id = "retro1";
        navbar[1].id = "retro2";
        logo.setAttribute("src", "Images/gamecube-logo-retro.png")
        navbarLink1.id = "neon1";
        navbarLink2.id = "neon2";
        navbarLink3.id = "neon3";
        
        // These for loops are just to make sure all of the side "anecdotes" or whatever they're called as well as both of the "GameCube" brand texts work
        for(i=0; i<images.length; i++){
            images[i].id="retro";
        }
        for(i=0; i<gamecubeText.length; i++){
            gamecubeText[i].id="retro-gamecube1";
        }
        // If the body IS retro, change it back to modern as well as al the elements that can be swapped to retro
    } else {
        body.id = "modern";
        headerOne.id = "modern1";
        headerTwo.id = "modern2";
        navbar[0].id = "fixed"
        navbar[1].id = "regular"
        logo.setAttribute("src", "Images/gamecube-logo.png");
        navbarLink1.id = "nav-text-dark";
        navbarLink2.id = "modern2";
        navbarLink3.id = "modern3";

        // See previous for loop comment on line 55
        for(i=0; i<images.length; i++){
            images[i].id="imageSection1";
        }
        for(i=0; i<gamecubeText.length; i++){
            gamecubeText[i].id="modern-gamecube1";
        }
    }
}

// The two functions below are the same function with different variables
// This is honestly the fastest way I could think of to do this that didn't throw any errors
// See line 1 for my apology
function retroThemeGallery(){
    if(body.id != "retro"){
        body.id = "retro";
        navbar[0].id = "retro1";
        navbar[1].id = "retro2";
        logo.setAttribute("src", "Images/gamecube-logo-retro.png")
        logo.setAttribute("style", "margin-bottom: 2.25rem;");
        navbarLink1.id = "neon1";
        navbarLink2.id = "neon2";
        navbarLink3.id = "neon3";

        for(i=0; i<gamecubeText.length; i++){
            gamecubeText[i].id="retro-gamecube1";
        }

        header.id = "neon-header"
    } else {
        body.id = "modern";
        navbar[0].id = "fixed"
        navbar[1].id = "regular"
        logo.setAttribute("src", "Images/gamecube-logo.png");
        navbarLink1.id = "nav-text-dark";
        navbarLink2.id = "modern2";
        navbarLink3.id = "modern3";
        logo.setAttribute("style", "");

        for(i=0; i<gamecubeText.length; i++){
            gamecubeText[i].id="modern-gamecube1";
        }

        header.id = "modern-header"
    }
}

function retroThemeHome(){
    if(body.id != "retroHome"){
        body.id = "retroHome";
        navbar[0].id = "retro1";
        navbar[1].id = "retro2";
        logo.setAttribute("src", "Images/gamecube-logo-retro.png")
        logo.setAttribute("style", "margin-bottom: 2.49rem;");
        navbarLink1.id = "neon1";
        navbarLink2.id = "neon2";
        navbarLink3.id = "neon3";
        specsHeader.id = "retro";
        
        for(i=0; i<gamecubeText.length; i++){
            gamecubeText[i].id="retro-gamecube1";
        }

        for(i=0; i<cards.length; i++){
            cards[i].id="brick-texture"
        }
    } else {
        body.id = "modern";
        navbar[0].id = "fixed"
        navbar[1].id = "regular"
        logo.setAttribute("src", "Images/gamecube-logo.png");
        navbarLink1.id = "nav-text-dark";
        navbarLink2.id = "modern2";
        navbarLink3.id = "modern3";
        logo.setAttribute("style", "");
        specsHeader.id = "normal";

        for(i=0; i<gamecubeText.length; i++){
            gamecubeText[i].id="modern-gamecube1";
        }

        for(i=0; i<cards.length; i++){
            cards[i].id="no-texture"
        }
    }
}