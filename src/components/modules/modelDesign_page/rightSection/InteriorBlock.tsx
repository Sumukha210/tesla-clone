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

const InteriorBlock = () => {
  const modelData = useStore(s => s.modelData);
  const currentInterior = useStore(s => s.currentInterior);
  const changeCurrentInterior = useStore(s => s.changeCurrentInterior);

  const currentInteriorImage = modelData?.interiorImages.find(
    item => item.interiorColor === currentInterior
  );

  return (
    <Wrapper>
      {currentInteriorImage && (
        <HeroImageContainer>
          <NextImg
            src={currentInteriorImage.imgSrc}
            objectFit="cover"
            placeholder="blur"
          />
        </HeroImageContainer>
      )}

      <h2 className="heading-2">Interior</h2>

      <PalletContainer>
        <div className="palletImages">
          {modelData?.interior.map((item, index) => (
            <Pallet
              key={index}
              className={`${currentInterior === item.color && "active"}`}
              onClick={() => changeCurrentInterior(item.color)}>
              <NextImg
                className="active"
                objectFit="cover"
                src={item.interiorColorImg}
              />
            </Pallet>
          ))}
        </div>

        <div className="palletDetails">
          <h4 className="subtitle-2">
            <span>{currentInterior}</span>
            <span>
              {modelData?.interior.map(item =>
                item.color === currentInterior
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

export default InteriorBlock;
