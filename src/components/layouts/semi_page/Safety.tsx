import React from "react";
import img from "@/assets/images/semi-page/interior.jpg";
import NextImg from "next/image";
import styled from "styled-components";
import { BgImg } from "@/module/heroTemplate/styles";

const Safety = () => {
  return (
    <Wrapper className="component-inner-gap">
      <div className="container">
        <ImageContainer>
          <NextImg
            src={img}
            placeholder="blur"
            layout="responsive"
            alt="truck image"
            objectFit="cover"
          />
        </ImageContainer>

        <Content>
          <h2 className="heading-2">Safest Truck Ever</h2>
          <p className="subtitle-1">
            Enhanced Autopilot helps avoid collisions, a centered driver
            position provides maximum visibility and control, and a low center
            of gravity offers rollover protection. Every driver is responsible
            for remaining alert and active when using Autopilot, and must be
            prepared to take action at any time.
          </p>
        </Content>
      </div>
    </Wrapper>
  );
};

export default Safety;

const Wrapper = styled.div``;

const ImageContainer = styled(BgImg)`
  height: calc(60vh + 100px);
  @media (max-width: 575.98px) {
    height: 350px;
  }
`;

const Content = styled.div`
  color: #fff;
  padding: 3rem 0;

  display: grid;
  grid-template-columns: 0.5fr 1.5fr;
  grid-gap: 2rem;

  @media (min-width: 576px) and (max-width: 991.98px) {
    padding: 3rem 2rem;
    grid-template-columns: repeat(2, 1fr);
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
