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
  allNewInterior?: allNewInteriorTypes;
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

export interface interiorCarouselTypes {
  title: string;
  subtitle: string;
  mediaType: "img" | "video";
  media: StaticImageData | string;
}

export interface interiorSpecsTypes {
  title: string;
  subtitle: string;
  img: StaticImageData | string | undefined;
  mediaType: "img" | "video";
}

export interface allNewInteriorTypes {
  carousel: interiorCarouselTypes[];
  specs: interiorSpecsTypes[];
}
