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
function calculate(operation) {
  const enteredNumber = getUserNumberInput();
  const initialNumber = currentResult;
  if (operation === "ADD") {
    currentResult = currentResult + enteredNumber;
    mathOperator = "+";
  } else if (operation === "SUBTRACT") {
    currentResult = currentResult - enteredNumber;
    mathOperator = "-";
  } else if (operation === "MULTIPLY") {
    currentResult = currentResult * enteredNumber;
    mathOperator = "*";
  } else if (operation === "DIVIDE") {
    currentResult = currentResult / enteredNumber;
    mathOperator = "/";
  }
  CreateAndWriteOutput(initialNumber, mathOperator, enteredNumber);
  WriteToLog(operation, initialNumber, enteredNumber, currentResult);
}
addBtn.addEventListener("click", calculate.bind(this, "ADD"));
multiplyBtn.addEventListener("click", calculate.bind(this, "MULTIPLY"));
subtractBtn.addEventListener("click", calculate.bind(this, "SUBTRACT"));
divideBtn.addEventListener("click", calculate.bind(this, "DIVIDE"));
