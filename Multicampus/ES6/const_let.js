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
