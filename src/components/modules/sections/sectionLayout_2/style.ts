import { BgImg } from "@/module/heroTemplate/styles";
import styled, { css } from "styled-components";
import { btnContainerProps, gridContentProps } from "./types";

export const Wrapper = styled.div``;

export const ImgContainer = styled(BgImg)`
  height: 70vh;
  position: relative;

  video {
    height: 70vh;

    width: 100%;
    object-fit: cover;
  }

  @media (min-width: 992px) {
    height: calc(80vh + 150px);

    video {
      height: calc(80vh + 150px);
    }
  }
`;

export const Content = styled.div<gridContentProps>`
  display: grid;

  @media (min-width: 1024px) {
    grid-template-columns: ${({ imgFirst }) =>
      imgFirst ? "1fr 400px" : "400px 1fr"};
  }

  .left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 3rem;
    order: ${({ imgFirst }) => (imgFirst ? "2" : "initial")};

    @media (max-width: 575.98px) {
      padding: 3rem 2rem;
    }

    .description {
      font-weight: 400;
      color: rgba(23, 26, 32, 0.9);
    }

    .title {
      margin-bottom: 1.5rem;

      @media (max-width: 575.98px) {
        margin-bottom: 1rem;
      }
    }
  }

  @media (max-width: 991.98px) {
    .right {
      order: 1;
    }

    .left {
      order: 2;
    }
  }
`;

export const BtnContainer = styled.div<btnContainerProps>`
  @media (min-width: 992px) {
    display: flex;
  }

  button {
    @media (min-width: 992px) {
      ${({ secondBtnPath, secondBtnText }) =>
        secondBtnPath && secondBtnText
          ? css`
              padding: 13px 0;
              width: 100%;
            `
          : css`
              padding: 13px 55px;
            `}
    }

    @media (min-width: 1024px) {
      &:last-child {
        margin-left: 1rem;
      }
    }

    @media (max-width: 991.98px) {
      margin-top: 2rem;
    }

    @media (max-width: 575.98px) {
      &:last-child {
        margin-top: 1.5rem;
      }

      margin-top: 1.5rem;
    }
  }
`;
