import React from "react";
import SectionLayout2 from "@/module/sections/sectionLayout_2";
import { gridSectionProps } from "@/module/sections/sectionLayout_2/types";
import img from "@/assets/images/utilities-page/utilities-megapack.jpg";
import styled from "styled-components";
import DOMPurify from "isomorphic-dompurify";
import { SpecContainer, Spec } from "@/module/heroTemplate/specificationStyles";
import { BsCurrencyDollar } from "react-icons/bs";

const Hardware = () => {
  const specifications = [
    {
      specName: `Faster installation with factory- <br />integrated hardware`,
      specValue: "10X",
    },
    {
      specName: `Reduced engineering, procurement and <br />construction costs`,
      specValue: BsCurrencyDollar,
    },
    {
      specName:
        "Storage allows for renewable <br />integration and capacity reserve",
      specValue: "1,000+",
    },
  ];

  const data: gridSectionProps = {
    data: {
      caption: "hardware",
      title: "Meet Megapack",
      description:
        "Every year, electrical grids around the world add more renewable energy. Our grid-scale batteries and software controls store and dispatch this energy, creating a more stable and sustainable grid. We can lower lifecycle costs and deliver reliable energy for utilities and developers alike by combining hardware, software, installation and service into one integrated system.",
      img,
    },
  };

  return (
    <>
      <SectionLayout2
        {...data}
        imgFirst
        orderNowBtnPath="megapack"
        secondBtnPath="/megapack"
        secondBtnText="learn more">
        <Content>
          <SpecContainer>
            {specifications.map(({ specName, specValue: SpecValue }, index) => (
              <Spec key={index}>
                <h2 className="heading-2">
                  {typeof SpecValue === "string" ? SpecValue : <SpecValue />}
                </h2>
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

export default Hardware;

const Content = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 0%;
  width: 100%;
  margin: auto;

  h2,
  h5 {
    color: #000;
    text-align: center;
  }
`;
