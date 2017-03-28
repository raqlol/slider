'use strict';
var slider=document.getElementById('sliderList').childNodes;
var mainImg = slider.length - 1;
var leftImg = 0;
var rightImg = mainImg - 1;

function autoSlide() {
  setInterval(slideControl, 15000);
}
function slideControl (){
  if (leftImg == 0) {
  console.log("first if");
    slide();
    console.log(leftImg,mainImg,rightImg);
    leftImg = slider.length - 1;
    mainImg -=1;
    rightImg -=1;
  }
  else if (rightImg == 0){
    console.log("ELSE 1!!");
    console.log(leftImg,mainImg,rightImg);
    slide()
    leftImg -= 1;
    mainImg -= 1;
    rightImg = slider.length - 1;
  }
  else if (mainImg == 0){
    console.log("ELSE 2!!");
    console.log(leftImg,mainImg,rightImg);
    slide()
    leftImg -= 1;
    mainImg = slider.length - 1;
    rightImg -= 1;
  }
  else {
    console.log("ELSE 3!");
    console.log(leftImg,mainImg,rightImg);
    slide()
    leftImg -= 1;
    mainImg -=1;
    rightImg -=1;
  }
};
function slide() {
  console.log('STARTING');
  console.log("right img " + rightImg);
  console.log(slider[rightImg]);
  console.log("main img " + mainImg);
  console.log(slider[mainImg]);
  console.log("left img " + leftImg);
  console.log(slider[leftImg]);
  slider[rightImg].classList.remove("start-right");
  slider[mainImg].classList.add("slide-left");
  setTimeout(function(){slider[leftImg].classList.add("start-right");console.log("MOVE BACK TO RIGHT WORKS")}, 1000);
  setTimeout(function(){slider[leftImg].classList.remove("slide-left");console.log("MOVE BACK TO RIGHT complete?")}, 2000);
}
autoSlide();
