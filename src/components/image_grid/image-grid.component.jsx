import React, { useState } from "react";
import useFirestore from "../../hooks/use_firestore/use-firestore.hook";
import Modal from "../modal/modal.component";
import {
  ImageGridContainer,
  ImageWrap,
  ImageContainer,
} from "./image-grid.styles";

const ImageGrid = () => {
  const { docs } = useFirestore("images");
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <ImageGridContainer>
      {docs &&
        docs.map((doc) => (
          <ImageWrap
            layout
            whileHover={{ opacity: 1 }}
            key={doc.id}
            onClick={() => setSelectedImg(doc.url)}
          >
            <ImageContainer
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              src={doc.url}
              alt={doc.name}
            />
          </ImageWrap>
        ))}
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </ImageGridContainer>
  );
};

export default ImageGrid;
