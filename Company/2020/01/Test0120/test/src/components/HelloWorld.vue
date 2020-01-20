<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8">
        <div class="post-content">
          <div class="post-container">

            <template v-for="item of comments">
              <!--   여기서부터 1번   -->
              <img alt="user" class="profile-photo-md pull-left"
                   src="https://bootdey.com/img/Content/avatar/avatar6.png">
              <div class="post-detail">
                <div class="user-info">
                  <h5><a class="profile-link" href="#">{{item.name}}</a></h5>
                  <p class="text-muted">Published a photo about 3 mins ago</p>
                </div>
                <div class="reaction">
                  <i><a href="#"><small>Reply</small></a></i>
                  <a class="btn text-green" v-on:click="addlike"><i class="fa fa-thumbs-up"></i> {{item.like}}</a>
                  <a class="btn text-red" v-on:click="removelike"><i class="fa fa-thumbs-down"></i> {{item.dislike}}</a>
                </div>
                <div class="line-divider"></div>
                <div class="post-text">
                  <p>{{item.text}} <i class="em em-anguished"></i> <i
                    class="em em-anguished"></i> <i class="em em-anguished"></i></p>
                </div>
                <br>
              </div>
            </template>


            <!--            <img alt="user" class="profile-photo-md pull-left" src="https://bootdey.com/img/Content/avatar/avatar6.png">-->
            <!--            <div class="post-detail">-->
            <!--              <div class="user-info">-->
            <!--                <h5><a class="profile-link" href="#">Alexis Clark</a></h5>-->
            <!--                <p class="text-muted">Published a photo about 3 mins ago</p>-->
            <!--              </div>-->
            <!--              <div class="reaction">-->
            <!--                <i><a href="#"><small>Reply</small></a></i>-->
            <!--                <a class="btn text-green" v-on:click="addlike"><i class="fa fa-thumbs-up"></i> {{this.like}}</a>-->
            <!--                <a class="btn text-red" v-on:click="removelike"><i class="fa fa-thumbs-down"></i> {{this.dislike}}</a>-->
            <!--              </div>-->
            <!--              <div class="line-divider"></div>-->
            <!--              <div class="post-text">-->
            <!--                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore-->
            <!--                  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut-->
            <!--                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum-->
            <!--                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui-->
            <!--                  officia deserunt mollit anim id est laborum. <i class="em em-anguished"></i> <i-->
            <!--                    class="em em-anguished"></i> <i class="em em-anguished"></i></p>-->
            <!--              </div>-->
            <!--              <br>-->
            <!--            </div>-->
            <!--   2번    -->
            <!--            <img alt="user" class="profile-photo-md pull-left" src="https://bootdey.com/img/Content/avatar/avatar6.png">-->
            <!--            <div class="post-detail">-->
            <!--              <div class="user-info">-->
            <!--                <h5><a class="profile-link" href="#">Alexis Clark</a></h5>-->
            <!--                <p class="text-muted">Published a photo about 3 mins ago</p>-->
            <!--              </div>-->
            <!--              <div class="reaction">-->
            <!--                <i><a href="#"><small>Reply</small></a></i>-->
            <!--                <a class="btn text-green"><i class="fa fa-thumbs-up"></i> 13</a>-->
            <!--                <a class="btn text-red"><i class="fa fa-thumbs-down"></i> 0</a>-->
            <!--              </div>-->
            <!--              <div class="line-divider"></div>-->
            <!--              <div class="post-text">-->
            <!--                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore-->
            <!--                  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut-->
            <!--                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum-->
            <!--                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui-->
            <!--                  officia deserunt mollit anim id est laborum. <i class="em em-anguished"></i> <i-->
            <!--                    class="em em-anguished"></i> <i class="em em-anguished"></i></p>-->
            <!--              </div>-->


            <!--&lt;!&ndash;              <div class="line-divider"></div>&ndash;&gt;-->
            <!--              &lt;!&ndash;              <div class="post-comment">&ndash;&gt;-->
            <!--              &lt;!&ndash;                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="" class="profile-photo-sm">&ndash;&gt;-->
            <!--              &lt;!&ndash;                <p><a href="#" class="profile-link">Diana </a><i class="em em-laughing"></i> Lorem ipsum dolor sit amet,&ndash;&gt;-->
            <!--              &lt;!&ndash;                  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut&ndash;&gt;-->
            <!--              &lt;!&ndash;                  enim ad minim veniam, quis nostrud </p>&ndash;&gt;-->
            <!--              &lt;!&ndash;              </div>&ndash;&gt;-->
            <!--              &lt;!&ndash;              <div class="post-comment">&ndash;&gt;-->
            <!--              &lt;!&ndash;                <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" class="profile-photo-sm">&ndash;&gt;-->
            <!--              &lt;!&ndash;                <p><a href="#" class="profile-link">John</a> Lorem ipsum dolor sit amet, consectetur adipiscing elit,&ndash;&gt;-->
            <!--              &lt;!&ndash;                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis&ndash;&gt;-->
            <!--              &lt;!&ndash;                  nostrud </p>&ndash;&gt;-->
            <!--              &lt;!&ndash;              </div>&ndash;&gt;-->

            <!--            </div>-->

            <!--2번-->

            <!--           3번-->
            <!--            <img alt="user" class="profile-photo-md pull-left" src="https://bootdey.com/img/Content/avatar/avatar6.png">-->
            <!--            <div class="post-detail" >-->
            <!--              <div class="user-info">-->
            <!--                <h5><a class="profile-link" href="#" >NAME</a></h5>-->
            <!--                <p class="text-muted">Published a photo about 3 mins ago</p>-->
            <!--              </div>-->
            <!--              <div class="reaction">-->
            <!--                <i><a href="#"><small>Reply</small></a></i>-->
            <!--                <a class="btn text-green"  v-on:click="addlike"><i class="fa fa-thumbs-up" ></i> {{this.like}}</a>-->
            <!--                <a class="btn text-red"  v-on:click="removelike"><i class="fa fa-thumbs-down"></i> {{this.dislike}}</a>-->
            <!--              </div>-->
            <!--              <div class="line-divider"></div>-->
            <!--              <div class="post-text">-->
            <!--                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore-->
            <!--                  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut-->
            <!--                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum-->
            <!--                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui-->
            <!--                  officia deserunt mollit anim id est laborum. <i class="em em-anguished"></i> <i-->
            <!--                    class="em em-anguished"></i> <i class="em em-anguished"></i></p>-->
            <!--              </div>-->

            <!--            </div>-->

            <!--            3번-->
            <img alt="" class="profile-photo-sm pull-left" src="https://bootdey.com/img/Content/avatar/avatar1.png">
            <div class="post-detail">
              <input class="form-control" placeholder="Post a comment" required="" type="text"
                     v-model="commentArea" v-on:keyup.enter="addComment">
            </div>
            <span class="addContainer" v-on:click="addComment">
               <i class="addBtn pull-right">Submit</i>
          </span>
          </div>


        </div>
      </div>


    </div>
  </div>

