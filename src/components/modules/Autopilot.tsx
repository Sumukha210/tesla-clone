import React from "react";
import styled from "styled-components";
import DOMPurify from "isomorphic-dompurify";
import SectionLayout1 from "./sections/sectionLayout_1";
import { SectionLayout1Props } from "./sections/sectionLayout_1/types";

const AutoPilot = () => {
  const specifications = [
    {
      specName: `Rear, side and forward-facing cameras <br/> provide maximum visibility`,
      specValue: `360`,
    },
    {
      specName: `Powerful visual processing at up to 250 <br/> meters of range`,
      specValue: "250m",
    },
    {
      specName:
        "Detects nearby cars, helps prevent <br/> potential collisions and assists with <br/> parking",
      specValue: "Ultrasonic <br/> sensors",
    },
  ];

  const data: SectionLayout1Props = {
    caption: "Autopilot",
    title: "Future of Driving",
    description:
      "Travel farther on a single charge than any other electric vehicle—and keep going with access to 30,000+ Superchargers globally. By combining up to 405 miles of estimated range with Tesla fast charging technology, you’ll spend less time charging and even more time on the road.",
    img: "/videos/models/autopilot.webm",
    btn1Path: "models",
  };

  return (
    <Wrapper>
      <SectionLayout1 {...data}>
        <Content>
          <SpecContainer>
            {specifications.map(({ specName, specValue: SpecValue }, index) => (
              <Spec key={index}>
                <h2
                  className="heading-3"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(SpecValue),
                  }}></h2>
                <h5
                  className="subtitle-3"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(specName),
                  }}></h5>
              </Spec>
            ))}
          </SpecContainer>
        </Content>
      </SectionLayout1>
    </Wrapper>
  );
};

export default AutoPilot;

const Wrapper = styled.div``;

const SpecContainer = styled.div`
  position: relative;
  z-index: 2;
`;

const Spec = styled.div`
  &:not(:last-child) {
    margin-bottom: 4rem;
  }

  h2 {
    margin-bottom: 0.5rem;
  }

  h5 {
    font-weight: 500;
  }

  h2,
  h5 {
    color: #000;
  }
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 5%;
`;
