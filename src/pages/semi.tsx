import React from "react";
import Layout from "@/shared/Layout";
import Hero from "@/layout/semi_page/hero";
import SemiInfo from "@/layout/semi_page/semiInfo";
import Performance from "@/layout/semi_page/Performance";
import styled from "styled-components";
import Safety from "@/layout/semi_page/Safety";
import OwnershipCost from "@/layout/semi_page/Ownership";
import ReserveNow from "@/layout/semi_page/reserveNow";

const SemiPage = () => {
  return (
    <Layout>
      <Hero />
      <Wrapper>
        <SemiInfo />
        <Performance />
        <Safety />
        <OwnershipCost />
        <ReserveNow />
      </Wrapper>
    </Layout>
  );
};

export default SemiPage;

const Wrapper = styled.div`
  background-color: #000000;
  min-height: 100%;
  width: 100%;
`;
