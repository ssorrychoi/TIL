## Vue.js 학습

### Vue instance

```vue
// vm 은 ViewModel을 뜻한다.
var vm = new Vue({
	//...
	template: ...,
  el: ...,
  methods: {
		...
	},
	created:{
		...
	}
})
```

- Vue js 라이브러리를 로딩헀을 때 존재하는 Vue 생성자로 인스턴스를 생성해야 한다.

### Vue Instance LifeCycle 초기화

- 객체가 생성되거나, 소멸될때 초기화를 수행.
  - `beforecreate`
  - `created`
  - `beforemount`
  - `mounted`
  - `beforeupdate`
  - `updated`
  - `beforedestory`
  - `destroyed`

### Vue Components

- 화면을 관리하기 위한 단위

```javascript
Vue.component('사용할태그이름', {
	// ...
})
```

### Global Component

```javascript
Vue.component('my-component',{
	// ...
})
```

### Local Component

```javascript
var cmp={
	data: function(){
		return{
			//...
		}
	}
	template: '<hr>',
	methods:{ //... }
}

// local Component 등록
new Vue({
	components: {
		'my-cmp' : cmp;
	}
})
```

### 컴포넌트 통신

- 부모->자식 : Props
- 자식->부모 : Emit

#### Props

- 상위에서 하위로 값을 전달하려면 props 속성을 사용한다.

```javascript
Vue.component('child-component',{
	props:['passedData'],
	template:'<p>{{passedData}}</p>'
});

var app = new Vue({
	el:'#app',
	data:{
		message: 'Hello Vue! from Parent Component'
	}
});
```

```html
<div id="app">
	<child-component v-bind:passed-data="message"></child-component>
</div>
```



### Vue Template

- Attributes : HTML Attributes를 Vue의 변수와 연결할 때 사용. `v-bind`

```html
<div v-bind:id="dynamicId"></div>
```

- JS Expressions : `{{ }}` 안에 다음과같이 JS 표현식도 가능

```html
<div> {{ number + 1 }} </div>
```

- Directives: `v-` 접두사를 붙인 attributes. 

```html
// seen 값이 True or False에 의해 보여지는 조건문.
<p v-if="seen">Now you see me</p>

// v-bind는 없어지고 url값이랑 매핑함.
<a v-bind:href="url"></a>

// click이라는 이벤트를 받아 Vue에 넘겨준다.
<a v-on:click="doSomething"></a>
```





## ES6 for Vue

**ES6란?**

- ECMAScript 2015와 동일한 용어
- 최신 Front-End Framework인 React, Angular, Vue에서 권고하는 언어 형식
- 문법이 간결해져 코딩을 훨씬 편하게 할 수 있음

### const & let

- 블록단위 `{ }` 로 변수의 범위가 제한됨
- `const` : 한번 선언한 값에 대해 변경할 수 없음 (상수)
- `let` : 한번 선언한 값에 대해 다시 선언할 수 없음 (값 변경 가능)

***Hoisting***

- 코드의 라인 순서와 관계없이 함수 선언식과 변수를 위한 메모리 공간을 먼저 확보한다.
- `function a()` 와 `var` 는 코드의 최상단으로 Hoisted 된 것 처럼 보인다.

```javascript
var sum = 5;
sum = sum + i;

function sumAllNumbers() {
	// ...
}

var i = 10;
```

```javascript
// #1 - 함수 선언식과 변수 선언을 Hoisting
var sum;
function sumAllNumbers(){
	// ...
}
var i;

// #2 - 변수 대입 및 할당
sum = 5;
sum = sum + i;
i = 10;
```

- ES6 - `{ }` 단위로 변수의 범위가 제한됨.

  - `const` 로 지정한 값 변경 불가능
  - 하지만 객체나 배열의 내부는 변경할 수 있다.

  

### Arrow Function - 화살표 함수

- 함수를 정의할 때 `function` 이라는 키워드를 사용하지 않고 `=>` 로 대체
- 흔히 사용하는 콜백 함수의 문법을 간결화

```javascript
// ES5 함수 정의 방식
var sum = function(a,b){
	return a+b;
};

// ES6 함수 정의 방식
var sum = (a,b) => {
	return a+b;
}

sum(10,20);
```

```javascript
// ES5
var arr = ["a","b","c"];
arr.forEach(function(value){
	console.log(value);
});

// ES6
var arr = ["a","b","c"];
arr.forEach(value => console.log(value));
```



### Enhanced Object Literals

- 객체의 속성을 메서드로 사용할 때 `function` 예약어를 생략하고 생성 가능
- 객체의 속성명과 값 명이 동일할 때 아래와 같이 축약 가능

```javascript
var dictionary = {
	words: 100,
	// ES5
	lookup: function(){
		console.log("find words");
	}
	
	// ES6
	lookup(){
		console.log("find words");
	}
}

var figures = 10;
var dictionary1 = {
  figures
};
```



### Modules

- 자바스크립트 모듈 로더 라이브러리 기능을 js 언어 자체에서 지원
- 호출되기 전까지는 코드 실행과 동작을 하지 않는 특징이 있음

```javascript
// libs/math.js
export function sum(x,y){
	return x+y;
}
export var pi = 3.141593;

// main.js
import {sum} from 'libs/math.js';
sum(1,2);
```





## Veux - 상태 관리 라이브러리

### Vuex 란?

