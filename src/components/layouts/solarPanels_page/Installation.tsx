import SectionLayout1 from "@/module/sections/sectionLayout_1";
import React from "react";
import { featureType } from "./types";

const Installation = () => {
  const data: featureType = {
    caption: "power on",
    title: "Order and Installation",
    description:
      "From permitting to powering on, we’ll take care of everything. After you order, we’ll gather remote aerial imagery of your home, design your system, take care of any necessary permits and schedule your installation.",
    img: "/videos/solarpanels/installation.mp4",
  };
  return (
    <>
      <SectionLayout1 {...data} btn1Path="/energy/design" />
    </>
  );
};

export default Installation;
