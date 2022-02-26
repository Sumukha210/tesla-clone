import React from "react";
import SectionLayout1 from "../sections/sectionLayout_1";
import NextImg from "next/image";
import { exteriorTemplateProps } from "./types";
import {
  TemplateWrapper,
  GridContainer,
  GridBox,
  ImageContainer,
  Content,
  Header,
} from "./styles";

const ExteriorTemplate: React.FC<exteriorTemplateProps> = ({
  header: {
    title = "Designed for efficiency",
    caption = "Exterior",
    description,
    img,
    orderNowBtnPath,
  },
  headerBgColor,
  specs,
}) => {
  return (
    <TemplateWrapper>
      <Header headerBgColor={headerBgColor}>
        <SectionLayout1
          title={title}
          caption={caption}
          description={description}
          img={img}
          btn1Path={orderNowBtnPath}
        />
      </Header>

      <GridContainer className="component-inner-gap">
        <div className="container">
          <Content>
            {specs.map(({ title, description, img }, index) => (
              <GridBox key={index}>
                <div className="left">
                  <h3 className="subtitle-1">{title}</h3>
                  <p className="subtitle-2">{description}</p>
                </div>

                <ImageContainer className="right">
                  <NextImg
                    src={img}
                    objectFit="cover"
                    objectPosition="center"
                    placeholder="blur"
                    layout="responsive"
                  />
                </ImageContainer>
              </GridBox>
            ))}
          </Content>
        </div>
      </GridContainer>
    </TemplateWrapper>
  );
};

export default ExteriorTemplate;
