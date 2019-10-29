import React, { Component } from "react";
import { throws } from "assert";

export default class SearchBar extends Component {
  onChange = e => {
    this.props.handleKeyword(e.target.value);
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit();
  };

  nextPage = () => {
    this.props.nextPage();
  };

  prevPage = () => {
    this.props.prevPage();
  };
  render() {
    return (
      <div className="ui segment container">
        <form className="ui form" onSubmit={this.onSubmit}>
          <label htmlFor="keyword">Search My name on Google!</label>
          <input type="text" id="keyword" onChange={this.onChange} />
        </form>

        {this.props.page === 1 ? null : (
          <button
            className="ui left labeled icon button"
            onClick={this.prevPage}
          >
            <i className="left arrow icon"></i>
            Prev
          </button>
        )}

        {this.props.page}
        <button
          className="ui right labeled icon button"
          onClick={this.nextPage}
        >
          <i className="right arrow icon"></i>
          Next
        </button>
      </div>
    );
  }
}
