import React from "react";
import GridSection from "../../modules/sections/sectionLayout_2";
import { featureType } from "./types";
import img from "@/assets/images/solarRoof-page/efficiency.jpg";
import styled from "styled-components";

const Efficiency = () => {
  const data: featureType = {
    caption: "efficiency",
    title: "Maximum Solar Production",
    description: `Generate the most energy possible, even on roofs with complicated angles and intermittent sunlight. Combined with Tesla Solar Inverter, your fully integrated system is safe, reliable and outage ready. With built-in connectivity, Tesla Solar Inverter will continue to improve with each over-the-air software update.`,
    img,
  };

  return (
    <Wrapper className="margin-top">
      <GridSection data={data} orderNowBtnPath="solarroof" />
    </Wrapper>
  );
};

export default Efficiency;

const Wrapper = styled.div``;
