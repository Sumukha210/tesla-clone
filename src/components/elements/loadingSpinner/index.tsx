import React from "react";
import { LoadingWrapper, Spinner } from "./style";

const LoadingSpinner = () => {
  return (
    <LoadingWrapper className="margin-top">
      <Spinner>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </Spinner>
    </LoadingWrapper>
  );
};

export default LoadingSpinner;
