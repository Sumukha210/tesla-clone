import React from "react";
import useStore from "../store";
import NextImg from "next/image";
import { formatAmount } from "@/utils/formatAmount";
import {
  Wrapper,
  PalletContainer,
  Pallet,
  HeroImageContainer,
} from "./specificBlockStyles";

const PaintBlock = () => {
  const modelData = useStore(s => s.modelData);
  const currentPaint = useStore(s => s.currentPaint);
  const changeCurrentPaint = useStore(s => s.changeCurrentPaint);
  const currentImage = useStore(s => s.currentImages);

  return (
    <Wrapper>
      {currentImage && (
        <HeroImageContainer>
          <NextImg
            src={currentImage?.paintImg}
            objectFit="cover"
            placeholder="blur"
          />
        </HeroImageContainer>
      )}

      <h2 className="heading-2">Paint</h2>

      <PalletContainer>
        <div className="palletImages">
          {modelData?.paint.map((item, index) => (
            <Pallet
              key={index}
              className={`${currentPaint === item.color && "active"}`}
              onClick={() => changeCurrentPaint(item.color)}>
              <NextImg
                className="active"
                objectFit="cover"
                src={item.paintColorImg}
              />
            </Pallet>
          ))}
        </div>

        <div className="palletDetails">
          <h4 className="subtitle-2">
            <span>{currentPaint}</span>
            <span>
              {modelData?.paint.map(item =>
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
