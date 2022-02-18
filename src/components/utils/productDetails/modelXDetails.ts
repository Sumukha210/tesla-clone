import { productsTypes } from "./types";
import modelXImg from "@/assets/images/home-page/model-x.jpg";

export const modelXDetails: productsTypes = {
  generalInfo: {
    id: "modelx",
    name: "Model X",
    productType: "car",
    img: modelXImg,
  },
  modelVersion: {
    version1: {
      name: "Model X Plaid",
      specifications: [
        { specName: "Range (EPA est.)", specValue: "333 mi" },
        { specName: "1/4 Mile", specValue: "9.9" },
        { specName: "Peak Power", specValue: "1,020 hp" },
        { specName: "Wheels", specValue: `20" or 22"` },
        { specName: "Towing", specValue: "5,000 lbs" },
        { specName: "Seating", specValue: "Up to 5" },
        {
          specName: "Acceleration",
          specValue: "2.5 s 0-60 mph* </br> *with rollout subtracted",
        },
        { specName: "Top Speed", specValue: "163 mph" },
        { specName: "Drag coefficient", specValue: "0.24 Cd" },
        { specName: "Weight", specValue: "5,390 lbs" },
        { specName: "Powertrain", specValue: "Tri Motor" },
        { specName: "SuperCharging Max", specValue: "250 KW" },
      ],
    },

    version2: {
      name: "Model X",
      specifications: [
        { specName: "Range (EPA est.)", specValue: "348 mi" },
        { specName: "Peak Power", specValue: "670 hp" },
        { specName: "Wheels", specValue: `20" or 22"` },
        { specName: "Towing", specValue: "5,000 lbs" },
        { specName: "Seating", specValue: "Up to 5" },
        { specName: "Acceleration", specValue: "3.8 s 0-60 mph" },
        { specName: "Top Speed", specValue: "165 mph" },
        { specName: "Drag coefficient", specValue: "0.24 Cd" },
        { specName: "Weight", specValue: "5,185 lbs" },
        { specName: "Powertrain", specValue: "Dual Motor" },
        { specName: "SuperCharging Max", specValue: "250 KW" },
      ],
    },
  },
};
