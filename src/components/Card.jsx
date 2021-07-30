import React from "react";

const Card = ({ height, width, children }) => (
  <div
    className="card"
    style={{
      minHeight: `${height ? height : "auto"}`,
      minWidth: `${width ? width : "auto"}`,
    }}
  >
    {children}
  </div>
);

export default Card;
