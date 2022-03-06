import { BgImg } from "@/module/heroTemplate/styles";
import styled from "styled-components";

export const Wrapper = styled.div``;

export const CarouselContainer = styled.div`
  max-width: 100%;
  position: relative;

  display: none;

  @media (min-width: 1200px) {
    display: block;
  }

  .nextArrow,
  .prevArrow {
    svg {
      position: absolute;
      top: 50%;
      background: lightgray;
      height: 32px;
      width: 32px;
      padding: 0.4rem;
      border-radius: 50%;
      opacity: 0.6;
      cursor: pointer;
    }
  }

  .nextArrow {
    svg {
      right: 5%;
    }
  }

  .prevArrow {
    svg {
      left: 5%;
    }
  }
`;

export const ImageContainer = styled(BgImg)``;

export const PlainImageContainer = styled(BgImg)`
  @media (min-width: 1200px) {
    display: none;
  }

  display: block;
`;
