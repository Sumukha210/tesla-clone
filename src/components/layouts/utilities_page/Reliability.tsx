import React from "react";
import SectionLayout1 from "@/module/sections/sectionLayout_1";
import { SectionLayout1Props } from "@/module/sections/sectionLayout_1/types";
import img from "@/assets/images/utilities-page/utilities-noc.jpg";

const Reliability = () => {
  const data: SectionLayout1Props = {
    caption: "reliability",
    title: "24/7 Monitoring",
    description:
      "With billions of cell-hours of safe operation, our systems deliver maximum reliability from transportation to installation—including 24/7 monitoring from our Network Operations Center.",
    img,
  };

  return (
    <>
      <SectionLayout1 {...data} />
    </>
  );
};

export default Reliability;
