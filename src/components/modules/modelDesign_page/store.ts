import create from "zustand";
import { devtools } from "zustand/middleware";
import { modelDataTypes, paintColorTypes } from "./rightSection/header/types";

type modelVersionTypes = "baseVersion" | "plaidVersion";
type capsuleBtnTypes = "purchasePrice" | "potentialSavings";

type ModelState = {
  currentCapsule: capsuleBtnTypes;
  currentModelVersion: modelVersionTypes;
  currentPaint: paintColorTypes;
  modelData: modelDataTypes | null;

  addModelData: (data: modelDataTypes) => void;
  changeCurrentCapsule: () => void;
  changeModelVersion: (type: modelVersionTypes) => void;
  changeCurrentPaint: (paintColor: paintColorTypes) => void;
};

const useStore = create<ModelState>(
  devtools(set => ({
    currentCapsule: "potentialSavings",
    currentModelVersion: "baseVersion",
    currentPaint: "Pearl White Multi-Coat",
    modelData: null,

    addModelData(data) {
      set(() => ({ modelData: data }));
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
      set(() => ({ currentModelVersion: type }));
    },

    changeCurrentPaint(paintColor) {
      set(() => ({ currentPaint: paintColor }));
    },
  }))
);

export default useStore;
