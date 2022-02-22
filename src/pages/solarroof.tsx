import React from "react";
import Layout from "@/shared/Layout";
import Hero from "@/layout/solarRoof_page/hero";
import Design from "@/layout/solarRoof_page/Design";
import EnergyStorage from "@/layout/solarRoof_page/EnergyStorage";
import Durability from "@/layout/solarRoof_page/Durability";
import Installation from "@/layout/solarRoof_page/installation";
import Efficiency from "@/layout/solarRoof_page/Efficiency";
import ValueForMoney from "@/layout/solarRoof_page/ValueForMoney";
import Control from "@/layout/solarRoof_page/Control";

const SolarRoofPage = () => {
  return (
    <Layout lightColorNav={true}>
      <Hero />
      <Design />
      <EnergyStorage />
      <Durability />
      <Installation />
      <Efficiency />
      <Control />
      <ValueForMoney />
    </Layout>
  );
};

export default SolarRoofPage;
