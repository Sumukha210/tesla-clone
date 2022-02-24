import React from "react";
import HeroTemplate from "@/module/heroTemplate";
import heroImg from "@/assets/images/charging/hero.jpg";
import {
  Wrapper as SpecWrapper,
  Spec,
} from "@/module/heroTemplate/specificationStyles";
import { GiElectric } from "react-icons/gi";
import { IconType } from "react-icons";

interface specs {
  name: string | IconType;
  value: string;
}

const Hero = () => {
  const specs: specs[] = [
    { name: GiElectric, value: "Charge at Home" },
    { name: "30,000+", value: "Global superchargers" },
    { name: "4,500+", value: "Destination Charging sites" },
  ];

  return (
    <>
      <HeroTemplate img={heroImg} name="Stay charged">
        <SpecWrapper showOverlay={false}>
          <div>
            {specs.map(({ name: Name, value }, index) => (
              <Spec key={index} textColor="#000">
                <h2 className="heading-2">
                  {typeof Name === "string" ? Name : <Name />}
                </h2>
                <h5 className="subtitle-3">{value}</h5>
              </Spec>
            ))}
          </div>
        </SpecWrapper>
      </HeroTemplate>
    </>
  );
};

export default Hero;
