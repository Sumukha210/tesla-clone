import React from "react";
import { generalInfoType } from "@/utils/productDetails/types";
import ProductSubtitle from "./ProductSubtitle";
import Button from "@/element/button";
import { useRouter } from "next/router";
import HeroTemplate from "@/module/heroTemplate";
import styled from "styled-components";

const Product: React.FC<generalInfoType> = ({ name, id, productType, img }) => {
  const router = useRouter();

  const primaryBtnName =
    productType === "car"
      ? "custom order"
      : productType === "accessories"
      ? "shop now"
      : "order now";

  const secondaryBtnName =
    productType === "car" ? "Existing Inventory" : "Learn more";

  return (
    <>
      <HeroTemplate
        name={name}
        subtitle={<ProductSubtitle productType={productType} />}
        img={img}>
        <BtnContainer>
          <Button
            name={primaryBtnName}
            onClick={() => router.push(`/${id}/design`)}
          />
          {productType != "accessories" && (
            <Button name={secondaryBtnName} secondaryBtn={true} />
          )}
        </BtnContainer>
      </HeroTemplate>
    </>
  );
};

export default Product;

const BtnContainer = styled.div`
  button {
    @media (min-width: 768px) {
      &:last-child {
        margin-left: 24px;
      }
    }

    @media (max-width: 575.98px) {
      &:last-child {
        margin-top: 1.5rem;
      }
    }
  }
`;
