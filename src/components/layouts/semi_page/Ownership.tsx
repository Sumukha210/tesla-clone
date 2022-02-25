import React from "react";
import img from "@/assets/images/semi-page/performance/road.jpg";
import NextImg from "next/image";
import styled from "styled-components";
import { BgImg } from "@/module/heroTemplate/styles";

const OwnershipCost = () => {
  return (
    <Wrapper className="component-inner-gap">
      <ImageContainer>
        <NextImg
          src={img}
          placeholder="blur"
          layout="responsive"
          alt="truck image"
          objectFit="cover"
        />
      </ImageContainer>

      <div className="container">
        <Content>
          <h2 className="heading-2">Lowest Cost of Ownership</h2>
          <p className="subtitle-1">
            Electric energy costs are half those of diesel. With fewer systems
            to maintain, the Tesla Semi provides $200,000+ in fuel savings and a
            two-year payback period.
          </p>
        </Content>
      </div>
    </Wrapper>
  );
};

export default OwnershipCost;

const Wrapper = styled.div``;

const ImageContainer = styled(BgImg)`
  height: calc(60vh + 100px);
`;

const Content = styled.div`
  color: #fff;
  padding: 3rem 0;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(2, 1fr);

  @media (min-width: 992px) {
    width: 80%;
    margin: auto;
  }

  @media (min-width: 576px) and (max-width: 991.98px) {
    padding: 3rem 2rem;
  }

  @media (max-width: 575.98px) {
    grid-template-columns: 1fr;
    grid-gap: 1rem;
    padding: 2rem 0 0 0;
  }

  p {
    font-weight: 500;
  }
`;
