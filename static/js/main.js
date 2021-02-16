var p1Counter = 0;
var p2Counter = 0;
var p3Counter = 0;

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
            
            document.getElementById(projectId).style.height = "45vh";
            
            document.getElementById(projectTextId).style.webkitMaskImage = "linear-gradient(to bottom, black 48%, transparent 96%)";
           
            document.getElementById(projectImg).style.opacity = "0.5";

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
           
            document.getElementById(projectId).style.height = "45vh";

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
           
            document.getElementById(projectId).style.height = "45vh";

            document.getElementById(projectImg).style.opacity = "0.5em";
           
            document.getElementById(projectTextId).style.webkitMaskImage = "linear-gradient(to bottom, black 48%, transparent 96%)";
           
            p3Counter = 0;
        }
    }

}

