<template>
  <div class="row">
    <div class="media">
      <div class="media-haeding">
        <button class="btn btn-default btn-xs" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseExample">
          <span class="glyphicon glyphicon-minus" aria-hidden="true"></span>
        </button>
        <span class="label label-info">12314</span> terminator 12 hours ago
      </div>
      <div class="media-left">
        <div class="vote-wrap">
          <div class="save-post">
            <a href="#"><span class="glyphicon glyphicon-star" aria-label="Save"></span></a>
          </div>
          <div class="vote up">
            <i class="glyphicon glyphicon-menu-up"></i>
          </div>
          <div class="vote inactive">
            <i class="glyphicon glyphicon-menu-down"></i>
          </div>
        </div>
        <!-- vote-wrap -->
      </div>
      <!-- media-left -->
      <div class="media-body">
        <div v-for="comment in commentsList">
          <p v-bind:key="comment.value">{{comment}}</p>
          <div class="comment-meta">
            <span><a href="#">delete</a></span>
            <span><a href="#">report</a></span>
            <span><a href="#">hide</a></span>
            <span>
            <a class="" role="button" data-toggle="collapse" href="#replyCommentT" aria-expanded="false"
               aria-controls="collapseExample">reply</a>
          </span>
            <div class="collapse" id="replyCommentT">
              <form>
                <div class="form-group">
                  <label for="comment">Your Comment</label>
                  <textarea name="comment" class="form-control" rows="3"></textarea>
                </div>
                <button type="submit" class="btn btn-default">Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        commentsList: []
      }
    },
    created: function () {
      if (localStorage.length > 0) {
        for (var i = 0; i < localStorage.length; i++) {
          if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
            this.commentsList.push(localStorage.key(i));
          }
        }
      }
    }
  }
</script>

<style>
  .media-body {
    padding-top: 10px
  }

  .comment-meta a {
    font-size: 12px;
    color: grey;
    font-weight: bolder;
    margin-right: 5px;
  }

  .comment-meta {
    border-bottom: 1px solid #eee;
    margin-bottom: 5px;
  }

</style>
