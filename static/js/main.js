var counter = 0;

function overBack() {

    document.getElementById("cImgMask").style.bottom = "2.2em";
    document.getElementById("cImgMask").style.left = "5.4em";

    document.getElementById("skills").style.border = "solid thin #219915";

    document.getElementById("skillsMask").style.display = "block";

    document.getElementById("cImgMask").style.display = "block";

    document.getElementById("skillDesc").style.display = "block";

    document.getElementById("skillDesc").innerText = "Java, Spring, MySQL, Hibernate";

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
    
    document.getElementById("skillDesc").style.display = "block";

    document.getElementById("skills").style.border = "solid thin #219915";

    document.getElementById("cImgMask").style.bottom = "7em";
    document.getElementById("cImgMask").style.left = "-5.4em";

    document.getElementById("skillDesc").innerText = "HTML, CSS, SASS, JavaScript";


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
    
    document.getElementById("skillDesc").style.display = "none";

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

function onClickProject() {

    if(counter == 0) {
        document.getElementById("p1").style.height = "auto";
        counter = 1;
    }
    else if(counter = 1) {
        document.getElementById("p1").style.height = "5em";
        counter = 0;
    }
}

