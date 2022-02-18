export type productType = "car" | "solar panel" | "solar roof" | "accessories";

export interface generalInfoType {
  id: string;
  name: string;
  productType: productType;
  img: StaticImageData;
}

export interface productsTypes {
  generalInfo: generalInfoType;
  modelVersion?: modelVersionTypes;
  specifications?: specificationsTypes[];
}

export interface specificationsTypes {
  specName: string;
  specValue: string;
}

export interface modelVersionTypes {
  version1: {
    name: string;
    specifications: specificationsTypes[];
  };
  version2: {
    name: string;
    specifications: specificationsTypes[];
  };
}
