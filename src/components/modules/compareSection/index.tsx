import React from "react";
import NextImg from "next/image";
import Button from "@/element/button";
import { useRouter } from "next/router";
import { Content, Wrapper, ImageContainer } from "./styles";

interface compareSectionProps {
  orderNowBtnPath: string;
  img: StaticImageData;
  title: string;
}

const CompareSection: React.FC<compareSectionProps> = ({
  orderNowBtnPath,
  img,
  title,
}) => {
  const router = useRouter();

  return (
    <Wrapper className="component-inner-gap">
      <div className="container">
        <Content>
          <div className="left">
            <h1 className="heading-1">{title}</h1>
            <div className="btnContainer">
              <Button
                variant="outline"
                color="dark"
                name="order now"
                onClick={() => router.push(orderNowBtnPath)}
              />
              <Button
                variant="outline"
                color="dark"
                name="compare"
                onClick={() => router.push("/compare")}
              />
            </div>
          </div>

          <div className="right">
            <ImageContainer>
              <NextImg src={img} objectFit="cover" placeholder="blur" />
            </ImageContainer>
          </div>
        </Content>
      </div>
    </Wrapper>
  );
};

export default CompareSection;
