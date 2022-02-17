import { useRouter } from "next/router";
import React from "react";

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="margin-top component-inner-gap">
      <h1>ProductPage:-{id}</h1>
    </div>
  );
};

export default ProductPage;
