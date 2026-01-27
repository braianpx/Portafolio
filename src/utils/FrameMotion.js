// Variantes de animación para Framer Motion
export const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 100, damping: 10 }
  }
};

// Variantes para los filtros (opcional, para la siguiente mejora)
export const filterVariants = {
  active: { scale: 1.1, originX: 0, transition: { type: "spring", stiffness: 500, damping: 30 } },
  inactive: { scale: 1 },
};

export const containerVariants = {
  hidden: { opacity: 0 }, // Añadí un hidden inicial para que toda la sección pueda aparecer
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1, // Retraso antes de que los hijos comiencen a animarse
      staggerChildren: 0.08 // Retraso entre cada hijo (cada tarjeta)
    }
  }
};