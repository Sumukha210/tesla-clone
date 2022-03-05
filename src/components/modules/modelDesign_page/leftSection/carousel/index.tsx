import React, { useState } from "react";
import useStore from "../../store";
import NextImg from "next/image";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import { Wrapper, ImageContainer, CarouselContainer } from "./styles";

const Carousel = () => {
  const [currentImgNum, setCurrentImgNum] = useState(0);
  const currentModelVersion = useStore(s => s.currentModelVersion);
  const images = useStore(s => s.modelData?.images);

  const imageCollections = images
    ? [
        ...(currentModelVersion === "baseVersion"
          ? Object.values(images.baseVersion)
          : Object.values(images.plaidVersion)),
      ]
    : [];

  const handleNextArrow = () => {
    if (currentImgNum >= imageCollections.length - 1) {
      setCurrentImgNum(0);
    } else {
      setCurrentImgNum(currentImgNum + 1);
    }
  };

  const handlePrevArrow = () => {
    if (currentImgNum <= 0) {
      setCurrentImgNum(imageCollections.length - 1);
    } else {
      setCurrentImgNum(currentImgNum - 1);
    }
  };

  return (
    <Wrapper>
      {imageCollections?.length && (
        <CarouselContainer>
          <ImageContainer>
            <NextImg src={imageCollections[currentImgNum]} objectFit="cover" />
          </ImageContainer>

          <div className="nextArrow">
            <MdOutlineKeyboardArrowRight onClick={handleNextArrow} />
          </div>

          <div className="prevArrow">
            <MdOutlineKeyboardArrowLeft onClick={handlePrevArrow} />
          </div>
        </CarouselContainer>
      )}
    </Wrapper>
  );
};

export default Carousel;
