import create from "zustand";
import { devtools } from "zustand/middleware";
import {
  carModelVersionImageType,
  interiorColorTypes,
  modelDataTypes,
  modelType,
  paintColorTypes,
  wheelType,
} from "./types";

type capsuleBtnTypes = "purchasePrice" | "potentialSavings";

type ModelState = {
  currentCapsule: capsuleBtnTypes;
  currentModelVersion: modelType;
  currentPaint: paintColorTypes;
  currentWheel: wheelType;
  currentInterior: interiorColorTypes;
  modelData: modelDataTypes | null;
  currentImages: carModelVersionImageType | null;

  addModelData: (data: modelDataTypes) => void;
  changeCurrentCapsule: () => void;
  changeModelVersion: (type: modelType) => void;
  changeCurrentPaint: (paintColor: paintColorTypes) => void;
  changeCurrentImage: (val: carModelVersionImageType) => void;
  changeCurrentWheel: (wheelName: wheelType) => void;
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
    currentWheel: "firstType",

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
      set(({ modelData, currentPaint, currentInterior, currentWheel }): any => {
        const result = modelData?.images.find(
          ({ modelVersion, modelPaint, modelInterior, wheelType }) =>
            modelVersion === type &&
            modelPaint === currentPaint &&
            modelInterior === currentInterior &&
            wheelType === currentWheel
        );

        if (result?.imageSrc) {
          return { currentModelVersion: type, currentImages: result.imageSrc };
        }

        return { currentModelVersion: type };
      });
    },

    changeCurrentPaint(paintColor) {
      set(({ modelData, currentModelVersion, currentWheel }): any => {
        const result = modelData?.images.find(
          ({ modelPaint, modelVersion, wheelType }) =>
            modelPaint === paintColor &&
            modelVersion === currentModelVersion &&
            wheelType === currentWheel
          // modelInterior === currentInterior &&
        );

        if (result?.imageSrc) {
          return { currentPaint: paintColor, currentImages: result.imageSrc };
        }

        return { currentPaint: paintColor };
      });
    },

    changeCurrentImage(val) {
      set(() => ({ currentImages: val }));
    },

    changeCurrentWheel(val) {
      set(({ modelData, currentModelVersion, currentPaint }): any => {
        const result = modelData?.images.find(
          ({ modelPaint, modelVersion, wheelType }) =>
            wheelType === val &&
            modelPaint === currentPaint &&
            modelVersion === currentModelVersion
        );

        if (result?.imageSrc) {
          return { currentWheel: val, currentImages: result.imageSrc };
        }

        return { currentWheel: val };
      });
    },

    changeCurrentInterior(val) {
      set(() => ({ currentInterior: val }));
    },
  }))
);

export default useStore;
