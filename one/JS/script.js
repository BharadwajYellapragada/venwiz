const slider = document.querySelector('.slider');

const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
const indicatorParents = document.querySelector('.controls ul');

var sectionIndex=0;

function setIndex(){
  document.querySelector('.controls .selected').classList.remove('selected');
  slider.style.transform = 'translate('+ (sectionIndex)*-25 +'%)';
}

function take_me_to(slideNum){
  sectionIndex = slideNum;
  setIndex();
  indicatorParents.children[sectionIndex].classList.add('selected');
}


document.querySelectorAll('.controls li').forEach(function(indicator, inde){
  indicator.addEventListener('click',function(){
    sectionIndex=inde;
    setIndex();
    indicator.classList.add('selected');
  });
});

leftArrow.addEventListener('click',function(){
  sectionIndex = (sectionIndex > 0) ? sectionIndex -1 : 3; //replace 3 with 0 for no circling
  setIndex();
  indicatorParents.children[sectionIndex].classList.add('selected');
});
rightArrow.addEventListener('click',function(){
  sectionIndex = (sectionIndex < 3) ? sectionIndex +1 : 0; //replace 0 with 3 for no circling
  setIndex();
  indicatorParents.children[sectionIndex].classList.add('selected');
});