<template>
  <div>
    <b-container class="bv-example-row">
      <div class="comment-head">
        코멘트 <small class="comment-head-small">총 1개의 코멘트가 있습니다.</small>
      </div>
      <div class="comment-input">
        <textarea class="comment-body" placeholder="※ 작품과 무관한 코멘트, 악플은 삭제 될 수 있습니다."></textarea>
        <b-button class="comment-body-btn" v-on:click="addComment" variant="outline-primary">등록하기</b-button>
      </div>
      <ul class="comment-list">
        <li class="comment-list-box" v-bind:key="comments.id" v-for="item in comments">
          <div>
            <div class="flex-box">
              <div class="user-avatar">
                <img class="avatar-img"
                     src="https://images.unsplash.com/photo-1579603808872-59daea6f889c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80">
              </div>
              <div class="user-info">
                <p>
                  <span>{{item.name}}</span>
                  <span class="date">{{item.date}}</span>
                  <span v-on:click="recomment"><a href="#">Reply</a></span>
                </p>
                <p class="comment">{{item.text}}</p>
              </div>
              <span class="report-div">
                <a class="report" href="#">Report</a>
              </span>
            </div>
          </div>

          <div class="recomment-box">
            <div class="recomment-flex-box">
              <div class="user-avatar">
                <img class="avatar-img"
                     src="https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg">
              </div>
              <div class="user-info">
                <p>
                  <span>{{item.name}}</span>
                  <span class="date">{{item.date}}</span>
                  <span><a href="#">Reply</a></span>
                </p>
                <p class="comment"><span class="reply-nickname">@{{item.name}}</span>{{item.text}}</p>
              </div>
              <span class="report-div">
                <a class="report" href="#">Report</a>
              </span>
            </div>
          </div>

          <div class="recomment-box">
            <div class="recomment-flex-box">
              <div class="user-avatar">
                <img class="avatar-img"
                     src="https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg">
              </div>
              <div class="user-info">
                <p>
                  <span>{{item.name}}</span>
                  <span class="date">{{item.date}}</span>
                  <span><a href="#">Reply</a></span>
                </p>
                <p class="comment"><span class="reply-nickname">@{{item.name}}</span>{{item.text}}</p>
              </div>
              <span class="report-div">
                <a class="report" href="#">Report</a>
              </span>
            </div>
          </div>

        </li>
      </ul>


    </b-container>
  </div>

</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        comments: [],
        item: 1,
      }
    },
    methods: {
      addComment() {
        let arr2 = {
          "id": 1,
          "name": "test2",
          "date": "2020-01-01 21:00:00",
          "thumbnail": "https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg",
          "text": "HI :)",
          "reply": {
            "id": 2,
            "name": "test3",
            "date": "2020-01-01 21:00:00",
            "thumbnail": "https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg",
            "text": "HI2 :)"
          },
        }
        this.comments.push(arr2);
        console.log(this.comments);

      },
      recomment() {
      },
    },

    created() {
      let arr = {
        "id": 0,
        "name": "test1",
        "date": "2020-01-01 21:00:00",
        "thumbnail": "https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg",
        "text": "hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~",
        "reply": [],
      };
      this.comments.push(arr);
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .comment-head {
    font-size: 20px;
    padding-bottom: 5px;
  }

  .comment-head-small {
    color: #777
  }

  .comment-input {
    padding-bottom: 10px;
    height: 50px;
  }

  .comment-body {
    width: calc(100% - 100px);
    height: 100%;
    border: 1px solid #d0d0d0;
    color: #666;
    padding: 5px;
  }

  .comment-body-btn {
    vertical-align: top;
    width: 97px;
    height: 100%;
    padding: 0;
  }

  .comment-list {
    border-top: 1px solid #d6d6d6;
    border-bottom: 1px solid #d6d6d6;
    padding: 0
  }

  .comment-list-box {
    padding: 12px 0px;
    border-bottom: 1px solid #e3e3e3;
    background-color: #f8f8f8;
    list-style: none;

  }

  .user-info {
    font-weight: bold;
    color: #1c7e9f;
    font-size: 12px;
    padding-left: 10px;
    width: 100%;

  }

  .date {
    font-size: 11px;
    color: #888;
    font-weight: normal;
  }

  .report {
    color: red;
    padding-right: 10px;
    font-size: 10px;
    font-weight: normal;
  }

  .comment {
    font-size: 12px;
    color: #747474;
    line-height: 18px;
    word-break: break-all;
  }

  .flex-box {
    display: flex;

  }
  .recomment-flex-box{
    display: flex;
  }

  .user-avatar {
    padding-left: 10px;
  }

  .avatar-img {
    width: 60px;
    height: 60px;
  }

  .report-div {
    float: right;
    justify-content: flex-end;
  }
  .reply-nickname{
    font-weight: bold;
    color: #1c7e9f;
    font-size: 12px;
  }
  .recomment-box{
    padding-left: 40px;
    padding-top: 15px;
  }
</style>
