import { CarModel } from "@/utils/compareModelDetails";
import { modelDataTypes } from "./rightSection/header/types";

export const modelData: modelDataTypes = {
  title: CarModel.MODELS,
  baseVersion: {
    purchasePrice: 94990,
    potentialSavings: 89490,
    name: "Model S",
    estimatedDelivery: "July 2022",
    specs: [
      { key: "Range (est.)", value: "375<span>mi</span>" },
      { key: "Top Speed", value: "155<span>mph</span>" },
      { key: "0-60 mph", value: "3.1<span>sec</span>" },
    ],
  },

  plaidVersion: {
    purchasePrice: 129990,
    potentialSavings: 124490,
    name: "Model S Plaid",
    estimatedDelivery: "4-8 Weeks",
    specs: [
      { key: "Range (est.)", value: "348<span>mi</span>" },
      { key: "Top Speed", value: "200<span>mph</span>" },
      { key: "0-60 mph", value: "1.99<span>sec</span>" },
    ],
  },

  paint: [
    { color: "Pearl White Multi-Coat", price: "included" },
    { color: "Solid Black", price: 1500 },
    { color: "Midnight Silver Metallic", price: 1500 },
    { color: "Deep Blue Metallic", price: 1500 },
    { color: "Red Multi-Coat", price: 2500 },
  ],

  wheels: [
    { name: `21" Arachnid Wheels`, price: 4500, range: 375 },
    { name: `19" Tempest Wheels`, price: "included", range: 405 },
  ],

  interior: [
    { color: "All Black", price: "included", decor: "Ebony Decor" },
    { color: "Black and White", price: 2000, decor: "Walnut Decor" },
    { color: "Cream", price: 2000, decor: "Walnut Decor" },
  ],
};
