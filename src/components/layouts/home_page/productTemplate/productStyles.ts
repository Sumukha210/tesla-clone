import styled from "styled-components";

export const ProductWrapper = styled.div`
  height: 100vh;
  width: 100%;

  position: relative;
  .bgImg {
    height: 100%;
    width: 100%;

    & > span {
      height: 100% !important;
      width: 100% !important;
      img {
        height: 100% !important;
        width: 100% !important;
      }
    }
  }
`;

export const Content = styled.div`
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;

  .container,
  .inner-content {
    height: 100%;
  }

  .inner-content {
    text-align: center;
    padding: 7rem 0;

    .flex {
      min-height: 100%;
      flex-direction: column;

      h1 {
        color: var(--dark-200);
      }

      h3 {
        font-weight: 400;
        color: rgb(23, 26, 32);
        a {
          color: rgb(23, 26, 32);
        }
      }
    }
  }

  button {
    &:last-child {
      margin-left: 24px;
    }
  }
`;
