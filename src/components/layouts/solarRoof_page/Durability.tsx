import React from "react";
import GridSection from "./gridSection";
import { featureType } from "./types";

const Durability = () => {
  const data: featureType = {
    img: "/videos/solarroof-page/Durability.webm",
    title: "Build to Last",
    caption: "durability",
    description:
      "Solar Roof tiles are durable, strong and engineered for all-weather protection. With a 25-year warranty, Solar Roof tiles will continue to produce clean energy for your home for decades to come.",
  };

  return (
    <>
      <GridSection imgFirst data={data} orderNowBtnPath="solarroof" />
    </>
  );
};

export default Durability;
