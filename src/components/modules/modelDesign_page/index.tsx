import { CarModel } from "@/utils/compareModelDetails";
import React from "react";
import Header from "./rightSection/header";
import { headerProps } from "./rightSection/header/types";
import { LeftSection, RightSection, Wrapper } from "./styles";

const CarModelDesignPage = () => {
  const headerProps: headerProps = {
    title: CarModel.MODELS,
    baseVersion: {
      purchasePrice: 94990,
      potentialSavings: 89490,
      name: "Model S",
      estimatedDelivery: "July 2022",
      specs: [
        { "Range (est.)": "375<span>mi</span>" },
        { "Top Speed": "155<span>mph</span>" },
        { "0-60 mph": "3.1<span>sec</span>" },
      ],
    },
    plaidVersion: {
      purchasePrice: 129990,
      potentialSavings: 124490,
      name: "Model S Plaid",
      estimatedDelivery: "4-8 Weeks",
      specs: [
        { "Range (est.)": "348<span>mi</span>" },
        { "Top Speed": "200<span>mph</span>" },
        { "0-60 mph": "1.99<span>sec</span>" },
      ],
    },
  };

  return (
    <Wrapper>
      <LeftSection></LeftSection>
      <RightSection>
        <Header {...headerProps} />
      </RightSection>
    </Wrapper>
  );
};

export default CarModelDesignPage;
