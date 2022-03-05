import { BgImg } from "@/module/heroTemplate/styles";
import React from "react";
import styled from "styled-components";
import useStore from "../store";

const Carousel = () => {
  const currentModelVersion = useStore(s => s.currentModelVersion);
  const images = useStore(s => s.modelData?.images);

  const imageCollections = images
    ? [
        currentModelVersion === "baseVersion"
          ? Object.values(images.baseVersion)
          : Object.values(images.plaidVersion),
      ]
    : null;

  return (
    <Wrapper>
      <CarouselContainer>
        <ImageContainer></ImageContainer>
      </CarouselContainer>
    </Wrapper>
  );
};

export default Carousel;

const Wrapper = styled.div`
  display: none;

  @media (min-width: 1200px) {
    display: block;
  }
`;

const CarouselContainer = styled.div``;

const ImageContainer = styled(BgImg)`
  height: 100vh;
`;
