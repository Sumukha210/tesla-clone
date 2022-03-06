import { CarModel } from "@/utils/compareModelDetails";

export interface modelVersionTypes {
  estimatedDelivery: string;
  name: string;
  purchasePrice: number;
  potentialSavings: number;
  specs: { key: string; value: string }[];
}

export type capsuleBtnTypes = "purchasePrice" | "potentialSavings";

export interface headerProps {
  title: CarModel;
  baseVersion: modelVersionTypes;
  plaidVersion: modelVersionTypes;
}

export type priceType = number | "included";

export type paintColorTypes =
  | "Pearl White Multi-Coat"
  | "Solid Black"
  | "Midnight Silver Metallic"
  | "Deep Blue Metallic"
  | "Red Multi-Coat";

export type interiorColorTypes = "All Black" | "Black and White" | "Cream";

export interface paintTypes {
  color: paintColorTypes;
  paintColorImg: imageType;
  price: priceType;
}

export interface wheelsTypes {
  name: wheelType;
  price: priceType;
  range: number;
  topSpeed?: number;
  wheelImg: StaticImageData;
}

export interface interiorTypes {
  price: priceType;
  color: interiorColorTypes;
  decor?: "Walnut Decor" | "Ebony Decor";
  interiorColorImg: StaticImageData;
}

export type imageType = StaticImageData;
export type modelType = "base" | "plaid";
export type wheelType = "firstType" | "secondType";

export type carModelVersionImageType = {
  heroImg: imageType;
  paintImg: imageType;
  wheelsImg: imageType;
  interiorImg?: imageType;
};

export interface displayImagesTypes {
  modelVersion: modelType;
  wheelType: wheelType;
  modelPaint: paintColorTypes;
  modelInterior: interiorColorTypes;
  imageSrc: {
    heroImg: imageType;
    paintImg: imageType;
    wheelsImg: imageType;
    interiorImg: imageType;
  };
}

export interface modelDataTypes extends headerProps {
  paint: paintTypes[];
  wheels: wheelsTypes[];
  interior: interiorTypes[];
  images: displayImagesTypes[];
}
