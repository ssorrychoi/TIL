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
