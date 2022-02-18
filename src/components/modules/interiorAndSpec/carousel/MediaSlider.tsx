import React from "react";
import { interiorCarouselTypes } from "@/utils/productDetails/types";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { ImgContainer, VideoContainer } from "./styles";
import NextImg from "next/image";

interface mediaSliderProps {
  handlePrev: () => void;
  handleNext: () => void;
  currentEle: interiorCarouselTypes;
}

const MediaSlider: React.FC<mediaSliderProps> = ({
  handleNext,
  handlePrev,
  currentEle,
}) => {
  return (
    <>
      {typeof currentEle?.media === "string" ? (
        <VideoContainer>
          <video src={currentEle.media} muted autoPlay loop />
        </VideoContainer>
      ) : (
        <ImgContainer>
          <NextImg
            src={currentEle.media}
            objectFit="cover"
            placeholder="blur"
          />
        </ImgContainer>
      )}

      <div className="arrows">
        <div className="left">
          <IoIosArrowBack onClick={handlePrev} />
        </div>

        <div className="right">
          <IoIosArrowForward onClick={handleNext} />
        </div>
      </div>
    </>
  );
};

export default MediaSlider;
