var p1Counter = 0;
var p2Counter = 0;
var p3Counter = 0;


function overBack() {

    document.getElementById("cImgMask").style.bottom = "2.2em";
    document.getElementById("cImgMask").style.left = "5.4em";

    document.getElementById("skills").style.border = "solid 2px #033649";

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

    document.getElementById("skills").style.border = "solid 2px #033649";

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

    document.getElementById("skills").style.border = "2px solid rgba(128, 128, 128, 0.5)";

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

function onClickProject(project, projectText, projectImg) {
    var projectId = project.id;
    var projectTextId = projectText.id;
    var projectImg = projectImg.id;



    if(projectId == 'p1') {

        if(p1Counter == 0) {
        
            document.getElementById(projectId).style.height = "auto";
    
            document.getElementById(projectTextId).style.webkitMaskImage = "none";

            document.getElementById(projectImg).style.opacity = "1";
            
            document.getElementById("s3Accent2").style.display = "none";

        p1Counter = 1;
       
        } else if(p1Counter == 1){
            
            document.getElementById(projectId).style.height = "15em";
            
            document.getElementById(projectTextId).style.webkitMaskImage = "linear-gradient(to bottom, black 48%, transparent 96%)";
           
            document.getElementById(projectImg).style.opacity = "0.5";

            document.getElementById("s3Accent2").style.display = "block";


            p1Counter = 0;
        }
    }

    if(projectId == 'p2') {

        if(p2Counter == 0) {
       
            document.getElementById(projectId).style.height = "auto";

            document.getElementById(projectImg).style.opacity = "1";
    
            document.getElementById(projectTextId).style.webkitMaskImage = "none";
   
        p2Counter = 1;
       
        } else if(p2Counter == 1){
           
            document.getElementById(projectId).style.height = "15em";

            document.getElementById(projectImg).style.opacity = "0.5";

           
            document.getElementById(projectTextId).style.webkitMaskImage = "linear-gradient(to bottom, black 48%, transparent 96%)";
           
            p2Counter = 0;
        }
    }

    if(projectId == 'p3') {

        if(p3Counter == 0) {
        
            document.getElementById(projectId).style.height = "auto";

            document.getElementById(projectImg).style.opacity = "1";
    
            document.getElementById(projectTextId).style.webkitMaskImage = "none";
   
        p3Counter = 1;
       
        } else if(p3Counter == 1){
           
            document.getElementById(projectId).style.height = "15em";

            document.getElementById(projectImg).style.opacity = "0.5em";
           
            document.getElementById(projectTextId).style.webkitMaskImage = "linear-gradient(to bottom, black 48%, transparent 96%)";
           
            p3Counter = 0;
        }
    }

}

