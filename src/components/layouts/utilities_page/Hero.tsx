import React from "react";
import HeroTemplate from "@/module/heroTemplate";
import img from "@/assets/images/utilities-page/utilities-hero.jpg";
import { specificationsTypes } from "@/utils/productDetails/types";
import {
  Spec,
  Wrapper,
  SpecContainer,
  BtnContainer,
} from "@/module/heroTemplate/specificationStyles";
import Button from "@/element/button";
import { useRouter } from "next/router";
import DOMPurify from "isomorphic-dompurify";
import styled from "styled-components";

const Hero = () => {
  const data: specificationsTypes[] = [
    {
      specName: `Countries With <br />Industrial Installations`,
      specValue: "50+",
    },
    { specName: `Deployed <br />Storage`, specValue: `10 GWh+` },
    { specName: "Industrial Sites <br />in Operation", specValue: "1,000+" },
  ];

  const router = useRouter();

  return (
    <ParentContainer>
      <HeroTemplate name="Utilities" img={img}>
        <Wrapper showOverlay={false}>
          <SpecContainer>
            {data.map(({ specName, specValue }, index) => (
              <Spec key={index}>
                <h2 className="heading-2">{specValue}</h2>
                <h5
                  className="subtitle-3"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(specName),
                  }}></h5>
              </Spec>
            ))}
          </SpecContainer>

          <BtnContainer>
            <Button
              outlineBtn
              lightOutlineBtn
              name="Contact us"
              onClick={() => router.push("/contact-us")}
            />
          </BtnContainer>
        </Wrapper>
      </HeroTemplate>
    </ParentContainer>
  );
};

export default Hero;

const ParentContainer = styled.div`
  h1 {
    color: #fff;
  }
`;
