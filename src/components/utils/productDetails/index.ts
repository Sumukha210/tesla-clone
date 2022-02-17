import model3Img from "@/assets/images/home-page/model-3.jpg";
import modelSImg from "@/assets/images/home-page/model-s.jpg";
import modelXImg from "@/assets/images/home-page/model-x.jpg";
import modelYImg from "@/assets/images/home-page/model-y.jpg";
import solarPanelsImg from "@/assets/images/home-page/solar-panels.jpg";
import solarRoofImg from "@/assets/images/home-page/solar-roof.jpg";
import accessoryImg from "@/assets/images/home-page/Accessories.jpg";
import { productsTypes } from "./types";

export const products: productsTypes[] = [
  {
    generalInfo: {
      id: "model3",
      name: "Model 3",
      productType: "car",
      img: model3Img,
    },
  },
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
      id: "models",
      name: "Model S",
      productType: "car",
      img: modelSImg,
    },
  },
  {
    generalInfo: {
      id: "modelx",
      name: "Model X",
      productType: "car",
      img: modelXImg,
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
