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

  // Variantes para que las cards aparezcan una tras otra
 export const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Retraso entre la aparición de cada card
        duration: 0.3, 
        ease: "easeOut" // <-- Mucho más ligero que 'spring'
      },
    },
  };

export const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
  };