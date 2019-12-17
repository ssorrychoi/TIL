import React from "react";
import "./SearchBar.css";
import "semantic-ui-css/semantic.min.css";

const SearchBar = ({ handlecurrentKeyChange, handleKeywordChange }) => {
  return (
    <div>
      <div className="bbibbi">
        {/* <input
          type="text"
          placeholder="input..."
          onChange={(e) => handlecurrentKeyChange(e.target.value)}
        />
        <button type="ui black basic button" onClick={handleKeywordChange}>
          전송
        </button> */}
        <div class="ui input bbibbi-input">
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => handlecurrentKeyChange(e.target.value)}
          />

          <button class="ui icon button" onClick={handleKeywordChange}>
            <i class="search icon"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
