import React from "react";
import SectionLayout1 from "@/module/sections/sectionLayout_1";
import img from "@/assets/images/solarPanels-page/powerwall.jpg";
import styled from "styled-components";
import { featureType } from "@/types/featureType";

const PowerWall = () => {
  const data: featureType = {
    caption: "powerwall",
    title: "Home Battery Backup",
    description:
      "Powerwall is bundled with every Tesla solar purchase, allowing you to store your solar energy for use anytime—at night or during an outage.",
    img,
  };

  return (
    <Wrapper>
      <SectionLayout1
        {...data}
        btn1Path="/energy/design"
        btn2Text="Learn more"
        btn2Path="/powerwall"
      />
    </Wrapper>
  );
};

export default PowerWall;

const Wrapper = styled.div`
  button {
    &:last-child {
      margin-left: 1rem;
    }
  }
`;
