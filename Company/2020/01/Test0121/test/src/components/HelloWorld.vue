<template>
  <div>
    <b-container class="bv-example-row">
      <div class="cmt-head">
        코멘트 <small class="cmthead-small">총 1개의 코멘트가 있습니다.</small>
      </div>
      <div class="cmt-submit">
        <textarea class="cmt-body" placeholder="※ 작품과 무관한 코멘트, 악플은 삭제 될 수 있습니다."></textarea>
        <b-button class="cmtbody-btn" v-on:click="addComment" variant="outline-primary">등록하기</b-button>
      </div>
      <ul class="comment-list">
        <li class="commentlist-box" v-bind:key="comments.id" v-for="item in comments">

          <div>
            <div class="flex-box">
              <div class="list-avatar">
                <img src="http://cf.joara.com/user_file/default_01.png">
              </div>

              <div class="user-info">
                <p>
                  <span>{{item.name}}</span>
                  <span class="date">{{item.date}}</span>
                </p>
                <p class="comment">{{item.text}}</p>
              </div>
              <div>
                <span class="report-div">
                  <a class="report" href="#">Report</a>
                </span>
              </div>
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
        item: 1
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
        }
        this.comments.push(arr2);
      }
    },
    created() {
      let arr = {
        "id": 0,
        "name": "test1",
        "date": "2020-01-01 21:00:00",
        "thumbnail": "https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg",
        "text": "hello~",
      };
      this.comments.push(arr);
      console.log(this.comments);
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .cmt-head {
    font-size: 2rem;
    padding-bottom: 5px;
  }

  .cmthead-small {
    color: #777
  }

  .cmt-submit {
    padding-bottom: 10px;
  }

  .cmt-body {
    width: calc(100% - 100px);
    height: 50px;
    border: 1px solid #d0d0d0;
    color: #666;
    font-family: Dotum, '돋움', Arial, sans-serif;
    padding: 5px;
  }

  .cmtbody-btn {
    vertical-align: top;
    width: 90px;
    height: 50px;
  }

  .comment-list {
    display: block;
    list-style: disc;
    border-top: 1px solid #d6d6d6;
    border-bottom: 1px solid #d6d6d6;
    padding: 0
  }

  .commentlist-box {
    padding: 12px 0px;
    border-bottom: 1px solid #e3e3e3;
    background-color: #f8f8f8;
    list-style: none;
  }

  .cmt-list {
    padding-top: 3px;
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
  }

  .comment {
    font-size: 12px;
    color: #747474;
    line-height: 18px;
    overflow-x: hidden;
    word-break: break-all;

  }

  a:link {
    text-decoration: none;
  }

  .flex-box {
    display: flex;
  }

  .list-avatar {
    padding-left: 10px;

  }

  .report-div {
    float: right;
    justify-content: flex-end;
  }

</style>
