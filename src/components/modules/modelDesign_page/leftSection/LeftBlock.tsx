import React from "react";
import styled from "styled-components";
import Carousel from "./carousel";

const LeftBlock = () => {
  return (
    <LeftSection>
      <Carousel />
    </LeftSection>
  );
};

export default LeftBlock;

const LeftSection = styled.div`
  align-self: center;
`;
