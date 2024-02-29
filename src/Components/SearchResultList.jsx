import React from 'react';
import './SRL.css';

function SearchResultList({results}) {
  return (
    <div>
      <ul className="list">
        {results.map((result, ind) => (
          <li className="list-item" key={ind}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResultList;
