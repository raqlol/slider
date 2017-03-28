'use strict';
var slider=document.getElementById('sliderList').childNodes;
var mainImg = slider.length - 1;
var leftImg = 0;
var rightImg = mainImg - 1;

function moveLeft(){
  console.log('WORKS');
}
function moveRight() {
  console.log('WORKS');
}
function autoSlide() {
  setInterval(slideControl, 3000);
}
function slideControl (){
  if (leftImg == 0) {
    slide();
    leftImg = slider.length - 1;
    mainImg -=1;
    rightImg -=1;
  }
  else if (rightImg == 0){
    slide()
    leftImg -= 1;
    mainImg -= 1;
    rightImg = slider.length - 1;
  }
  else if (mainImg == 0){
    slide()
    leftImg -= 1;
    mainImg = slider.length - 1;
    rightImg -= 1;
  }
  else {
    slide()
    leftImg -= 1;
    mainImg -=1;
    rightImg -=1;
  }
};
function slide() {
  slider[rightImg].classList.remove("start-right");
  slider[mainImg].classList.add("slide-left");
  setTimeout(function(){slider[leftImg].classList.add("start-right");}, 1000);
  setTimeout(function(){slider[leftImg].classList.remove("slide-left");}, 2000);
}
autoSlide();
