import CarModelDesignPage from "@/module/modelDesign_page";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const ProductDesignPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <CarModelDesignPage />
    </>
  );
};

export default ProductDesignPage;
