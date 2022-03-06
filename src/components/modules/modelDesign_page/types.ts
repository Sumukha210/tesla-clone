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
  name: string;
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

export type carModelVersionImageType = {
  heroImg: imageType;
  paintImg: imageType;
  wheelsImg: imageType;
  interiorImg?: imageType;
};

export interface wheelImagesTypes extends carModelVersionImageType {
  paintColor: paintColorTypes;
}

export interface modelImagesTypes {
  baseVersion: carModelVersionImageType;
  plaidVersion: carModelVersionImageType;
  paintImages: {
    paintColor: paintColorTypes;
    images: carModelVersionImageType;
  }[];
  // interiorImages: {
  //   name: interiorColorTypes;
  //   images: StaticImageData;
  // }[];
  wheelImages: {
    name: string;
    images: wheelImagesTypes[];
  }[];
}

export interface modelDataTypes extends headerProps {
  paint: paintTypes[];
  wheels: wheelsTypes[];
  interior: interiorTypes[];
  images: modelImagesTypes;
}
