import React, { ReactNode } from "react";
import { BgImg, BottomSection, Content, TopSection, Wrapper } from "./styles";
import NextImg from "next/image";
import { useRouter } from "next/router";

interface HeroTemplateProps {
  img: StaticImageData;
  name: string;
  subtitle?: string | ReactNode;
}

export interface contentProps {
  isHeroPage: boolean;
}

const HeroTemplate: React.FC<HeroTemplateProps> = ({
  img,
  name,
  subtitle,
  children,
}) => {
  const router = useRouter();

  return (
    <>
      <Wrapper>
        <BgImg>
          <NextImg
            src={img}
            placeholder="blur"
            objectFit="cover"
            layout="responsive"
          />
        </BgImg>

        <Content isHeroPage={router.pathname === "/"}>
          <div className="container">
            <div className="inner-content">
              <div className="flex justify-between">
                <TopSection>
                  <h1 className="heading-1">{name}</h1>
                  {subtitle && <h3 className="subtitle-2">{subtitle}</h3>}
                </TopSection>

                <BottomSection className="bottomSection">
                  {children}
                </BottomSection>
              </div>
            </div>
          </div>
        </Content>
      </Wrapper>
    </>
  );
};

export default HeroTemplate;
