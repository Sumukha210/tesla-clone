import React from "react";
import { productType } from "@/utils/productDetails/types";
import Link from "next/link";

interface ProductSubtitleProps {
  productType: productType;
}

const ProductSubtitle: React.FC<ProductSubtitleProps> = ({ productType }) => {
  let text = <></>;
  if (productType === "car") {
    text = (
      <>
        <span>Order online for</span>
        <span>
          <Link href="/support"> Touchless Delivery</Link>
        </span>
      </>
    );
  } else if (productType === "solar panel") {
    text = <span>Lowest Cost Solar Panels in America</span>;
  } else if (productType === "solar roof") {
    text = <span>Produce Clean Energy From Your Roof</span>;
  }

  return text;
};

export default ProductSubtitle;
