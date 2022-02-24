import { BgImg } from "@/module/heroTemplate/styles";
import styled from "styled-components";

export const Wrapper = styled.div``;

export const ImageContainer = styled(BgImg)`
  background: #fff;
  height: 500px;
  padding: 1rem 3rem;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (min-width: 1200px) {
    width: 80%;
    margin: auto;
  }

  @media (max-width: 991.98px) {
    width: 70%;
    margin: auto;
  }

  @media (max-width: 575.98px) {
    width: 90%;
  }
`;

export const Box = styled.div`
  padding: 2rem;
  opacity: 0.6;
  border-top: 3px solid var(--dark-100);
  margin-top: 2rem;

  @media (max-width: 375.98px) {
    padding: 1rem;
  }

  p {
    padding: 1rem 0;
  }

  &.active {
    opacity: 1;
    border: none;
    outline: 3px solid var(--dark-100);
  }
`;

export const SpecContainer = styled.div`
  margin-top: 2rem;
  @media (min-width: 992px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const Spec = styled.div`
  @media (max-width: 991.98px) {
    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }

  .specValue {
  }

  .specName {
    color: #5c5e62;
  }
`;
