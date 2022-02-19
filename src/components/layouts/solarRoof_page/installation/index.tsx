import React from "react";
import CarouselSection from "./Carousel";
import ContentSection from "./Content";
import { Wrapper } from "./style";

const Installation = () => {
  return (
    <Wrapper>
      <div className="container">
        <ContentSection />
        <CarouselSection />
      </div>
    </Wrapper>
  );
};

export default Installation;
