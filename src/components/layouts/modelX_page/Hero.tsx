import React from "react";
import heroImg from "@/assets/images/modelx-page/MX-Hero-Desktop.jpg";
import HeroTemplate from "@/module/hero";
import { products } from "@/utils/productDetails";
import Specifications from "@/module/hero/Specifications";

const Hero = () => {
  const specifications =
    products[1].modelVersion?.version1?.specifications || [];

  return (
    <HeroTemplate img={heroImg} name="Model X" subtitle="Plaid">
      <Specifications
        id={products[1].generalInfo.id}
        specifications={[
          ...specifications?.slice(0, 3),
          ...specifications.slice(4, 6),
        ]}
      />
    </HeroTemplate>
  );
};

export default Hero;
