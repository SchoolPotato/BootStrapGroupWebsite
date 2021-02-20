//Get all the elements I want to change on the History page
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
//Get all the elements I want to change on the Home page
if(document.getElementsByTagName("body")[0].id == "home"){
    var body = document.getElementsByTagName("body")[0];
    var gamecubeText1 = document.getElementById("modern-gamecube1");
    var gamecubeText2 = document.getElementById("modern-gamecube2");
    var navbar = document.getElementsByTagName("nav")[0];
    var footer = document.getElementsByTagName("nav")[1];
    var logo = document.getElementById("logo");
    var navbarLink1 = document.getElementById("nav-text-dark");
    var navbarLink2 = document.getElementById("modern2");
    var navbarLink3 = document.getElementById("modern3");
}
//Get all the elements I want to change on the Gallery page
if(document.getElementsByTagName("body")[0].id == "gallery"){
    var body = document.getElementsByTagName("body")[0];
    var gamecubeText1 = document.getElementById("modern-gamecube1");
    var gamecubeText2 = document.getElementById("modern-gamecube2");
    var navbar = document.getElementsByTagName("nav")[0];
    var footer = document.getElementsByTagName("nav")[1];
    var logo = document.getElementById("logo");
    var navbarLink1 = document.getElementById("nav-text-dark");
    var navbarLink2 = document.getElementById("modern2");
    var navbarLink3 = document.getElementById("modern3");
}


//The way I've done this is actually trash but it works and I'd like to think that's what matters
function retroThemeHistory(){
    //Toggle between retro ids and modern ids
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
        
        for(i=0; i<images.length; i++){
            images[i].id="retro";
        }
        for(i=0; i<gamecubeText.length; i++){
            gamecubeText[i].id="retro-gamecube1";
        }
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

        for(i=0; i<images.length; i++){
            images[i].id="imageSection1";
        }
        for(i=0; i<gamecubeText.length; i++){
            gamecubeText[i].id="modern-gamecube1";
        }
    }
}