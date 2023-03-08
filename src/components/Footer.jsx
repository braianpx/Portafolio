import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
        <i className="fas fa-code" /> <i className="fas fa-heart" />{" "}
        <a
          rel="noopener"
          href="https://github.com/braianpx"
          aria-label="My GitHub"
        > <span className="badge bg-dark">
            Braian Oscar Valdez
          </span>
        </a>{" "}
        usando <i className="fab fa-react" />
        <p>
          <small className="text-muted">
          </small>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
