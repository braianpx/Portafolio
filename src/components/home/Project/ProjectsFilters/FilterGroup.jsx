import React from "react";
import FilterButton from "./FilterButton";

const FilterGroup = ({ title, filters, activeValue, onChange }) => {
  return (
    <div className="filter-group-card">
      <h4 className="filter-group-title">{title}</h4>

      <div className="filter-group-controls">
        {filters.map((filter) => (
          <FilterButton
            key={filter.value}
            label={filter.label}
            active={activeValue === filter.value}
            onClick={() => onChange(filter.value)}
          />
        ))}
      </div>
    </div>
  );
};

export default FilterGroup;
