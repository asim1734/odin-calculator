const calcButtons = document.querySelectorAll(".calculator button");
const expressionDiv = document.querySelector(".expression");
const currentValueDiv = document.querySelector(".current-value");
currentValueDiv.textContent = "0";

let inputs = [];
let currentNumber = ""; // To keep track of the current number being entered

function init() {
  calcButtons.forEach((button) => {
    button.addEventListener("click", (event) => handleClicks(event.target.textContent));
  });
}

function handleClicks(a) {
  if (a === "=") {
    expressionDiv.textContent += currentValueDiv.textContent + '=';
    inputs.push(currentNumber);
    currentNumber = "";
    evaluate();
  } else if (Number.isInteger(+a) || a === ".") {
    currentNumber += a;
    currentValueDiv.textContent = currentNumber;
  } else if (a === "AC") {
    clear();
  } else if (a === "+/-") {
    toggleSign();
  } else if (a === "%") {
    percentage();
  } else {
    if (currentNumber !== "") {
      inputs.push(currentNumber);
      currentNumber = "";
    }
    inputs.push(a);
    expressionDiv.textContent += currentValueDiv.textContent + a;
    currentValueDiv.textContent = "";
    if (a !== '/') {
      evaluate();
    }
  }
}

function evaluate() {
  let nums = [];
  let currentNumber = "";
  let operators = [];
  for (let i = 0; i < inputs.length; i++) {
    if (Number.isInteger(+inputs[i]) || inputs[i] === '.') {
      currentNumber += inputs[i];
    } else {
      nums.push(+currentNumber);
      currentNumber = "";
      operators.push(inputs[i]);
    }
  }
  nums.push(+currentNumber);
  operate(nums, operators);
}

function operate(nums, operators) {
  while (nums.length !== 1) {
    let b = nums.pop();
    let a = nums.pop();
    let operator = operators.pop();
    let res = 0;
    if (operator === "+") {
      res = add(a, b);
    } else if (operator === "-") {
      res = subtract(a, b);
    } else if (operator === "*") {
      res = multiply(a, b);
    } else if (operator === "/") {
      res = divide(a, b);
    }
    nums.push(res);
  }
  currentValueDiv.textContent = nums.pop().toString();
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    alert("Cannot divide by zero");
    return 0;
  } else {
    return a / b;
  }
}

function clear() {
  inputs = [];
  currentNumber = "";
  currentValueDiv.textContent = "0";
  expressionDiv.textContent = "";
}

function toggleSign() {
  if (currentNumber) {
    currentNumber = (parseFloat(currentNumber) * -1).toString();
    currentValueDiv.textContent = currentNumber;
  }
}

function percentage() {
  if (currentNumber) {
    currentNumber = (parseFloat(currentNumber) / 100).toString();
    currentValueDiv.textContent = currentNumber;
  }
}

init();
