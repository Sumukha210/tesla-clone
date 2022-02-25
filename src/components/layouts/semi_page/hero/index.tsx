import HeroTemplate from "@/module/heroTemplate";
import React from "react";
import semiImg from "@/assets/images/semi-page/performance/hero.jpg";
import { BsCurrencyDollar } from "react-icons/bs";
import DOMPurify from "isomorphic-dompurify";
import {
  BtnContainer,
  Spec,
  SpecContainer,
  Wrapper,
} from "@/module/heroTemplate/specificationStyles";
import { IconType } from "react-icons";
import { Content, DescriptionSection, HeroWrapper } from "./styles";
import Button from "@/element/button";

interface specificationsTypes {
  specName: string;
  specValue: IconType | string;
}

const Hero = () => {
  const specifications: specificationsTypes[] = [
    {
      specName: `0-60 mph with 80k lbs`,
      specValue: BsCurrencyDollar,
    },
    { specName: `Energy consumption`, specValue: "<2" },
    { specName: "Drag Coefficient", specValue: "0.36" },
  ];

  return (
    <HeroWrapper>
      <HeroTemplate name="Semi" img={semiImg}>
        <Content>
          <DescriptionSection>
            <h3 className="subtitle-1 description">
              ​Semi is the safest, most comfortable truck ever. Four independent
              motors provide maximum power and acceleration and require the
              lowest energy cost per mile.
            </h3>
          </DescriptionSection>

          <Wrapper showOverlay={false}>
            <SpecContainer>
              {specifications.map(
                ({ specName, specValue: SpecValue }, index) => (
                  <Spec key={index}>
                    <h2 className="heading-2">
                      {typeof SpecValue === "string" ? (
                        SpecValue
                      ) : (
                        <>
                          <SpecValue /> 20
                        </>
                      )}
                    </h2>
                    <h5
                      className="subtitle-3"
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(specName),
                      }}></h5>
                  </Spec>
                )
              )}
            </SpecContainer>

            <BtnContainer>
              <Button name="reserve now" variant="outline" color="light" />
            </BtnContainer>
          </Wrapper>
        </Content>
      </HeroTemplate>
    </HeroWrapper>
  );
};

export default Hero;
