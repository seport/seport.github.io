import React, { useRef, useEffect } from "react";

const Carousel = ({ isShifted, children }) => {
  const containerRef = useRef();
  const ref1 = useRef();
  const ref2 = useRef();

  const setHeight = () => {
    const height1 = ref1.current.offsetHeight;
    const height2 = ref2.current.offsetHeight;
    const height = isShifted ? height2 : height1;

    const container = containerRef.current;

    container.setAttribute("style", `height: ${height}px`);
  };

  useEffect(() => {
    setHeight();

    const images = document.querySelectorAll("#project img");
    if (images) {
      images.forEach((img) => {
        if (img.complete) {
          setHeight();
        } else {
          img.addEventListener("load", setHeight);
        }
      });
    }
  }, [isShifted]);

  return (
    <div className="carousel__container">
      <div className={`carousel ${isShifted ? "shifted" : ""}`} ref={containerRef}>
        {React.cloneElement(children[0], {
          reference: ref1,
        })}
        {React.cloneElement(children[1], {
          reference: ref2,
        })}
      </div>
    </div>
  );
};

export default Carousel;
