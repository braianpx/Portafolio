/* Botón de descarga de CV */
const DownloadButton = ({ resume }) => (
  resume ? (
    <div className="mt-3">
      <a
        className="btn btn-dark btn-lg px-4 fs-5"
        href={resume}
        target="_blank"
        rel="noreferrer noopener"
      >
        Descargar CV
      </a>
    </div>
  ) : null
);

export default DownloadButton;