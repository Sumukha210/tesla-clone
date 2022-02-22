import React from "react";
import NextImg from "next/image";
import Button from "@/element/button";
import { useRouter } from "next/router";
import { ImgContainer, Content, Wrapper, BtnContainer } from "./style";
import { featureType } from "@/layout/solarRoof_page/types";

interface SectionLayout1Props extends featureType {
  btn1Text?: string;
  btn1Path: string;
  showMainImg?: boolean;
  btn2Path?: string;
  btn2Text?: string;
}

const SectionLayout1: React.FC<SectionLayout1Props> = ({
  showMainImg = true,
  img,
  caption,
  title,
  description,
  btn1Path,
  btn1Text = "order now",
  btn2Path,
  btn2Text,
}) => {
  const router = useRouter();

  const Btn = (
    <>
      <Button
        name={btn1Text}
        outlineBtn
        secondaryBtn
        smBtn
        onClick={() => router.push(`${btn1Path}`)}
      />
      {btn2Path && btn2Text && (
        <Button
          name={btn2Text}
          outlineBtn
          secondaryBtn
          smBtn
          onClick={() => router.push(`${btn2Path}`)}
        />
      )}
    </>
  );

  return (
    <Wrapper>
      {showMainImg && (
        <ImgContainer>
          {typeof img === "string" ? (
            <video src={img} autoPlay loop muted />
          ) : (
            <NextImg src={img} objectFit="cover" placeholder="blur" />
          )}
        </ImgContainer>
      )}

      <div className="container">
        <Content>
          <div className="grid">
            <div className="left">
              <p className="caption-text">{caption}</p>
              <h2 className="heading-2">{title}</h2>
              {Btn}
            </div>

            <div className="right">
              <p className="subtitle-1">{description}</p>
            </div>
          </div>

          <BtnContainer>{Btn}</BtnContainer>
        </Content>
      </div>
    </Wrapper>
  );
};

export default SectionLayout1;
