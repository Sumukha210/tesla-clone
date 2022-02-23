import React from "react";
import { ImgContainer } from "./style";
import NextImg from "next/image";

interface mediaContainerProps {
  img: string | StaticImageData;
}

const MediaContainer: React.FC<mediaContainerProps> = ({ children, img }) => {
  return (
    <>
      <ImgContainer>
        {typeof img === "string" ? (
          <video src={img} autoPlay loop muted />
        ) : (
          <NextImg src={img} objectFit="cover" placeholder="blur" />
        )}

        {children && children}
      </ImgContainer>
    </>
  );
};

export default MediaContainer;
