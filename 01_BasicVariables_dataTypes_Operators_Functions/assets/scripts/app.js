let currentResult = 0;
let logEntries = [];

function getUserNumberInput() {
  return parseInt(userInput.value);
}
function CreateAndWriteOutput(initialValue, operator, enteredValue) {
  const description = `${initialValue} ${operator} ${enteredValue}`;
  outputResult(currentResult, description);
}

function WriteToLog(operator, prevResult, enteredNumber, outputResult) {
  const logEntry = {
    opeartor: operator,
    prevResult: prevResult,
    enteredNumber: enteredNumber,
    outputResult: outputResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}
function calculateResult(calculationType) {
  if (
    calculationType !== "ADD" &&
    calculationType !== "SUBTRACT" &&
    calculationType !== "MULTIPLY" &&
    calculationType !== "DIVIDE"
  ) {
    return console.log("Working");
  }
  const enteredNumber = getUserNumberInput();
  const initialNumber = currentResult;
  let mathOperator;
  if (calculationType === "ADD") {
    currentResult = currentResult + enteredNumber;
    mathOperator = "+";
  } else if (calculationType === "SUBTRACT") {
    currentResult = currentResult - enteredNumber;
    mathOperator = "-";
  } else if (calculationType === "MULTIPLY") {
    currentResult = currentResult * enteredNumber;
    mathOperator = "*";
  } else if (calculationType === "DIVIDE") {
    currentResult = currentResult / enteredNumber;
    mathOperator = "/";
  }
  CreateAndWriteOutput(initialNumber, mathOperator, enteredNumber);
  WriteToLog(calculationType, initialNumber, enteredNumber, currentResult);
}
function add() {
  calculateResult("ADD");
}

function multiply() {
  calculateResult("MULTIPLY");
}
function subtract() {
  calculateResult("SUBTRACT");
}
function divide() {
  calculateResult("DIVIDE");
}
addBtn.addEventListener("click", add);
multiplyBtn.addEventListener("click", multiply);
subtractBtn.addEventListener("click", subtract);
divideBtn.addEventListener("click", divide);
