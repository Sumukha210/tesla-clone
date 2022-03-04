import React from "react";
import Hero from "@/layout/modelY_page/Hero";
import Layout from "@/shared/Layout";
import Utility from "@/layout/modelY_page/utility";
import DualMotor from "@/layout/modelY_page/DualMotor";
import Range from "@/layout/modelY_page/Range";
import AutoPilot from "@/module/Autopilot";
import compareSectionImg from "@/assets/images/modely-page/compareImg.jpg";
import CompareSection from "@/module/compareSection";

const ModelYPage = () => {
  return (
    <Layout lightColorNav>
      <Hero />
      <Utility />
      <DualMotor />
      <Range />
      <AutoPilot />
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
