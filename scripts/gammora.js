function toggle(){

var menu=document.querySelector(".menu-toggle");
var nav=document.querySelector(".nav");
var icon=document.querySelector(".icon");


if(!(menu.className === "menu-toggle active" && nav.className === "nav responsive")){
	
menu.className = "menu-toggle active";

nav.className = "nav responsive";

icon.className = "icon active";

}else{
	
menu.className = "menu-toggle";

nav.className = "nav";

icon.className = "icon";

}

}

window.onload=()=>{


function get(selector){
   return document.querySelector(selector);
};


 var product = document.querySelectorAll(".reviews > div");
    product.forEach(e=> {
        e.onclick = function() {
            //alert("Alhamdulillah")
            Modal(this)
        }
    })

    function Modal(elem) {


        var modal = get('.modalPage');

        var content = modal.querySelector('.modal-content');
        var text = modal.querySelector('.modal-text');
        var image = elem.querySelector('img');
        var target = new String(image.getAttribute('src'));
        if (modal.className === "modalPage") {
            modal.className = "modalPage animate";
            content.style.backgroundImage = "url("+target+")";


            text.innerHTML = elem.querySelector('div').innerHTML
        }

    }

 var whatsappBtn=get("#wa-widget-send-button");
var whatsappCloseBtn=get(".wa-chat-bubble-close-btn");
var whatsappBox=get(".wa-chat-box")


var whatsappMsgBtn=get(".wa-chat-box-content-send-btn");


whatsappMsgBtn.onclick=function(){
var phoneNumber="2348106244890",
messageText="Welcome to our Whatsapp chat, How can we be of service?";

this.href=`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${messageText?messageText:""}`;


}

whatsappBtn.onclick=function(evt){


if(whatsappBox.style.display !=="block"){
whatsappBox.style.display="block";
}

if(evt.target.id =="wa-chat-bubble-close-btn"){

whatsappBox.style.display="none";
}

}

	var Responsive =function(callback){ 
	window.setTimeout(callback, 1000/(60*60))
	}; 
	var body = document.documentElement || document.body;

var Form=get(".head-main .form");

var gammora=get(".gammora");
function product(){
gammora.style.left="calc(50% - "+gammora.offsetWidth/2+"px)";
gammora.style.top="calc(50% - "+gammora.offsetHeight/2+"px)";	


gammora.onmouseover=productImageHover;
//Form.onmouseover=productImageHover;
function productImageHover(){
	//alert(this.offsetWidth+"  ,"+this.offsetHeight);
	if (body.offsetWidth > 800) {
		
	gammora.style.transform="translate(-"+[gammora.offsetWidth-80]+"px,-"+[Math.ceil(gammora.offsetHeight/4)]+"px) scale(.3)";
	}else if (body.offsetWidth > 700 && body.offsetWidth < 800) {

	gammora.style.transform="translate(-"+[gammora.offsetWidth-50]+"px,-"+[Math.ceil(gammora.offsetHeight/3)]+"px) scale(.3)";
	}else{
		
		gammora.style.transform="translate(-"+[gammora.offsetWidth-50]+"px,-"+[Math.ceil(gammora.offsetHeight/3)]+"px) scale(.3)";
	}
	 
    

}
gammora.parentElement.onmouseleave=function(){
   gammora.style.transform="";

    }
	
	Responsive(product);
}
Responsive(product);

Form.onclick=function(){
    
    
	
		if (body.offsetWidth < 700) {
			this.classList.add("active")
           this.parentElement.parentElement.style.height="300px";
            
        } 
    
    this.onmouseleave=function(){
    this.parentElement.parentElement.style.height="";

            this.classList.remove("active")

    }
}


var modal=document.querySelector('.modal');
var close=document.querySelector('.close');
var ok=document.querySelector('.ok');
close.addEventListener("click", collapse);
ok.addEventListener("click", collapse);
function collapse(){
	
modal.className ="modal";
document.body.style.overflowY="scroll";
}
window.onkeyup=function(e) {
	if(e.keyCode === 13) {
					collapse();
}
}
function Speak(text, func){

var modal=document.querySelector('.modal');
var content=document.querySelector('#modal-text');

if(modal.className === "modal"){

modal.className ="modal active";
document.body.style.overflowY="hidden";
content.innerHTML=text;
}
modal.onclick=(evt)=>{
if(evt.target.id == "ok"){

func();
}else if(evt.target.id == "close"){

return;
}
}
}




var btn=document.querySelectorAll(".testimony-btn a")[1];
btn.onclick=()=>{

var share=get(".share-testimony");
if(share.style.display !== "flex"){
share.setAttribute("style","display: flex; flex-direction: column;align-items: center");
}else{
share.setAttribute("style","display: none")
}
}



function generateProfile(e){
var profile=e.querySelector(".profile");
var profile_name=e.querySelector("h3").innerText;

profile.innerText=profile_name.slice(0,1)
var r,g,b;
r=Math.random()*265 + 0;
g=Math.random()*265 + 0;
b=Math.random()*265 + 0;
profile.style.background="rgb("+r+","+g+","+b+")";

};
function ReadMore(e){
var save;
    var div=e.querySelector('p');
    if(div.innerText.length > 100){
      var c=document.createElement('p');
         
        c.className="more";
        save=div.innerText.slice(100);
        c.textContent=save
        div.innerHTML= div.innerText.slice(0,100)
        div.innerText +="..."
        div.appendChild(c)
		div.onmouseover=function(){
			this.style.cursor="pointer";
		}
        div.onclick=function(){
			this.parentElement.style.flex="1 1 80%";
            if(div.querySelector('.more')){
            let getMore=div.querySelector('.more').textContent
            div.innerText =div.innerText.slice(0,div.innerText.length-3)+getMore;
div.removeChild(div.querySelector('.more'))
            
            }else{
				this.parentElement.style.flex="";
  var c=document.createElement('p');
        c.className="more";
        save=div.innerText.slice(100);
        c.textContent=save
        div.innerText= div.innerText.slice(0,100)
        div.innerText +="..."
        div.appendChild(c)
            }
        }
    }
}



var testimony=document.querySelectorAll(".testimonies > div");
testimony.forEach(e=>{
generateProfile(e);
ReadMore(e);

});





 var showAll = get('.show-all');
var container = get('.testimonies');
    showAll.onclick = function() {

        var testimony = document.querySelectorAll('.testimonies > div');

        container.style.maxHeight = [container.offsetHeight + 1000]+"px";
//container.style.maxHeight="max-content";
       // this.style.display = "none";
	   isElementInViewport(testimony[testimony.length-1]) ? this.style.display = "none": this.style.display = "block";

    }
	
	function isElementInViewport(el) {

 var rect = el.getBoundingClientRect(); return ( (rect.top <= 0 && rect.bottom > 100) || (rect.bottom < (window.innerHeight || document.documentElement.clientHeight) && rect.top <= (window.innerHeight || document.documentElement.clientHeight)) || (rect.top >= 0 && rect.bottom < (window.innerHeight || document.documentElement.clientHeight)) );
 }
 
 
 var  review=get(".share-testimony textarea");


var  uploadBtn=get("#upload-review");
uploadBtn.onclick=UploadReview;
 function UploadReview() {

var testimony=get(".testimonies");
var name=get(".share-testimony input#name"),
country=get(".share-testimony input#country"), review=get(".share-testimony textarea");

var div=document.createElement('div'),
      section=document.createElement('section') ,
figure=document.createElement('figure'),
h3=document.createElement('h3'),

p=document.createElement('p');
if(name.value !== "" || review.value !== ""){

figure.className="profile";
h3.textContent=name.value;
p.textContent= review.value;

var span1=document.createElement('span'),span2=document.createElement('span');


span1.className="location";
      
span2.className="time";

span1.textContent=country.value;

function getTime(){ 
var date=new Date();
 var day=date.getUTCDate(); 
var month=date.getUTCMonth()+1; 
var year=date.getUTCFullYear(); 

var h=date.getHours(); 
var m=date.getMinutes(); 

if(h<10){
var h="0"+date.getHours(); 
}else{
var h=date.getHours(); 
}
if(m<10){
var h="0"+date.getHours(); 
}else{
var m=date.getMinutes(); 
}
return day+"/"+month+"/"+year+"("+h+":"+m+")"
}
span2.textContent=getTime();





section.appendChild(figure);
section.appendChild(h3);
div.appendChild(section);
div.appendChild(p);
div.appendChild(span1);
div.appendChild(span2);
generateProfile(div);
ReadMore(div);


let firstNode=document.querySelectorAll(".testimonies div")[0];
//testimony.appendChild(div);


function done(){

name.value=""
country.value=""
review.value=""

get('body').scrollTop= 1200;
	document.documentElement.scrollTop= 1000;
firstNode.parentNode.insertBefore(div, firstNode)
setTimeout(function(){
get("#testimony-sub-text b").textContent= (parseInt(get("#testimony-sub-text b").textContent) + 1) + " ";
}, 1500);
}

Speak("uploading...", done)

}else{
Speak("Can't upload: please fill in the requirements");

}
}

var faqs = document.querySelectorAll('.faqs > div');
faqs.forEach(e=>{
	var faqTag=e.querySelector('h4');
	faqTag.onclick=function(){
		
		this.parentElement.classList.toggle("active");
		
	};
	
	
	
	
	 let rotoLeft = document.querySelector(".bar.left .progress");
 
 let rotoRight = document.querySelector(".bar.right .progress");
 let Right = document.querySelector(".bar.right ");
 let bar = document.querySelectorAll(".bar");
 const numb = document.querySelector(".number");
window.addEventListener("scroll", () => {
let max = document.body.scrollHeight - innerHeight;
let calc=((pageYOffset / max) * 100)

let deg=((pageYOffset / max) * 180);

if(deg<=180){
	for(let i=0; i<bar.length; i++){
	bar[i].setAttribute("style","clip: rect(0px, 100px, 100px, 50px)");
}
rotoLeft.style.transform=`rotate(${deg}deg)`;
Right.style.transform=`rotate(${deg}deg)`;
rotoRight.style.transform=`rotate(${(deg)}deg)`;
}else{
rotoLeft.style.transform=`rotate(${180}deg)`;
for(let i=0; i<bar.length; i++){
	bar[i].setAttribute("style","clip: rect(0px, 100px, 100px, 49px)");
}
	rotoRight.style.transform=`rotate(${(180)}deg)`;
Right.style.transform=`rotate(${180}deg)`;

}


});
});

function LoadTestimonies() {

var testimony=get(".testimonies");


reviewDb.forEach((data)=>{

var div=document.createElement('div'),
      section=document.createElement('section') ,
figure=document.createElement('figure'),
h3=document.createElement('h3'),

p=document.createElement('p');


figure.className="profile";
h3.textContent=data.name;
p.textContent= data.review;

var span1=document.createElement('span'),span2=document.createElement('span');


span1.className="location";
      
span2.className="time";

span1.textContent=data.country;


span2.textContent=data.time;





section.appendChild(figure);
section.appendChild(h3);
div.appendChild(section);
div.appendChild(p);
div.appendChild(span1);
div.appendChild(span2);
generateProfile(div);
ReadMore(div);

testimony.appendChild(div);

get("#testimony-sub-text b").textContent= parseInt(reviewDb.length) + " ";
});



}

LoadTestimonies() ;

/*
fetch("review.js")



.then((response) => {



return response.text();



})


.then((text) => {


alert(text);

}).catch(err=>
alert(err))
            

 navigator.getBattery().then(function(battery) {
 // Battery level is between 0 and 1, so we multiply it by 100 to get in percents
 alert("Battery level: " + battery.level * 100 + "%");
});
        

if (navigator.geolocation) {
alert("Geolocation supported!");

navigator.geolocation.getCurrentPosition(getLocation);



}
else {
alert("Sorry, no Geolocation support!");
return;
}

*/
}
/*
function getLocation(position) {
alert("active " + position)
var latitude = position.coords.latitude;
var longitude = position.coords.longitude;

alert( "You are at lat: " + latitude + ", long: " + longitude);

}
*/
