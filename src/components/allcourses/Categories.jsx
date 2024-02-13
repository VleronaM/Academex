import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import './courses.css';

export default function Categories({ categories, onSelectCategory, onSearch, selectedCategory }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    onSearch(event.target.value);
  };

  const handleShowAll = () => {
    onSelectCategory(""); 
  };

  return (
    <div className="categories section">
      <h2 className="categories-h2">Categories</h2>
      <div className="categories-container">
        {categories.map((category) => (
          <div
            className={`search-item ${category.id === selectedCategory ? 'selected' : ''}`}
            key={category.id}
            onClick={() => onSelectCategory(category.id)} // Pass the category id when clicked
          >
            {category.name}
          </div>
        ))}
        <div className="show-all-button-container">
          <button className="show-all-button" onClick={handleShowAll}>
            Show All
          </button>
        </div>
      </div>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button className="button">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
  );
}
