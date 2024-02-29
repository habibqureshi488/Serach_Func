import React, { useState } from 'react';

function SearchBar({setResult}) {
  const [input, setInput] = useState('');

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const result = json.filter((user) =>
          value && user && user.name && user.name.toLowerCase().includes(value.toLowerCase())
        );
        setResult(result);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <>
      <div className="Heading">
        <h1>Search Movie Here</h1>
      </div>
      <div className="search-container">
        <input
          type="text"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
          id="searchInput"
          placeholder="Search movies..."
        />
        <button id="searchButton" onClick={() => fetchData(input)}>Search</button>
      </div>

      <div id="searchResults"></div>
    </>
  );
}

export default SearchBar;
