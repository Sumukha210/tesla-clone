import React from "react";
import { featureType } from "@/types/featureType";
import SectionLayout1 from "@/module/sections/sectionLayout_1";
import img from "@/assets/images/models-page/MS-Performance-Hero-Desktop.jpg";
import styled from "styled-components";
import { modelSDetails } from "@/utils/productDetails/modelSDetails";
import { specificationsTypes } from "@/utils/productDetails/types";

const PlaidModel = () => {
  const data: featureType = {
    img,
    caption: "plaid",
    title: "Beyond Ludicrous",
    description:
      "Model S Plaid has the quickest acceleration of any vehicle in production. Updated battery architecture for all Model S trims enables back-to-back track runs without performance degradation",
  };

  const specifications: specificationsTypes[] = [
    { specName: "Peak Power", specValue: "1,020 hp" },
    { specName: "@155 mph 1/4 mile", specValue: "9.23 s" },
    { specName: "0-60 mph*", specValue: "1.99 s" },
  ];

  return (
    <>
      <SectionLayout1 {...data} btn1Path="/models/design">
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
                  <h5 className="subtitle-3">{specName}</h5>
                </Spec>
              );
            })}
          </Content>
        </OverlapOnMedia>
      </SectionLayout1>
    </>
  );
};

export default PlaidModel;

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
