import React from "react";
import styled from "styled-components";
import { featureType } from "../types";
import SectionLayout1 from "@/module/sections/sectionLayout_1";

const ContentSection = () => {
  const data: featureType = {
    caption: "installation",
    title: "Trusted Expertise",
    description: `Our in-house team of energy professionals has installed more than
    3.6 GW of clean solar energy across 400,000 roofs—the equivalent of
    10 million traditional solar panels. From design to power on, we
    take care of everything. Chat with an energy advisor to ask any
    questions about Tesla Solar Roof.`,
    img: "",
  };

  return (
    <Wrapper>
      <SectionLayout1
        {...data}
        btn1Path="/solarroof/design"
        showMainImg={false}
      />
    </Wrapper>
  );
};

export default ContentSection;

const Wrapper = styled.div``;
