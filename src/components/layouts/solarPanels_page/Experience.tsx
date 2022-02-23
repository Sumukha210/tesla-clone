import React from "react";
import SectionLayout1 from "@/module/sections/sectionLayout_1";
import designImg from "@/assets/images/solarRoof-page/control.jpg";
import { featureType } from "@/types/featureType";

const Experience = () => {
  const designData: featureType = {
    caption: "Experience",
    title: "24/7 Monitoring",
    description: `
    Manage your solar system from anywhere in the world with 24/7 mobile monitoring. Watch your energy in real time or set your preferences to optimize for energy independence.
    `,
    img: designImg,
  };

  return (
    <>
      <SectionLayout1 {...designData} btn1Path="/energy/design" />
    </>
  );
};

export default Experience;
