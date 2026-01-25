import AboutBullet from "./AboutBullet";

/* Contenido principal: mensaje o resumen */
const AboutContent = ({ showSummary, highlights, message }) => (
  <div className="about-content">
    {showSummary ? (
      <div className="about-summary">
        {highlights.map((item, index) => (
          <AboutBullet key={index} text={item} />
        ))}
      </div>
    ) : (
      <div className="about-text text-muted">
        {message
          .split("\n")
          .filter(Boolean)
          .map((line, index) => (
            <p key={index} className="mb-3">
              {line}
            </p>
          ))}
      </div>
    )}
  </div>
);


export default AboutContent;