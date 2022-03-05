import { CarModel } from "@/utils/compareModelDetails";

export interface modelVersionTypes {
  estimatedDelivery: string;
  name: string;
  purchasePrice: number;
  potentialSavings: number;
  specs: { key: string; value: string }[];
}

export interface headerProps {
  title: CarModel;
  baseVersion: modelVersionTypes;
  plaidVersion: modelVersionTypes;
}

export interface modelDataTypes extends headerProps {}

export type capsuleBtnTypes = "purchasePrice" | "potentialSavings";
