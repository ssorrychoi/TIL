<template>
  <div>
    <transition-group name="list" tag="ul">
<!--    <ul>-->

      <li v-for="(todoItem, index) in this.storedTodoItems" v-bind:key="todoItem.item" class="shadow">
        <i class="fas fa-check checkBtn" v-bind:class="{checkBtnCompleted: todoItem.completed}"
           v-on:click="toggleComplete({todoItem,index})"></i>

        <span v-bind:class="{textCompleted: todoItem.completed}">{{todoItem.item}}</span>
        <span class="removeBtn" v-on:click="removeTodo({todoItem,index})">
          <i class="fas fa-trash-alt "></i>
        </span>
      </li>
<!--    </ul>-->
    </transition-group>
  </div>
</template>

<script>
  import {mapGetters,mapMutations} from 'vuex'

  export default {
    // data: function () {
    //   return {
    //     todoItems: []
    //   }
    // },
    // props:['propsdata'],
    methods:{
      ...mapMutations({
        removeTodo: "removeOneItem",
        toggleComplete: "toggleOneItem"
      }),
      // removeTodo(todoItem, index){
      //   // this.$emit('removeItem',todoItem,index);
      //
      //   this.$store.commit('removeOneItem',{todoItem, index});
      //   // localStorage.removeItem(todoItem);
      //   // this.todoItems.splice(index,1);
      // },

      // toggleComplete(todoItem, index){
      //   // this.$emit('toggleItem',todoItem,index)
      //   this.$store.commit('toggleOneItem',{todoItem,index});
      //   // todoItem.completed = !todoItem.completed;
      //   // // 로컬 스토리지의 데이터 갱신
      //   // localStorage.removeItem(todoItem.item);
      //   // localStorage.setItem(todoItem.item, JSON.stringify(todoItem))
      // }
    },
    computed:{
      // todoItems(){
      //   return this.$store.getters.storedTodoItems;
      // }
      ...mapGetters(['storedTodoItems'])
    }
    //created는 인스턴스가 생성 되자마자 바로 실행되는 life cycle.
    // created: function () {
    //   if (localStorage.length > 0) {
    //     for (var i = 0; i < localStorage.length; i++) {
    //       if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
    //         // console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
    //         this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    //         // this.todoItems.push(localStorage.key(i));
    //       }
    //     }
    //   }
    // }
  }
</script>

<style scoped>
  ul {
    list-stsyle-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
  }
  li{
    display:flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding:0 0.9rem;
    background: white;
    border-radius: 5px;
  }
  .checkBtn{
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
  }
  .checkBtnCompleted{
    color: #b3adad;
  }
  .textCompleted{
    text-decoration: line-through;
  }
  .removeBtn{
    margin-left:auto;
    color:#de4343;
  }
  /*리스트 아이템 */
  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
  }

</style>
