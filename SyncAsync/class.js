// 추상화 : 세상엔 많은 정보들이 있지만 나에게 필요한 정보만 남기는 것
// => 지하철 노선도

class Car {
  // 원본 , 틀
  constructor(car) {
    this.name = car.name;
    this.price = car.price;
    this.year = car.year; //이런식으로 정보를 뽑아오는 것을 "추상화" 라고 한다.
    console.log("생성되었음 (Car의 생성자)");
  }
  drive() {
    console.log("와다다다ㅏ");
  }
}
const avante = new Car({
  name: "avante",
  price: 2500,
  year: 2019
});
avante.drive(); // 와다다다ㅏ
const morning = new Car({
  name: "morning",
  price: 1200,
  year: 2019
});
morning.drive(); // 와다다다ㅏ
// "차"라는 틀은 같지만 안의 속성은 다른것 => 객체지향 프로그래밍

class SuperCar extends Car {
  constructor(options) {
    super(options); // 규칙!! 부모 constructor를 실행시킴.
    console.log("슈퍼카가 제작됨 (Supercar의 생성자)");
  }
  booster() {
    console.log("Brrrrrrrrrrrr");
  }
}

const bentley = new SuperCar({
  name: "벤틀리",
  price: 2000000,
  year: 2018
});
bentley.drive();
bentley.booster();

/*************************** 실습 1 - RPG게임 개발 중... ***************************/
class Monster {
  constructor(options) {
    this.name = options.name;
    this.health = 100;
    console.log(
      "************************MONSTER가 생성되었습니다.************************"
    );
  }
}

const 피카츄 = new Monster({
  name: "피카츄"
});
console.log(피카츄);

class Dinosaur extends Monster {
  constructor(params) {
    super(params);
  }
  bodyShoot(toMonster) {
    toMonster.health -= 10;
    console.log(toMonster.name, "의 남은 HEALTH : ");
    console.log(toMonster.health);
  }
}

const tirano = new Dinosaur({
  name: "티라노",
  health: 100
});
tirano.bodyShoot(피카츄);
