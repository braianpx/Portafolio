/**
 * Sub-componente para mostrar detalles de contacto (separado del layout)
 */
const ContactDetail = ({ label, value, href, Icon, isLink = true }) => (
  <div className="mb-4 d-flex align-items-center">
    {/* {Icon && <Icon className="me-3 text-primary fs-4" />} */}
    <div>
      <small className="text-muted text-uppercase fw-bold" style={{ fontSize: '0.75rem', letterSpacing: '1px' }}>
        {label}
      </small>
      <div className="mt-1">
        {isLink ? (
          <a href={href} target="_blank" rel="noreferrer" className="text-decoration-none fs-5 text-dark hover-link">
            {value}
          </a>
        ) : (
          <span className="fs-5 text-dark">{value}</span>
        )}
      </div>
    </div>
  </div>
);

export default ContactDetail;