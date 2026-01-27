import React from "react";
import { motion } from "framer-motion";

const FilterButton = ({ label, active, onClick }) => {
  return (
    <button
      type="button"
      className={`filter-chip ${active ? "active" : ""}`}
      onClick={onClick}
      style={{ position: "relative", outline: "none" }}
    >
      {/* Texto del botón */}
      <span style={{ position: "relative", zIndex: 2 }}>{label}</span>
      
      {/* Fondo animado que se mueve entre botones */}
      {active && (
        <motion.div
          layout="position" // <-- Cambio clave: solo anima la posición
          layoutId="active-pill"
          className="filter-chip-active-bg"
          transition={{ type: "spring", duration: 0.5,ease: "easeOut"}} // <-- Mucho más ligero que 'spring' 
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "#111827",
            borderRadius: "999px",
            zIndex: 1
          }}
        />
      )}
    </button>
  );
};

export default FilterButton;
