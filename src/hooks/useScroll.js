import { useState, useEffect } from "react";

const useScroll = () => {
  const [scrollY, setScrollY] = useState(0);

  const throttle = (fn) => {
    var time = Date.now();
    return function() {
      if ((time + 10 - Date.now()) < 0) {
        fn();
        time = Date.now();
      }
    }
  }

  const onScroll = () => {
    setScrollY(window.scrollY);
  };

  window.addEventListener("scroll", throttle(onScroll));

  return scrollY;
};

export default useScroll;
