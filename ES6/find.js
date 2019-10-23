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
