import solarPanelsImg from "@/assets/images/home-page/solar-panels.jpg";
import accessoryImg from "@/assets/images/home-page/Accessories.jpg";
import { productsTypes } from "./types";
import { modelSDetails } from "./modelSDetails";
import { modelXDetails } from "./modelXDetails";
import { solarRoofDetails } from "./solarRoofDetails";
import { modelYDetails } from "./modelYDetails";

export const products: productsTypes[] = [
  modelSDetails,
  modelXDetails,
  modelYDetails,
  {
    generalInfo: {
      id: "energy",
      name: "Solar Panels",
      productType: "solar panel",
      img: solarPanelsImg,
    },
  },
  solarRoofDetails,
  {
    generalInfo: {
      id: "shop",
      name: "Accessories",
      productType: "accessories",
      img: accessoryImg,
    },
  },
];
