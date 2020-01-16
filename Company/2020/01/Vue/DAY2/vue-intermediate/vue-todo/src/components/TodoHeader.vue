<template>
  <header>
<!--    <h1>To Do IT!</h1>-->
  <h1>{{this.$store.state.headerText}}</h1>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
  h1{
    color:#2F3B52;
    font-weight: 900;
    margin: 2.5rem 0 1.5rem;
  }
</style>
