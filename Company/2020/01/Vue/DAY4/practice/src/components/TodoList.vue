<template>
  <div>
    <ul>
<!--    반복문으로 찍어내기    -->
<!--      <li class="shadow" v-for="item in todoItems" v-bind:key="item">-->

<!--   v-for 가 몇개가 됐건 해당 list의 순서를 부여하는 것 => index   -->
      <li class="shadow" v-for="(item , index) in todoItems" v-bind:key="item">
        <i class="checkBtn fas fa-check" v-on:click="toggleComplete"></i>
        {{item}}
        <span class="removeBtn" v-on:click="removeTodo(item,index)">
        <i class="fas fa-trash-alt "></i>
      </span>
      </li>

    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        todoItems: []
      }
    },
    methods: {
      removeTodo(item,index){
        console.log(item,index);
        localStorage.removeItem(item);
        this.todoItems.splice(index,1);
      },
      toggleComplete(){

      }
    },
    created() {
      if (localStorage.length > 0) {
        for (var i = 0; i < localStorage.length; i++) {
          if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
            // console.log(localStorage.getItem(localStorage.key(i))); //Key-value 중에 Value값이 떨어진다.
            this.todoItems.push(localStorage.key(i));
          }
        }
      }
    }
  }
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
  }

  .removeBtn {
    margin-left: auto;
    color: #de4343;
  }

  /*리스트 아이템 */
  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }

  .list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */
  {
    opacity: 0;
    transform: translateY(30px);
  }

</style>
