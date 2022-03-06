import { CarModel } from "@/utils/compareModelDetails";
import { displayImagesTypes, modelDataTypes } from "./types";

// ****************** CONFIG IMAGES *********************************

// paint pallet color images
import blackPalletImg from "@/assets/images/paint-pallet/Paint_Black.png";
import bluePalletImg from "@/assets/images/paint-pallet/Paint_Blue.png";
import silverPalletImg from "@/assets/images/paint-pallet/Paint_MidnightSilver.png";
import redPalletImg from "@/assets/images/paint-pallet/Paint_Red.png";
import whitePalletImg from "@/assets/images/paint-pallet/Paint_White.png";

// wheels images
import wheel1Img from "@/assets/images/wheels-img/wheel1.png";
import wheel2Img from "@/assets/images/wheels-img/wheel2.png";

// interior pallet color images
import interior_black_img from "@/assets/images/interior-pallet/Interior_Black.png";
import interior_Cream_img from "@/assets/images/interior-pallet/Interior_Cream.png";
import interior_white_img from "@/assets/images/interior-pallet/Interior_White.png";

// ************** CAR IMAGES  *************************************

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

// white color image, with second type wheel
import baseHero_white_wheel2_img from "@/assets/images/models-page/design/compositor (30).png";
import basePaint_white_wheel2_img from "@/assets/images/models-page/design/compositor (31).png";
import baseWheels_white_wheel2_img from "@/assets/images/models-page/design/compositor (32).png";

// black color image
import baseHero_black_img from "@/assets/images/models-page/design/compositor (6).png";
import basePaint_black_img from "@/assets/images/models-page/design/compositor (7).png";
import baseWheels_black_img from "@/assets/images/models-page/design/compositor (8).png";

// black color , with second type wheel
import baseHero_black_wheel2_img from "@/assets/images/models-page/design/compositor (9).png";
import basePaint_black_wheel2_img from "@/assets/images/models-page/design/compositor (10).png";
import baseWheels_black_wheel2_img from "@/assets/images/models-page/design/compositor (11).png";

// silver color image
import baseHero_silver_img from "@/assets/images/models-page/design/compositor (12).png";
import basePaint_silver_img from "@/assets/images/models-page/design/compositor (13).png";
import baseWheels_silver_img from "@/assets/images/models-page/design/compositor (14).png";

// silver color image, with second type wheel
import baseHero_silver_wheel2_img from "@/assets/images/models-page/design/compositor (15).png";
import basePaint_silver_wheel2_img from "@/assets/images/models-page/design/compositor (16).png";
import baseWheels_silver_wheel2_img from "@/assets/images/models-page/design/compositor (17).png";

// blue color image
import baseHero_blue_img from "@/assets/images/models-page/design/compositor (21).png";
import basePaint_blue_img from "@/assets/images/models-page/design/compositor (22).png";
import baseWheels_blue_img from "@/assets/images/models-page/design/compositor (23).png";

// blue color image, with second type wheel
import baseHero_blue_wheel2_img from "@/assets/images/models-page/design/compositor (19).png";
import basePaint_blue_wheel2_img from "@/assets/images/models-page/design/compositor (19).png";
import baseWheels_blue_wheel2_img from "@/assets/images/models-page/design/compositor (20).png";

// red color image
import baseHero_red_img from "@/assets/images/models-page/design/compositor (24).png";
import basePaint_red_img from "@/assets/images/models-page/design/compositor (25).png";
import baseWheels_red_img from "@/assets/images/models-page/design/compositor (26).png";

