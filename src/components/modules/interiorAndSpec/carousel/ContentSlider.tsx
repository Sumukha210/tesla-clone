import { interiorCarouselTypes } from "@/utils/productDetails/types";
import React from "react";
import { ContentContainer } from "./styles";

interface ContentSliderProps {
  currentEle: interiorCarouselTypes;
  carousel: interiorCarouselTypes[];
  currentEleNum: number;
  handleDot: (index: number) => void;
}

const ContentSlider: React.FC<ContentSliderProps> = ({
  currentEle,
  carousel,
  currentEleNum,
  handleDot,
}) => {
  return (
    <ContentContainer>
      <div className="flex justify-center">
        <div className="left">
          <div className="dotContainer flex">
            {carousel.map((item, index) => (
              <div
                onClick={() => handleDot(index)}
                key={item.title}
                className={`dot ${index === currentEleNum && "active"}`}></div>
            ))}
          </div>
        </div>
        <div className="right">
          <h2 className="heading-3">{currentEle.title}</h2>
          <h5 className="subtitle-2">{currentEle.subtitle}</h5>
        </div>
      </div>
    </ContentContainer>
  );
};

export default ContentSlider;
