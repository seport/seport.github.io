export const handleNav = (url) => {
    window.history.pushState(null, "", url);
    let myEvent = new Event("popstate");
    window.dispatchEvent(myEvent);
  };