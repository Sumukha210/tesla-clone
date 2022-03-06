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

const WheelBlock = () => {
  const modelData = useStore(s => s.modelData);
  const currentWheel = useStore(s => s.currentWheel);
  const changeCurrentWheel = useStore(s => s.changeCurrentWheel);
  const currentImage = useStore(s => s.currentImages);

  return (
    <Wrapper>
      {currentImage && (
        <HeroImageContainer>
          <NextImg
            src={currentImage?.wheelsImg}
            objectFit="cover"
            placeholder="blur"
          />
        </HeroImageContainer>
      )}

      <h2 className="heading-2">Wheels</h2>

      <PalletContainer>
        <div className="palletImages">
          {modelData?.wheels.map((item, index) => (
            <Pallet
              key={index}
              className={`${currentWheel === item.name && "active"}`}
              onClick={() => {
                changeCurrentWheel(item.name);
              }}>
              <NextImg
                className="active"
                objectFit="cover"
                src={item.wheelImg}
              />
            </Pallet>
          ))}
        </div>

        <div className="palletDetails">
          <h4 className="subtitle-2">
            <span>{currentWheel}</span>
            <span>
              {modelData?.wheels.map(item =>
                item.name === currentWheel
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

export default WheelBlock;
