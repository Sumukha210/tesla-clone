import { formatAmount } from "@/utils/formatAmount";
import React from "react";
import styled from "styled-components";
import useStore from "../store";

const ModelVersionBtnContainer = () => {
  const currentModelVersion = useStore(s => s.currentModelVersion);
  const currentCapsule = useStore(s => s.currentCapsule);
  const data = useStore(s => s.modelData);
  const changeCurrentModelVersion = useStore(s => s.changeModelVersion);

  return (
    <Wrapper>
      <div>
        <h3 className="subtitle-2">Dual Motor All-Wheel Drive</h3>
        <Button
          onClick={() => changeCurrentModelVersion("baseVersion")}
          className={`${currentModelVersion === "baseVersion" && "active"}`}>
          <span>{data?.baseVersion.name}</span>
          <span>{formatAmount(data?.baseVersion[currentCapsule] || 0)}</span>
        </Button>
      </div>

      <div>
        <h3 className="subtitle-2">Tri Motor All-Wheel Drive</h3>
        <Button
          onClick={() => changeCurrentModelVersion("plaidVersion")}
          className={`${currentModelVersion === "plaidVersion" && "active"}`}>
          <span>{data?.plaidVersion.name}</span>
          <span>{formatAmount(data?.plaidVersion[currentCapsule] || 0)}</span>
        </Button>
      </div>
    </Wrapper>
  );
};

export default ModelVersionBtnContainer;

const Wrapper = styled.div`
  margin-top: 3rem !important;

  @media (max-width: 1199.98px) {
    padding-left: 3rem;
    padding-right: 3rem;
    max-width: 768px;
    margin: auto;
  }

  & > div {
    h3 {
      color: #5c5e62;
      font-weight: 500;
      margin: 1.5rem 0 6px 0;
    }
  }
`;

const Button = styled.div`
  padding: 1.2rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
  outline: 1px solid gray;
  border-radius: 45px;

  width: 100%;

  span {
    &:last-child {
      font-weight: bold;
    }
  }

  &.active {
    outline: 2px solid blue;
  }
`;
