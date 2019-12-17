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
