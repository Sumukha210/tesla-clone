import React, { useState } from "react";
import CapsuleBtn from "./CapsuleBtn";
import { HeaderWrapper, CapsuleBtnContainer } from "./styles";
import { capsuleBtnTypes, headerProps } from "./types";

const Header: React.FC<headerProps> = ({ title }) => {
  const [currentCapsuleBtn, setCurrentCapsuleBtn] =
    useState<capsuleBtnTypes>("potentialSavings");

  const handleCapsuleBtn = () => {
    setCurrentCapsuleBtn(prev =>
      prev === "potentialSavings" ? "purchasePrice" : "potentialSavings"
    );
  };

  return (
    <HeaderWrapper>
      <div className="header">
        <h1 className="heading-1">{title}</h1>
        <h5 className="subtitle-2"></h5>
      </div>

      <CapsuleBtnContainer>
        <CapsuleBtn
          isActive={currentCapsuleBtn === "purchasePrice"}
          name="Purchase Price"
          handleCapsuleBtn={handleCapsuleBtn}
        />

        <CapsuleBtn
          isActive={currentCapsuleBtn === "potentialSavings"}
          name="Potential Savings"
          handleCapsuleBtn={handleCapsuleBtn}
        />
      </CapsuleBtnContainer>
    </HeaderWrapper>
  );
};

export default Header;
