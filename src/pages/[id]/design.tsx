import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const ProductDesignPage = () => {
  const router = useRouter();
  const { id } = router.query;

  console.log("router", router);

  return (
    <div className="margin-top component-inner-gap">
      <h1>ProductDesignPage:-{id}</h1>
      <h4>
        <Link href="#payment">Payment</Link>
      </h4>
    </div>
  );
};

export default ProductDesignPage;
