import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  overflow: hidden;
  width: 100vw;

  position: relative;

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 320px;
    height: 100vh;
  }

  @media (max-width: 1199.98px) {
    max-height: 100vh;
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 0px;
    }
  }

  @media (min-width: 992px) and (max-width: 1199.98px) {
    max-width: 920px;
    margin: auto;
  }

  @media (max-width: 992.98px) {
    padding-left: 3rem;
    padding-right: 3rem;
    max-width: 960px;
    margin: auto;
  }

  @media (max-width: 768.98px) {
    padding-left: 3rem;
    padding-right: 3rem;
    max-width: 720px;
    margin: auto;
  }

  @media (max-width: 576.98px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;
