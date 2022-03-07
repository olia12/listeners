'use strict';

const btn = document.querySelector('#btn');
const inputText = document.querySelector('input[type=text]');
const square = document.querySelector('#square');

const changeColor = function(event) {
  square.style.backgroundColor = inputText.value;
};

btn.addEventListener('click', changeColor);