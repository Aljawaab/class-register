import React, { useState } from "react";

function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="search">
      <label>SEARCH STUDENT:</label>
      <input
        type="text"
        placeholder="Search by student name..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default Search;
