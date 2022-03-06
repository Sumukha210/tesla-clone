import React from "react";
import styled from "styled-components";
import Header from "./header";
import ModelVersionBtnContainer from "./ModelVersionBtnContainer";
import PaintBlock from "./PaintBlock";
import SpecBlock from "./SpecBlock";
import WheelBlock from "./WheelBlock";

const RightBlock = () => {
  return (
    <RightSection>
      <Header />
      <SpecBlock />
      <ModelVersionBtnContainer />
      <PaintBlock />
      <WheelBlock />
    </RightSection>
  );
};

export default RightBlock;

const RightSection = styled.div`
  overflow-y: auto;
  padding: 5rem 1.2rem;

  @media (min-width: 1200px) {
    background-color: whitesmoke;
  }

  &::-webkit-scrollbar {
    width: 0px;
  }
`;
