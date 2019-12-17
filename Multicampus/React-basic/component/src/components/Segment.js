// react 껍데기를 만들어 주는 단축키 rfc
import React from "react";

export default function Segment(props) {
  const [header, button] = props.children;

  return (
    <div className="ui placeholder segment">
      {header}
      {button}
    </div>
  );
}
