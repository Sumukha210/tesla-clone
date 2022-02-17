import React from "react";
import heroImg from "@/assets/images/modelx-page/MX-Hero-Desktop.jpg";
import HeroTemplate from "@/module/hero";

const Hero = () => {
  return (
    <HeroTemplate img={heroImg} name="Model X" subtitle="Plaid">
      bottom section
    </HeroTemplate>
  );
};

export default Hero;
