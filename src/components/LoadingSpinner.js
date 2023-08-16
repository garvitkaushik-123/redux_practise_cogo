import React from "react";
import { css } from "@emotion/react";
import { ClipLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function LoadingSpinner() {
  return (
    <div className="sweet-loading">
      <ClipLoader css={override} size={200} color={"#3498db"} loading={true} />
      {/* Increase the size from 150 to 200 */}
    </div>
  );
}

export default LoadingSpinner;
