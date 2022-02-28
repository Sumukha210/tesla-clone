import React from "react";
import SectionLayout2 from "@/module/sections/sectionLayout_2";
import { gridSectionProps } from "@/module/sections/sectionLayout_2/types";
import styled from "styled-components";
import DOMPurify from "isomorphic-dompurify";
import { SpecContainer, Spec } from "@/module/heroTemplate/specificationStyles";
import utilityImg from "@/assets/images/modelx-page/MX-Utility-Hero-Desktop.jpg";

const Utility = () => {
  const specifications = [
    {
      specName: `Go anywhere with up to 405 miles of <br/> estimated range on a single charge`,
      specValue: `405 mi`,
    },
    {
      specName: `Recharge up to 200 miles in 15 minutes at <br/> Supercharger locations`,
      specValue: "15 min",
    },
    {
      specName: "Superchargers placed along popular <br/> routes",
      specValue: "30,000+",
    },
  ];

  const data: gridSectionProps = {
    data: {
      caption: "Utility",
      title: "Even More Capable",
      description:
        "With the most storage space and towing capacity of any electric SUV, and seating for up to seven adults, Model X delivers maximum utility. Front doors open and close automatically, Falcon Wing doors allow for easier loading and a standard trailer hitch lets you bring your gear anywhere you go.",
      img: utilityImg,
    },
  };

  return (
    <>
      <SectionLayout2 {...data} orderNowBtnPath="modelx">
        <Content>
          <SpecContainer>
            {specifications.map(({ specName, specValue: SpecValue }, index) => (
              <Spec key={index}>
                <h2 className="heading-2">{SpecValue}</h2>
                <h5
                  className="subtitle-3"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(specName),
                  }}></h5>
              </Spec>
            ))}
          </SpecContainer>
        </Content>
      </SectionLayout2>
    </>
  );
};

export default Utility;

const Content = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 0%;
  width: 100%;
  margin: auto;

  h2,
  h5 {
    text-align: center;
  }
`;
