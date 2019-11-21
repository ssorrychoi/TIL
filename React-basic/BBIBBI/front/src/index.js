import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import SearchBar from "./components/SearchBar";
import ProductTable from "./components/ProductTable";

import "./index.css";

class App extends React.Component {
  state = {
    num: "",
    data: null,
    keyword: "",
    currentKey: ""
  };

  async getData(url) {
    const res = await axios.get(url);
    const { data } = res;
    this.setState({ data });
    console.log(data);
  }

  componentDidMount() {
    //API를 찔러서 데이터를 가져오는 일을 합니다.
    const url = "http://70.12.224.174:3000/";
    this.getData(url);
  }

  handlecurrentKeyChange = (num) => {
    this.setState({ currentKey: num });
  };

  handleKeywordChange = () => {
    this.setState({ keyword: this.state.currentKey });
  };

  render() {
    console.log("currentKey : ", this.state.currentKey);
    console.log("keyword : ", this.state.keyword);
    return (
      <>
        <div className="title padding-top">응답하라</div>
        <div className="title padding-bottom">1983</div>
        <SearchBar
          handlecurrentKeyChange={this.handlecurrentKeyChange}
          handleKeywordChange={this.handleKeywordChange}
        />
        <ProductTable data={this.state.data} keyword={this.state.keyword} />
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
