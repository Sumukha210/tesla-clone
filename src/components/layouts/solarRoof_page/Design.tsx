import React from "react";
import SectionLayout1 from "@/module/sections/sectionLayout_1";
import designImg from "@/assets/images/solarRoof-page/design.jpg";
import { featureType } from "@/types/featureType";

const Design = () => {
  const designData: featureType = {
    caption: "Design",
    title: "A Beautiful Roof",
    description: `
    Install Solar Roof and power your home with a fully integrated solar and storage system. With a seamless design, each tile looks great up-close or from the street, complementing your home’s natural aesthetic styling. Chat with an energy advisor to ask any questions about going solar with Tesla.
    `,
    img: designImg,
  };

  return (
    <>
      <SectionLayout1 {...designData} btn1Path="/solarroof/design" />
    </>
  );
};

export default Design;
