var p1Counter = 0;
var p2Counter = 0;
var p3Counter = 0;

let skillImg1 = document.getElementById("skillImg1");

let menuNavs = document.querySelectorAll('#aboutMeMenu div');

menuNavs[0].className = 'selected';

let selectedId;

for(i = 0; i < menuNavs.length; i++) {
    menuNavs[i].addEventListener('click', function(nav) {
        
        document.querySelector('.selected').className ='menuNav';

        nav.target.className = 'selected';

        selectedId = document.querySelector('.selected').id;
        console.log(selectedId);

        if(selectedId === "menuNav1") menuNav1();

        else if(selectedId === "menuNav2") menuNav2();

        else if(selectedId === "menuNav3") menuNav3();

    })
}

function menuNav1() {

    skillImg1.style.opacity = "1";
    document.getElementById("skillImg2").style.opacity = "1";
    document.getElementById("skillImg3").style.opacity = "1";
    document.getElementById("skillImg4").style.opacity = "1";
    document.getElementById("skillImg5").style.opacity = "1";
    document.getElementById("skillImg6").style.opacity = "1";
    document.getElementById("skillImg7").style.opacity = "1";
    document.getElementById("skillImg8").style.opacity = "1";

    document.getElementById("skillImg1").style.filter = "grayscale(0)";
    document.getElementById("skillImg2").style.filter = "grayscale(0)";
    document.getElementById("skillImg3").style.filter = "grayscale(0)";
    document.getElementById("skillImg4").style.filter = "grayscale(0)";
    document.getElementById("skillImg5").style.filter = "grayscale(0)";
    document.getElementById("skillImg6").style.filter = "grayscale(0)";
    document.getElementById("skillImg7").style.filter = "grayscale(0)";
    document.getElementById("skillImg8").style.filter = "grayscale(0)";

    document.getElementById("skillsMask").style.display = "none";
    document.getElementById("skillImgMask").style.display = "none";
    document.getElementById("aboutMeDesc").style.display = "block";
    document.getElementById("backEndDesc").style.display = "none";
    document.getElementById("frontEndDesc").style.display = "none";

}

function menuNav2() {

    setSkillImgsGray();

    document.getElementById("skillImgMask").style.bottom = "5vh";
    document.getElementById("skillImgMask").style.left = "14vh";
    document.getElementById("skillsMask").style.border = "medium solid #fbf7ef";
    document.getElementById("skillsMask").style.display = "block";
    document.getElementById("skillImgMask").style.display = "block";
    document.getElementById("aboutMeDesc").style.display = "none";
    document.getElementById("frontEndDesc").style.display = "none";
    document.getElementById("backEndDesc").style.display = "block";
    
    setTimeout('document.getElementById("skillImg4").style.opacity = "1";', 100);
    setTimeout('document.getElementById("skillImg5").style.opacity = "1";', 150);
    setTimeout('document.getElementById("skillImg6").style.opacity = "1";', 200);
    setTimeout('document.getElementById("skillImg7").style.opacity = "1";', 250);
    setTimeout('document.getElementById("skillImg4").style.filter = "grayscale(0)";', 100);
    setTimeout('document.getElementById("skillImg5").style.filter = "grayscale(0)";', 150);
    setTimeout('document.getElementById("skillImg6").style.filter = "grayscale(0)";', 200);
    setTimeout('document.getElementById("skillImg7").style.filter = "grayscale(0)";', 250);



}

function menuNav3() {

    setSkillImgsGray();
        
    document.getElementById("skillsMask").style.display = "block";
    document.getElementById("skillImgMask").style.display = "block";
    
    document.getElementById("skillsMask").style.border = "medium solid #fbf7ef";

    document.getElementById("skillImgMask").style.bottom = "17vh";
    document.getElementById("skillImgMask").style.left = "-13.7vh";

    document.getElementById("aboutMeDesc").style.display = "none";
    document.getElementById("backEndDesc").style.display = "none";
    document.getElementById("frontEndDesc").style.display = "block";

    setTimeout('document.getElementById("skillImg8").style.opacity = "1";', 100);
    setTimeout('document.getElementById("skillImg1").style.opacity = "1";', 150);
    setTimeout('document.getElementById("skillImg2").style.opacity = "1";', 200);
    setTimeout('document.getElementById("skillImg3").style.opacity = "1";', 250);
    setTimeout('document.getElementById("skillImg8").style.filter = "grayscale(0)";', 100);
    setTimeout('document.getElementById("skillImg1").style.filter = "grayscale(0)";', 150);
    setTimeout('document.getElementById("skillImg2").style.filter = "grayscale(0)";', 200);
    setTimeout('document.getElementById("skillImg3").style.filter = "grayscale(0)";', 250);

}

function setSkillImgsGray(){

    document.getElementById("skillImg1").style.opacity = "0.5";
    document.getElementById("skillImg2").style.opacity = "0.5";
    document.getElementById("skillImg3").style.opacity = "0.5";
    document.getElementById("skillImg4").style.opacity = "0.5";
    document.getElementById("skillImg5").style.opacity = "0.5";
    document.getElementById("skillImg6").style.opacity = "0.5";
    document.getElementById("skillImg7").style.opacity = "0.5";
    document.getElementById("skillImg8").style.opacity = "0.5";

    document.getElementById("skillImg1").style.filter = "grayscale(1)";
    document.getElementById("skillImg2").style.filter = "grayscale(1)";
    document.getElementById("skillImg3").style.filter = "grayscale(1)";
    document.getElementById("skillImg4").style.filter = "grayscale(1)";
    document.getElementById("skillImg5").style.filter = "grayscale(1)";
    document.getElementById("skillImg6").style.filter = "grayscale(1)";
    document.getElementById("skillImg7").style.filter = "grayscale(1)";
    document.getElementById("skillImg8").style.filter = "grayscale(1)";

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
            
        p1Counter = 1;
       
        } else if(p1Counter == 1){
            
            document.getElementById(projectId).style.height = "26vh";
            document.getElementById(projectTextId).style.webkitMaskImage = "linear-gradient(black 16%, transparent 26%)";
            document.getElementById(projectImg).style.opacity = "0.5";

            p1Counter = 0;
        }
    }

    if(projectId == 'p2') {

        if(p2Counter == 0) {
       
            document.getElementById(projectId).style.height = "auto";
            document.getElementById('p2Img1Mask').style.display = "none";
            document.getElementById(projectImg).style.display = "block";
            document.getElementById(projectTextId).style.webkitMaskImage = "none";
   
        p2Counter = 1;
       
        } else if(p2Counter == 1){
           
            document.getElementById(projectId).style.height = "26vh";
            document.getElementById('p2Img1Mask').style.display = "block";
            document.getElementById(projectImg).style.display = "none";
            document.getElementById(projectTextId).style.webkitMaskImage = "linear-gradient(black 16%, transparent 26%)";
           
            p2Counter = 0;
        }
    }

    if(projectId == 'p3') {

        if(p3Counter == 0) {
        
            document.getElementById(projectId).style.height = "auto";
            document.getElementById(projectTextId).style.webkitMaskImage = "none";
   
        p3Counter = 1;
       
        } else if(p3Counter == 1){
           
            document.getElementById(projectId).style.height = "26vh";
            document.getElementById(projectImg).style.opacity = "0.5em";
            document.getElementById(projectTextId).style.webkitMaskImage = "linear-gradient(black 16%, transparent 26%)";
           
            p3Counter = 0;
        }
    }
}

