/* ES5 */
const numbers = [1, 2, 3];
const dNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  dNumbers.push(numbers[i] + 2);
}

/* ES6 */
const tNumbers = numbers.map(number => number * 3);
console.log(tNumbers);

const data = [3, 5, 7, 9];

// data.map(e => {
//   return <h1>{e}</h1>;
// });

/*
 <h1>3</h1>
 <h1>5</h1>
 <h1>7</h1>
 <h1>9</h1>
 */

/* 실습1 */
console.log("/************* 실습 1 *************/");
const images = [
  { height: 10, width: 20 },
  { height: 5, width: 5 },
  { height: 20, width: 30 }
];
const heights = images.map(e => {
  return e.height;
});
console.log(heights);
//[10,5,20];   => height값들만 나오게

/* 실습2  plunk (arr,key)*/
console.log("/************* 실습 2 *************/");

function pluck(arr, key) {
  return arr.map(e => e[key]);
}
const result = pluck(images, "width");
console.log(result);
const result1 = pluck(images, "height");
console.log(result1);
