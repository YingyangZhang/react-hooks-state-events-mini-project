import React from "react";

function CategoryFilter({ CATEGORIES, handleFilter, selectedCategory}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {CATEGORIES.map((category, index) => {
        return <button key = { index } onClick = { () => handleFilter(category) }
        className = {category === selectedCategory ? 'selected' : null }> { category } </button>
      })}
    </div>
  );
}

export default CategoryFilter;
