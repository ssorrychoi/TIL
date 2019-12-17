// 원래 문법
const name = "SSORRY CHOI";
const string = "My name is " + name;

// ES6 문법
const newString = `My name is ${name}`;

console.log(string); //My name is SSORRY CHOI
console.log(newString); //My name is SSORRY CHOI

/* const는 상수를 선언할때, let은 변수를 선언할때 사용한다. */
