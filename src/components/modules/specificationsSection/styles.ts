import styled from "styled-components";
import { BgImg } from "../heroTemplate/styles";

export const Wrapper = styled.div`
  background: #000;
  padding: 7rem 0;
`;

export const Grid = styled.div`
  display: grid;
  grid-gap: 2rem;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 1200px) {
    grid-template-columns: 1.2fr 0.8fr;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const LeftCol = styled(BgImg)`
  height: min(300px, 350px);
`;

export const RightCol = styled.div`
  .header {
    color: #fff;

    .btnContainer {
      margin-top: 2rem;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 2rem;

      button {
      }
    }
  }
`;

export const SpecContainer = styled.div`
  padding-top: 3rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const Spec = styled.div`
  margin-bottom: 2rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: -10px;
    left: 0%;
    background-color: rgb(142, 142, 142);
    height: 2px;
    width: 35px;
  }

  h4 {
    color: #fff;
  }

  h5 {
    color: #e2e3e3;
    font-weight: 400;

    span {
      display: block;
      font-style: italic;
    }
  }
`;
