import React, { useState, useEffect } from "react";

const Preview = ({ preview }) => {
  const [content, setContent] = useState([]);
  const [images, setImages] = useState(0);
  const nextImg = () => {
    if (preview.length === images + 1) {
      setImages(0);
    } else {
      setImages(images + 1);
    }
  };

  useEffect(() => {
    setContent(
      preview.map((e, index) =>
        index !== images ? (
          <img
            key={index}
            src={e.image}
            className="previewImg hidden"
            onClick={() => nextImg()}
            alt={e.alt}
          />
        ) : (
          <img
            key={index}
            src={e.image}
            className="previewImg"
            onClick={() => nextImg()}
            alt={e.alt}
          />
        )
      )
    );
  }, [images]);
  return <div className="previewer">{content}</div>;
};
export default Preview;
