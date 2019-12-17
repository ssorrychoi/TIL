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
