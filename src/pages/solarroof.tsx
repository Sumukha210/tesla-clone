import React from "react";
import Layout from "@/shared/Layout";
import Hero from "@/layout/solarRoof_page/Hero";
import Design from "@/layout/solarRoof_page/design";
import EnergyStorage from "@/layout/solarRoof_page/EnergyStorage";
import Durability from "@/layout/solarRoof_page/Durability";
import Installation from "@/layout/solarRoof_page/installation";
import Efficiency from "@/layout/solarRoof_page/Efficiency";

const SolarRoofPage = () => {
  return (
    <Layout lightColorNav={true}>
      <Hero />
      <Design />
      <EnergyStorage />
      <Durability />
      <Installation />
      <Efficiency />
    </Layout>
  );
};

export default SolarRoofPage;
