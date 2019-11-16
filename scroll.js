openScroll = function(){
  var animate=document.getElementById("scrollDisplay");
//for the right scroll
var rightscroll = document.getElementById("right");
var back = document.getElementById("back");


var timer = setInterval(function () {
   var toTheLeft=getComputedStyle(rightscroll).left;
  

   if(parseFloat(toTheLeft)>=680){
    toTheLeft=1075+"px";
    clearInterval(timer);
   }
  
  
   rightscroll.style.left=(parseFloat(toTheLeft)+10)+"px";
    console.log("backgroundzie is"+parseFloat(toTheLeft));
   
     back.style.width=(parseFloat(toTheLeft)+10)+"px";


 }, 0)
}


