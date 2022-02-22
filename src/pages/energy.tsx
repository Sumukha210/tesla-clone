import React from "react";
import Layout from "@/shared/Layout";
import Hero from "@/layout/solarPanels_page/hero";
import Savings from "@/layout/solarPanels_page/Savings";
import PowerWall from "@/layout/solarPanels_page/PowerWall";
import Installation from "@/layout/solarPanels_page/Installation";
import Efficiency from "@/layout/solarRoof_page/Efficiency";
import Experience from "@/layout/solarPanels_page/Experience";
import Design from "@/layout/solarPanels_page/Design";

const EnergyPage = () => {
  return (
    <>
      <Layout lightColorNav={true}>
        <Hero />
        <Savings />
        <PowerWall />
        <Design />
        <Installation />
        <Efficiency orderNowBtnPath="energy" marginTop={false} />
        <Experience />
      </Layout>
    </>
  );
};

export default EnergyPage;
