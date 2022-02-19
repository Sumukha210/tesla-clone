import React from "react";
import styled from "styled-components";
import { buttonProps, customBtnProps } from "./types";

const Button: React.FC<buttonProps> = ({
  name,
  onClick = () => {},
  btnType = "button",
  secondaryBtn = false,
  lightOutlineBtn = false,
  outlineBtn = false,
}) => {
  return (
    <CustomBtn
      lightOutlineBtn={lightOutlineBtn}
      outlineBtn={outlineBtn}
      secondaryBtn={secondaryBtn}
      type={btnType}
      onClick={onClick}>
      <span>{name}</span>
    </CustomBtn>
  );
};

export default Button;

const CustomBtn = styled.button<customBtnProps>`
  padding: 13px 85px;
  font-size: 12px;
  background: ${({ secondaryBtn }) =>
    secondaryBtn ? "rgba(244, 244, 244, 0.65)" : "rgba(23, 26, 32, 0.8)"};
  border-radius: 35px;
  color: var(${props => (props.secondaryBtn ? "--dark-300" : "--light-color")});
  font-family: var(--primary-font);
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1px;
  outline: ${({ outlineBtn, lightOutlineBtn }) =>
    outlineBtn ? `2px solid ${lightOutlineBtn ? "white" : "black"}` : "none"};
  border: none;
  backdrop-filter: blur(8px);
  cursor: pointer;
`;
