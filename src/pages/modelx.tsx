import React from "react";
import Layout from "@/shared/Layout";
import Hero from "@/layout/modelX_page/Hero";
import PlaidModel from "@/layout/modelX_page/PlaidModel";
import { products } from "@/utils/productDetails";
import InteriorAndSpec from "@/module/interiorAndSpec";
import ElectricPowertrain from "@/layout/modelX_page/ElectricPowertrain";
import Utility from "@/layout/modelX_page/Utility";
import Exterior from "@/layout/modelX_page/Exterior";
import Range from "@/layout/modelX_page/Range";
import AutoPilot from "@/module/Autopilot";
import FeatureCarousel from "@/module/featuresCarousel";

const ModelXPage = () => {
  const { allNewInterior } = products[1];

  return (
    <Layout>
      <Hero />
      {allNewInterior && (
        <InteriorAndSpec
          title="All-New Interior"
          specs={allNewInterior?.specs}
          carousel={allNewInterior?.carousel}
        />
      )}
      <PlaidModel />
      <ElectricPowertrain />
      <Utility />
      <Exterior />
      <Range />
      <AutoPilot />
      <FeatureCarousel />
    </Layout>
  );
};

export default ModelXPage;
