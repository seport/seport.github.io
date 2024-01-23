import { useState, useEffect } from "react";
import queryStringToJSON from "qs-to-json";

const prasedLocation = (window: Window & typeof globalThis) => {
  const jsonSearch = queryStringToJSON(window.location.search.slice(1));
  return { hash: window.location.hash, search: jsonSearch, path: window.location.pathname }
}

const useWindowLocation = () => {
  const [location, setLocation] = useState(prasedLocation(window));

  const onPop = () => {
    setLocation(prasedLocation(window));
  };

  useEffect(() => {
    window.addEventListener("popstate", onPop);
  }, []);

  return location;
};

export default useWindowLocation;
