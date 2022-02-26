import styled from "styled-components";
import { BgImg } from "../heroTemplate/styles";
import { headerProps } from "./types";

export const TemplateWrapper = styled.div``;

export const Header = styled.div<headerProps>``;

export const GridContainer = styled.div`
  background-color: #000;
  width: 100%;
`;

export const Content = styled.div`
  @media (min-width: 1200px) {
    width: 80%;
    margin: auto;
  }
`;

export const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;

  @media (max-width: 767.98px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;

    .left {
      order: 2;
    }
    .right {
      order: 1;
    }
  }

  .left {
    color: #e2e3e3;
    padding-right: 8vw;

    h3 {
      margin-bottom: 1rem;
    }
  }

  &:nth-of-type(2) {
    @media (min-width: 768px) {
      .left {
        order: 2;
        padding: 8vw;
      }
      .right {
        order: 1;
      }
    }
  }
`;

export const ImageContainer = styled(BgImg)`
  height: 320px;
`;
