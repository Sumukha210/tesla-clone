import React from "react";
import { allNewInteriorTypes } from "@/utils/productDetails/types";
import styled from "styled-components";
import interiorImg from "@/assets/images/models-page/spec/interior.jpg";
import NextImg from "next/image";
import { BgImg } from "../heroTemplate/styles";
import Carousel from "./carousel";
import Specs from "./specification";

interface interiorSpecProps extends allNewInteriorTypes {
  title: string;
}

const InteriorAndSpec: React.FC<interiorSpecProps> = ({
  title,
  carousel,
  specs,
}) => {
  return (
    <Wrapper className="component-inner-gap">
      <Header>
        <div className="container">
          <h2 className="heading-2">{title}</h2>
        </div>
      </Header>

      <FullHeightImg>
        <NextImg src={interiorImg} objectFit="cover" placeholder="blur" />
      </FullHeightImg>

      <Carousel carousel={carousel} />
      <Specs specs={specs} />
    </Wrapper>
  );
};

export default InteriorAndSpec;

export const Wrapper = styled.div`
  background: #000000;
  color: #fff;
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

export const FullHeightImg = styled(BgImg)`
  height: 100vh;
  position: relative;
`;
