import React from 'react' ;

function Search({ value, onChange, titulo }) {
    return (
      <div>
        <label htmlFor="search">{titulo}</label>
        <input
          data-testid="search"
          type="text"
          value={value}
          onChange={onChange}
        />
      </div>
    );
  }

export default Search;
