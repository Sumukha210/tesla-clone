import { specificationsTypes } from "@/utils/productDetails/types";

export interface sliderProps {
  name: string;
  specs: specificationsTypes[];
  img: StaticImageData;
  description: string;
}
