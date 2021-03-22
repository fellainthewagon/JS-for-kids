let firstInput = document.getElementById("first-input");
let secondInput = document.getElementById("second-input");

let onCalculatorBtn = function (event) {
  let btnOperation = event.target;
  let result;
  if (btnOperation.value == "+") {
    result = Number(firstInput.value) + Number(secondInput.value);
  } else if (btnOperation.value == "-") {
    result = Number(firstInput.value) - Number(secondInput.value);
  } else if (btnOperation.value == "*") {
    result = Number(firstInput.value) * Number(secondInput.value);
  } else if (btnOperation.value == "/") {
    result = Number(firstInput.value) / Number(secondInput.value);
  }
  alert(result);
};

let addListenerForBtnById = function (id) {
  let btn = document.getElementById(id);
  btn.addEventListener("click", onCalculatorBtn);
};

//let operationBtnIds = ["plus-btn", "minus-btn", "multiply-btn", "devide-btn"];
// или:

let allOperationButtons = document.querySelectorAll(".button");

for (let i = 0; i < allOperationButtons.length; i++) {
  addListenerForBtnById(allOperationButtons[i].id);
}
