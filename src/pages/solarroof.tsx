import React from "react";
import Layout from "@/shared/Layout";
import Hero from "@/layout/solarRoof_page/Hero";
import Design from "@/layout/solarRoof_page/design";

const SolarRoofPage = () => {
  return (
    <Layout lightColorNav={true}>
      <Hero />
      <Design />
    </Layout>
  );
};

export default SolarRoofPage;
