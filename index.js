'use strict';
//slider images
var slider=document.getElementById('sliderList').childNodes;
//image progression
var mainImg = slider.length - 1;
var leftImg = 0;
var rightImg = mainImg - 1;
//auto progression
var autoInterval = setInterval(slideControl, 5000);
console.log('running auto slider - horray!')
//controls for changing the images
function setDefaultProg() {
  leftImg -= 1;
  mainImg -=1;
  rightImg -=1;
}
function setLeftReset() {
  leftImg = slider.length - 1;
  mainImg -=1;
  rightImg -=1;
}
function setMainReset() {
  leftImg -= 1;
  mainImg = slider.length - 1;
  rightImg -= 1;
}
function setRightReset() {
  leftImg -= 1;
  mainImg -= 1;
  rightImg = slider.length - 1;
}
//left right button actions
function moveLeft() {
  console.log('noting yet')
}
function moveRight() {
  clearInterval(autoInterval);
  console.log('you stopped the auto slider ... the fate of this slider is in your hands')
  if (leftImg == 0){
    instantSlide();
    setLeftReset()
  }
  else if (rightImg == 0){
    instantSlide()
    setRightReset()
  }
  else if (mainImg == 0){
    instantSlide()
    setMainReset()
  }
  else {
    instantSlide()
    setDefaultProg()
  }
  autoInterval = setInterval(slideControl, 10000);
}
//auto play slide actions
function slideControl (){
  console.log('auto slider is running again')
  if (leftImg == 0) {
    slide();
    setLeftReset()
  }
  else if (rightImg == 0){
    slide()
    setRightReset()
  }
  else if (mainImg == 0){
    slide()
    setMainReset()
  }
  else {
    slide()
    setDefaultProg();
  }
};
// slide speeds for auto and manual
function slide() {
  slider[rightImg].classList.remove("start-right");
  slider[mainImg].classList.add("slide-left");
  setTimeout(function(){slider[leftImg].classList.add("start-right");}, 100);
  setTimeout(function(){slider[leftImg].classList.remove("slide-left");}, 1000);
}
function instantSlide() {
  slider[rightImg].classList.remove("start-right");
  slider[mainImg].classList.add("slide-left");
  slider[leftImg].classList.add("start-right");
  slider[leftImg].classList.remove("slide-left");
}
