import React, { useState } from "react";
import img1 from "@/assets/images/modely-page/Model-Y-Interior-Hero-Desktop-NA-KR.jpg";
import img2 from "@/assets/images/modely-page/Model-Y-Utility-Desktop-NA-KR.jpg";
import NextImg from "next/image";
import {
  CarouselWrapper,
  Container,
  Content,
  ImageContainer,
} from "./carouselStyles";

const Carousel = () => {
  const info = [
    {
      img: img1,
      title: "Versatile seating and storage for cargo and passengers",
    },
    {
      img: img2,
      title: "Room for up to seven with optional third row",
    },
  ];

  const [currentEle, setCurrentEle] = useState(0);

  return (
    <CarouselWrapper>
      <div className="container">
        <Container>
          <ImageContainer>
            <NextImg
              src={info[currentEle].img}
              objectFit="cover"
              placeholder="blur"
            />
          </ImageContainer>

          <Content>
            <div className="dots">
              {info.map((i, index) => (
                <div
                  className={`${currentEle === index && "active"}`}
                  onClick={() => setCurrentEle(index)}></div>
              ))}
            </div>

            <div className="description">
              <h4 className="heading-4">{info[currentEle].title}</h4>
            </div>
          </Content>
        </Container>
      </div>
    </CarouselWrapper>
  );
};

export default Carousel;
