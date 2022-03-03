import React from "react";
import Hero from "@/layout/modelY_page/Hero";
import Layout from "@/shared/Layout";
import Utility from "@/layout/modelY_page/utility";
import DualMotor from "@/layout/modelY_page/DualMotor";
import Range from "@/layout/modelY_page/Range";

const ModelYPage = () => {
  return (
    <Layout lightColorNav>
      <Hero />
      <Utility />
      <DualMotor />
      <Range />
    </Layout>
  );
};

export default ModelYPage;
