import { BgImg } from "@/module/hero/styles";
import styled from "styled-components";

export const Wrapper = styled.div``;

export const ImgContainer = styled(BgImg)`
  height: 550px;
`;

export const Content = styled.div`
  padding: 3rem 0;
  @media (min-width: 1200px) {
    width: 80%;
    margin: auto;
  }

  .left {
    p {
      color: rgb(23, 26, 32);
      font-weight: 300;
    }
  }

  .right {
    p {
      color: rgb(57, 60, 65);
      font-weight: 400;
    }
  }

  h2 {
    margin-bottom: 1.5rem;
  }

  display: grid;

  @media (min-width: 1024px) {
    grid-template-columns: 1.1fr 0.9fr;
  }
`;
