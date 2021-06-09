let currentResult = 0;
function add(num1, num2){
    const result = num1 + num2;
    return result;

}

calculationDescription =  currentResult + " + " + add(4, 2);
currentResult = add(4,2);



outputResult(currentResult, calculationDescription);