import { CarModel } from "@/utils/compareModelDetails";
import { modelDataTypes } from "./rightSection/header/types";

// base version image(white)
import baseHero_white_img from "@/assets/images/models-page/design/compositor (1).png";
import basePaint_white_img from "@/assets/images/models-page/design/compositor (2).png";
import baseWheels_white_img from "@/assets/images/models-page/design/compositor.png";
import baseInterior_white_img from "@/assets/images/models-page/design/compositor.jpg";

// plaid version image(white)
import plaidHero_white_img from "@/assets/images/models-page/design/compositor (3).png";
import plaidPaint_white_img from "@/assets/images/models-page/design/compositor (4).png";
import plaidWheels_white_img from "@/assets/images/models-page/design/compositor (5).png";
import plaidInterior_white_img from "@/assets/images/models-page/design/compositor (1).jpg";

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

  images: {
    baseVersion: {
      heroImg: baseHero_white_img,
      paintImg: basePaint_white_img,
      wheelsImg: baseWheels_white_img,
      interiorImg: baseInterior_white_img,
    },
    plaidVersion: {
      heroImg: plaidHero_white_img,
      paintImg: plaidPaint_white_img,
      wheelsImg: plaidWheels_white_img,
      interiorImg: plaidInterior_white_img,
    },
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
