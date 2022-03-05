import React, { useEffect } from "react";
import useStore from "./store";
import { Wrapper } from "./styles";
import { modelData } from "./data";
import RightBlock from "./rightSection/RightBlock";
import LeftBlock from "./leftSection/LeftBlock";

const CarModelDesignPage = () => {
  const addModelData = useStore(state => state.addModelData);

  useEffect(() => {
    addModelData(modelData);
  }, []);

  return (
    <Wrapper>
      <LeftBlock />
      <RightBlock />
    </Wrapper>
  );
};

export default CarModelDesignPage;
