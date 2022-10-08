//calculator

const firstNum = document.querySelector('.first-num');
const secondNum = document.querySelector('.second-num');

const additionBtn = document.querySelector('#addition');
const subtractionBtn = document.querySelector('#subtraction');
const multiplicationBtn = document.querySelector('#multiplication');
const divisionBtn = document.querySelector('#division');

const output = document.querySelector('#output');

const add = () => {
  const result = Number(firstNum.value) + Number(secondNum.value);
  output.innerText = `Result: ${result}`;
};

const subtract = () => {
  const result = Number(firstNum.value) - Number(secondNum.value);
  output.innerText = `Result: ${result}`;
};

const multiply = () => {
  const result = Number(firstNum.value) * Number(secondNum.value);
  output.innerText = `Result: ${result}`;
};

const divide = () => {
  const result = Number(firstNum.value) / Number(secondNum.value);
  output.innerText = `Result: ${result}`;
};

addition.addEventListener('click', add);
subtraction.addEventListener('click', subtract);
multiplication.addEventListener('click', multiply);
division.addEventListener('click', divide);