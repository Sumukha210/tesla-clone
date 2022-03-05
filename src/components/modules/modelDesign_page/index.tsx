import React from "react";
import Header from "./rightSection/header";
import { LeftSection, RightSection, Wrapper } from "./styles";

const CarModelDesignPage = () => {
  return (
    <Wrapper>
      <LeftSection></LeftSection>
      <RightSection>
        <Header />
      </RightSection>
    </Wrapper>
  );
};

export default CarModelDesignPage;