// red color image, with second type wheel
import baseHero_red_wheel2_img from "@/assets/images/models-page/design/compositor (27).png";
import basePaint_red_wheel2_img from "@/assets/images/models-page/design/compositor (28).png";
import baseWheels_red_wheel2_img from "@/assets/images/models-page/design/compositor (29).png";

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

  images: [
    {
      modelVersion: "base",
      modelPaint: "Solid Black",
      wheelType: "firstType",
      modelInterior: "All Black",
      imageSrc: {
        heroImg: baseHero_black_img,
        paintImg: basePaint_black_img,
        wheelsImg: baseWheels_black_img,
        interiorImg: baseInterior_white_img,
      },
    },

    {
      modelVersion: "plaid",
      modelPaint: "Pearl White Multi-Coat",
      wheelType: "firstType",
      modelInterior: "All Black",
      imageSrc: {
        heroImg: plaidHero_white_img,
        paintImg: plaidPaint_white_img,
        wheelsImg: plaidWheels_white_img,
        interiorImg: plaidInterior_white_img,
      },
    },

    {
      modelVersion: "base",
      modelPaint: "Solid Black",
      wheelType: "secondType",
      modelInterior: "All Black",
      imageSrc: {
        heroImg: baseHero_black_wheel2_img,
        paintImg: basePaint_black_wheel2_img,
        wheelsImg: baseWheels_black_wheel2_img,
        interiorImg: baseInterior_white_img,
      },
    },

    {
      modelVersion: "base",
      modelPaint: "Deep Blue Metallic",
      wheelType: "firstType",
      modelInterior: "Black and White",
      imageSrc: {
        heroImg: baseHero_blue_img,
        paintImg: basePaint_blue_img,
        wheelsImg: baseWheels_blue_img,
        interiorImg: baseInterior_white_img,
      },
    },

    {
      modelVersion: "base",
      modelPaint: "Deep Blue Metallic",
      wheelType: "secondType",
      modelInterior: "Black and White",
      imageSrc: {
        heroImg: baseHero_blue_wheel2_img,
        paintImg: basePaint_blue_wheel2_img,
        wheelsImg: baseWheels_blue_wheel2_img,
        interiorImg: baseInterior_white_img,
      },
    },

    {
      modelVersion: "base",
      modelPaint: "Midnight Silver Metallic",
      wheelType: "firstType",
      modelInterior: "Black and White",
      imageSrc: {
        heroImg: baseHero_silver_img,
        paintImg: basePaint_silver_img,
        wheelsImg: baseWheels_silver_img,
        interiorImg: baseInterior_white_img,
      },
    },

    {
      modelVersion: "base",
      modelPaint: "Midnight Silver Metallic",
      wheelType: "secondType",
      modelInterior: "Black and White",
      imageSrc: {
        heroImg: baseHero_silver_wheel2_img,
        paintImg: basePaint_silver_wheel2_img,
        wheelsImg: baseWheels_silver_wheel2_img,
        interiorImg: baseInterior_white_img,
      },
    },

    {
      modelVersion: "base",
      modelPaint: "Pearl White Multi-Coat",
      wheelType: "firstType",
      modelInterior: "Black and White",
      imageSrc: {
        heroImg: baseHero_white_img,
        paintImg: basePaint_white_img,
        wheelsImg: baseWheels_white_img,
        interiorImg: baseInterior_white_img,
      },
    },

    {
      modelVersion: "base",
      modelPaint: "Pearl White Multi-Coat",
      wheelType: "secondType",
      modelInterior: "Black and White",
      imageSrc: {
        heroImg: baseHero_white_wheel2_img,
        paintImg: basePaint_white_wheel2_img,
        wheelsImg: baseWheels_white_wheel2_img,
        interiorImg: baseInterior_white_img,
      },
    },

    {
      modelVersion: "base",
      modelPaint: "Red Multi-Coat",
      wheelType: "firstType",
      modelInterior: "Black and White",
      imageSrc: {
        heroImg: baseHero_red_img,
        paintImg: basePaint_red_img,
        wheelsImg: baseWheels_red_img,
        interiorImg: baseInterior_white_img,
      },
    },

    {
      modelVersion: "base",
      modelPaint: "Red Multi-Coat",
      wheelType: "secondType",
      modelInterior: "Black and White",
      imageSrc: {
        heroImg: baseHero_red_wheel2_img,
        paintImg: basePaint_red_wheel2_img,
        wheelsImg: baseWheels_red_wheel2_img,
        interiorImg: baseInterior_white_img,
      },
    },
  ],

  paint: [
    {
      color: "Pearl White Multi-Coat",
      price: "included",
      paintColorImg: whitePalletImg,
    },
    { color: "Solid Black", price: 1500, paintColorImg: blackPalletImg },
    {
      color: "Midnight Silver Metallic",
      price: 1500,
      paintColorImg: silverPalletImg,
    },
    { color: "Deep Blue Metallic", price: 1500, paintColorImg: bluePalletImg },
    { color: "Red Multi-Coat", price: 2500, paintColorImg: redPalletImg },
  ],

  wheels: [
    {
      name: `firstType`,
      price: "included",
      range: 405,
      wheelImg: wheel1Img,
    },

    {
      name: `secondType`,
      price: 4500,
      range: 375,
      wheelImg: wheel2Img,
    },
  ],

  interior: [
    {
      color: "All Black",
      price: "included",
      decor: "Ebony Decor",
      interiorColorImg: interior_black_img,
    },
    {
      color: "Black and White",
      price: 2000,
      decor: "Walnut Decor",
      interiorColorImg: interior_white_img,
    },
    {
      color: "Cream",
      price: 2000,
      decor: "Walnut Decor",
      interiorColorImg: interior_Cream_img,
    },
  ],
};
