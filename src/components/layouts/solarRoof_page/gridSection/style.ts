import { BgImg } from "@/module/hero/styles";
import styled from "styled-components";
import { btnContainerProps, gridContentProps } from "./types";

export const Wrapper = styled.div``;

export const ImgContainer = styled(BgImg)`
  height: calc(80vh + 150px);

  video {
    height: calc(80vh + 150px);
    width: 100%;
    object-fit: cover;
  }
`;

export const Content = styled.div<gridContentProps>`
  display: grid;

  @media (min-width: 1024px) {
    grid-template-columns: ${({ imgFirst }) =>
      imgFirst ? "1fr 400px" : "400px 1fr"};
  }

  .left {
    padding: 3rem;
    order: ${({ imgFirst }) => (imgFirst ? "2" : "initial")};

    .description {
      color: rgb(57, 60, 65);
      font-weight: 400;
    }

    .title {
      margin-bottom: 1.5rem;
    }

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const BtnContainer = styled.div<btnContainerProps>`
  button {
    padding: 13px
      ${({ secondBtnText, secondBtnPath }) =>
        !secondBtnText && !secondBtnPath ? "55px" : "max(12px, 2vw)"};

    &:last-child {
      margin-left: 10px;
    }
  }
`;
