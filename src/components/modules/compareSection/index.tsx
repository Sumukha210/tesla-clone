import React from "react";
import NextImg from "next/image";
import Button from "@/element/button";
import { useRouter } from "next/router";
import { Content, Wrapper, ImageContainer } from "./styles";
import { btnColor } from "@/element/button/types";

interface compareSectionProps {
  orderNowBtnPath: string;
  img: StaticImageData;
  title: string;
  theme?: "light" | "dark";
}

const CompareSection: React.FC<compareSectionProps> = ({
  orderNowBtnPath,
  img,
  title,
  theme = "light",
}) => {
  const router = useRouter();
  const btnColor: btnColor = theme === "dark" ? "light" : "dark";

  return (
    <Wrapper
      className="component-inner-gap"
      style={{ background: theme === "dark" ? "#000" : "#fff" }}>
      <div className="container">
        <Content>
          <div className="left">
            <h1
              className="heading-1"
              style={{ color: theme === "dark" ? "#fff" : "#000" }}>
              {title}
            </h1>
            <div className="btnContainer">
              <Button
                variant="outline"
                color={btnColor}
                name="order now"
                size="flexible"
                onClick={() => router.push(orderNowBtnPath)}
              />
              <Button
                variant="outline"
                color={btnColor}
                name="compare"
                size="flexible"
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
