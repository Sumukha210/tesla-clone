import React from "react";
import designImg from "@/assets/images/solarPanels-page/design.jpg";
import SectionLayout2 from "@/module/sections/sectionLayout_2";
import { gridSectionProps } from "@/module/sections/sectionLayout_2/types";

const Design = () => {
  const data: gridSectionProps = {
    data: {
      caption: "Design",
      title: "Sleek and Durable",
      description: `
    Install Solar Roof and power your home with a fully integrated solar and storage system. With a seamless design, each tile looks great up-close or from the street, complementing your home’s natural aesthetic styling. Chat with an energy advisor to ask any questions about going solar with Tesla.
    `,
      img: designImg,
    },
    orderNowBtnPath: "energy",
  };

  return (
    <>
      <SectionLayout2 {...data} />
    </>
  );
};

export default Design;
