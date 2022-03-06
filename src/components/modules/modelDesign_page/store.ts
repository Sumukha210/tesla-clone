import create from "zustand";
import { devtools } from "zustand/middleware";
import {
  carModelVersionImageType,
  interiorColorTypes,
  modelDataTypes,
  modelType,
  paintColorTypes,
} from "./types";

type capsuleBtnTypes = "purchasePrice" | "potentialSavings";

type ModelState = {
  currentCapsule: capsuleBtnTypes;
  currentModelVersion: modelType;
  currentPaint: paintColorTypes;
  currentWheel: string | null;
  currentInterior: interiorColorTypes;
  modelData: modelDataTypes | null;
  currentImages: carModelVersionImageType | null;

  addModelData: (data: modelDataTypes) => void;
  changeCurrentCapsule: () => void;
  changeModelVersion: (type: modelType) => void;
  changeCurrentPaint: (paintColor: paintColorTypes) => void;
  changeCurrentImage: (val: carModelVersionImageType) => void;
  changeCurrentWheel: (wheelName: string) => void;
  changeCurrentInterior: (val: interiorColorTypes) => void;
};

const useStore = create<ModelState>(
  devtools(set => ({
    currentCapsule: "potentialSavings",
    currentModelVersion: "base",
    currentPaint: "Pearl White Multi-Coat",
    modelData: null,
    currentImages: null,
    currentInterior: "All Black",
    currentWheel: null,

    addModelData(data) {
      set((): any => {
        const currentImageResult =
          data.images.find(
            ({ modelPaint, modelVersion, wheelType }) =>
              modelPaint === "Pearl White Multi-Coat" &&
              modelVersion === "base" &&
              wheelType === "firstType"
          ) || null;

        return {
          modelData: data,
          currentWheel: data?.wheels[0].name,
          currentImages: currentImageResult?.imageSrc,
        };
      });
    },

    changeCurrentCapsule() {
      set(state => ({
        currentCapsule:
          state.currentCapsule === "potentialSavings"
            ? "purchasePrice"
            : "potentialSavings",
      }));
    },

    changeModelVersion(type) {
      set(({ modelData, currentPaint, currentInterior }): any => {
        const result = modelData?.images.find(
          ({ modelVersion, modelPaint, modelInterior }) =>
            modelVersion === type &&
            modelPaint === currentPaint &&
            modelInterior === currentInterior
        );

        if (result?.imageSrc) {
          return { currentModelVersion: type, currentImages: result.imageSrc };
        }

        return { currentModelVersion: type };
      });
    },

    changeCurrentPaint(paintColor) {},

    changeCurrentImage(val) {
      set(() => ({ currentImages: val }));
    },

    changeCurrentWheel(val) {},

    changeCurrentInterior(val) {
      set(() => ({ currentInterior: val }));
    },
  }))
);

export default useStore;
