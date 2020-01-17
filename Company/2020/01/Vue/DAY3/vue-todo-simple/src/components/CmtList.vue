<template>
  <div>
    <div class="comments-list">
      <div class="media" v-for="(comment,index) in propsdata" v-bind:key="comment">
        <p class="pull-right"><small>5 days ago</small></p>
        <a class="media-left" href="#">
          <img src="http://lorempixel.com/40/40/people/1/">
        </a>
        <div class="media-body">

          <h4 class="media-heading user_name">Baltej Singh</h4>
          <p>{{comment}}</p>

          <p><small><span>reply</span> -
            <button v-on:click="deleteCmt(comment,index)" type="button">delete</button>
          </small></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['propsdata'],
    methods: {
      deleteCmt(comment, index) {
        // console.log(comment,index);
        localStorage.removeItem(comment);
        this.$emit.splice(index, 1);
      }
    }
  }
</script>

<style scoped>
  .user_name {
    font-size: 14px;
    font-weight: bold;
  }

  .comments-list .media {
    border-bottom: 1px dotted #ccc;
  }
</style>
