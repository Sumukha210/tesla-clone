import React from "react";
import GridSection from "../../modules/sections/sectionLayout_2";
import img from "@/assets/images/solarRoof-page/valueformoney.jpg";
import styled from "styled-components";
import { featureType } from "@/types/featureType";

const ValueForMoney = () => {
  const data: featureType = {
    caption: "value",
    title: "Pay Less for Electricity",
    description: `Solar Roof is the only roof that can help pay for itself with the energy you produce. Power your home at the lowest price per watt of any national provider and take control of your monthly electricity bill.`,
    img,
  };

  return (
    <Wrapper className="margin-top">
      <GridSection data={data} orderNowBtnPath="solarroof" />
    </Wrapper>
  );
};

export default ValueForMoney;

const Wrapper = styled.div`
  @media (max-width: 575.98px) {
    margin: 0px;
  }
`;
