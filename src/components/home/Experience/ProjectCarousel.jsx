import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const ProjectCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const totalImages = images.length;
  const mainImage = images[currentIndex];

  const prevImage = () => setCurrentIndex(prev => (prev === 0 ? totalImages - 1 : prev - 1));
  const nextImage = () => setCurrentIndex(prev => (prev === totalImages - 1 ? 0 : prev + 1));

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="mt-3">
      <div
        className="d-flex justify-content-center align-items-center position-relative"
        style={{ maxWidth: "100%", maxHeight: "400px" }}
      >
        <Button
          variant="light"
          style={{
            fontWeight:"500",
            fontSize:"18px",
            position: "relative",
            left: 0,
            zIndex: 2,
            height: "40px",
            width: "40px",
            borderRadius: "100%",
            border:"1px solid gray",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: 0.7,
          }}
          onClick={prevImage}
        >
          {"<"}
        </Button>

        <img
          src={mainImage}
          alt={`Project ${currentIndex + 1}`}
          style={{
            width: "65%",
            maxHeight: "400px",
            objectFit: "contain",
            borderRadius: "12px",
            cursor: "zoom-in",
          }}
          onClick={handleOpenModal}
        />

        <Button
          variant="light"
          style={{
            fontWeight:"500",
            fontSize:"18px",
            position: "relative",
            right: 0,
            zIndex: 2,
            height: "40px",
            width: "40px",
            borderRadius: "100%",
            border:"1px solid gray",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: 0.7,
          }}
          onClick={nextImage}
        >
          {">"}
        </Button>
      </div>

      {/* Miniaturas */}
      <div className="d-flex gap-2 justify-content-center mt-2 flex-wrap">
        {images.map((imgSrc, index) => (
          <img
            key={index}
            src={imgSrc}
            alt={`thumb ${index + 1}`}
            onClick={() => setCurrentIndex(index)}
            style={{
              width: "60px",
              height: "60px",
              objectFit: "cover",
              borderRadius: "8px",
              cursor: "pointer",
              border: index === currentIndex ? "2px solid #0d6efd" : "2px solid transparent",
              transition: "transform 0.2s",
            }}
            onMouseOver={e => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseOut={e => (e.currentTarget.style.transform = "scale(1)")}
          />
        ))}
      </div>

      {/* Modal zoom */}
      <Modal show={showModal} onHide={handleCloseModal} centered size="xl">
        <Modal.Body
          style={{
            padding: 0,
            backgroundColor: "#000",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={mainImage}
            alt={`Project zoom`}
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "90vh",
              objectFit: "contain",
              cursor: "zoom-out",
            }}
            onClick={handleCloseModal}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ProjectCarousel;
