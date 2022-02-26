import React from "react";
import SectionLayout2 from "@/module/sections/sectionLayout_2";
import { gridSectionProps } from "@/module/sections/sectionLayout_2/types";
import styled from "styled-components";
import DOMPurify from "isomorphic-dompurify";
import { SpecContainer, Spec } from "@/module/heroTemplate/specificationStyles";

const Range = () => {
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
      caption: "Range",
      title: "Go Anywhere",
      description:
        "Travel farther on a single charge than any other electric vehicle—and keep going with access to 30,000+ Superchargers globally. By combining up to 405 miles of estimated range with Tesla fast charging technology, you’ll spend less time charging and even more time on the road.",
      img: "/videos/models/Plaid-Range-Web-Desktop-8mb.mp4",
    },
  };

  return (
    <>
      <SectionLayout2 {...data} imgFirst orderNowBtnPath="models">
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

export default Range;

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
