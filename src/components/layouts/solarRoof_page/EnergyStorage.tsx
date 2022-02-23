import React from "react";
import GridSection from "../../modules/sections/sectionLayout_2";
import img from "@/assets/images/solarRoof-page/energy-storage.jpg";
import { featureType } from "@/types/featureType";

const EnergyStorage = () => {
  const data: featureType = {
    title: "Backup Protection",
    caption: "Energy Storage",
    description:
      "Powerwall is a compact home battery that is bundled with every Tesla solar purchase, providing you with 24/7 energy security. It stores the energy you produce with Solar Roof, so you can power your home anytime—at night or during an outage.",
    img,
  };

  return (
    <>
      <GridSection
        data={data}
        orderNowBtnPath="solarRoof"
        secondBtnPath={"/powerwall"}
        secondBtnText="learn more"
      />
    </>
  );
};

export default EnergyStorage;
