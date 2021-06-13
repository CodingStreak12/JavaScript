let currentResult = 0;
function getUserNumberInput(){
    return parseInt(userInput.value);
}
function add(){
    const enteredNumber = getUserNumberInput();
    const description = currentResult + " + " + enteredNumber;
    
    currentResult = currentResult + enteredNumber;
    outputResult(currentResult, description);

}
function multiply(){
    const enteredNumber = getUserNumberInput();
    const description = currentResult + " * " + enteredNumber;
    currentResult = currentResult * enteredNumber;
    outputResult(currentResult, description);
}
function subtract(){
    const enteredNumber = getUserNumberInput();
    const description = currentResult + " - " + enteredNumber;
    currentResult = currentResult - enteredNumber;
    outputResult(currentResult, description);
}
function divide(){
    const enteredNumber = getUserNumberInput();
    const description = currentResult + " / " + enteredNumber;
    currentResult = currentResult / enteredNumber;
    outputResult(currentResult, description);
}
addBtn.addEventListener('click', add);
multiplyBtn.addEventListener('click', multiply);
subtractBtn.addEventListener('click', subtract);
divideBtn.addEventListener('click', divide);





