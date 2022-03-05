import React from "react";
import useStore from "../../store";
import CapsuleBtn from "./CapsuleBtn";
import { HeaderWrapper, CapsuleBtnContainer } from "./styles";
import { headerProps } from "./types";

const Header: React.FC<headerProps> = ({ title }) => {
  const currentCapsule = useStore(state => state.currentCapsule);

  return (
    <HeaderWrapper>
      <div className="header">
        <h1 className="heading-1">{title}</h1>
        <h5 className="subtitle-2"></h5>
      </div>

      <CapsuleBtnContainer>
        <CapsuleBtn
          isActive={currentCapsule === "purchasePrice"}
          name="Purchase Price"
        />

        <CapsuleBtn
          isActive={currentCapsule === "potentialSavings"}
          name="Potential Savings"
        />
      </CapsuleBtnContainer>
    </HeaderWrapper>
  );
};

export default Header;
