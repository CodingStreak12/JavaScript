/* 1. Practice of rest parameters
2. Practice of callback functions.
3. Practice of bind() function */
function combine(alertSumValue, operator, ...numbers) {
  result = 0;
  if (operator === "ADD") {
    for (const values of numbers) {
      result += values;
    }
  } else if (operator === "SUBTRACT") {
    for (const values of numbers) {
      result -= values;
    }
  }

  alertSumValue(result);
}
const showResult = (messageText, result) => {
  alert(messageText + result);
};
combine(
  showResult.bind(this, "Your result after adding all numbers is: "),
  "ADD",
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10
);
combine(
  showResult.bind(this, "Your result after subtracting all number is:  "),
  "SUBTRACT",
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10
);
