import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
const storage = {
  fetch() {
    // ㅅㅐ로 만들게 된 부분
    const arr = [];

    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          arr.push(
            JSON.parse(localStorage.getItem(localStorage.key(i)))
          );
        }
      }
    }
    return arr;
  },
}
export const store = new Vuex.Store({
  state: {
    haederText: "TODO IT!!!",
    todoItems: storage.fetch(),
  },
  mutations: {
    addOneItem(state, item){
      var obj = { completed: false, item: item };
      localStorage.setItem(item, JSON.stringify(obj)); // obj가 객체 형식으로 들어감.
      state.todoItems.push(obj);
    },
    removeOneItem(state,payload) {
      //console.log(item);
      localStorage.removeItem(payload.item.item);
      state.todoItems.splice(payload.index, 1);
    },
    toggleOneItem(state,payload) {
      //item.completed = !item.completed;
      // 아래 표현이 더 좋은 코드
      state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
      localStorage.removeItem(payload.item.item);
      localStorage.setItem(payload.item.item, JSON.stringify(payload.item));
    },
    clearAllItems(state) {
      localStorage.clear();
      state.todoItems = [];
    }
  }
});
