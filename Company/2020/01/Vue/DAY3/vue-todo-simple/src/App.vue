<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <CmtHeader></CmtHeader>
          <CmtInput></CmtInput>
          <CmtList v-bind:propsdata="commentList"></CmtList>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CmtHeader from './components/CmtHeader'
  import CmtInput from './components/CmtInput'
  import CmtList from './components/CmtList'

  export default {
    data(){
      return{
        commentList: []
      }
    },
    components: {
      CmtHeader,
      CmtInput,
      CmtList
    },
    created() {
      if(localStorage.length>0){
        for (var i = 0; i < localStorage.length; i++) {
          if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
            this.commentList.push(localStorage.key(i));
          }
        }
      }
    },
  }
</script>

<style>

</style>
