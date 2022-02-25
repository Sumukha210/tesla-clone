import styled from "styled-components";

export const Wrapper = styled.div``;

export const VideoContainer = styled.div`
  height: 349px;

  video {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;

export const InfoBoxWrapper = styled.div`
  width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1199.98px) {
    width: 478px;
  }

  @media (max-width: 575.98px) {
    padding-left: 25px;
    padding-right: 25px;
    width: 100%;
  }
`;

export const InfoBox = styled.div`
  color: #fff;
  display: flex;
  justify-content: space-between;

  &:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  }

  h3 {
    font-weight: 500;
    padding: 1rem;

    span {
      display: block;
      font-size: 12px;
    }

    &:last-child {
      span {
        text-align: end;
      }
    }
  }
`;
