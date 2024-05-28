import React from "react";

const ListItem = ({ content, img }) => {
  return (
    <li>
      <img src={img} height="40px" width="40px" alt={content + "Icon"} />
      {content}
    </li>
  );
};

export default ListItem;
