
	
var minus=document.querySelectorAll('.minus-btn');
for(var i=0; i<minus.length; i++){
minus[i].setAttribute('disabled', 'disabled');
}

var plus=document.querySelectorAll('.plus-btn');

var quantity=document.querySelectorAll('.quantity');
var price=document.querySelectorAll('.price');
var total=document.querySelector('#price');


var currentCart=document.querySelectorAll('#evenly');

var count;
var filter1;
var filter2;
var calc=0;
var text;
var div=document.querySelectorAll('.grid-item');


function init(){
var images=['iphone.jpeg','shirt.jpg','dress.jpg','gown.png','shoe.jpg','tvset.png']

	var banner=document.querySelector('#special');
	
banner.src="condala-images/"+images[0];
var products=document.querySelectorAll('.grid img');


for(var i=0; i < products.length; i++){

var url= images[i]; 

products[i].src="condala-images/"+url;
 
}

}

init();
total.onclick=function(){
Speak("Total Amount=<br/>"+this.innerHTML);
}
var cart=document.querySelectorAll('.cart');

function auto(n){

	var save1=parseFloat(Number(total.innerHTML.replace(/\₦|,/g, '')));

	total.innerHTML="";
  

if(isNaN(quantity[n].value)){
Speak("Not a Number");
quantity[n].value=quantity[n].value.replace(/[^\d.-]/g, " ");

return false;
}

if(valueCount !== 0){
minus[n].removeAttribute('disabled');
minus[n].classList.remove('disabled');
}else if(valueCount < 1){
minus[n].setAttribute('disabled', 'disabled');
minus[n].classList.add('disabled');
}
  for(var i=0; i<price.length; i++){
var valueCount=parseFloat(Number(quantity[i].value));
count=price[i].innerHTML;
filter1=parseFloat(Number(count.replace(/\₦|,/g, '')));
  filter2=parseFloat(Number(save1));
}

calc=filter2+(filter1*valueCount);

var result=new Intl.NumberFormat().format(calc);
total.innerHTML="₦"+' '+result+'.00';
} 

function add(n){
    var valueCount=parseFloat(Number(quantity[n].value));
  valueCount += 1;
  count=price[n].innerHTML;
   filter1=parseFloat(Number(count.replace(/\₦|,/g, '')));
  filter2=parseFloat(Number(total.innerHTML.replace(/\₦|,|/g, '')));
  
if(valueCount !== 0){
minus[n].removeAttribute('disabled');
minus[n].classList.remove('disabled');
}
 calc=filter2 + filter1;
quantity[n].value=valueCount;
var result=new Intl.NumberFormat().format(calc);

total.innerHTML="₦"+' '+result+'.00';

}
function subtract(n){
var valueCount=parseFloat(Number(quantity[n].value));
	
  valueCount -= 1;
  count=price[n].innerHTML;
  filter1=parseFloat(Number(count.replace(/\₦|,/g, '')));
  filter2=parseFloat(Number(total.innerHTML.replace(/\₦|,/g, '')));
  
	if(valueCount < 1){
minus[n].setAttribute('disabled', 'disabled');
minus[n].classList.add('disabled');
}

 calc=filter2 - filter1;
quantity[n].value=valueCount;
var result=new Intl.NumberFormat().format(calc);
total.innerHTML="₦"+' '+result+'.00';
}


function addToCart(elem, n){
if(elem.innerHTML !=="Remove from cart" && quantity[n].value > 0){
div[n].style.backgroundColor="#444";
div[n].style.transform="scale(.8)";
currentCart[n].style.pointerEvents="none";
elem.innerHTML="Remove from cart";
}else{
div[n].style.backgroundColor="white";
div[n].style.transform="scale(1)";
elem.innerHTML="Add to cart";
currentCart[n].style.pointerEvents="visible";

if(quantity[n].value > 0){
text="<p><center>&#128077;</center></p>Make More Bookings";
Speak(text);
}else{
text="Make A Booking";
Speak(text);
}
}
}
var modal=document.querySelector('.modal');
var close=document.querySelector('.close');
close.addEventListener("click", collapse);
function collapse(){
	
modal.className ="modal";
document.body.style.overflowY="scroll";
}
window.onkeyup=function(e) {
	if(e.keyCode === 13) {
					collapse();
}
}
function Speak(text){

var modal=document.querySelector('.modal');
var content=document.querySelector('#modal-text');

if(modal.className === "modal"){

modal.className ="modal active";
document.body.style.overflowY="hidden";
content.innerHTML=text;
}

}
