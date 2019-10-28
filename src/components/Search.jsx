import React from "react";

const Search = ({ onSubmit }) => {
  return (
    <button
      onClick={() => onSubmit()}
      className="btn btn-secondary btn-md mt-3"
    >
      Search
    </button>
  );
};

export default Search;
