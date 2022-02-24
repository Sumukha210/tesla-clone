import React from "react";
import { Content, Wrapper, BtnContainer } from "./style";
import { SectionLayout1Props } from "./types";
import ButtonContainer from "./BtnContainer";
import MediaContainer from "./MediaContainer";

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
  children,
}) => {
  const Btn = (
    <ButtonContainer
      btn1Text={btn1Text}
      btn1Path={btn1Path}
      btn2Path={btn2Path}
      btn2Text={btn2Text}
    />
  );

  return (
    <Wrapper>
      {showMainImg && <MediaContainer img={img}>{children}</MediaContainer>}

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
