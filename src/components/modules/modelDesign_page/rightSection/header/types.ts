import { CarModel } from "@/utils/compareModelDetails";

export interface modelVersionTypes {
  estimatedDelivery: string;
  name: string;
  purchasePrice: number;
  potentialSavings: number;
  specs: [
    { "Range (est.)": string },
    { "Top Speed": string },
    { "0-60 mph": string }
  ];
}

export interface headerProps {
  title: CarModel;
  baseVersion: modelVersionTypes;
  plaidVersion: modelVersionTypes;
}

export interface modelDataTypes extends headerProps {}

export type capsuleBtnTypes = "purchasePrice" | "potentialSavings";
