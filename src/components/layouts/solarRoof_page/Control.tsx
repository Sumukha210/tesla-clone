import React from "react";
import SectionLayout1 from "@/module/sections/sectionLayout_1";
import designImg from "@/assets/images/solarRoof-page/control.jpg";
import { featureType } from "@/types/featureType";

const Control = () => {
  const designData: featureType = {
    caption: "control",
    title: "Monitor and Optimize",
    description: `
    With the Tesla app, you can monitor your energy production in real time. Control your system from anywhere with instant alerts and remote access.
    `,
    img: designImg,
  };

  return (
    <>
      <SectionLayout1 {...designData} btn1Path="/solarroof/design" />
    </>
  );
};

export default Control;
