'use strict';

const btn = document.querySelector('#btn');
const inputText = document.querySelector('input[type=text]');
const square = document.querySelector('#square');
const range = document.querySelector('input[type=range]');
const eBtn = document.querySelector('#e_btn');
const circle = document.querySelector('#circle');

const changeColor = function(event) {
  square.style.backgroundColor = inputText.value;
};

const changeCircle = function(event) {
  circle.style.width = event.target.value + '%';
  circle.style.height = event.target.value + '%';
};

eBtn.style.display = 'none';
btn.addEventListener('click', changeColor);   
range.addEventListener('input', changeCircle);   

