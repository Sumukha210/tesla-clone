import React from "react";
import heroImg from "@/assets/images/modelx-page/hero.jpg";
import HeroTemplate from "@/module/heroTemplate";
import { products } from "@/utils/productDetails";
import Specifications from "@/module/heroTemplate/Specifications";

const Hero = () => {
  const specifications =
    products[1].modelVersion?.version1?.specifications || [];

  return (
    <HeroTemplate img={heroImg} name="Model X" subtitle="Plaid">
      <Specifications
        id={products[1].generalInfo.id}
        specifications={[
          specifications[0],
          specifications[2],
          specifications[specifications.length - 1],
          specifications[specifications.length - 2],
        ]}
      />
    </HeroTemplate>
  );
};

export default Hero;
