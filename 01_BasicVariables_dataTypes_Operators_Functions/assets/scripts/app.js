let currentResult = 0;
let logEntries = [];

function getUserNumberInput(){
    return parseInt(userInput.value);
}
function CreateAndWriteOutput(initialValue, operator, enteredValue){
    const description = `${initialValue} ${operator} ${enteredValue}`;
    outputResult(currentResult, description);
}
function WriteToLog(
    operator,
    prevResult,
    enteredNumber,
    outputResult
){
    const logEntry = {
        opeartor: operator,
        prevResult: prevResult,
        enteredNumber: enteredNumber,
        outputResult: outputResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
    
    
}
function add(){
    const enteredNumber = getUserNumberInput();
    const initialNumber = currentResult; 
    currentResult = currentResult + enteredNumber;
    CreateAndWriteOutput(initialNumber, "+" , enteredNumber);  
    WriteToLog("ADD", initialNumber, enteredNumber, currentResult);

}
function multiply(){
    const enteredNumber = getUserNumberInput();
    const initialNumber = currentResult;
    currentResult = currentResult * enteredNumber;
    CreateAndWriteOutput(initialNumber, "*" , enteredNumber);
    WriteToLog("MULITPLY", initialNumber, enteredNumber, currentResult);
    
}
function subtract(){
    const enteredNumber = getUserNumberInput();
    const initialNumber = currentResult;
    currentResult = currentResult - enteredNumber;
    CreateAndWriteOutput(initialNumber, "-" , enteredNumber);
    WriteToLog("SUBTRACT", initialNumber, enteredNumber, currentResult);
    
}
function divide(){
    const enteredNumber = getUserNumberInput();
    const initialNumber = currentResult;
    currentResult = currentResult / enteredNumber;
    CreateAndWriteOutput(initialNumber, "/" , enteredNumber);
    WriteToLog("DIVIDE", initialNumber, enteredNumber, currentResult);
    
}
addBtn.addEventListener('click', add);
multiplyBtn.addEventListener('click', multiply);
subtractBtn.addEventListener('click', subtract);
divideBtn.addEventListener('click', divide);





