/* ES5 */
const addNumbers = (a, b, c, d, e) => {
  const numbers = [a, b, c, d, e];
  return numbers.reduce((acc, num) => (acc += num), 0);
};

const addAll = (...numbers) => {
  return numbers.reduce((acc, num) => (acc += num), 0);
};
console.log(addAll(1, 2, 3));

const defaultColors = ["red", "blue", "yellow"];
const addedColors = ["orange", "green"];

const sum = defaultColors.concat(addedColors);
const es6sum = [...defaultColors, ...addedColors];
const justsum = [defaultColors, addedColors];
console.log(sum);
console.log(es6sum);
console.log(justsum);

/* 실제 예시 */
function logging() {
  //   console.log(arguments);
  //   console.log(...arguments);
  [a, b, ...rest] = arguments;
  console.log(rest);
}
logging(1, 2, 3, 4);
