<template>
  <div id="app">
    <cmtHeader></cmtHeader>
    <cmtInput></cmtInput>
    <cmtList></cmtList>
    <cmt-footer></cmt-footer>
  </div>
</template>

<script>
  import cmtHeader from './components/cmtHeader'
  import cmtInput from './components/cmtInput'
  import cmtList from './components/cmtList'
  import cmtFooter from './components/cmtFooter'

  export default {
    name: 'app',
    data() {
      return {
        commentList: []
      }
    },
    components: {
      cmtHeader,
      cmtInput,
      cmtList,
      cmtFooter
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
  #app{
    width:800px;
  }

  body{
    padding-left: 100px;
    padding-top: 100px;
  }

</style>
