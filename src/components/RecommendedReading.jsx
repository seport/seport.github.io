import React from "react";
import Markdown from "markdown-to-jsx";
import recommendedReading from "../recommendedReading";

const RecommendedReading = ({ language }) => {
  return (
    <div id="recommended-reading">
      {recommendedReading[`${language}`] && (
        <Markdown>{recommendedReading[`${language}`]}</Markdown>
      )}
      {!recommendedReading[`${language}`] && <div>Nothing here.</div>}
    </div>
  );
};

export default RecommendedReading;
