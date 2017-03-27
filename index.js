'use strict';
var slider=document.getElementById('sliderList').childNodes
var index = slider.length-1
console.log(slider.length)
function slide() {
  console.log(index, slider.length)
  if(index < slider.length && index > 0) {
    slider[index].className='slide'
    console.log(slider[index]);
    index -=1;
  }
  else if (index == 0) {
    index = slider.length - 1
    console.log('reset');
    for(let img of slider) {
      img.classList.remove("slide")
    }
  }
}

function autoSlide() {
  setInterval(slide, 5000)
}
autoSlide();
