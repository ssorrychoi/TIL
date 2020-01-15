### Vue instance

- Vue.js 라이버리를 로딩했을 때 존재하는 Vue 생성자로 인스턴스를 생성해야 한다.

```
// vm은 ViewModel을 뜻한다.
var vm = new Vue ({
...
})
var vm = new Vue({
  template: ... ,
  el: ... ,
  methods: {
  
  },
  created: {
  
  }
  // ...
})
var MyComponent = Vue.extend({
  // template, el, methods 와 같은 options 정의
template: `<p> Hello {{message}} </p>`,
  data : {
    message: 'Vue'
  }
  // ...
})

// 위에서 정의한 내용 (template, data, ...) 을 기본으로 하는 컴포넌트 생성
var myComponentInstance = new MyComponent()
<!doctype html>
<html lang="en">
  <head>
    <title>Vue Sample</title>
  </head>
  <body>
    <div id="app">
      {{message}}
    </div>
    <script src="https://unpkg.com/vue@2.3.3"></script>
    <script>
      new Vue({
        el:'#app',
        data:{
          message: 'Hello Vue.js!'
        },
        beforeCreate:function(){
          console.log("beforeCreated");
        },
        created: function(){
          console.log("created");
        },
        mounted: function(){
          console.log("mounted");
          // 이 부분에서 updated가 발생하면서 "updated"를 출력하게됨.
          this.message="wurrup!";
        },
        updated: function(){
          console.log("updated");
        }
      })
    </script>
  </body>
</html>
```

