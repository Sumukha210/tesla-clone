import React from "react";
import NextImg from "next/image";
import { ImgContainer, Content, Wrapper, BtnContainer } from "./style";
import Button from "@/element/button";
import { useRouter } from "next/router";
import { gridSectionProps } from "./types";

const GridSection: React.FC<gridSectionProps> = ({
  data,
  orderNowBtnPath,
  secondBtnText = null,
  secondBtnPath = null,
  imgFirst = false,
  orderNowBtnText = "order now",
}) => {
  const { img, title, caption, description } = data;
  const router = useRouter();

  return (
    <Wrapper>
      <Content imgFirst={imgFirst}>
        <div className="left">
          <div>
            <p className="caption-text">{caption}</p>
            <h2 className="heading-2 title">{title}</h2>
            <p className="description subtitle-1">{description}</p>
          </div>

          <BtnContainer
            secondBtnPath={secondBtnPath}
            secondBtnText={secondBtnText}>
            <Button
              outlineBtn
              smBtn
              secondaryBtn
              name={orderNowBtnText}
              onClick={() => router.push(`/${orderNowBtnPath}/design`)}
            />

            {secondBtnText && secondBtnPath && (
              <Button
                outlineBtn
                smBtn
                secondaryBtn
                name="learn more"
                onClick={() => router.push(`/${secondBtnPath}`)}
              />
            )}
          </BtnContainer>
        </div>

        <div className="right">
          <ImgContainer>
            {typeof img === "string" ? (
              <video src={img} autoPlay loop muted />
            ) : (
              <NextImg src={img} objectFit="cover" placeholder="blur" />
            )}
          </ImgContainer>
        </div>
      </Content>
    </Wrapper>
  );
};

export default GridSection;
