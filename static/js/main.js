var p1Counter = 0;
var p2Counter = 0;
var p3Counter = 0;


function overBack() {

    document.getElementById("cImgMask").style.bottom = "2.2em";
    document.getElementById("cImgMask").style.left = "5.4em";

    document.getElementById("skills").style.border = "solid thin #ff9f1c";

    document.getElementById("skillsMask").style.display = "block";

    document.getElementById("cImgMask").style.display = "block";

    document.getElementById("s2Desc").style.display = "block";

    document.getElementById("s2Desc").innerText = "Java, Spring, MySQL, Hibernate";

    setTimeout('document.getElementById("cImg4").style.opacity = "1";', 100);
    setTimeout('document.getElementById("cImg5").style.opacity = "1";', 150);
    setTimeout('document.getElementById("cImg6").style.opacity = "1";', 200);
    setTimeout('document.getElementById("cImg7").style.opacity = "1";', 250);
    setTimeout('document.getElementById("cImg4").style.filter = "grayscale(0)";', 100);
    setTimeout('document.getElementById("cImg5").style.filter = "grayscale(0)";', 150);
    setTimeout('document.getElementById("cImg6").style.filter = "grayscale(0)";', 200);
    setTimeout('document.getElementById("cImg7").style.filter = "grayscale(0)";', 250);

}

function overFront() {

    document.getElementById("skillsMask").style.display = "block";

    document.getElementById("cImgMask").style.display = "block";
    
    document.getElementById("s2Desc").style.display = "block";

    document.getElementById("skills").style.border = "solid thin #ff9f1c";

    document.getElementById("cImgMask").style.bottom = "7em";
    document.getElementById("cImgMask").style.left = "-5.4em";

    document.getElementById("s2Desc").innerText = "HTML, CSS, SASS, JavaScript";


    setTimeout('document.getElementById("cImg8").style.opacity = "1";', 100);
    setTimeout('document.getElementById("cImg1").style.opacity = "1";', 150);
    setTimeout('document.getElementById("cImg2").style.opacity = "1";', 200);
    setTimeout('document.getElementById("cImg3").style.opacity = "1";', 250);
    setTimeout('document.getElementById("cImg8").style.filter = "grayscale(0)";', 100);
    setTimeout('document.getElementById("cImg1").style.filter = "grayscale(0)";', 150);
    setTimeout('document.getElementById("cImg2").style.filter = "grayscale(0)";', 200);
    setTimeout('document.getElementById("cImg3").style.filter = "grayscale(0)";', 250);

}

function out() {

    document.getElementById("skillsMask").style.display = "none";

    document.getElementById("cImgMask").style.display = "none";
    
    document.getElementById("s2Desc").style.display = "none";

    document.getElementById("skills").style.border = "thin solid rgba(128, 128, 128, 0.5)";

    document.getElementById("cImg1").style.opacity = "0.5";
    document.getElementById("cImg2").style.opacity = "0.5";
    document.getElementById("cImg3").style.opacity = "0.5";
    document.getElementById("cImg4").style.opacity = "0.5";
    document.getElementById("cImg5").style.opacity = "0.5";
    document.getElementById("cImg6").style.opacity = "0.5";
    document.getElementById("cImg7").style.opacity = "0.5";
    document.getElementById("cImg8").style.opacity = "0.5";
    document.getElementById("cImg1").style.filter = "grayscale(1)";
    document.getElementById("cImg2").style.filter = "grayscale(1)";
    document.getElementById("cImg3").style.filter = "grayscale(1)";
    document.getElementById("cImg4").style.filter = "grayscale(1)";
    document.getElementById("cImg5").style.filter = "grayscale(1)";
    document.getElementById("cImg6").style.filter = "grayscale(1)";
    document.getElementById("cImg7").style.filter = "grayscale(1)";
    document.getElementById("cImg8").style.filter = "grayscale(1)";

}

function onClickProject(project, projectText) {
    var projectId = project.id;
    var projectTextId = projectText.id;

    if(p1Counter == 0) {

        document.getElementById(projectId).style.height = "auto";
    
        document.getElementById(projectTextId).style.webkitMaskImage = "none";
   
        p1Counter = 1;
        /*
        switch(projectId) {
            case 0: 
                projectId= "p1" ;
                p1Counter = 1;
                break;
            case 1: 
                projectId = "p2" ;
                p2Counter = 1;
                break;
            case 2: 
                projectId = "p3" ;
                p3Counter = 1;
                break;           
        }
        */

    }
    else if(p1Counter = 1) {
        document.getElementById(projectId).style.height = "5em";
        document.getElementById(projectTextId).style.webkitMaskImage = "linear-gradient(to bottom, black 20%, transparent 54%)";
        p1Counter = 0;
    }
}

