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
