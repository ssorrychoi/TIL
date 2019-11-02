import React from "react"
import "./SearchBar.css"

const SearchBar = ({ handlecurrentKeyChange, handleKeywordChange }) => {
  return (
    <div className="">
      <div className="bbibbi">
        <input
          type="text"
          placeholder="input..."
          onChange={(e) => handlecurrentKeyChange(e.target.value)}
        />
        <button type="button" onClick={handleKeywordChange}>
          입력
        </button>
      </div>
    </div>
  )
}

export default SearchBar
