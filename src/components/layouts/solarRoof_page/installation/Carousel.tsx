import React, { useState } from "react";
import styled from "styled-components";
import { carouselOptions } from "./util";

const CarouselSection = () => {
  const [currentEleNum, setCurrentNum] = useState(0);
  let currentItem = carouselOptions[currentEleNum];

  return (
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
  );
};

export default CarouselSection;

const Wrapper = styled.div`
  /* @media (min-width: 1024px) {
    width: 80%;
} */
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(60%, 0.7fr));
  justify-content: center;
  margin: auto;
`;

const VideoContainer = styled.div`
  padding: 0 4rem;

  video {
    height: 420px;
    object-fit: cover;
    width: 100%;
  }
`;

const BoxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  margin-top: 2rem;
`;

const Box = styled.div`
  padding: 2rem;

  &:not(.active) {
    border-top: 3px solid var(--dark-100);
  }

  &.active {
    outline: 3px solid var(--dark-100);
  }

  p {
    margin-top: 1rem;
  }
`;
