import {
  modelVersionTypes,
  specificationsTypes,
} from "@/utils/productDetails/types";

export interface versionType {
  name: string;
  specifications: specificationsTypes[];
}

export type restPropsType =
  | {
      compareSpecs: true;
      modelDetails: modelVersionTypes;
      children?: React.ReactNode;
    }
  | {
      compareSpecs: false;
      specifications: specificationsTypes[];
      children?: React.ReactNode;
    };

export type specificationSectionProps = {
  title: string;
  img: StaticImageData;
} & (
  | { compareSpecs: true; modelDetails: modelVersionTypes }
  | { compareSpecs: false; specifications: specificationsTypes[] }
);

export interface compareSpecButtonsProps {
  currentModelVersion: {
    name: string;
    specifications: specificationsTypes[];
  } | null;
  handleCurrentModelVersion: (val: versionType) => void;
  restProps: restPropsType;
}
