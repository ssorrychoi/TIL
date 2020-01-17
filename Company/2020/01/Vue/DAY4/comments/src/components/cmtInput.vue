<template>
  <div>
<!--    <form>-->
      <div class="form-group">
        <label for="comment">Your Comment</label>
        <input v-model="comment" class="form-control"  v-on:keyup.enter="addCmt"></input>
      </div>
      <button type="submit" class="btn btn-default" v-on:click="addCmt">Send</button>
<!--    </form>-->
  </div>
</template>

<script>
export default{
  data(){
    return {
      comment:"",
    }
  },
  methods:{
    addCmt(){
      // 코멘트가 빈칸이 아닐때
      if(this.comment !== ''){
        console.log(this.comment);
        localStorage.setItem(this.comment,this.comment);
        this.clearComment();
      }
    },
    clearComment(){
      this.comment='';
    }
  }
}
</script>

<style>
.form-group{
  padding-top:30px;
}
</style>
