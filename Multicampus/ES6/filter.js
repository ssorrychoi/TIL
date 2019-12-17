/* ES5 */
const products = [
  { name: "banana", type: "fruit" },
  { name: "carrot", type: "vegetable" },
  { name: "apple", type: "fruit" },
  { name: "watermelon", type: "vegetable" },
  { name: "yogurt", type: "milk" }
];

const fruits = [];
for (var i = 0; i < products.length; i++) {
  if (products[i].type == "fruit") {
    fruits.push(products[i]);
  }
}

/* ES6 */
const 유제품 = products.filter(element => {
  return element.type === "milk";
});
console.log(유제품);

/* 실제예제 */
const comments = [
  { id: 1, author: "Jacob", contents: "Blah" },
  { id: 2, author: "Shinn", contents: "North" },
  { id: 3, author: "yvv.v", contents: "Norich" },
  { id: 4, author: "chann", contents: "Suwon" }
];

const 김신 = comments.filter(comment => comment.author === "Shinn");
console.log(김신);

/* 실습1 */
console.log("/************* 실습 1 *************/");
const numbers = [1, 2, 54, 6, 7, 3, 23, 86, 314, 467, 123, 4678];
// filter를 사용해서 10~100사이의 숫자만 뽑기
const result1 = numbers.filter(guess => {
  if (guess >= 10 && guess < 100) return true;
  return false;
});
console.log(result1);

const result2 = numbers.filter(guess =>
  guess >= 10 && guess < 100 ? true : false
);
console.log(result2);

/* 실습2 */
console.log("/************* 실습 2 *************/");
// filter를 사용해서 reject함수 만들기
// reject함수는 filter와 완전 반대 작용을 하는 함수

function reject(arr, callback) {
  return arr.filter(e => !callback(e));
}
const result3 = reject(numbers, number => number > 10);
console.log(result3);
// reject(numbers,number=>number>10); => [1,2,6,7,3];
