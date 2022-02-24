import React from "react";
import Layout from "@/shared/Layout";
import Hero from "@/layout/utilities_page/Hero";
import Overview from "@/layout/utilities_page/Overview";
import Hardware from "@/layout/utilities_page/Hardware";
import Reliability from "@/layout/utilities_page/Reliability";

const UtilitiesPage = () => {
  return (
    <Layout>
      <Hero />
      <Overview />
      <Hardware />
      <Reliability />
    </Layout>
  );
};

export default UtilitiesPage;
