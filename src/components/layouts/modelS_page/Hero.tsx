import React from "react";
import heroImg from "@/assets/images/models-page/hero.jpg";
import HeroTemplate from "@/module/hero";
import { products } from "@/utils/productDetails";
import Specifications from "@/module/hero/Specifications";

const Hero = () => {
  const specifications =
    products[0].modelVersion?.version1?.specifications || [];

  return (
    <HeroTemplate img={heroImg} name="Model S" subtitle="Plaid">
      <Specifications
        id={products[0].generalInfo.id}
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
