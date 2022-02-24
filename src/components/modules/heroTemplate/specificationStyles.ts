import styled, { css } from "styled-components";

interface SpecProps {
  textColor?: string;
}

interface WrapperProps {
  showOverlay?: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  & > div {
    position: relative;
    z-index: 2;
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
  }
`;
