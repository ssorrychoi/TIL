---
layout: post
title: 멋쟁이사자-React
subtitle: Array ES6문법
categories: [React]
tags: [React,ES6]
comments: true
---

20191023

## ES5문법 vs ES6문법

### String

#### ES5

```react
// ES5 문법
const name = "SSORRY CHOI";
const string = "My name is " + name;

console.log(string); //My name is SSORRY CHOI

// ES6 문법
const newString = `My name is ${name}`;

console.log(newString); //My name is SSORRY CHOI
```

### const / let

```js
/* const 상수에 재할당 하기 */
const name = "jacob";
name = "Choi"; // 재할당이 불가능하다. => 에러남.

console.log(name);

/* 객체 */
const person = {
  name: "Choi",
  gender: "male"
};
// 객체의 주소가 바뀐것이아니라 가르치는 값이 변한것이기 때문에 재할당이 가능하다.

person.name = "shin";
console.log(person.name);
```

### arrow 함수

```js
/* ES5 */
function add(a, b) {
  return a + b;
}

/* ES6 */
const multiply = (a, b) => {
  return a * b;
};
const mul = (a, b) => a * b;

const square = a => a * a; // 입력받을 인자가 1개면 괄호 생략 가능
const loggint = () => console.log("logging..."); // 인자가 없으면 괄호 반드시 써줘야함.

const obj = {
  name: "ssorry_choi",
  sayHello: function() {
    console.log("Wurrup!");
  },
  sayBye() {
    console.log("C ya!");
  }
};

obj.name;
obj.sayHello();
obj.sayBye();
```

### forEach 함수

```js
/* ES5 */
const colors = ["red", "green", "blue"];
const color = "black";
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
  //red
  //green
  //blue
}

/* ES6 */
colors.forEach(element => console.log(element));
//red
//green
//blue

/* 실습 */
function forEach(arr, callback) {
  if (!Array.isArray(arr)) throw new Error("배열을 넣어주세요");
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

forEach(colors, e => console.log(e));

/* 실습2 */
const images = [
  { height: 10, width: 20 },
  { height: 5, width: 5 },
  { height: 20, width: 30 }
];
const area = [];

images.forEach(element => {
  area.push(element.height * element.width);
});
console.log(area);
// 결과 : area = [200,25,600]; 이 출력되게 실습하기.
```

### map 함수

```js
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
```

### filter함수

```js
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
```

### find 함수

```js
/* ES5 */
const users = [
  { name: "ssorry" },
  { name: "mj" },
  { name: "chan" },
  { name: "shin" }
];
let user = null;
for (var i = 0; i < users.length; i++) {
  if (users[i].name === "chan") {
    user = users[i];
    break;
  }
}
console.log(user);

/* ES6 */
user = users.find(user => {
  return user.name === "shin";
});
console.log(user);

/* 실제예제 */
const data = [
  { id: 1, name: "SSORRY" },
  { id: 2, name: "MJ" },
  { id: 3, name: "YYK" },
  { id: 4, name: "CHAN" }
]; // DB에서 조회한 값

const whatWeWant = data.find(e => e.id === 1);
console.log(whatWeWant);

/* 실습1 */
const products = [
  { name: "banana", type: "fruit" },
  { name: "carrot", type: "채소" },
  { name: "apple", type: "fruit" },
  { name: "겨란", type: "유제품" },
  { name: "yogurt", type: "유제품" }
];
// product중 이름이 '겨란'인것 가져오기
const whatiwant = products.find(e => e.name === "겨란");
console.log(whatiwant);
```

### Every / Some 함수

