import create from "zustand";
import { devtools } from "zustand/middleware";
import { modelDataTypes } from "./rightSection/header/types";

type modelVersionTypes = "baseVersion" | "plaidVersion";
type capsuleBtnTypes = "purchasePrice" | "potentialSavings";

type ModelState = {
  currentCapsule: capsuleBtnTypes;
  currentModelVersion: modelVersionTypes;
  modelData: modelDataTypes | null;

  addModelData: (data: modelDataTypes) => void;
  changeCurrentCapsule: () => void;
  changeModelVersion: (type: modelVersionTypes) => void;
};

const useStore = create<ModelState>(
  devtools(set => ({
    currentCapsule: "potentialSavings",
    currentModelVersion: "baseVersion",
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
  }))
);

export default useStore;
