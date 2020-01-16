<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <CmtHeader></CmtHeader>
          <CmtInput></CmtInput>
          <CmtList></CmtList>
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

    components: {
      CmtHeader,
      CmtInput,
      CmtList
    }
  }
</script>

<style>

</style>
