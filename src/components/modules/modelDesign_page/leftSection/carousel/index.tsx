import React, { useState } from "react";
import useStore from "../../store";
import NextImg from "next/image";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import {
  Wrapper,
  ImageContainer,
  CarouselContainer,
  PlainImageContainer,
} from "./styles";

const Carousel = () => {
  const [currentImgNum, setCurrentImgNum] = useState(0);
  const currentImages = useStore(s => s.currentImages);
  const modelData = useStore(s => s.modelData);
  const currentInterior = useStore(s => s.currentInterior);

  const currentInteriorImage = modelData?.interiorImages.find(
    item => item.interiorColor === currentInterior
  );

  const imageCollections = currentImages
    ? [
        ...Object.values(currentImages),
        currentInteriorImage?.imgSrc && currentInteriorImage.imgSrc,
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
        <>
          <PlainImageContainer>
            <NextImg
              src={imageCollections[currentImgNum]}
              objectFit="cover"
              placeholder="blur"
            />
          </PlainImageContainer>

          <CarouselContainer>
            <ImageContainer>
              <NextImg
                src={imageCollections[currentImgNum]}
                objectFit="cover"
              />
            </ImageContainer>

            <div className="nextArrow">
              <MdOutlineKeyboardArrowRight onClick={handleNextArrow} />
            </div>

            <div className="prevArrow">
              <MdOutlineKeyboardArrowLeft onClick={handlePrevArrow} />
            </div>
          </CarouselContainer>
        </>
      )}
    </Wrapper>
  );
};

export default Carousel;
