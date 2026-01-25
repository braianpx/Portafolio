import React from "react";

const FilterButton = ({ label, active, onClick }) => {
  return (
    <button
      type="button"
      className={`filter-chip ${active ? "active" : ""}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default FilterButton;
