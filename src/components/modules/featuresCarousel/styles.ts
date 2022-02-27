import styled from "styled-components";

export const Wrapper = styled.div``;

export const Content = styled.div``;

export const Header = styled.div`
  @media (min-width: 1200px) {
    width: 80%;
    margin: auto;
  }

  p {
    margin-top: 1.5rem;
    @media (min-width: 1200px) {
      width: 60%;
    }
  }
`;

export const MediaContainer = styled.div`
  video {
    height: 85vh;
    object-fit: cover;
    width: 100%;
  }
`;

export const GridContainer = styled.div`
  display: flex;
  gap: 2rem;

  cursor: grab;
  overflow-x: auto;

  @media (min-width: 1200px) {
    justify-content: center;
    width: 80%;
    margin: auto;
  }

  @media (max-width: 991.98px) {
    padding: 2rem;
    width: 100vw;
    margin: 0 calc(-50vw + 50%);
  }
`;

export const Box = styled.div`
  padding: 2rem;
  flex: 1;

  &:not(.active) {
    border-top: 3px solid var(--dark-100);
    opacity: 0.5;
  }

  &.active {
    outline: 3px solid var(--dark-100);
    opacity: 1;
  }

  p {
    margin-top: 0.5rem;
  }

  @media (max-width: 991.98px) {
    min-width: 250px;
    height: 140px;
  }
`;
