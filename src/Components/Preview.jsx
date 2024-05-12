import React, { useState } from "react";

const Preview = ({ preview }) => {
  const [image, setImage] = useState(0);

  return (
    <div className="previewer">
      <button></button>
      <img />
      <button></button>
    </div>
  );
};
export default Preview;
