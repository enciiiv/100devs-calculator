const buttons = document.querySelectorAll(".btn");
const operators = document.querySelectorAll(".op");

const equal = document.querySelector(".equal");
const dot = document.querySelector(".dot");
const currentScreen = document.querySelector(".input-curr");
const prevScreen = document.querySelector(".input-prev");

let selectedOperand;

// EVENT LISTENERS
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    currentScreen.innerHTML += btn.dataset.number;
  });
});

dot.addEventListener("click", () => {
  if (!currentScreen.innerHTML.includes(".")) {
    currentScreen.innerHTML += dot.dataset.dot;
  }
});

operators.forEach((op) => {
  op.addEventListener("click", () => {
    if (!prevScreen.innerHTML.includes(op.dataset.operand)) {
      selectedOperand = op.dataset.operand;
      currentScreen.innerHTML += op.dataset.operand;
      prevScreen.innerHTML = currentScreen.innerHTML;
      currentScreen.innerHTML = "";
    }
  });
});

equal.addEventListener("click", () => {
  calculate(
    Number(prevScreen.innerHTML.slice(0, -1)),
    selectedOperand,
    Number(currentScreen.innerHTML)
  );
});

function calculate(firstNumber, operand, secondNumber) {
  if (operand === "+") {
    prevScreen.innerHTML = "";
    currentScreen.innerHTML = firstNumber + secondNumber;
  } else if (operand === "-") {
    prevScreen.innerHTML = "";
    currentScreen.innerHTML = firstNumber - secondNumber;
  } else if (operand === "*") {
    prevScreen.innerHTML = "";
    currentScreen.innerHTML = firstNumber * secondNumber;
  } else {
    prevScreen.innerHTML = "";
    currentScreen.innerHTML = firstNumber / secondNumber;
  }
}
