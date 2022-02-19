import React from "react";
import NextImg from "next/image";
import { designData } from "./util";
import Button from "@/element/button";
import { useRouter } from "next/router";
import { ImgContainer, Content, Wrapper } from "./style";

const Design = () => {
  const { img, title, caption, description } = designData;
  const router = useRouter();

  return (
    <Wrapper>
      <ImgContainer>
        <NextImg src={img} objectFit="cover" placeholder="blur" />
      </ImgContainer>

      <div className="container">
        <Content>
          <div className="left">
            <p className="subtitle-1">{caption}</p>
            <h2 className="heading-2">{title}</h2>
            <Button
              name="order now"
              outlineBtn
              secondaryBtn
              smBtn
              onClick={() => router.push(`/solarroof/design`)}
            />
          </div>

          <div className="right">
            <p>{description}</p>
          </div>
        </Content>
      </div>
    </Wrapper>
  );
};

export default Design;
