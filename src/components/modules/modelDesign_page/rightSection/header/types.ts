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

export type priceType = number | "included";

export interface paintTypes {
  color:
    | "Pearl White Multi-Coat"
    | "Solid Black"
    | "Midnight Silver Metallic"
    | "Deep Blue Metallic"
    | "Red Multi-Coat";

  price: priceType;
}

export interface wheelsTypes {
  name: string;
  price: priceType;
  range: number;
  topSpeed?: number;
}

export interface interiorTypes {
  price: priceType;
  color: "All Black" | "Black and White" | "Cream";
  decor?: "Walnut Decor" | "Ebony Decor";
}

export interface modelDataTypes extends headerProps {
  paint: paintTypes[];
  wheels: wheelsTypes[];
  interior: interiorTypes[];
}

export type capsuleBtnTypes = "purchasePrice" | "potentialSavings";
