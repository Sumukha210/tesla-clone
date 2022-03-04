import { productsTypes } from "./types";
import modelYImg from "@/assets/images/home-page/model-y.jpg";

export const modelYDetails: productsTypes = {
  generalInfo: {
    id: "modely",
    name: "Model Y",
    productType: "car",
    img: modelYImg,
  },

  modelVersion: {
    version1: {
      name: "Model Y Plaid",
      specifications: [
        { specName: "Battery", specValue: "Long Range" },
        { specName: "Range (EPA est.)", specValue: "303 mi" },
        { specName: "Peak Power", specValue: "1,020 hp" },
        { specName: "Wheels", specValue: `19" or 21"` },
        { specName: "Weight", specValue: "4,398 lbs" },
        { specName: "Powertrain", specValue: "Tri Motor" },
        { specName: "Supercharging", specValue: "Pay Per Use" },
        { specName: "Cargo", specValue: "28 cu ft" },
        {
          specName: "Acceleration",
          specValue: "3.5 s 0-50 mph* <span>*with rollout subtracted</span>",
        },
        { specName: "Drag coefficient", specValue: "0.208 Cd" },
      ],
    },

    version2: {
      name: "Model Y",
      specifications: [
        { specName: "Range (EPA est.)", specValue: "405 mi" },
        { specName: "Peak Power", specValue: "670 hp" },
        { specName: "Wheels", specValue: `19" or 21"` },
        { specName: "Cargo", specValue: "28 cu ft" },
        {
          specName: "Acceleration",
          specValue: "3.1 s 0-60 mph",
        },
        {
          specName: "Top Speed",
          specValue: "155 mph",
        },
        { specName: "Drag coefficient", specValue: "0.208 Cd" },
        { specName: "Weight", specValue: "4,561 lbs" },
        { specName: "Powertrain", specValue: "Dual Motor" },
        { specName: "SuperCharging Max", specValue: "250 KW" },
      ],
    },
  },
};
