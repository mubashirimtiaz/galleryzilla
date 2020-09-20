import React from "react";
import { ModalBackDrop, ImageContainer } from "./modal.styles";

const Modal = ({ selectedImg, setSelectedImg }) => {
  const handleClick = (event) => {
    if (event.target.tagName === "DIV") {
      setSelectedImg(null);
    }
  };
  return (
    <ModalBackDrop
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={handleClick}
    >
      <ImageContainer
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        src={selectedImg}
        alt="enlarged-img"
      />
    </ModalBackDrop>
  );
};

export default Modal;
