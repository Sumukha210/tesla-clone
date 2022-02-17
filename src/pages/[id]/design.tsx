import { useRouter } from "next/router";
import React from "react";

const ProductDesignPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="margin-top component-inner-gap">
      <h1>ProductDesignPage:-{id}</h1>
    </div>
  );
};

export default ProductDesignPage;
