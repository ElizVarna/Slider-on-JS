//добавить плавное перелистывание
/*const MENU_LINKS = document.querySelectorAll('.header__menu-link');

MENU_LINKS.forEach(link => link.addEventListener('click', event => {
    event.preventDefault();
    document.querySelector(event.target.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
}));*/


const entities = [
  {
    cityText: 'Rostov-on-Don \n LCD admiral',
    img: 'interier-slider_1.jpg',
    areaText: '81 m2',
    repairText: '3.5 months',
    costText: 'Upon request'
  },
  {
    cityText: 'Sochchi \t     \nThieves nThieves',
    img: 'interier-slider_2.jpg',
    areaText: '105 m2',
    repairText: '4 months',
    costText: 'Upon request'
  },
  {
    cityText: 'Rostov-on-Don \n Patriotic',
    img: 'interier-slider_3.jpg',
    areaText: '93 m2',
    repairText: '3 months ',
    costText: 'Upon request'
  }
]
 
const cityText = document.querySelector('.admiral__text');
const img = document.querySelector('.interier__slider_img');
const areaText = document.querySelector('.area__text');
const repairText = document.querySelector('.time__text');
const costText = document.querySelector('.cost__text');


const setEntity = (index) => {
  cityText.innerText = entities[index].cityText;
  img.src = `assets/${entities[index].img}`;
  areaText.innerText = entities[index].areaText;
  repairText.innerText = entities[index].repairText;
  costText.innerText = entities[index].costText;
  
}

const prev = document.querySelector('.slider__arrow-prev');
const next = document.querySelector('.slider__arrow-next');

const pointSelector = document.querySelectorAll('.slider__dot');
const citySelector = document.querySelectorAll('.city__selector');


let currentIndex = 0


function setFillOpacity(currentIndex) {
  pointSelector.forEach(function(item, index) {
    if (currentIndex !== index ) {
      item.classList.remove('slider__dot_active') 
    } else {
      item.classList.add('slider__dot_active')
    }
  })
};

function setChosenCity(currentIndex) {
  citySelector.forEach(function(item, index) {
    if (currentIndex !== index ) {
      item.classList.remove('city__selector_active')
    } else {
      item.classList.add('city__selector_active')
    }
  })
};

pointSelector.forEach((item, index) => {
  item.addEventListener("click", function() {
      currentIndex = index ;
      setEntity(currentIndex);
      setFillOpacity(currentIndex);
      setChosenCity(currentIndex);
  })
});

citySelector.forEach((item, index) => {
  item.addEventListener("click", function() {
      currentIndex = index ;
      setEntity(currentIndex);
      setFillOpacity(currentIndex);
      setChosenCity(currentIndex);
  })
});

prev.addEventListener('click', () => {
  if(currentIndex <= 0){
   currentIndex = entities.length - 1;
  } else {
  currentIndex -= 1; 
  }
  setEntity(currentIndex);
  setFillOpacity(currentIndex);
  setChosenCity(currentIndex);
});

next.addEventListener('click', () => {
  if(currentIndex > entities.length - 2){
  currentIndex = 0;
  } else {
  currentIndex += 1; 
  }
  setEntity(currentIndex);
  setFillOpacity(currentIndex);
  setChosenCity(currentIndex);
});
