<template>
  <div>
    <ul>
      <!--    반복문으로 찍어내기    -->
      <!--      <li class="shadow" v-for="item in todoItems" v-bind:key="item">-->

      <!--   v-for 가 몇개가 됐건 해당 list의 순서를 부여하는 것 => index   -->
      <li class="shadow" v-for="(item , index) in propsdata" v-bind:key="item.item">
        <i
          class="checkBtn fas fa-check"
          v-bind:class="{checkBtnCompleted: item.completed}"
          v-on:click="toggleComplete(item,index)"
        ></i>
        <span v-bind:class="{textCompleted: item.completed}">{{item.item}}</span>
        <!-- item JSON의 item  -->
        <span class="removeBtn" v-on:click="removeTodo(item,index)">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["propsdata"],
  // App.vue로 보냄
  // data() {
  //  return {
  //    todoItems: []
  //  };
  // },
  methods: {
    removeTodo(item, index) {
      this.$emit("removeItem", item, index);

      //App.vue 로 보내줌
      //localStorage.removeItem(item);
      //this.todoItems.splice(index, 1);
    },
    toggleComplete(item, index) {
      this.$emit("toggleItem", item, index);
      //item.completed = !item.completed;
      // localStorage의 값 갱신
      //localStorage.removeItem(item.item);
      //localStorage.setItem(item.item, JSON.stringify(item));
      // App.vue 로 이동
    }
  }
  // created(){   //ㅇㅣ 부분을 App.vue로 옯겨준다.
  // }
};
</script>

<style scoped>
ul {
  list-stsyle-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}

li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}

.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}

.checkBtnCompleted {
  color: #b3adad;
}

.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}

.removeBtn {
  margin-left: auto;
  color: #de4343;
}

/*리스트 아이템 */
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}

.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */
 {
  opacity: 0;
  transform: translateY(30px);
}
</style>
