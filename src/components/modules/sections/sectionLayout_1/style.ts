import { BgImg } from "@/module/heroTemplate/styles";
import styled from "styled-components";

export const Wrapper = styled.div``;

export const ImgContainer = styled(BgImg)`
  position: relative;
  height: 550px;

  video {
    height: 550px;

    width: 100%;
    object-fit: cover;
  }

  @media (min-width: 992px) {
    height: 70vh;

    video {
      height: 70vh;
    }
  }
`;

export const Content = styled.div`
  padding: 2rem 0 3.5rem 0;

  @media (min-width: 1200px) {
    padding: 3.5rem 0;
    width: 80%;
    margin: auto;
  }

  .grid {
    display: grid;

    @media (min-width: 1024px) {
      grid-template-columns: 1.1fr 0.9fr;
    }

    .left {
      @media (min-width: 992px) and (max-width: 1023.98px) {
        button {
          margin-bottom: 1.5rem;
        }
      }

      @media (max-width: 991.98px) {
        button {
          display: none;
        }
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

      @media (max-width: 575.98px) {
        margin-bottom: 1rem;
      }
    }
  }
`;

export const BtnContainer = styled.div`
  margin-top: 2rem;

  @media (min-width: 992px) {
    margin-top: 1.5rem;
    display: none;
  }

  @media (max-width: 575.98px) {
    margin-top: 1.5rem;
  }
`;
