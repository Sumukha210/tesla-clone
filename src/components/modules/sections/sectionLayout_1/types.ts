import { featureType } from "@/types/featureType";

export interface btnContainerProps {
  btn1Text?: string;
  btn1Path: string;
  btn2Path?: string;
  btn2Text?: string;
}

export interface SectionLayout1Props extends featureType, btnContainerProps {
  showMainImg?: boolean;
}
