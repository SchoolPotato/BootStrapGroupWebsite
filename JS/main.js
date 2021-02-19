let body = document.getElementsByTagName("body")[0];
let headerOne = document.getElementById("modern1");
let headerTwo = document.getElementById("modern2");
let images = document.getElementsByClassName("float-end");
let navbar = document.getElementsByTagName("nav")[0];
let logo = document.getElementById("logo");
let navbarLink1 = document.getElementById("modern1");
let navbarLink2 = document.getElementById("modern2");
let navbarLink3 = document.getElementById("modern3");


//The way I've done this is actually trash but it works and I'd like to think that's what matters
function retroTheme(){
    if(body.id != "retro"){
        body.id = "retro";
        headerOne.id = "retro1";
        headerTwo.id = "retro2";
        navbar.id = "retro";
        logo.setAttribute("src", "Images/gamecube-logo-retro.png")
        navbarLink1.id = "neon1";
        navbarLink2.id = "neon2";
        navbarLink3.id = "neon3";
        
        for(i=0; i<images.length; i++){
            images[i].id="retro";
        }
    } else {
        body.id = "modern";
        headerOne.id = "modern1";
        headerTwo.id = "modern2";
        navbar.id = "fixed"
        logo.setAttribute("src", "Images/gamecube-logo.png");
        navbarLink1.id = "modern1";
        navbarLink2.id = "modern2";
        navbarLink3.id = "modern3";

        for(i=0; i<images.length; i++){
            images[i].id="imageSection1";
        }
    }
}