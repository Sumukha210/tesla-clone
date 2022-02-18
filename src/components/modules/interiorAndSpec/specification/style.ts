import styled from "styled-components";

export const Wrapper = styled.div`
  .inner-container {
    padding-top: 5rem;
    @media (min-width: 1200px) {
      width: 90%;
      margin: auto;
    }
  }
`;

export const Spec = styled.div`
  @media (min-width: 1200px) {
    display: flex;
    align-items: center;
  }

  &:nth-child(2) {
    flex-flow: row-reverse;
    .right .content {
      padding-right: 4rem;
    }
  }

  &:not(:nth-child(2)) {
    .right .content {
      padding: 0 4rem;
    }
  }

  .left,
  .right {
    flex: 1;
  }

  .right {
    h2 {
      margin-bottom: 1rem;
    }

    h5 {
      color: #e2e3e3;
      font-weight: 400;
    }
  }

  .left {
    height: 100%;

    .imgContainer {
      height: 320px;

      video {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }

      & > span {
        height: 100% !important;
        width: 100% !important;

        img {
          height: 100% !important;
          width: 100% !important;
        }
      }
    }
  }
`;
