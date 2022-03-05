import create from "zustand";
import { devtools } from "zustand/middleware";

type modelVersionTypes = "baseVersion" | "plaidVersion";
type capsuleBtnTypes = "purchasePrice" | "potentialSavings";

type ModelState = {
  currentCapsule: capsuleBtnTypes;
  currentModelVersion: modelVersionTypes;
  changeCurrentCapsule: () => void;
  changeModelVersion: (type: modelVersionTypes) => void;
};

const useStore = create<ModelState>(
  devtools(set => ({
    currentCapsule: "potentialSavings",
    currentModelVersion: "baseVersion",
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
