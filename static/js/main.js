function overBack() {

    document.getElementById("cImgMask").style.bottom = "2.2em";
    document.getElementById("cImgMask").style.left = "5.4em";

    document.getElementById("skills").style.border = "solid thin #219915";

    document.getElementById("skillsMask").style.display = "block";

    document.getElementById("cImgMask").style.display = "block";

    document.getElementById("cImg4").style.opacity = "1";
    document.getElementById("cImg5").style.opacity = "1";
    document.getElementById("cImg6").style.opacity = "1";
    document.getElementById("cImg7").style.opacity = "1";
    document.getElementById("cImg4").style.filter = "grayscale(0)";
    document.getElementById("cImg5").style.filter = "grayscale(0)";
    document.getElementById("cImg6").style.filter = "grayscale(0)";
    document.getElementById("cImg7").style.filter = "grayscale(0)";

    console.log("in");

}

function overFront() {

    document.getElementById("skillsMask").style.display = "block";

    document.getElementById("cImgMask").style.display = "block";

    document.getElementById("skills").style.border = "solid thin #219915";

    document.getElementById("cImgMask").style.bottom = "7em";
    document.getElementById("cImgMask").style.left = "-5.4em";

    document.getElementById("cImg1").style.opacity = "1";
    document.getElementById("cImg2").style.opacity = "1";
    document.getElementById("cImg3").style.opacity = "1";
    document.getElementById("cImg8").style.opacity = "1";
    document.getElementById("cImg1").style.filter = "grayscale(0)";
    document.getElementById("cImg2").style.filter = "grayscale(0)";
    document.getElementById("cImg3").style.filter = "grayscale(0)";
    document.getElementById("cImg8").style.filter = "grayscale(0)";

}

function out() {

    document.getElementById("skillsMask").style.display = "none";

    document.getElementById("cImgMask").style.display = "none";

    document.getElementById("skills").style.border = "thin solid rgba(128, 128, 128, 0.5)";

    document.getElementById("cImg4").style.opacity = "0.5";
    document.getElementById("cImg5").style.opacity = "0.5";
    document.getElementById("cImg6").style.opacity = "0.5";
    document.getElementById("cImg7").style.opacity = "0.5";
    document.getElementById("cImg1").style.filter = "grayscale(1)";
    document.getElementById("cImg2").style.filter = "grayscale(1)";
    document.getElementById("cImg3").style.filter = "grayscale(1)";
    document.getElementById("cImg4").style.filter = "grayscale(1)";
    document.getElementById("cImg5").style.filter = "grayscale(1)";
    document.getElementById("cImg6").style.filter = "grayscale(1)";
    document.getElementById("cImg7").style.filter = "grayscale(1)";
    document.getElementById("cImg8").style.filter = "grayscale(1)";

    console.log("out");
}

