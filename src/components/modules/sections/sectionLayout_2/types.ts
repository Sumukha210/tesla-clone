import { featureType } from "@/types/featureType";

export interface gridContentProps {
  imgFirst?: boolean;
}

export interface btnContainerProps {
  secondBtnText?: string | null;
  secondBtnPath?: string | null;
}

export interface gridSectionProps extends btnContainerProps, gridContentProps {
  data: featureType;
  orderNowBtnPath?: string;
  orderNowBtnText?: string;
}