- 무수히 많은 컴포넌트의 데이터를 관리하기 위한 상태 관리 패턴이자 라이브러리
- React의 Flux 패턴에서 기인함

### Flux 란?

- MVC 패턴의 복잡한 데이터 흐름 문제를 해결하는 개발 패턴
  - Action : 화면에서 발생하는 이벤트 or 사용자의 입력
  - Dispatcher : 데이터를 변경하는 방법, 메서드
  - Model : 화면에 표시할 데이터
  - View : 사용자에게 비춰지는 화면
- MVC 패턴
  - Controller -> Model <=> View (양방향)
- Flux 패턴
  - Action -> Dispatcher -> Model -> View (단방향)

- MVC 패턴의 문제점
  - 기능 추가 및 변경에 따라 생기는 문제점을 예측할 수 없음.
  - 앱이 복잡해지면서 생기는 업데이트 루프

### Vuex 컨셉

- State :  컴포넌트 간에 공유하는 데이터 `data()`
- View : 데이터를 표시하는 화면 `template`
- Action : 사용자의 입력에 따라 데이터를 변경하는 `methods`

### Vuex 구조

컴포넌트 -> 비동기 로직 -> 동기 로직 -> 상태

### Vuex 설치하기

- `npm i vuex --save`

### Vuex 시작하기

- src 폴더 밑에 store 폴더 만들고 store.js 파일 생성

```
import Vue from 'vue'
import Vuex from 'vuex'

export const store = new Vuex.Store({
	//...
});
```

### Vuex 기술 요소

- state : `data`

```javascript
// Vue
data: {
	message: 'Hello Vue.js!'
}

//Vuex
state: {
	message: 'Hello Vue.js!'
}
```

```html
<!-- Vue -->
<p>{{ message }}</p>

<!-- Vuex -->
<p>{{ this.$store.state.message }}</p>
```

- getters : `computed`

```javascript
// store.js
state: {
	num : 10
},
getters: {
	getNumber(state){
		return state.num;
	},
	doubleNumber(state){
		return state.num * 2;
	}
}
```

```html
<p>{{ this.$store.getters.getNumber }}</p>
<p>{{ this.$store.getters.doubleNumber }}</p>
```

- mutations : `methods`

  State 값을 변경할 수 있는 유일한 방법이자 메서드

  mutations은 `commit()`으로 동작시킨다.

```javascript
// store.js
state : { num: 10 },
  mutations: {
    printNumbers(state){
      return state.num
    },
      sumNumbers(state, anotherNum){
        return state.num + anotherNum;
      }
  }
// App.vue
this.$store.commit('printNumbers');
this.$store.commit('sumNumbers',20);
```

```javascript
// store.js
state: {storeNum: 10},
  mutations: {
    modifyState(state, payload){
      console.log(payload.str);
      return state.storeNum += payload.num;
    }
  }

// App.vue
this.$store.commit('modifyState',{
  str: 'passed from payload',
  num: 20
});
```

- actions : `async methods`

  비동기 처리 로직을 선언하는 메서드. `dispatch()` 로 동작시킨다.

```javascript
// store.js
state: {
	num:10
},
mutations:{
	doubleNumber(state){
		state.num * 2;
	}
},
actions:{
	delayDoubleNumber(context){  // context로 store의 메서드와 속성을 접근할 수 있게 한다.
		context.commit('doubleNumber');
	}
}

// App.vue
this.$store.dispatch('delapyDoubleNumber');
```



## Helper

- Store에 있는 아래 4가지 속성들을 간편하게 코딩하는 방법
  - state - mapState
  - getters -> mapGetters
  - mutations -> mapMutations
  - actions -> mapActions
- 헬퍼를 사용하고자 하는 vue 파일에서 아래와 같이 헬퍼를 로딩

```javascript
// App.vue
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default{
	computed(){ ...mapState(['num']), ...mapGetters(['countedNum'])},
	methods: { ...mapMutations(['clickBtn']), ...mapActions(['asyncClickBtn'])}
}
```

- **mapState**

```javascript
// App.vue
import { mapState } from 'vuex'

computed(){
	...mapState(['num'])
	// num() {return this.$store.state.num;}
}

// store.js
state:{
	num:10;
}
```

```html
<!-- this.$store.state.num -->
<p>{{ this.num }}</p>
```

- **mapGetters**

```javascript
// App.vue
import {mapGetters} from 'vuex'

computed(){ ...mapGetters(['reverseMessage']) }

// store.js
getters: {
	reverseMessage(state){
		return state.msg.split('').regerse().join('');
	}
}
```

```html
<!-- <p>{{ this.$store.getters.reverseMessage }}</p> -->
<p>{{ this.reverseMessage }}</p>
```

- **mapMutations**

```javascript
// App.vue
import {mapMutations} from 'vuex'

methods:{
  ...mapMutations(['clickBtn']),
    authLogin(){},
    displayTable() {}
}

//store.js
mutations: {
  clickBtn(state){
    alert(state.msg);
  }
}
```

```html
<button @click="clickBtn">popup message</button>
```

- **mapActions**

```javascript
// App.vue
import { mapActions } from 'vuex'

methods:{
  ...mapActions(['delayClickBtn'])
}

//store.js
actions: {
  delayClickBtn(context){
		setTimeout(()=> context.commit('clickBtn'),2000);
  }
}
```

```html
<button @click="delayClickBtn">delay popup message</button>
```

