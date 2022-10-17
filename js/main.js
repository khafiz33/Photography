const texts = document.getElementById('texts');
const right = document.getElementById('right');

const texts2 = document.getElementById('texts_2');
const right2 = document.getElementById('right_2');

const texts3 = document.getElementById('texts_3');
const right3 = document.getElementById('right_3');

const text = document.querySelectorAll('#texts p');
const text2 = document.querySelectorAll('#texts_2 p');
const text3 = document.querySelectorAll('#texts_3 p');

let idx = 0;
let idx2 = 0;
let idx3 = 0;

function changeImage() {
  if (idx > text.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = text.length - 1
  }
  texts.style.transform = `translateX(${-idx * 305}px)`;
}

right.addEventListener('click', function change() {
  idx++;
  changeImage()
});

function changeImage2() {
  if (idx2 > text2.length - 1) {
    idx2 = 0;
  } else if (idx2 < 0) {
    idx2 = text2.length - 1
  }
  texts2.style.transform = `translateX(${-idx2 * 305}px)`;
}

right2.addEventListener('click', function change() {
  idx2++;
  changeImage2()
});

function changeImage3() {
  if (idx3 > text3.length - 1) {
    idx3 = 0;
  } else if (idx3 < 0) {
    idx3 = text3.length - 1
  }
  texts3.style.transform = `translateX(${-idx3 * 305}px)`;
}

right3.addEventListener('click', function change() {
  idx3++;
  changeImage3()
});

var elBtn = document.querySelector('.btn');
var elHeader = document.querySelector('.header');

elBtn.addEventListener('click', (evt) => {
  elHeader.classList.toggle('header--active')
});