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
import useLoopedCarousel from "@/customHook/useLoopedCarousel";

const Carousel = () => {
  const currentImages = useStore(s => s.currentImages);
  const modelData = useStore(s => s.modelData);
  const currentInterior = useStore(s => s.currentInterior);
  const currentInteriorImage = modelData?.interiorImages.find(
    item => item.interiorColor === currentInterior
  );
  const imageCollections =
    currentImages && currentInteriorImage
      ? [...Object.values(currentImages), currentInteriorImage.imgSrc]
      : [];

  const { currentEleNum, handleNextArrow, handlePrevArrow } =
    useLoopedCarousel(imageCollections);

  return (
    <Wrapper>
      {imageCollections?.length && (
        <>
          <PlainImageContainer>
            <NextImg
              src={imageCollections[currentEleNum]}
              objectFit="cover"
              placeholder="blur"
            />
          </PlainImageContainer>

          <CarouselContainer>
            <ImageContainer>
              <NextImg
                src={imageCollections[currentEleNum]}
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
