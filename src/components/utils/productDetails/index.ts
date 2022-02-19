import modelYImg from "@/assets/images/home-page/model-y.jpg";
import solarPanelsImg from "@/assets/images/home-page/solar-panels.jpg";
import accessoryImg from "@/assets/images/home-page/Accessories.jpg";
import { productsTypes } from "./types";
import { modelSDetails } from "./modelSDetails";
import { modelXDetails } from "./modelXDetails";
import { solarRoofDetails } from "./solarRoofDetails";

export const products: productsTypes[] = [
  modelSDetails,
  modelXDetails,
  {
    generalInfo: {
      id: "modely",
      name: "Model Y",
      productType: "car",
      img: modelYImg,
    },
  },
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
