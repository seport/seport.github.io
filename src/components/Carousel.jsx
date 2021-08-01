import React, { useRef, useEffect } from "react";

const Carousel = ({ isShifted, children }) => {
  const containerRef = useRef();
  const ref1 = useRef();
  const ref2 = useRef();

  useEffect(() => {
    const height1 = ref1.current.offsetHeight;
    const height2 = ref2.current.offsetHeight;
    const height = isShifted ? height2 : height1;

    const container = containerRef.current;

    container.setAttribute("style", `height: ${height}px`);
  }, [isShifted]);

  return (
    <div class="carousel__container">
      <div class={`carousel ${isShifted ? "shifted" : ""}`} ref={containerRef}>
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
