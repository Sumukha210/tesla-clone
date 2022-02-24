import styled from "styled-components";

export const HeroWrapper = styled.div`
  h1.heading-1 {
    color: rgb(92, 94, 98);
    font-size: 3.125rem;
  }
`;

export const Content = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 0%;
  width: 100%;
  margin: auto;

  svg {
    vertical-align: middle;
  }
`;

export const DescriptionSection = styled.div`
  display: grid;
  grid-template-columns: 0.35fr;
  justify-content: center;
  color: #fff;
  text-align: center;
  margin-bottom: 2rem;

  h3 {
    font-weight: 500;
  }
`;
