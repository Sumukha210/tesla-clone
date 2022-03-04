import styled, { css } from "styled-components";

import { normalBtnProps, outlineBtnProps, textBtnProps } from "./types";

interface customButtonProps {
  restProps: outlineBtnProps | textBtnProps | normalBtnProps;
}

export const CustomButton = styled.button<customButtonProps>`
  --dark-color: rgba(23, 26, 32, 0.8);
  --dim-color: rgba(244, 244, 244, 0.65);

  border: none;
  cursor: pointer;
  border-radius: 35px;
  font-family: var(--primary-font);
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1px;

  ${({ restProps: { color, size, variant } }) => css`
    padding: ${size === "sm"
      ? "13px 42px"
      : size === "large"
      ? "13px 60px"
      : size === "flexible"
      ? "13px 0"
      : "13px 55px"};

    background: ${variant === "outline" || variant === "text"
      ? "transparent"
      : color === "dark"
      ? "var(--dark-color)"
      : color === "light"
      ? "var(--light-color)"
      : "var(--dim-color)"};
  `}

  ${({ restProps: { size } }) =>
    size === "flexible" &&
    css`
      width: 100%;
    `}
  
  
    ${({ restProps: options }) =>
    options.variant === "text" &&
    css`
      width: 100%;
      font-size: ${options.textSize};
      color: ${options.color === "light"
        ? "var(--light-color)"
        : options.color === "dimColor"
        ? "var(--dim-color)"
        : "var(--dark-color)"};
    `}
  
    ${({ restProps: { variant, color } }) =>
    variant === "standard" &&
    css`
      backdrop-filter: blur(8px);
      color: ${color === "dark" ? "var(--light-color)" : "var(--dark-color)"};
    `}
  
  
    ${({ restProps: { variant, color } }) =>
    variant === "outline" &&
    css`
      outline: 2px solid
        ${color === "light"
          ? "var(--light-color)"
          : color === "dimColor"
          ? "rgb(93 95 101 / 80%)"
          : "var(--dark-color)"};
      color: ${color === "dark" ? "var(--dark-color)" : "var(--light-color)"};
    `};

  @media (max-width: 575.98px) {
    width: 100%;
  }
`;
