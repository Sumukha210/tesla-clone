import React from "react";
import useStore from "../../store";
import CapsuleBtn from "./CapsuleBtn";
import { HeaderWrapper, CapsuleBtnContainer } from "./styles";

const Header: React.FC = () => {
  const currentCapsule = useStore(state => state.currentCapsule);
  const { title } = useStore(state => state.modelData);

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
