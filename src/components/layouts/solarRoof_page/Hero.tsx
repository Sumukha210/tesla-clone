import React from "react";
import HeroTemplate from "@/module/hero";
import heroImg from "@/assets/images/solarRoof-page/hero.png";
import styled from "styled-components";
import { FaSolarPanel } from "react-icons/fa";
import Button from "@/element/button";
import { useRouter } from "next/router";

const Hero = () => {
  const router = useRouter();

  return (
    <CustomHero>
      <HeroTemplate
        img={heroImg}
        name="Solar Roof"
        subtitle="Transform your roof and produce clean energy">
        <Wrapper>
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

          <div>
            <Button
              outlineBtn={true}
              lightOutlineBtn={true}
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

const CustomHero = styled.div`
  .heading-1,
  .subtitle-2 {
    color: #fff;
  }

  .subtitle-2 {
    font-weight: 500;
    margin-top: 8px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  text-align: center;

  & > div {
    svg {
      height: 25px;
      width: 25px;
    }
    margin-right: 4rem;

    h6 {
      margin-top: 8px;
      font-weight: 400;
      color: #e2e3e3;
    }
  }
`;
