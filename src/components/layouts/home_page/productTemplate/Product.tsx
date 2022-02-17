import React from "react";
import { generalInfoType } from "@/utils/productDetails/types";
import NextImg from "next/image";
import ProductSubtitle from "./ProductSubtitle";
import { ProductWrapper, Content } from "./productStyles";
import Button from "@/element/button";
import { useRouter } from "next/router";

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
    <ProductWrapper>
      <div className="bgImg">
        <NextImg src={img} placeholder="blur" objectFit="cover" />
      </div>

      <Content>
        <div className="container">
          <div className="inner-content">
            <div className="flex justify-between">
              <div className="header">
                <h1 className="heading-1">{name}</h1>
                <h3 className="subtitle-2">
                  <ProductSubtitle productType={productType} />
                </h3>
              </div>

              <div className="btnContainer">
                <Button
                  name={primaryBtnName}
                  onClick={() => router.push(`/${id}/design`)}
                />
                {productType != "accessories" && (
                  <Button name={secondaryBtnName} secondaryBtn={true} />
                )}
              </div>
            </div>
          </div>
        </div>
      </Content>
    </ProductWrapper>
  );
};

export default Product;
