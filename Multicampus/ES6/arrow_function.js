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
