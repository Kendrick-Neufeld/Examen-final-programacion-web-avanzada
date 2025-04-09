"use client";
import React, { useState } from 'react';
import './SearchBar.css';

interface Props {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form className="search-box" onSubmit={handleSubmit}>
      <button type="submit" className="btn-search">
        🔍
      </button>
      <input
        type="text"
        className="input-search"
        placeholder="Type to Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
};

export default SearchBar;
