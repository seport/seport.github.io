import React from "react";
import ReactMarkdown from "react-markdown";
import recommendedReading from "../recommendedReading";

const RecommendedReading = ({ language }) => {
  return (
    <div id="recommended-reading">
      {recommendedReading[`${language}`] && (
        <ReactMarkdown>{recommendedReading[`${language}`]}</ReactMarkdown>
      )}
      {!recommendedReading[`${language}`] && <div>Nothing here.</div>}
    </div>
  );
};

export default RecommendedReading;
