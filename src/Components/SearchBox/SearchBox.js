import React from "react";
import "./SearchBox.css";

import { AiOutlineSearch } from "react-icons/ai";

const SearchBox = ({ name, setname }) => {
  return (
    <div className="searchbox-container">
      <span className="search-icon">
        <AiOutlineSearch />
      </span>
      <input
        value={name}
        onChange={(e) => setname(e.target.value)}
        type="text"
        placeholder="Search Templates"
        className="searchbox"
      />
    </div>
  );
};

export default SearchBox;
