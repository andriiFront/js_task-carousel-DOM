'use strict';

const width = 312;
let position = 0;
const list = document.querySelector('.carousel__list');
const nextBtn = document.querySelector('.carousel__btn_next');
const prevBtn = document.querySelector('.carousel__btn_prev');
const dots = [...document.querySelectorAll('.carousel__dot')];

nextBtn.addEventListener('click', slideNext);
prevBtn.addEventListener('click', slidePrev);

function slideNext() {
  position -= width;
  position = Math.max(position, -936);
  setDot(position);
  list.style.marginLeft = position + 'px';
}

function slidePrev() {
  position += width;
  position = Math.min(position, 0);
  setDot(position);
  list.style.marginLeft = position + 'px';
}

function setDot(pos) {
  dots.forEach(dot => {
    dot.className = 'carousel__dot';
  });

  switch (pos) {
    case 0:
      dots[0].className = 'carousel__dot carousel__dot_active';
      break;
    case -312:
      dots[1].className = 'carousel__dot carousel__dot_active';
      break;
    case -624:
      dots[2].className = 'carousel__dot carousel__dot_active';
      break;
    case -936:
      dots[3].className = 'carousel__dot carousel__dot_active';
      break;
  }
}
