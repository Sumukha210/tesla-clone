import React from "react";
import styled from "styled-components";
import useStore from "../store";
import NextImg from "next/image";
import { formatAmount } from "@/utils/formatAmount";

const PaintBlock = () => {
  const paintData = useStore(s => s.modelData?.paint);
  const currentPaint = useStore(s => s.currentPaint);
  const changeCurrentPaint = useStore(s => s.changeCurrentPaint);

  return (
    <Wrapper>
      <h2 className="heading-2">Paint</h2>

      <PalletContainer>
        <div className="palletImages">
          {paintData?.map((item, index) => (
            <Pallet
              className={`${currentPaint === item.color && "active"}`}
              onClick={() => changeCurrentPaint(item.color)}>
              <NextImg
                className="active"
                key={index}
                objectFit="cover"
                src={item.paintImg}
              />
            </Pallet>
          ))}
        </div>

        <div className="palletDetails">
          <h4 className="subtitle-2">
            <span>{currentPaint}</span>
            <span>
              {paintData?.map(item =>
                item.color === currentPaint
                  ? item.price === "included"
                    ? item.price
                    : formatAmount(item.price)
                  : []
              )}
            </span>
          </h4>
        </div>
      </PalletContainer>
    </Wrapper>
  );
};

export default PaintBlock;

const Wrapper = styled.div`
  margin-top: 3rem;

  h2 {
    text-align: center;
    font-weight: bold;
    margin-bottom: 1.5rem;
  }
`;

const PalletContainer = styled.div`
  .palletImages {
    display: flex;
  }

  .palletDetails {
    margin-top: 1rem;
    h4 {
      display: flex;
      align-items: center;
      justify-content: center;

      span {
        &:last-child {
          margin-left: 1rem;
          color: #5c5e62;
        }
      }
    }
  }
`;

const Pallet = styled.div`
  cursor: pointer;
  padding: 4px;
  width: 40px;
  height: 40px;
  border-radius: 50%;

  &:not(:first-child) {
    margin-left: 8px;
  }

  &.active {
    outline: 3px solid blue;
  }
`;
