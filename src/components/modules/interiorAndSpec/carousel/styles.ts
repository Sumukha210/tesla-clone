import { BgImg } from "@/module/hero/styles";
import styled from "styled-components";

export const Wrapper = styled.div``;

export const VideoContainer = styled.div`
  height: 535px;
  video {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }
`;

export const ImgContainer = styled(BgImg)`
  height: 535px;
`;

export const CarouselContainer = styled.div`
  height: 100%;
  position: relative;

  .arrows {
    .left,
    .right {
      position: absolute;
      top: 40%;
      transform: translateY(-40%);
    }

    svg {
      height: 36px;
      width: 36px;
      border: 1px solid #fff;
      padding: 0.4rem;
      cursor: pointer;
    }

    .left {
      left: 10%;
    }
    .right {
      right: 10%;
    }
  }
`;

export const ContentContainer = styled.div`
  padding-top: 5rem;

  @media (min-width: 1200px) {
    width: 60%;
    margin: auto;
  }

  .left {
    flex: 1;
    .dot {
      height: 9px;
      width: 9px;
      background: transparent;
      border-radius: 50%;
      border: 1px solid #fff;
      opacity: 0.6;
      cursor: pointer;

      &.active {
        background-color: #fff;
        opacity: 1;
      }

      &:not(:last-child) {
        margin-right: 10px;
      }
    }
  }

  .right {
    flex: 5;
    margin-right: auto;

    h5 {
      color: #e2e3e3;
      font-weight: 500;
      margin-top: 1.5rem;
    }
  }
`;
