

var _coverflow = null,
_prevLink= null,
_nextLink= null;
var _albums= [];
var images=['condala-images/valueclient.jpg', 'condala-images/jtccustomer.jpeg' ,'condala-images/istockphoto-1307392582-170667a.jpg' , 'img5.jpg' , 'img7.jpg','condala-images/jtccustomer.jpeg'];
var OFFSET= 110;

var BASE_ZINDEX= 5,
MAX_ZINDEX= 40,
index;


var bar= null;
var updateCell;
var allCells=null,
       Interval;

function createCell(){

 
for(var i=0; i < _albums.length; i++){
var anchor = document.createElement( 'a' ); anchor.className = 'cell'; 
bar.appendChild( anchor ); 

 }

 allCells=document.querySelectorAll(".cell")


allCells.forEach((e, index) => { 
e.addEventListener('click', () => {

gotoSlide(index);

}); 

});

}
updateCell=function (){
for(var i=0; i < _albums.length; i++){
allCells[i].classList.remove("active");

} allCells=document.querySelectorAll(".cell");
if(index === _albums.length){
 correct=0;
allCells[correct].classList.add("active");
}else{

allCells[index].classList.add("active");
}
};


function get(selector){
   return document.querySelector(selector);
};


function render(){

 for(var i=0; i < _albums.length; i++){

if( i < index){
_albums[i].style.transform= "translateX(-"+(OFFSET * (index - i) ) + "% )";
_albums[i].style.zIndex= BASE_ZINDEX + i;
}

 if( i ===  index){
_albums[i].style.transform= "translateX(0%)";
_albums[i].style.zIndex= MAX_ZINDEX;

}

if( i >  index ){
_albums[i].style.transform= "translateX("+(OFFSET*( i - index ) )+"%)";
_albums[i].style.zIndex= BASE_ZINDEX +(_albums.length - i);
}

if( i ===  index - 2 || i ===  index - 1 || i ===  index - 1 ||  i ===  index ||  i ===  index + 1 || i ===  index + 2 ){
_albums[i].style.display= "flex";
}else{
_albums[i].style.display= "none";
}
} //end loop

slideDisplay();

renderInfinite();
};// end render//

function slideDisplay(){

if( index === 0){
_albums[_albums.length-1].style.display= "flex";
}else if( index === _albums.length-1){
_albums[[_albums.length]%_albums.length].style.display= "flex";
}

}
function renderInfinite(){
if( index === 0){
index=_albums.length;
_albums[_albums.length-1].style.transform= "translateX(-"+(OFFSET )+"%)";

}else if( index === _albums.length-1){
index =_albums.length-1;
_albums[[_albums.length]%_albums.length].style.transform= "translateX("+(OFFSET )+"%)";


}


if( index === _albums.length){
index=_albums.length;
_albums[[_albums.length+1]%_albums.length].style.transform= "translateX("+(OFFSET )+"%)";
_albums[[_albums.length+1]%_albums.length].style.display= "flex";
}
}// end renderInfinite//


function gotoSlide(n){
pauseslide();
index = n;
render();
updateCell();

}

function flowLeft(){
pauseslide();
if( index ){

index -= 1;

gotoSlide(index);

}

};// end flowright//


function flowRight(){
pauseslide();

if(  _albums.length){

index =[index + 1]%_albums.length;

gotoSlide(index);

}

};// end flowright//

function autoSlide(){
index =[index + 1]%_albums.length;
render();

updateCell();
}

///   control functions. ////

var playing=true;
function pauseslide(){
	
	playing=false;
	clearInterval(Interval);
}

function playslide(){
	
	playing=true;
	Interval=setInterval(autoSlide,2000);
}
/*
function control(){

	if(playing && Interval ){
		pauseslide();
	}else{
		playslide();
	}
}
*/
function Scan(e){

pauseslide();


}

function EndScan(e){
playslide();
}

function keyDown( event ){
switch(event.code){

case 37: flowRight(); break;

case 39: flowLeft(); break;

}
};// end keydowm


function registerEvents(){
_prevLink.addEventListener("click", flowLeft, false);
_nextLink.addEventListener("click", flowRight, false);
document.addEventListener("keydown",keyDown, false);
_coverflow.addEventListener("touchstart", touchStart); 
_coverflow.addEventListener("mouseover", Scan);
_coverflow.addEventListener("mouseout", EndScan);
};//registerEvents//


function init(){

_albums=Array.prototype.slice.call(document.querySelectorAll( '.slide' ));

index=  1;

_coverflow= get('.slider');
_prevLink= get('.prev');
_nextLink= get('.next');
bar= get('.link');
for(var i=0; i < _albums.length; i++){
var url= images[i]; 

_albums[i].style.backgroundImage="url("+ url +")";
 
}



registerEvents();
render();


createCell();
updateCell();


};//end init//

//init();
var myVar;

function showPage(){
document.querySelector('#loader').style.display="none";
init();
Interval=setInterval(autoSlide, 3000);


}


window.addEventListener("load", function(){
myVar= setTimeout(showPage, 3000);
}) ;

// Touch function //
 function touchStart(evt) { 

var startTime = (new Date()).getTime(); var startX = evt.changedTouches[0].pageX;

_coverflow.addEventListener("touchmove", function(evt) {


var diffX = evt.changedTouches[0].pageX - startX;

 var elapsed = (new Date()).getTime() - startTime; 

 if( elapsed < 100 && Math.abs(diffX) > 30 ) { 
( diffX < 0 ) ? flowRight() : flowLeft();

 } 
}); 
}
