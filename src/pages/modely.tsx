import React from "react";
import Hero from "@/layout/modelY_page/Hero";
import Layout from "@/shared/Layout";
import Utility from "@/layout/modelY_page/utility";
import DualMotor from "@/layout/modelY_page/DualMotor";
import Range from "@/layout/modelY_page/Range";
import AutoPilot from "@/module/Autopilot";
import compareSectionImg from "@/assets/images/modely-page/compareImg.jpg";
import CompareSection from "@/module/compareSection";
import { modelYDetails } from "@/utils/productDetails/modelYDetails";
import SpecificationSection from "@/module/specificationsSection";
import specImage from "@/assets/images/modely-page/MY-Specs-LHD-Desktop.jpg";

const ModelYPage = () => {
  return (
    <Layout lightColorNav>
      <Hero />
      <Utility />
      <DualMotor />
      <Range />
      <AutoPilot />
      {modelYDetails?.modelVersion && (
        <SpecificationSection
          title="Model Y"
          img={specImage}
          compareSpecs
          modelDetails={modelYDetails.modelVersion}
        />
      )}

      <CompareSection
        theme="dark"
        img={compareSectionImg}
        orderNowBtnPath="/modely/design"
        title="Model Y"
      />
    </Layout>
  );
};

export default ModelYPage;
