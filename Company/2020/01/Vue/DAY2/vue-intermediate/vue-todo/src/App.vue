<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <!--    <TodoList v-bind:내려보낼 프롭스 속성 이름="현재 위치의 컴포넌트 이름"></TodoList>-->
<!--    <TodoList v-bind:propsdata="todoItems"-->
<!--              v-on:removeItem="removeOneItem"-->
<!--              v-on:toggleItem="toggleOneItem"></TodoList>-->
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
  // 컴포넌트 등록
  import TodoHeader from './components/TodoHeader.vue';
  import TodoInput from './components/TodoInput';
  import TodoList from "./components/TodoList";
  import TodoFooter from "./components/TodoFooter";

  export default {
    data() {
      return {
        todoItems: []
      }
    },
    methods: {
      // addOneItem(todoItem) {
      //   const obj = {completed: false, item: todoItem};
      //   // 저장하는 로직
      //   localStorage.setItem(todoItem, JSON.stringify(obj));
      //   this.todoItems.push(obj);
      // },
      // removeOneItem(todoItem, index) {
      //   localStorage.removeItem(todoItem.item);
      //   this.todoItems.splice(index, 1);
      // },
      // toggleOneItem(todoItem, index) {
      //   // todoItem.completed = !todoItem.completed;
      //   this.todoItems[index].completed = !this.todoItems[index].completed;
      //   // 로컬 스토리지의 데이터 갱신
      //   localStorage.removeItem(todoItem.item);
      //   localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
      // },
      // clearAllItems() {
      //   localStorage.clear();
      //   this.todoItems = [];
      // }
    },
    // created() {
    //   if (localStorage.length > 0) {
    //     for (let i = 0; i < localStorage.length; i++) {
    //       if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
    //         // console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
    //         this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    //         // this.todoItems.push(localStorage.key(i));
    //       }
    //     }
    //   }
    // },
    components: {
      // 컴포넌트 태그명 : 컴포넌트 내
      TodoHeader,
      TodoInput,
      TodoList,
      TodoFooter,
    }
  }
</script>

<style>
  body {
    text-align: center;
    background-color: #F6F6F6;
  }

  input {
    border-style: groove;
    width: 200px;
  }

  button {
    border-style: groove;
  }

  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
  }
</style>
