import React from "react";
import img from "@/assets/images/semi-page/performance/performance.jpg";
import NextImg from "next/image";
import styled from "styled-components";
import { BgImg } from "@/module/heroTemplate/styles";

const Performance = () => {
  return (
    <Wrapper>
      <ImageContainer>
        <NextImg
          src={img}
          placeholder="blur"
          layout="responsive"
          alt="truck image"
          objectFit="cover"
          objectPosition="center"
        />
      </ImageContainer>

      <div className="container">
        <Content>
          <h2 className="heading-2">Badass Performance</h2>
          <p className="subtitle-1">
            The quickest acceleration—from 0-60 mph in 20 seconds, fully loaded.
            Instant traction control with four independent motors. Quickest up
            the grades.
          </p>
        </Content>
      </div>
    </Wrapper>
  );
};

export default Performance;

const Wrapper = styled.div``;

const ImageContainer = styled(BgImg)`
  height: 80vh;
`;

const Content = styled.div`
  color: #fff;
  width: 80%;
  margin: auto;
  padding: 3rem 0;

  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 575.98px) {
    grid-template-columns: 1fr;
    grid-gap: 1rem;
    padding: 2rem 0 0 0;
  }

  p {
    font-weight: 500;
  }
`;
