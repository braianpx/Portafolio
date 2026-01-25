/* Botón para alternar contenido */
const AboutToggle = ({ showSummary, onClick }) => (
  <div className="mt-1 text-end">
    <button className="about-toggle" onClick={onClick}>
      {showSummary ? "Ver descripción completa" : "Ver resumen"}
    </button>
  </div>
);

export default AboutToggle;