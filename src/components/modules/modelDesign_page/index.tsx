import React, { useEffect } from "react";
import Header from "./rightSection/header";
import useStore from "./store";
import { LeftSection, RightSection, Wrapper } from "./styles";
import { modelData } from "./data";
import RightBlock from "./rightSection";

const CarModelDesignPage = () => {
  const addModelData = useStore(state => state.addModelData);

  useEffect(() => {
    addModelData(modelData);
  }, []);

  return (
    <Wrapper>
      <LeftSection></LeftSection>
      <RightBlock />
    </Wrapper>
  );
};

export default CarModelDesignPage;
