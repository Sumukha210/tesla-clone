import React from "react";
import HeroTemplate from "@/module/heroTemplate";
import heroImg from "@/assets/images/solarRoof-page/hero.png";
import { FaSolarPanel } from "react-icons/fa";
import Button from "@/element/button";
import { useRouter } from "next/router";
import { CustomHero, SpecificationContent, Wrapper } from "./style";

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
                Beautiful Solar <br /> Without Compromise
              </h6>
            </div>

            <div>
              <h3 className="heading-2">25 -Year</h3>
              <h6 className="subtitle-3">
                Tile <br /> Warranty
              </h6>
            </div>

            <div>
              <h3 className="heading-2">24/7</h3>
              <h6 className="subtitle-3">
                Outrage <br /> Protection
              </h6>
            </div>
          </SpecificationContent>

          <div>
            <Button
              variant="outline"
              color="light"
              name="Order now"
              onClick={() => router.push("/solarroof/design")}
            />
          </div>
        </Wrapper>
      </HeroTemplate>
    </CustomHero>
  );
};

export default Hero;
