import React from "react";
import FilterButton from "./FilterButton";
import { LayoutGroup } from "framer-motion";

const FilterGroup = ({ title, filters, activeValue, onChange }) => {
  return (
    <div className="filter-group-card">
      <h4 className="filter-group-title">{title}</h4>
      {/* LayoutGroup asegura que las animaciones de los botones no se mezclen entre grupos */}
      <LayoutGroup id={title}>
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
      </LayoutGroup>
    </div>
  );
};

export default FilterGroup;
