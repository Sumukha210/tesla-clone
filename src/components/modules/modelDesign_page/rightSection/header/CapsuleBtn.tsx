import React from "react";
import styled from "styled-components";

interface capsuleBtnProps {
  name: string;
  isActive: boolean;
  handleCapsuleBtn: () => void;
}

const CapsuleBtn: React.FC<capsuleBtnProps> = ({
  name,
  isActive,
  handleCapsuleBtn,
}) => {
  return (
    <Capsule
      onClick={handleCapsuleBtn}
      className={`subtitle-3 ${isActive && "active"}`}>
      {name}
    </Capsule>
  );
};

export default CapsuleBtn;

const Capsule = styled.h4`
  width: 100%;
  text-align: center;
  padding: 12px 0;
  border-radius: 35px;
  color: rgb(92, 94, 98);
  font-weight: 600;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease-in;

  &:last-child {
    margin-left: 10px;
  }

  &:hover {
    background-color: rgb(244, 244, 244);
    box-shadow: 0px 0px 5px;
  }

  &.active {
    box-shadow: 0px 0px 5px silver;
    background-color: #fff;
    font-weight: bold;
  }
`;
