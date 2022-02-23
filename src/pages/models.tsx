import React from "react";
import Layout from "@/shared/Layout";
import Hero from "@/layout/modelS_page/Hero";
import InteriorAndSpec from "@/module/interiorAndSpec";
import { products } from "@/utils/productDetails";
import PlaidModel from "@/layout/modelS_page/PlaidModel";

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
    </Layout>
  );
};

export default ModelSPage;
