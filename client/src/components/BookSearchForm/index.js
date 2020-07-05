import React from 'react';
import "./style.css";

const BookSearchForm = ({
  onSubmitHandler,
  searchTerm,
  onInputChange,
  error,
}) => {
  return (
    <form onSubmit={onSubmitHandler}>
      <label>
        <input 
          type="search"
          placeholder="Enter the book to search on"
          value={searchTerm}
          onChange={onInputChange}
          required
        />
      <button type="submit">Search</button>
      </label>
      {error && (
        <div style={{ color: `red` }}>
          some error occurred, while fetching api
        </div>
      )}
    </form>
  );
};

export default BookSearchForm;