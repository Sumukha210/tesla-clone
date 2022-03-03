import { BgImg } from "@/module/heroTemplate/styles";
import styled from "styled-components";

export const CarouselWrapper = styled.div``;

export const Container = styled.div`
  @media (min-width: 1200px) {
    width: 70%;
    margin: auto;
  }
`;

export const ImageContainer = styled(BgImg)`
  height: 500px;
`;

export const Content = styled.div`
  padding-top: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .dots {
    display: flex;
    justify-content: space-around;
    align-items: center;

    & > * {
      height: 12px;
      width: 12px;
      background-color: transparent;
      border: 1px solid;
      border-radius: 50%;

      &:not(:last-child) {
        margin-right: 20px;
      }

      &.active {
        background-color: #393c41;
      }
    }
  }

  .description {
    & > * {
      font-weight: 400;
    }
  }
`;
