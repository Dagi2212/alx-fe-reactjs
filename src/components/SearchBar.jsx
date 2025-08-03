// SearchBar.jsx
import React from 'react';

const SearchBar = ({ value, onChange, onSubmit }) => (
  <form onSubmit={onSubmit} style={{ marginBottom: '1rem' }}>
    <input
      type="text"
      placeholder="Search GitHub user..."
      value={value}
      onChange={onChange}
      style={{ padding: '0.5rem', width: '250px' }}
    />
    <button type="submit" style={{ marginLeft: '0.5rem', padding: '0.5rem 1rem' }}>
      Search
    </button>
  </form>
);

export default SearchBar;
