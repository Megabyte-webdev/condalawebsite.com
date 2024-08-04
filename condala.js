"use strict";

// menu toggle function //

function toggle(){
var menuToggle = document.querySelector("#menu-toggle");

var locate = document.querySelector(".location");
var activeElements = document.querySelectorAll(".active-element");

for(var activated = 0; activated < activeElements.length; activated++){
          activeElements[activated].classList.toggle("active");
locate.classList.toggle("toggle");
     }
}


///  slide-show Function ///

///   control functions. ////
/*var playing=true;
function pauseslide(){
	
	playing=false;
	clearInterval(slide_interval);
}

function playslide(){
	
	playing=true;
	slide_interval=setInterval(loop,2000);
}

function control(){
	if(playing && slide_interval ){
		pauseslide();
	}else{
		playslide();
	}
}
*/


// Marketing bar slide show function //
var current=0;
function notice(){
    current;
	var notification=[
          '<p>Free delivery on all orders in Kampala.<span>Shop Now</span></p>',
          '<p>Get 10% Discount on all orders above 50k.<span>(Get Discount)</span></p>',
             '<p>Black November get items at cheaper prices<span>(Rush It)</span></p>',
            '<p>Christmas shopping rock-bottom prices<span>(Promo)</span></p>',

 '<p>Mega sales: Upto 80% discount on electronics<span>(Grab deal)</span></p>'
            
]
 
   var display_notice = document.querySelector(".marketing-bar");

   current=[current + 1]%notification.length;
 
    display_notice.innerHTML=  notification[current];


}

var marketing_bar=setInterval(notice,4000);


// show time function. ///
function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    //var session = "AM";//
    var show_time=document.getElementById("show-time")
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    
    var time = h + ":" + m + ":" + s  ;
//+ " " + session;//
    show_time.innerText = time;
    show_time.textContent = time;
     setTimeout(showTime, 1000);
}
showTime();

function seeAll(){
var see_all=document.querySelector(".see-all");
var see_all_text=document.querySelector("#see-all");
var display=document.querySelectorAll(".see-all div");
         if(see_all.className === "see-all" ){
see_all.id="smooth";
        see_all.style.display="flex";
        see_all_text.innerText="Hide"
      see_all.classList.add("deal-sections");

see_all.parentElement.scrollIntoView("#smooth");
}else{
      see_all.style.display="none";
      see_all_text.innerText="See all"
       see_all.classList.remove("deal-sections");
see_all.id="";
}
}

function showall(){
var see_all=document.querySelector("#show-all");
var display=document.querySelector(".trend-images");
         if( display.style.overflowX !== "scroll"
){
display.scrollLeft +=30;
        display.style.overflowX="scroll";
        see_all.style.color="green";
}else{
 display.scrollLeft =0;
       display.style.overflowX="hidden";
       see_all.style.color="orangered";
 }
}

function viewMore(){
var view=document.querySelector("#view-more");
var more=document.querySelector("#more");

var clear=document.querySelector(".clear");
         if(more.style.display = "none" ){
        view.style.display="none";
      more.style.display="block";
       clear.style.color="#666";
}else{
       view.style.display="flex";
    more.style.display = "none";
}
}

window.onload=()=>{
    
var trends=document.querySelectorAll(".trend-sections .heart");
trends.forEach(e=>{
e.onclick=function(evt){

this.classList.toggle("active");

}
});

}