- 화면에 비춰지는 뷰의 단위를 쪼개어 재활용이 가능한 형태로 관리하는 것 => **컴포넌트**

  ```
  <!doctype html>
  <html lang="en">
    <head>
      <title>Vue Sample</title>
    </head>
    <body>
      <div id="app">
        <button>Parent Component</button>
        <my-component></my-component>
      </div>
  
      <script src="https://unpkg.com/vue@2.3.3"></script>
      <script>
        Vue.component('my-component',{
          template: '<div>A custom component!</div>'
        });
  
        new Vue({
          el: '#app'
        })
      </script>
    </body>
  </html>
  ```

  ```
  Vue.component('my-component',{
  ...
  })
  ```

  ```
  var cmp = {
    data: function (){
      return {
      ...
      };
    }
    template: '<hr>',
    methonds:{}
  }
  
  // 아래 Vue 인스턴스에서만 활용할 수 있는 로컬 컴포넌트 등록
  new Vue ({
    components: {
      'my-cmp' : cmp
    }
  })
  ```

  ```
  <!doctype html>
  <html lang="en">
    <head>
      <title>Vue Sample</title>
    </head>
    <body>
      <div id="app">
        <button>Parent Component</button>
        <my-component></my-component>
        <my-local-component></my-local-component>
      </div>
  
      <script src="https://unpkg.com/vue@2.3.3"></script>
      <script>
        //Global Component
        Vue.component('my-component',{
          template: '<div>A Global component!</div>'
        });
  
        //Local Component
        var cmp = {
          template: '<div>A Local component!</div>'
        }
  
        new Vue({
          el: '#app',
          components:{
            // 태크명 : 컴포넌트 내용
            'my-local-component':cmp
          }
        })
      </script>
    </body>
  </html>
  ```

  ```
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport"
            content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Vue Components Sample</title>
    </head>
    <body>
      <!--    Parent Component-->
      <div id="app">
        <header>
          <h3>{{message}}</h3>
        </header>
        <todo-item></todo-item>
        <!--        실습 #3 - 컴포넌트 등록을 위한 `todo-footer` 태그 추가-->
        <todo-footer></todo-footer>
      </div>
  
      <script src="https://unpkg.com/vue@2.3.3"></script>
      <script src="./app.js"></script>
    </body>
  </html>
  ```

  ```
  // Global Component
  Vue.component('todo-item', {
    template: '<p>This is a child component</p>'
  });
  
  // 실습 #1 - `todo-footer` 컴포넌트 전역 등록
  // <p>This is another child global component</p> 를 template 으로 갖는 컴포넌트를 등록해보세요.
  Vue.component('todo-footer',{
    template: '<p>This is another child global component</p>'
  })
  
  var cmp = {
    template: '<p>This is another child local component</p>'
  }
  
  var app = new Vue({
    el: '#app',
    data: {
      message : 'This is a parent component'
    },
  
    // 실습 #2 - `todo-footer` 컴포넌트 지역 등록
    // <p>This is another child local component</p> 를 template 으로 갖는 컴포넌트를 등록해보세요.
    components:{
      'todo-footer':cmp
    }
  });
  ```

  ```
  Vue.component('child-component',{
    props: ['passedData'],
    template: '<p>{{passedData}}</p>'
  });
  var app = new Vue({
    el:'#app',
    data:{
      message:'Hello Vue! from Parent Component',
    }
  });
  ```

  ```
  <div id="app">
    <child-component v-bind:passed-data="message"></child-component>
  </div>
  ```

  ```
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Vue Props Sample</title>
    </head>
    <body>
      <div id="app">
        <!-- passedData (props) equals to be passed-data  -->
        <!-- read the bind property from right to left (from bottom to top in app.js)-->
        <child-component v-bind:passed-data="message"></child-component>
  
        <!-- #할일 3 -->
        <!-- sibling-component 등록 -->
        <!--    props 명 = 상위 컴포넌트 데이터 -->
        <sibling-component v-bind:ssorry="anotherMessage"></sibling-component>
      </div>
      <script src="https://unpkg.com/vue@2.3.3"></script>
      <script src="./app.js"></script>
    </body>
  </html>
  ```

  ```
  // 할일 #1
  // sibling-component 를 이름으로 갖는 새로운 컴포넌트를 아래에 등록해보세요.
  // options : template, props
  
  Vue.component('sibling-component',{
    props:['ssorry'],
    template:'<p>{{ssorry}}</p>'
  })
  
  Vue.component('child-component', {
    props: ['passedData'],
    template: '<p>{{passedData}}</p>'
  });
  
  var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue! passed from Parent Component',
      anotherMessage: 'Wurrup dude!'
      // 할일 #2
      // data 속성을 한개 더 지정하고 (예, anotherMessage) 임의의 문자열을 값으로 대입해보세요.
      // 새로 지정한 data 속성을 위 sibling-component 에 props 로 전달합니다.
    }
  });
  ```

  ```
  // Vue Root Instance 전에 꼭 등록 순서가 중요.
  export const eventBus = new Vue();
  new Vue({
  ...
  })
  ```

  ```
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Vue Components-Props-For Sample</title>
    </head>
    <body>
      <!-- Parent Component -->
      <div id="app">
        <!-- Child Component -->
        <todo-item v-bind:todo="todo" v-for="todo in Todos"></todo-item>
  
        <!-- 할일 #3 -->
        <!-- todo-list 컴포넌트 등록 -->
        <todo-list v-bind:languages="languages" v-for="languages in Languages"></todo-list>
      </div>
      <script src="https://unpkg.com/vue@2.3.3"></script>
      <script src="./app.js"></script>
    </body>
  </html>
  ```

  ```
  // 할일 #2
  // 아래에 todo-list 컴포넌트를 구현
  Vue.component('todo-list', {
    props: ['languages'],
    template: '<p>{{ languages.text }}</p>'
  });
  
  Vue.component('todo-item', {
    props: ['todo'],
    template: '<p>{{ todo.text }}</p>'
  });
  
  var app = new Vue({
    el: '#app',
    data: {
      Todos: [
        { id: 0, text: 'Learn Vue.js' },
        { id: 1, text: 'Learn Components' },
        { id: 2, text: 'Learn Props' },
        { id: 3, text: 'Learn For Loop' }
      ],
      // 할일 #1
      // 배열 안에 python, c++, java, objective-c 를 값으로 갖는
      // Languages 프로퍼티를 추가하여 위에 제작한 todo-list 컴포넌트에 전달하고,
      // 배열 값을 모두 for loop 로 출력하세요.
      Languages: [
        {id: 0, text: 'Python'},
        {id: 1, text: 'C++'},
        {id: 2, text: 'java'},
        {id: 3, text: 'object-c'}
      ]
    }
  });
  ```

  - Vue를 이용한  SPA를 제작할 때 유용한 라우팅 라이브러리

  - Vue 코어 라이브러리 외에 Router 라이브러리를 공식 지원하고 있고 아래와 같이 설치한다.

    `npm install vue-router --save`

    - Vue 라이터는 기본적으로 RootUrl /#/{RouterName} 의 구조이다.

      `example.com/#/user`

      ### Nested Routers

      - 라이터로 화면 이동시 Nested Routers 를 이용하여 여러개의 컴포넌트를 동시에 랜더링 할 수 있다.
      - 랜더링 되는 컴포넌트의 구조는 가장 큰 상위의 컴포넌트가 하위의 컴포넌트를 포함하는 `Parent-Child` 형태와 같다.

      

      **주의사항**

      - *Vue의 Template에는 최상위 태그가 1개만 있어야 랜더가 가능하다.*

      - *아래는 Template의 HTML 태그를 정의할 때 주의해야 하는 Vue의 성질이다.*

        

        ## Quiz 4.

        index.html

        ```
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Vue Nested Router Sample</title>
          </head>
          <body>
            <div id="app">
              <h1>Hello Vue Nested Router!</h1>
              <p>
                <router-link to="/login">Go to Login</router-link>
                <router-link to="/list">Go to List</router-link>
                <router-link to="/main">Go to Main</router-link>
              </p>
              <router-view></router-view>
            </div>
        
            <script src="http://unpkg.com/vue@2.3.3"></script>
            /* vue-router CDN */ 
            <script src="https://unpkg.com/vue-router/dist/vue-router.js"></script> 
        
            <script src="./app.js"></script>
          </body>
        </html>
        ```

        ```
        var Login = {
          template: `
            <div>
              Login Section
              <router-view>
                <form action="/" method="post">
                  <div>
                      <label for="account">E-mail : </label>
                      <input type="email" id="account">
                  </div>
                  <div>
                      <label for="password">Password : </label>
                      <input type="password" id="password">
                  </div>
                </form>
              </router-view>
            </div>
          `,
        };
        var LoginForm = {
          template: `
            <form action="/" method="post">
              <div>
                  <label for="account">E-mail : </label>
                  <input type="email" id="account">
              </div>
              <div>
                  <label for="password">Password : </label>
                  <input type="password" id="password">
              </div>
            </form>
          `,
        };
        var List = {
          template: `
            <div>
              List Section
              <router-view></router-view>
            </div>
          `,
        };
        var ListItems = {
          template: `
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          `,
        };
        
        var Main = {
          template:`
          <div>
            Main Section
            <router-view></router-view>
           </div>
          `
        }
        var MainItems = {
          template:`
            <p>This is main Container</p>
          `
        }
        var routes = [
          {
            path: '/login',
            component: Login,
            children: [
              { path: '', component: LoginForm }
            ]
          },
          {
            path: '/list',
            component: List,
            children: [
              { path: '', component: ListItems }
            ]
          },
          {
            path:'/main',
            component: Main,
            children:[
              {path:'', component: MainItems}
            ]
          }
        ];
        
        var router = new VueRouter({
          routes
        });
        
        var app = new Vue({
          router
        }).$mount('#app');
        ```

        - HTML Attributes를 Vue의 변수와 연결할 때는 `v-bind`를 이용.

          ### JS Expressions

          - `{{}}` 안에 다음과 같이 javascript 표현식도 가능하다.

            ```
            <div>{{number+1}}</div>
            <div>{{message.split('').reverse().join('')}}</div>
            ```

            - `v-` 접두사를 붙인 attributes로, javascript 표현식으로 값을 나타내는게 일반적이다. `:` 을 붙여 인자를 받아 취급할 수 있다.

              ```
              <p v-if="seen">Now you see me</p>
              <a v-bind:href="url"></a>
              <a v-on:click="doSomething"></a>
              ```

              - 화면에 표시되는 텍스트의 형식을 편하게 바꿀 수 있도록 고안된 기능이며, `|` 를 이용하여 여러개의 필터를 적용할 수 있다.

                ```
                {{message | capitalize}}
                ```

                - Vue의 가장 기본적인 데이터 바인딩 체계는 Mustache `{{}}` 를 따른다.

                  ```
                  <span>Message : {{msg}}</span>
                  <span>This will never change: {{* msg }}</span>
                  <div id="item-{{id}}"></div>
                  ```

                  - `{{}}` 를 이용한 데이터 바인딩을 할 때 자바스크립트 표현식을 사용할 수 있다.

                  - Vue 에 내장된 Filter를 `{{}}` 안에 사용할 수 있다. 여러개 필터 체인 가능

                    ```
                    {{message | capitalize | uncapitalize}}
                    ```

                    - Vue에서 제공하는 특별한 Attributes 이며 `-v` 의 prefix(접두사)를 갖는다.

                    - 자바스크립트 표현식, filter 모두 적용된다.

                      ```
                      <p v-if="login">Hello!</p>
                      <a v-on:click="doSomething"></a>
                      ```

                      - CSS스타일링을 위해서 class 를 아래 두가지 방법으로 추가가 가능하다.

                        - `class="{{className}}"`

                        - `v-bind:class`

                        - 주의할점 : 두가지 방법을 함께 사용하지 않고 한 가지만 적용해야 에러를 방지할 수 있다.

                          ```
                          <div class="static" v-bind:class="{'class-a':isA, 'class-b':isB}"></div>
                          <script>
                            data:{
                              isA: true,
                              isB: false
                            }
                          </script>
                          ```

                          ```
                          <div class="static class-a"></div>
                          ```

                        - Array 구문도 사용가능

                          ```
                          <div v-bind:class="[classA,classB]"></div>
                          <script>
                            data:{
                              classA: 'class-a',
                              classB: 'class-b'
                            }
                          </script>
                          ```

                          ```
                          
                          <!DOCTYPE html>
                          <html>
                            <head>
                              <meta charset="utf-8">
                              <meta name="viewport" content="width=device-width, initial-scale=1.0">
                              <title>Vue Templates Sample</title>
                            </head>
                            <body>
                              <div id="app">
                                <header>
                                  <!-- #1 -->
                                  <h3>{{ message }}</h3>
                                  <h2>{{ otherMessage }}</h2>
                          
                                </header>
                                <section>
                                  <!-- #2 -->
                                  <p v-bind:id="uid">{{uid}}</p>
                          
                                  <!-- #3 -->
                                  <button v-on:click="clickBtn">alert</button>
                                  <!-- <button @click="clickBtn">alert</button> -->
                                  <button v-on:click="dbclickBtn">BTN</button>
                                  <!-- #4 -->
                                  <ul v-if="flag">
                                    <li>1</li>
                                    <li>2</li>
                                    <li>3</li>
                                  </ul>
                                </section>
                              </div>
                          
                              <script src="https://unpkg.com/vue@2.3.3"></script>
                              <script src="./app.js"></script>
                            </body>
                          </html>
                          ```

                          ```
                          var app = new Vue({
                            el: '#app',
                            data: {
                              message : 'Hello Vue.js',
                              // 할일 #1
                              // 새로운 데이터 속성을 1개 추가하고, data bindings 를 이용하여 화면에 표시해보세요.
                              otherMessage : "Wurrup SSORRY CHOI",
                              uid: '10',
                              // 할일 #2
                              // uid 를 변경하고 해당 uid 의 변경 여부를 크롬 개발자 도구의 "화면 요소 검사" 기능으로 p 태그의 id 값을 확인해보세요.
                          
                              flag: true
                              // 할일 #4
                              // 위 flag 값을 false 로 변경하였을 때 화면에 어떤 영향을 주는지 확인해보세요.
                            },
                            methods: {
                              // ES6
                              clickBtn() {
                                console.log("hi");
                                this.flag=true;
                              },
                          
                              // 할일 #3
                              // eventMethod 를 하나 추가하고 template 에서 해당 이벤트를 실행할 수 있는 button 을 하나 추가하세요.
                              dbclickBtn(){
                                console.log("Jacob");
                                this.flag=false;
                              }
                            }
                          });
                          ```

                          

                          - 앱의 복잡도가 증가할 때, `.vue` 라는 파일 단위 안에 html, js, css를 관리할 수 있는 방법
                            - 모든 컴포넌트에 고유의 이름을 붙여야 함
                            - js 파일에서 template 안의 html의 문법 강조가 되지 않음
                            - js 파일상에서 css 스타일링 작업이 거의 불가
                            - ES5를 이용하여 앱을 작성할 경우 Babel 빌드가 지원되지 않음 
                          - `.vue` 파일을 브라우저가 랜더할 수 있는 파일들로 변환하면서 webpack의 vue-loader 또는 browserify 이용

                          ## Single File Components with JSX

                          

                          app.js

                          index.html

                          ## Quiz 5.

                          

                        - 결과값:

                      ### Class Binding

                    ### Directives

                  ### Binding Expressions - 값 연결

                ### Interpolation - 값 대입

                - DOM 기반 HTML Template에 Vue 데이터를 바인딩 하는 방법은 크게 3가지가 있다.
                  - Interpolation(값 대입)
                  - Binding Expressions(값 연결)
                  - 디렉티브 사용

                ## Data Binding

                

              ### Filters

            ### Directives

        ### Attributes

        ## Vue Template

        

        - Vue에서 HTTP 통신을 위해 제공하는 플러그인

        ## Vue Resource

        - Nested View : 특정 URL에서 1개의 컴포넌트에 여러 개의 하위 컴포넌트를 갖는것.
        - Named View : 특정 URL에서 여러 개의 컴포넌트를 쪼개진 뷰 단위로 랜더링 하는 것.

        ### Nested View vs Named View

        - 라우터로 특정 URL로 이동시, 해당 URL에 해당하는 여러개의 View(컴포넌트)를 동시에 랜더링한다.
        - 각 컴포넌트에 해당하는 `name` 속성과 `router-view` 지정 필요

        ### Named Views

        

        app.js

  ### Vue Router

  

  app.js

  index.html

  ## Quiz 3. 

  

  - 이벤트 발생
    - 이벤트를 발생시킬 컴포넌트에 `eventBus` import 후 `$emit` 으로 이벤트 발생
  - 이벤트 수신
    - 해당 이벤트를 받을 컴포넌트에도 동일하게 import 후 콜백으로 이벤트 수신

  - Non Parent - Child 컴포넌트 간의 통신을 위해 Evnent Bus를 활용할 수 있다.
    - Event Bus를 위해 새로운 Vue 를 생성하여 아래와 같이 Vue Root Instance가 위치한 파일에 등록

  ### Event Bus

  - 컴포넌트 간의 직접적인 통신은 불가능하도록 되어 있는게 Vue의 기본구조.
  - 따라서 Child -> Parent -> 다시 2개의 Children

  ### 같은 레벨의 컴포넌트 간 통신

  

  app.js

  index.html

  ## Quiz 2.

  - 상위에서 하위로 값을 전달하려면 props 속성을 사용한다.
  - 직접 접근할 수 없기 때문

  ### Props

  - 부모 -> 자식 : props down
  - 자식 -> 부모 : events up

  ### 부모와 자식 컴포넌트 관계

  

  

  app.js

  index.html

  ## Quiz 1. 

  - 예시

  - Local

  - Global

  ### Global vs Local

### Vue Components

- 데이터 관찰
- 템플릿 컴파일
- DOM에 객체 연결
- 데이터 변경시 DOM 업데이트

Vue 객체가 생성될 때 아래의 초기화 작업을 수행한다.

### Vue Instance 라이프싸이클 초기화



- 각 options 으로 미리 정의한 vue 객체를 확장하여 재사용이 가능하다. 하지만 아래 방법 보다는 template 에서 custom element로 작성하는 것이 더 좋다. 

- Vue 객체를 생성할 때 아래와 같이 data, template, el, methods, life cycle callback 등의 options를 포함할 수 있다.