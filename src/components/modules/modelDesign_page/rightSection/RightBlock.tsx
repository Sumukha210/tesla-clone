import React from "react";
import styled from "styled-components";
import Header from "./header";
import ModelVersionBtnContainer from "./ModelVersionBtnContainer";
import PaintBlock from "./PaintBlock";
import SpecBlock from "./SpecBlock";

const RightBlock = () => {
  return (
    <RightSection>
      <Header />
      <SpecBlock />
      <ModelVersionBtnContainer />
      <PaintBlock />
    </RightSection>
  );
};

export default RightBlock;

const RightSection = styled.div`
  background-color: whitesmoke;
  overflow-y: auto;
  padding: 5rem 1.2rem;

  &::-webkit-scrollbar {
    width: 0px;
  }
`;
