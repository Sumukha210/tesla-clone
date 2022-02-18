import { interiorCarouselTypes } from "@/utils/productDetails/types";
import React, { useState } from "react";
import { CarouselContainer, Wrapper } from "./styles";
import MediaSlider from "./MediaSlider";
import ContentSlider from "./ContentSlider";

interface carouselProps {
  carousel: interiorCarouselTypes[];
}

const Carousel: React.FC<carouselProps> = ({ carousel }) => {
  const [currentEleNum, setCurrentEleNum] = useState(0);
  let currentEle = carousel[currentEleNum];

  const handleNext = () => {
    if (currentEleNum >= carousel.length - 1) {
      setCurrentEleNum(0);
    } else {
      setCurrentEleNum(currentEleNum + 1);
    }
  };

  const handlePrev = () => {
    if (currentEleNum <= 0) {
      setCurrentEleNum(carousel.length - 1);
    } else {
      setCurrentEleNum(currentEleNum - 1);
    }
  };

  const handleDot = (index: number) => {
    setCurrentEleNum(index);
  };

  return (
    <Wrapper className="margin-top">
      <div className="container">
        <CarouselContainer>
          <MediaSlider
            handleNext={handleNext}
            handlePrev={handlePrev}
            currentEle={currentEle}
          />
          <ContentSlider
            currentEle={currentEle}
            carousel={carousel}
            currentEleNum={currentEleNum}
            handleDot={handleDot}
          />
        </CarouselContainer>
      </div>
    </Wrapper>
  );
};

export default Carousel;
