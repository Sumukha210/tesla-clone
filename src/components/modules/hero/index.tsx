import React, { ReactNode } from "react";
import { BottomSection, Content, TopSection, Wrapper } from "./styles";
import NextImg from "next/image";

interface HeroTemplateProps {
  img: StaticImageData;
  name: string;
  subtitle?: string | ReactNode;
}

const HeroTemplate: React.FC<HeroTemplateProps> = ({
  img,
  name,
  subtitle,
  children,
}) => {
  return (
    <>
      <Wrapper>
        <div className="bgImg">
          <NextImg src={img} placeholder="blur" objectFit="cover" />
        </div>

        <Content>
          <div className="container">
            <div className="inner-content">
              <div className="flex justify-between">
                <TopSection>
                  <h1 className="heading-1">{name}</h1>
                  {subtitle && <h3 className="subtitle-2">{subtitle}</h3>}
                </TopSection>

                <BottomSection>{children}</BottomSection>
              </div>
            </div>
          </div>
        </Content>
      </Wrapper>
    </>
  );
};

export default HeroTemplate;
