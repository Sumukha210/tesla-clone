import React from "react";
import useStore from "../../store";
import NextImg from "next/image";
import { formatAmount } from "@/utils/formatAmount";
import { Wrapper, PalletContainer, Pallet, HeroImageContainer } from "./styles";

const PaintBlock = () => {
  const modelData = useStore(s => s.modelData);
  const currentPaint = useStore(s => s.currentPaint);
  const changeCurrentPaint = useStore(s => s.changeCurrentPaint);

  return (
    <Wrapper>
      <h2 className="heading-2">Paint</h2>

      {modelData && (
        <HeroImageContainer>
          <NextImg
            src={modelData?.images.paintImages[0].images.heroImg}
            objectFit="cover"
            placeholder="blur"
          />
        </HeroImageContainer>
      )}

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
                src={item.paintImg}
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