</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        title: 'Comments',
        count: 0,
        commentArea: '',
        comments: [],
        cnt: localStorage.length,
        like: 0,
        dislike: 0,
      }
    },
    methods: {
      addComment() {
        if (this.commentArea != '') {
          let cnt = this.cnt++;
          let date = new Date();
          let obj = {
            id: cnt,
            name: "Jacob",
            date: date,
            thumbNail: "https://bootdey.com/img/Content/avatar/avatar2.png",
            text: this.commentArea,
            like: this.like,
            dislike: this.dislike
          };
          localStorage.setItem(cnt, obj.text);
          console.log('obj = ', obj);
          this.comments.push(obj);
          console.log(this.comments);
          this.commentArea = '';
        } else {
          alert('댓글을 입력해주세요');
        }
      },
      addlike() {
        console.log(this.like);
        return this.like++;

      },
      removelike() {
        return this.dislike++;
      }
    },
    created() {
      if (localStorage.length > 0) {
        for (let i = 0; i < localStorage.length; i++) {
          if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
            this.comments.push(localStorage.getItem(localStorage.key(i)));
          }
        }
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


  .post-content {
    background: #f8f8f8;
    border-radius: 4px;
    width: 100%;
    border: 1px solid #f1f2f2;
    margin-bottom: 20px;
    overflow: hidden;
    position: relative;
  }

  .post-content img.post-image, video.post-video, .google-maps {
    width: 100%;
    height: auto;
  }

  .post-content .google-maps .map {
    height: 300px;
  }

  .post-content .post-container {
    padding: 20px;
  }

  .post-content .post-container .post-detail {
    margin-left: 65px;
    position: relative;
  }

  .post-content .post-container .post-detail .post-text {
    line-height: 24px;
    margin: 0;
  }

  .post-content .post-container .post-detail .reaction {
    position: absolute;
    right: 0;
    top: 0;
  }

  .post-content .post-container .post-detail .post-comment {
    display: inline-flex;
    margin: 10px auto;
    width: 100%;
  }

  .post-content .post-container .post-detail .post-comment img.profile-photo-sm {
    margin-right: 10px;
  }

  .post-content .post-container .post-detail .post-comment .form-control {
    height: 30px;
    border: 1px solid #ccc;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
    margin: 7px 0;
    min-width: 0;
  }

  img.profile-photo-md {
    height: 50px;
    width: 50px;
    border-radius: 50%;
  }

  img.profile-photo-sm {
    height: 40px;
    width: 40px;
    border-radius: 50%;
  }

  .text-green {
    color: #8dc63f;
  }

  .text-red {
    color: #ef4136;
  }

  .following {
    color: #8dc63f;
    font-size: 12px;
    margin-left: 20px;
  }

  .addBtn {
    color: black;
    font-size: 1.5rem;
    background: #f8f8f8;

  }

</style>
