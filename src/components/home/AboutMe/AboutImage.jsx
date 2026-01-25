/* Imagen del perfil */
const AboutImage = ({ imageLink }) => (
  <div className="col-lg-4 text-center mb-4 mb-lg-0">
    <div className="about-image-wrapper">
      <img src={imageLink} alt="Braian Valdez" className="about-image" />
    </div>
  </div>
);
export default AboutImage;