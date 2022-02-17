import React from "react";
import styled from "styled-components";
import { products } from "@/utils/productDetails";
import Product from "./Product";

const ProductTemplate = () => {
  return (
    <Wrapper>
      {products.map(({ generalInfo }) => (
        <Product {...generalInfo} key={generalInfo.id} />
      ))}
    </Wrapper>
  );
};

export default ProductTemplate;

const Wrapper = styled.div``;
