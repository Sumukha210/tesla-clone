import React from "react";
import HeroTemplate from "@/module/hero";
import heroImg from "@/assets/images/solarPanels-page/hero.jpg";
import { FaSolarPanel } from "react-icons/fa";
import Button from "@/element/button";
import { useRouter } from "next/router";
import { CustomHero, SpecificationContent, Wrapper } from "./style";
import { BiDollar } from "react-icons/bi";

const Hero = () => {
  const router = useRouter();

  return (
    <CustomHero>
      <HeroTemplate
        img={heroImg}
        name="Solar Roof"
        subtitle="Transform your roof and produce clean energy">
        <Wrapper>
          <SpecificationContent>
            <div>
              <FaSolarPanel />
              <h6 className="subtitle-3">
                Convert Sunlight <br /> to Energy
              </h6>
            </div>

            <div>
              <h3 className="heading-2">
                <BiDollar />
              </h3>
              <h6 className="subtitle-3">
                Guaranteed Lowest <br /> Price for Solar
              </h6>
            </div>

            <div>
              <h3 className="heading-2">24/7</h3>
              <h6 className="subtitle-3">
                Energy <br /> Monitoring
              </h6>
            </div>
          </SpecificationContent>

          <div>
            <Button
              outlineBtn={true}
              lightOutlineBtn={true}
              name="Order now"
              onClick={() => router.push("/energy/design")}
            />
          </div>
        </Wrapper>
      </HeroTemplate>
    </CustomHero>
  );
};

export default Hero;
