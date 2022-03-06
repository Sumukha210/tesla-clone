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

  @media (max-width: 1199.98px) {
    margin-top: 5rem;
  }
`;
