import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({ x: 0, y: 0 });

  const throttle = (fn: () => void) => {
    var time = Date.now();
    return function () {
      if (time + 10 - Date.now() < 0) {
        fn();
        time = Date.now();
      }
    };
  };

  const onResize = () => {
    setWindowSize({ x: window.innerWidth, y: window.innerHeight });
  };

  useEffect(() => {
    window.addEventListener("resize", throttle(onResize));
  }, []);

  return windowSize;
};

export default useWindowSize;
