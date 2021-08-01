import queryStringToJSON from "qs-to-json";

export const handleNav = (url) => {
    let newUrl;
    if (typeof url  === "string") {
      newUrl = url;
    } else {
      const oldParams = queryStringToJSON(window.location.search.slice(1));
      const params = new URLSearchParams({...oldParams, ...url.query}).toString()

      newUrl = `/?${params}#${url.target}` 
    }


    window.history.pushState(null, "", newUrl);
    let myEvent = new Event("popstate");
    window.dispatchEvent(myEvent);
  };