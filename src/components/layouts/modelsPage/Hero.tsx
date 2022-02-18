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
        specifications={[
          ...specifications?.slice(0, 1),
          ...specifications.slice(2, 6),
        ]}
      />
    </HeroTemplate>
  );
};

export default Hero;
