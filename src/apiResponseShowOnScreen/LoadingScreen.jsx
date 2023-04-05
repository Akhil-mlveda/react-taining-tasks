/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import LoadingImg from "./Spinner.gif";

function LoadingScreen() {
  return (
    <div>
      <img
        src={LoadingImg}
        alt="Loading Image"
        style={{ width: "20vw", height: "20vw", margin: "15% 15%" }}
      />
    </div>
  );
}

export default LoadingScreen;
