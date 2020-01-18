<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <!-- v-on:"하위컴포넌트에서 발생시킨 이벤트이름="현재 컴포넌트의 메서드명" -->
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
    <!-- v-bind:"내려보낼속성이름"="현재위치의 컴포넌트 데이터속성" -->
    <TodoList
      v-bind:propsdata="todoItems"
      v-on:removeItem="removeOneItem"
      v-on:toggleItem="toggleOneItem"
    ></TodoList>
    <TodoFooter v-on:clearItem="clearAllItems"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";

export default {
  data() {
    return {
      todoItems: []
    };
  },
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  },

  methods: {
    addOneItem(item) {
      var obj = { completed: false, item: item };
      localStorage.setItem(item, JSON.stringify(obj)); // obj가 객체 형식으로 들어감.
      this.todoItems.push(obj);
    },
    removeOneItem(item, index) {
      //console.log(item);
      localStorage.removeItem(item.item);
      this.todoItems.splice(index, 1);
    },
    toggleOneItem(item, index) {
      //item.completed = !item.completed;
      // 아래 표현이 더 좋은 코드
      this.todoItems[index].completed = !this.todoItems[index].completed;
      localStorage.removeItem(item.item);
      localStorage.setItem(item.item, JSON.stringify(item));
    },
    clearAllItems() {
      localStorage.clear();
      this.todoItems = [];
    }
  },

  created() {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          // object로 찍어줌.
          // console.log(JSON.parse(localStorage.getItem(localStorage.key(i)))); //Key-value 중에 Value값이 떨어진다.

          //this.todoItems.push(localStorage.key(i));
          this.todoItems.push(
            JSON.parse(localStorage.getItem(localStorage.key(i)))
          );
        }
      }
    }
  }
};
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f6;
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
