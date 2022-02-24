import React from "react";
import SectionLayout2 from "@/module/sections/sectionLayout_2";
import { gridSectionProps } from "@/module/sections/sectionLayout_2/types";
import overviewImg from "@/assets/images/utilities-page/utilities-scale.jpg";

const Overview = () => {
  const data: gridSectionProps = {
    data: {
      caption: "overview",
      title: "Built for Scale",
      description:
        "Every year, electrical grids around the world add more renewable energy. Our grid-scale batteries and software controls store and dispatch this energy, creating a more stable and sustainable grid. We can lower lifecycle costs and deliver reliable energy for utilities and developers alike by combining hardware, software, installation and service into one integrated system.",
      img: overviewImg,
    },
  };

  return (
    <>
      <SectionLayout2 {...data} />
    </>
  );
};

export default Overview;