```js
/* ES5 */
const computers = [
  { name: "mac_air", ram: 8 },
  { name: "gram", ram: 4 },
  { name: "mac_pro", ram: 16 }
];

let everyComputersAvailable = true;
let someComputersAvailable = false;

for (var i = 0; i < computers.length; i++) {
  const computer = computers[i];
  if (computer.ram < 8) {
    everyComputersAvailable = false;
    break;
  }
  if (computer.ram > 8) {
    someComputersAvailable = true;
    break;
  }
}
console.log(everyComputersAvailable);
console.log(someComputersAvailable);

/* ES6 */
everyComputersAvailable = computers.every(computer => computer.ram > 8);
someComputersAvailable = computers.some(computer => computer.ram > 8);

/* 실제 예제  */
const data = [
  { name: "choi", answer: "your last name" },
  { name: "jae", answer: "" },
  { name: "seong", answer: "your first name" }
];
const everyUserAnswered = data.every(e => e.answer.length > 0);
console.log(everyUserAnswered);

/* 실습1 */
console.log("/************* 실습 1 *************/");
const users = [
  { id: 1, submit: true },
  { id: 2, submit: false },
  { id: 3, submit: true },
  { id: 4, submit: true }
];

const everyUsersSubmit = users.every(e => e.submit == false);
console.log(everyUsersSubmit);

const someUsersSubmit = users.some(e => e.submit == true);
console.log(someUsersSubmit);

/* 실습2 */
console.log("/************* 실습 2 *************/");
function some(arr, callback) {
  return !arr.every(e => !callback(e));
}
some(users, e => e.submit);
```

### reduce 함수

```js
/* ES5 */
const numbers = [10, 20, 30];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);

/* ES6 */
sum = numbers.reduce((acc, number) => {
  return acc + number; // 0+10
  // 10+20
  // 30+30 => 60
}, 0);
// acc의 초기값이 0, => 0 10 30 60
console.log(sum);

let multiply = numbers.reduce((acc, number) => acc * number, 1);
console.log(multiply);

const strings = ["apple", " is", " good"];

const summed = strings.reduce((acc, str) => acc + str, "");
console.log(summed);

// map 함수 구현하기
let dNumbers = numbers.map(e => e * 2);
console.log(dNumbers);

dNumbers = numbers.reduce((acc, number) => {
  acc.push(number * 2);
  return acc;
}, []);
console.log(dNumbers);

/* 실제 예제 */
console.log("/************* 실제 예제 *************/");
const attendees = [
  { id: 1, type: "sitting" },
  { id: 2, type: "sitting" },
  { id: 3, type: "standing" },
  { id: 4, type: "sitting" },
  { id: 5, type: "standing" }
];
// reduce를 사용해서 서있는사람, 앉아있는 사람 수 출력
const standingPeople = attendees.reduce((acc, e) => {
  if (e.type === "standing") {
    ++acc;
  }
  return acc;
}, 0);
console.log(standingPeople);

/* 실습 2 */
console.log("/************* 실습 2 *************/");
const samples = [10, 20, 30, 20, 40, 10, 50];
// const result = unique(samples);
// [10,20,30,40,50];
function unique(arr) {
  return arr.reduce((acc, element) => {
    if (!acc.find(el => el === element)) {
      acc.push(element);
    }
    return acc;
  }, []);
}
const result = unique(samples);
console.log(result);
```

### Default_function

```js
/* ES5 */
function makeRequest(url, method) {
  if (!method) {
    method = "GET";
  }
  doSomething(url, method);
}

/* ES6 */
function makeRequest2(url, method = "GET") {
  console.log(url, method);
}
makeRequest2("hello", "POST");
makeRequest2("hello");

// 예시
const sum = (a = 0, b = 0) => a + b;
sum();
console.log(sum());
```

### Rest ...

```js
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
/* ES6 */
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
```

### Destructuring

```js
/* ES5 */
const computer = {
  model: "macbook-pro",
  year: 2017,
  price: 400
};

const model = computer.model;
const year = computer.year;
const price = computer.price;

/* ES6 */
const labtop = {
  model: "gram",
  year: 2018,
  price: 300
};
const { model, year, price } = labtop;

/* 실제 예제 */
// ES5
const tag = `<h1>This is ${labtop.model} of ${labtop.year} of ${labtop.price}</h1>`;

// ES6
const newTag = `<h1>This is ${model} of ${year} of ${price}</h1>`;
```

