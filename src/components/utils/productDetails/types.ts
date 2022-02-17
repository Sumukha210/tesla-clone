export type productType = "car" | "solar panel" | "solar roof" | "accessories";

export interface generalInfoType {
  id: string;
  name: string;
  productType: productType;
  img: StaticImageData;
}

export interface productsTypes {
  generalInfo: generalInfoType;
}
