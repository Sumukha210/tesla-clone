import styled, { css } from "styled-components";
import { SpecProps, WrapperProps } from "./Specifications";

export const Wrapper = styled.div<WrapperProps>`
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
  }

  &::after {
    content: "";
    ${({ showOverlay = true }) =>
      showOverlay &&
      css`
        position: absolute;
        bottom: 0%;
        left: 0%;
        width: 100%;
        background: linear-gradient(1deg, rgba(0, 0, 0, 0.7), transparent);
        backdrop-filter: blur(4px);
        height: 20%;
      `}
  }
`;

export const SpecContainer = styled.div`
  display: flex;
  justify-content: center;

  position: relative;
  z-index: 2;
`;

export const Spec = styled.div<SpecProps>`
  color: ${({ textColor }) => textColor || "#fff"};

  h2 {
    font-weight: 600;
  }

  h5 {
    font-weight: 400;
    margin-top: 8px;
  }

  &:not(:last-child) {
    margin-right: 3rem;

    @media (max-width: 575.98px) {
      margin-right: 1rem;
    }
  }

  @media (max-width: 991.98px) {
    &:nth-child(4) {
      display: none;
    }
    text-align: center;

    &:not(:last-child) {
      margin-right: 1.5rem;
    }
  }
`;

export const BtnContainer = styled.div`
  position: relative;
  z-index: 2;

  @media (min-width: 992px) {
    margin-left: 4rem;
  }

  button {
    @media (max-width: 767.98px) {
      width: 100%;
      display: block;
    }
  }
`;
