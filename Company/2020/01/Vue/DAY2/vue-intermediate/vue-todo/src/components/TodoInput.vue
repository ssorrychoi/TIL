<template>
  <div class="inputBox shadow">
    <!--  Enter키를 눌렀을때도 반응하게.  -->
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <!--    <button v-on:click="addTodo">add</button>-->
    <span class="addContainer" v-on:click="addTodo">
      <i class="fas fa-plus addBtn"></i>
    </span>
    <!--  Modal  -->
    <!-- use the modal component, pass in the prop -->
    <modal v-if="showModal" @close="showModal = false">
      <h3 slot="header" class="closeModalBtn">METEOR
        <i class="fas fa-times closeModalBtn" @click="showModal = false"></i>
      </h3>
      <div slot="body">무언가를 입력하세요.</div>
    </modal>
  </div>
</template>

<script>
  import Modal from "./common/Modal";

  export default {
    data() {
      return {
        newTodoItem: "",
        showModal: false
      }
    },
    methods: {
      addTodo() {
        if (this.newTodoItem !== '') {
          // this.$emit('addTodoItem', this.newTodoItem);
          // var obj = {completed:false, item:this.newTodoItem};

          this.$store.commit('addOneItem',this.newTodoItem);
          // // 저장하는 로직
          // localStorage.setItem(this.newTodoItem, JSON.stringify(obj));
          this.clearInput();
        } else {
          this.showModal = !this.showModal;
        }
      },
      clearInput() {
        this.newTodoItem = '';
      }
    },
    components: {
      Modal
    }
  }
</script>

<style scoped>
  input:focus {
    outline: none;
  }

  .inputBox {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
  }

  .inputBox input {
    border-style: none;
    font-size: 0.9rem;
  }

  .addContainer {
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
  }

  .addBtn {
    color: white;
    vertical-align: middle;
  }

  .closeModalBtn {
    color: #42b983;
  }
</style>
