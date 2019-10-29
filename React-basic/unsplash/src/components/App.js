// Class 기반 component 단축키 rcc
import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import unsplash from "../api/unsplash";

export default class App extends Component {
  state = {
    keyword: "",
    images: [],
    page: 1
  };

  handleKeyword = word => {
    this.setState({ keyword: word });
  };
  nextPage = async () => {
    await this.setState({ page: this.state.page + 1 });
    await this.onSubmit();
  };
  prevPage = async () => {
    await this.setState({ page: this.state.page - 1 });
    await this.onSubmit();
  };
  onSubmit = async word => {
    const response = await unsplash.get("search/photos", {
      params: {
        query: this.state.keyword,
        per_page: 5,
        page: this.state.page
      }
    });
    console.log(response);
    // ==> `search/photos?query=${word}`
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar
          handleKeyword={this.handleKeyword}
          onSubmit={this.onSubmit}
          nextPage={this.nextPage}
          prevPage={this.prevPage}
          page={this.state.page}
        />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
