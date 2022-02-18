import modelSImg from "@/assets/images/home-page/model-s.jpg";
import { productsTypes } from "./types";

export const modelSDetails: productsTypes = {
  generalInfo: {
    id: "models",
    name: "Model S",
    productType: "car",
    img: modelSImg,
  },

  modelVersion: {
    version1: {
      name: "Model S Plaid",
      specifications: [
        { specName: "Range (EPA est.)", specValue: "396 mi" },
        { specName: "1/4 Mile", specValue: "9.23@155 mph trap speed" },
        { specName: "Peak Power", specValue: "1,020 hp" },
        { specName: "Wheels", specValue: `19" or 21"` },
        { specName: "Cargo", specValue: "28 cu ft" },
        { specName: "Weight", specValue: "4,766 lbs" },
        {
          specName: "Acceleration",
          specValue: "1.99 s 0-60 mph* </br> *with rollout subtracted",
        },
        {
          specName: "Top Speed",
          specValue:
            "200 mph* </br> *when equipped with paid hardware upgrades",
        },
        { specName: "Drag coefficient", specValue: "0.208 Cd" },
        { specName: "Powertrain", specValue: "Tri Motor" },
        { specName: "SuperCharging Max", specValue: "250 KW" },
      ],
    },

    version2: {
      name: "Model S",
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
