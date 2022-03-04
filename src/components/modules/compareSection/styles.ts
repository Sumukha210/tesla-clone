import styled from "styled-components";
import { BgImg } from "../heroTemplate/styles";

export const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
`;

export const Content = styled.div`
  display: grid;
  grid-gap: 3rem;
  align-items: center;
  justify-content: center;

  @media (min-width: 1200px) {
    grid-template-columns: 0.8fr 1.2fr;
  }

  .left {
    .btnContainer {
      margin-top: 2rem;
      display: flex;

      button {
        &:last-child {
          margin-left: 2rem;
        }
      }
    }
  }
`;

export const ImageContainer = styled(BgImg)`
  @media (min-width: 576px) {
    height: min(300px, 350px);
  }
`;
