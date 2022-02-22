import React, { useState } from "react";
import styled from "styled-components";
import { carouselOptions } from "./util";

const CarouselSection = () => {
  const [currentEleNum, setCurrentNum] = useState(0);
  let currentItem = carouselOptions[currentEleNum];

  return (
    <CarouselContainer className="container">
      <Wrapper>
        <VideoContainer>
          <video src={currentItem.videoSrc} autoPlay loop muted />
        </VideoContainer>

        <BoxContainer>
          {carouselOptions.map(({ title, description }, index) => (
            <Box
              key={index}
              className={`${currentEleNum === index && "active"}`}
              onClick={() => setCurrentNum(index)}>
              <h2 className="subtitle-1">{title}</h2>
              <p className="subtitle-3">{description}</p>
            </Box>
          ))}
        </BoxContainer>
      </Wrapper>
    </CarouselContainer>
  );
};

export default CarouselSection;

export const CarouselContainer = styled.div`
  @media (max-width: 575.98px) {
    padding: 0;
  }
`;

const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  margin: auto;

  @media (min-width: 576px) {
    grid-template-columns: repeat(auto-fill, minmax(60%, 0.7fr));
  }
`;

const VideoContainer = styled.div`
  @media (min-width: 576px) {
    padding: 0 4rem;
  }

  video {
    height: 420px;
    object-fit: cover;
    width: 100%;
  }
`;

const BoxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 2rem;
  grid-gap: 1.3rem;

  @media (min-width: 576px) {
    grid-gap: 2rem;
  }
`;

const Box = styled.div`
  padding: 19px;

  @media (min-width: 576px) {
    padding: 2rem;
  }

  &:not(.active) {
    border-top: 3px solid var(--dark-100);
    opacity: 0.5;
  }

  &.active {
    outline: 3px solid var(--dark-100);
    opacity: 1;
  }

  p {
    margin-top: 1rem;
  }
`;
