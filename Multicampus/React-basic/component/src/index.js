import React from "react"; // 단축키 imr
import ReactDOM from "react-dom"; // 단축키 imrd
import faker from "faker";

import Segment from "./components/Segment";
import Message from "./components/Message";
import ApprovalCard from "./components/ApprovalCard";
import CommentDetail from "./components/CommentDetail";

class App extends React.Component {
  state = {
    comments: [],
    lorem: faker.lorem.paragraph()
  };
  handleAddComment = () => {
    const newComment = {
      author: faker.name.firstName(),
      time: faker.date.recent().toLocaleDateString(),
      body: faker.lorem.sentence(),
      avatar: faker.image.avatar()
    };
    this.setState({ comments: [...this.state.comments, newComment] });
  };
  render() {
    return (
      <>
        <Segment me="ssorry">
          <div className="ui icon header">
            <i className="pdf file outline icon">No document</i>
          </div>

          <div className="ui primary button">Add Button</div>
        </Segment>
        <Segment>
          <h4 className="ui header">For Your Information!</h4>
          <p>{this.state.lorem}</p>
        </Segment>
        <Message
          header="회원 약관 변경"
          body="약관이 변경되었습니다. 동의 ㄱㄴ?"
        />
        <div className="ui container comments">
          <button className="ui primary button" onClick={this.handleAddComment}>
            Add Comment
          </button>
          <ApprovalCard>
            <h4>저는 오늘 새벽까지 복습할거임</h4>
            <p>빡공각?</p>
          </ApprovalCard>

          {this.state.comments.map(comment => {
            return (
              <ApprovalCard>
                <CommentDetail {...comment} />
              </ApprovalCard>
            );
          })}
        </div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
