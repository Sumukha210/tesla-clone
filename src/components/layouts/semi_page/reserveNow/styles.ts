import styled from "styled-components";

export const Wrapper = styled.div`
  overflow: hidden;

  @media (min-width: 576px) {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const VideoWrapper = styled.div`
  height: 560px;

  iframe {
    height: 560px;
    width: 100%;
  }

  h3 {
    color: var(--light-color);
    text-align: center;
    font-weight: 500;
  }
`;

export const Content = styled.div`
  padding: 5rem 0;
`;

export const Line = styled.div`
  position: relative;
  width: 1px;
  height: 195px;
  left: 50%;
  top: 0;
  display: block;
  background-color: #fff;

  @media (max-width: 575.98px) {
    height: 100px;
  }
`;

export const BtnContainer = styled.div`
  text-align: center;
  padding: 2rem 0;
`;
