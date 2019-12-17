import React from "react";

const CommentDetail = props => {
  return (
    <div className="comment">
      <a href="#" className="avatar">
        <img src={props.avatar} alt="avatar"></img>
      </a>
      <div className="content">
        <a href="#" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="date">{props.time}</span>
        </div>
        <div className="text">{props.body}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
