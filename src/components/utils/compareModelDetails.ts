import modelsImg from "@/assets/images/compare-model/compare-ms-lr.png";
import modelSPlaidImg from "@/assets/images/compare-model/compare-ms-plaid.png";
import model3LongRangeImg from "@/assets/images/compare-model/compare-mode-3-long-range.png";
import model3PerformanceImg from "@/assets/images/compare-model/compare-mode-3-performance.png";
import model3RearWheelDriveImg from "@/assets/images/compare-model/compare-mode-3-standard-plus.png";
import modelXLongRangeImg from "@/assets/images/compare-model/compare-mx-lr.png";
import modelXPlaidImg from "@/assets/images/compare-model/compare-mx-plaid.png";
import modelYLongRangeImg from "@/assets/images/compare-model/compare-mode-y-long-range.png";
import modelYPerformanceImg from "@/assets/images/compare-model/compare-mode-y-performance.png";

export enum CarModel {
  MODELX = "model x",
  MODELY = "model y",
  MODEL3 = "model 3",
  MODELS = "model s",
}

export interface compareModelTypes {
  category: CarModel;
  modelName: string;
  img: StaticImageData;
  specs: {
    price: string;
    range: string;
    "seating up to": string;
    "cargo capacity": string;
    drive: string;
    "top speed": string;
    acceleration: string;
  };
}

export const compareModelsInfo: compareModelTypes[] = [
  {
    category: CarModel.MODELS,
    modelName: "Model S",
    specs: {
      price: "$94,990",
      range: "405 <span className='unit'>miles (EPA est.)</span>",
      "seating up to": "5 <span className='unit'>seats</span>",
      "cargo capacity": "28 <span className='unit'>cu ft</span>",
      drive: "AWD <span className='unit'>Dual Motor</span>",
      acceleration: "3.1 <span className='unit'>0-60 mph</span>",
      "top speed": "155 <span className='unit'>mph</span>",
    },
    img: modelsImg,
  },
  {
    category: CarModel.MODELS,
    modelName: "Model S Plaid",
    specs: {
      price: "$129,990",
      range: "396 <span className='unit'>miles (EPA est.)</span>",
      "seating up to": "5 <span className='unit'>seats</span>",
      "cargo capacity": "28 <span className='unit'>cu ft</span>",
      drive: "AWD <span className='unit'>Dual Motor</span>",
      acceleration: "1.99 <span className='unit'>0-60 mph</span>",
      "top speed": "200 <span className='unit'>mph</span>",
    },
    img: modelSPlaidImg,
  },
  {
    category: CarModel.MODEL3,
    modelName: "Model 3 Rear-Wheel Drive",
    specs: {
      price: "$44,990",
      range: "272 <span className='unit'>miles (EPA est.)</span>",
      "seating up to": "5 <span className='unit'>seats</span>",
      "cargo capacity": "23 <span className='unit'>cu ft</span>",
      drive: "RWD",
      acceleration: "5.8 <span className='unit'>0-60 mph</span>",
      "top speed": "140 <span className='unit'>mph</span>",
    },
    img: model3RearWheelDriveImg,
  },
  {
    category: CarModel.MODEL3,
    modelName: "Model 3 Long Range",
    specs: {
      price: "$50,990",
      range: "358 <span className='unit'>miles (EPA est.)</span>",
      "seating up to": "5 <span className='unit'>seats</span>",
      "cargo capacity": "23 <span className='unit'>cu ft</span>",
      drive: "AWD <span className='unit'>Dual Motor</span>",
      acceleration: "4.2 <span className='unit'>0-60 mph</span>",
      "top speed": "145 <span className='unit'>mph</span>",
    },
    img: model3LongRangeImg,
  },
  {
    category: CarModel.MODEL3,
    modelName: "Model 3 Performance",
    specs: {
      price: "$58,990",
      range: "315 <span className='unit'>miles (EPA est.)</span>",
      "seating up to": "5 <span className='unit'>seats</span>",
      "cargo capacity": "23 <span className='unit'>cu ft</span>",
      drive: "AWD <span className='unit'>Dual Motor</span>",
      acceleration: "3.1 <span className='unit'>0-60 mph</span>",
      "top speed": "162 <span className='unit'>mph</span>",
    },
    img: model3PerformanceImg,
  },
  {
    category: CarModel.MODELX,
    modelName: "Model X",
    specs: {
      price: "$104,990",
      range: "348 <span className='unit'>miles (EPA est.)</span>",
      "seating up to": "7 <span className='unit'>seats</span>",
      "cargo capacity": "88 <span className='unit'>cu ft</span>",
      drive: "AWD <span className='unit'>Dual Motor</span>",
      acceleration: "3.8s <span className='unit'>0-60 mph</span>",
      "top speed": "155 <span className='unit'>mph</span>",
    },
    img: modelXLongRangeImg,
  },
  {
    category: CarModel.MODELX,
    modelName: "Model X Plaid",
    specs: {
      price: "$126,490",
      range: "333 <span className='unit'>miles (EPA est.)</span>",
      "seating up to": "6 <span className='unit'>seats</span>",
      "cargo capacity": "88 <span className='unit'>cu ft</span>",
      drive: "AWD <span className='unit'>Dual Motor</span>",
      acceleration: "2.5s <span className='unit'>0-60 mph</span>",
      "top speed": "163 <span className='unit'>mph</span>",
    },
    img: modelXPlaidImg,
  },
  {
    category: CarModel.MODELY,
    modelName: "Model Y Long Range",
    specs: {
      price: "$58,990",
      range: "330 <span className='unit'>miles (EPA est.)</span>",
      "seating up to": "7 <span className='unit'>seats</span>",
      "cargo capacity": "76 <span className='unit'>cu ft</span>",
      drive: "AWD <span className='unit'>Dual Motor</span>",
      acceleration: "4.8s <span className='unit'>0-60 mph</span>",
      "top speed": "135 <span className='unit'>mph</span>",
    },
    img: modelYLongRangeImg,
  },

  {
    category: CarModel.MODELY,
    modelName: "Model Y Performance",
    specs: {
      price: "$63,990",
      range: "303 <span className='unit'>miles (EPA est.)</span>",
      "seating up to": "5 <span className='unit'>seats</span>",
      "cargo capacity": "76 <span className='unit'>cu ft</span>",
      drive: "AWD <span className='unit'>Dual Motor</span>",
      acceleration: "3.5s <span className='unit'>0-60 mph</span>",
      "top speed": "155 <span className='unit'>mph</span>",
    },
    img: modelYPerformanceImg,
  },
];
