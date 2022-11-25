import React, { useState } from "react";

const Search = (props) => {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("searching for: ", keyword);
    props.findBooks(keyword);
  };

  return (
    <form onSubmit={handleSubmit}>
      <p style={{ color: "red" }}>
        <em>{keyword && "Keywords Typed: " + keyword}</em>
      </p>
      <input
        type="text"
        name="term"
        onChange={(e) => setKeyword(e.target.value)}
      />
      <input type="submit" name="submit" value="Search" />
    </form>
  );
};

export default Search;
