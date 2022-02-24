import React from "react";
import Layout from "@/shared/Layout";
import Hero from "@/layout/utilities_page/Hero";
import Overview from "@/layout/utilities_page/Overview";
import Hardware from "@/layout/utilities_page/Hardware";

const UtilitiesPage = () => {
  return (
    <Layout>
      <Hero />
      <Overview />
      <Hardware />
    </Layout>
  );
};

export default UtilitiesPage;
