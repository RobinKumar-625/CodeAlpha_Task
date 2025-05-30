var mySong = document.getElementById("mySong");
var icon = document.getElementById("icon");

icon.onclick = function(){
   if(mySong.paused){
    mySong.play();
    icon.src = "Image/pause.png";
   }else{
    
        mySong.pause();
        icon.src = "Image/play.png";
    }
   }
   
   