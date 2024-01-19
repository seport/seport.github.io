import React, { PropsWithChildren } from "react";

const Card = ({ link, children }: PropsWithChildren<{ link?: string }>) => (
  <div
    className="card"
  >
    {children}
    {link && <>
      <small>{new URL(link).host}</small>
      <a href={link} className="card-link" />
    </>}
  </div>
);

export default Card;
