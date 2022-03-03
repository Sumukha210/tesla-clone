import SectionLayout1 from "@/module/sections/sectionLayout_1";
import React from "react";
import styled from "styled-components";
import Carousel from "./Carousel";

const Utility = () => {
  return (
    <Wrapper>
      <SectionLayout1
        title="A Place for Everything"
        caption="utility"
        description="Model Y provides maximum versatility—able to carry 7 passengers and their cargo. Each second row seat folds flat independently, creating flexible storage for skis, furniture, luggage and more. The liftgate opens to a low trunk floor that makes loading and unloading easy and quick."
        showMainImg={false}
        btn1Path="/modely/design"
        img=""
      />

      <Carousel />
    </Wrapper>
  );
};

export default Utility;

export const Wrapper = styled.div``;
