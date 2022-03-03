import React from "react";
import heroImg from "@/assets/images/modely-page/hero.jpg";
import HeroTemplate from "@/module/heroTemplate";
import { products } from "@/utils/productDetails";
import Specifications from "@/module/heroTemplate/Specifications";
import styled from "styled-components";

const Hero = () => {
  return (
    <Wrapper>
      <HeroTemplate img={heroImg} name="Model Y">
        <Specifications
          showOverlay={false}
          id={products[0].generalInfo.id}
          specifications={[
            { specName: "range", specValue: "330 ml" },
            { specName: "Cargo Space", specValue: "76 cu.ft" },
            { specName: "Dual Motor", specValue: "AWD" },
          ]}
        />
      </HeroTemplate>
    </Wrapper>
  );
};

export default Hero;

const Wrapper = styled.div`
  h1 {
    color: #fff;
  }
`;
