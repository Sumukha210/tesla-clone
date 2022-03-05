import React from "react";
import styled from "styled-components";
import Header from "./header";
import ModelVersionBtnContainer from "./ModelVersionBtnContainer";
import SpecBlock from "./SpecBlock";

const RightBlock = () => {
  return (
    <RightSection>
      <Header />
      <SpecBlock />
      <ModelVersionBtnContainer />
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
