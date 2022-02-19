import React from "react";
import Layout from "@/shared/Layout";
import Hero from "@/layout/solarRoof_page/Hero";
import Design from "@/layout/solarRoof_page/design";
import EnergyStorage from "@/layout/solarRoof_page/EnergyStorage";
import Durability from "@/layout/solarRoof_page/Durability";

const SolarRoofPage = () => {
  return (
    <Layout lightColorNav={true}>
      <Hero />
      <Design />
      <EnergyStorage />
      <Durability />
    </Layout>
  );
};

export default SolarRoofPage;
