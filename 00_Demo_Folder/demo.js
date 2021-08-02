/********************************************************************************************************************************* */

/* 1. Practice of rest parameters
2. Practice of callback functions.
3. Practice of bind() function */

// function combine(alertSumValue, operator, ...numbers) {
//   result = 0;
//   if (operator === "ADD") {
//     for (const values of numbers) {
//       result += values;
//     }
//   } else if (operator === "SUBTRACT") {
//     for (const values of numbers) {
//       result -= values;
//     }
//   }

//   alertSumValue(result);
// }
// const showResult = (messageText, result) => {
//   alert(messageText + result);
// };
// combine(
//   showResult.bind(this, "Your result after adding all numbers is: "),
//   "ADD",
//   1,
//   2,
//   3,
//   4,
//   5,
//   6,
//   7,
//   8,
//   9,
//   10
// );
// combine(
//   showResult.bind(this, "Your result after subtracting all number is:  "),
//   "SUBTRACT",
//   1,
//   2,
//   3,
//   4,
//   5,
//   6,
//   7,
//   8,
//   9,
//   10
// );

/*********************************************************************************************************************************** */
let text_value = document.getElementById("text-input");
console.log(text_value.value);
text_value.setAttribute("value", "2");

//Practicing how to select all elements with querySelectorAll.

const listItems = document.querySelectorAll(".list-item");
console.dir(listItems[0]);
listItems[0].textContent = "Veere";
let i = 1;
for (const listItem of listItems) {
  console.log(i + " " + listItem.textContent);
  i++;
}

// Practice classList elements how we can use toggle etc.
const selectingList = document.querySelector("ul");
const button = document.querySelector("button");
selectingList.classList.add("red-bg");
button.addEventListener("click", () => {
  selectingList.classList.toggle("invisible");
});
