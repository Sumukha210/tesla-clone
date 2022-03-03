import styled from "styled-components";
import { BgImg } from "../heroTemplate/styles";

export const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
`;

export const Content = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-gap: 1fr;
  align-items: center;
  justify-content: center;

  @media (min-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  .left {
    .btnContainer {
      margin-top: 2rem;

      button {
        &:last-child {
          margin-left: 2rem;
        }

        @media (max-width: 575.98px) {
          &:last-child {
            margin-left: 0px;
            margin-top: 2rem;
          }
        }
      }
    }
  }
`;

export const ImageContainer = styled(BgImg)`
  @media (min-width: 576px) {
    height: 450px;
  }
`;
