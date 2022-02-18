import modelYImg from "@/assets/images/home-page/model-y.jpg";
import solarPanelsImg from "@/assets/images/home-page/solar-panels.jpg";
import solarRoofImg from "@/assets/images/home-page/solar-roof.jpg";
import accessoryImg from "@/assets/images/home-page/Accessories.jpg";
import { productsTypes } from "./types";
import { modelSDetails } from "./modelSDetails";
import { modelXDetails } from "./modelXDetails";

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
  {
    generalInfo: {
      id: "solarroof",
      name: "Solar Roof",
      productType: "solar roof",
      img: solarRoofImg,
    },
  },
  {
    generalInfo: {
      id: "shop",
      name: "Accessories",
      productType: "accessories",
      img: accessoryImg,
    },
  },
];
