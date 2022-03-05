import React from "react";
import { RightSection } from "../styles";
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
