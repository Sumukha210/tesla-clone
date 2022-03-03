import SectionLayout1 from "@/module/sections/sectionLayout_1";
import { SectionLayout1Props } from "@/module/sections/sectionLayout_1/types";
import React from "react";
import styled from "styled-components";
import img from "@/assets/images/modely-page/AWD_hero@2.jpg";
import DOMPurify from "isomorphic-dompurify";

const DualMotor = () => {
  const data: SectionLayout1Props = {
    caption: "All-Wheel Drive",
    title: "Dual Motor",
    description: `Tesla All-Wheel Drive has two ultra-responsive, independent electric motors that digitally control torque to the front and rear wheels—for far better handling, traction and stability control. Model Y is capable in rain, snow, mud and off-road.`,
    img,
    btn1Path: "/modely/design",
  };

  const specifications = [
    {
      specName:
        "Independent motors digitally control <br/> torque to the front and rear wheels",
      specValue: "2",
    },
    {
      specName:
        "Quickest acceleration—from zero to 60 <br/> mph* in as little as 3.5 seconds",
      specValue: "3.5 s",
    },
    {
      specName:
        "Capable in rain, snow, mud and off-road <br/> with superior traction control",
      specValue: "1.99 s",
    },
  ];

  return (
    <Wrapper className="margin-top">
      <SectionLayout1 {...data}>
        <OverlapOnMedia>
          <Content>
            {specifications.map(({ specName, specValue }) => {
              const split = specValue.split(" ");

              return (
                <Spec key={specName}>
                  <h2>
                    <span className="heading-2">{split[0]}</span>
                    <span className="heading-3"> {split[1]}</span>
                  </h2>
                  <h5
                    className="subtitle-3"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(specName),
                    }}></h5>
                </Spec>
              );
            })}
          </Content>
        </OverlapOnMedia>
      </SectionLayout1>
    </Wrapper>
  );
};

export default DualMotor;

const Wrapper = styled.div``;

const OverlapOnMedia = styled.div`
  position: absolute;
  bottom: 0%;
  left: 0%;
  text-align: center;
  width: 100%;
  padding-bottom: 4rem;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 10px;

  @media (min-width: 768px) {
    width: 50%;
    margin: auto;
  }
`;

const Spec = styled.div`
  color: #fff;

  &:not(:last-child) {
    margin-right: 2rem;

    @media (min-width: 576px) {
      margin-right: 4rem;
    }
  }
`;
