import React, { PropsWithChildren } from "react";

const Card = ({ height, width, children }: PropsWithChildren<{height?: string, width?: string}>) => (
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
