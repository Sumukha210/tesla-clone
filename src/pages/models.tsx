import React from "react";
import Layout from "@/shared/Layout";
import Hero from "@/layout/modelS_page/Hero";
import InteriorAndSpec from "@/module/interiorAndSpec";
import { products } from "@/utils/productDetails";
import PlaidModel from "@/layout/modelS_page/PlaidModel";
import ElectricPowertrain from "@/layout/modelS_page/ElectricPowertrain";
import Exterior from "@/layout/modelS_page/Exterior";
import Range from "@/layout/modelS_page/Range";
import AutoPilot from "@/module/Autopilot";
import FeatureCarousel from "@/module/featuresCarousel";
import CompareSection from "@/module/compareSection";
import compareSectionImg from "@/assets/images/models-page/compareSectionImg.jpg";
import SpecificationSection from "@/module/specificationsSection";
import { modelSDetails } from "@/utils/productDetails/modelSDetails";
import specImage from "@/assets/images/models-page/MS-Specs-Hero-Desktop.jpg";

const ModelSPage = () => {
  const { allNewInterior } = products[0];

  return (
    <Layout>
      <Hero />
      {allNewInterior && (
        <InteriorAndSpec
          title="Interior of the future"
          specs={allNewInterior?.specs}
          carousel={allNewInterior?.carousel}
        />
      )}
      <PlaidModel />
      <ElectricPowertrain />
      <Exterior />
      <Range />
      <AutoPilot />
      <FeatureCarousel />
      {modelSDetails?.modelVersion && (
        <SpecificationSection
          title="Model S"
          img={specImage}
          compareSpecs
          modelDetails={modelSDetails.modelVersion}
        />
      )}
      <CompareSection
        img={compareSectionImg}
        orderNowBtnPath="/models/design"
        title="Model S"
      />
    </Layout>
  );
};

export default ModelSPage;
