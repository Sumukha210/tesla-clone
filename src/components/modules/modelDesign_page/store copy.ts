// import create from "zustand";
// import { devtools } from "zustand/middleware";
// import {
//   carModelVersionImageType,
//   interiorColorTypes,
//   modelDataTypes,
//   paintColorTypes,
// } from "./types";

// type modelVersionTypes = "baseVersion" | "plaidVersion";
// type capsuleBtnTypes = "purchasePrice" | "potentialSavings";

// type ModelState = {
//   currentCapsule: capsuleBtnTypes;
//   currentModelVersion: modelVersionTypes;
//   currentPaint: paintColorTypes;
//   currentWheel: string | null;
//   currentInterior: interiorColorTypes;
//   modelData: modelDataTypes | null;
//   currentImages: carModelVersionImageType | null;

//   addModelData: (data: modelDataTypes) => void;
//   changeCurrentCapsule: () => void;
//   changeModelVersion: (type: modelVersionTypes) => void;
//   changeCurrentPaint: (paintColor: paintColorTypes) => void;
//   changeCurrentImage: (val: carModelVersionImageType) => void;
//   changeCurrentWheel: (wheelName: string) => void;
//   changeCurrentInterior: (val: interiorColorTypes) => void;
// };

// const useStore = create<ModelState>(
//   devtools(set => ({
//     currentCapsule: "potentialSavings",
//     currentModelVersion: "baseVersion",
//     currentPaint: "Pearl White Multi-Coat",
//     modelData: null,
//     currentImages: null,
//     currentInterior: "All Black",
//     currentWheel: null,

//     addModelData(data) {
//       set(() => ({
//         modelData: data,
//         currentWheel: data?.wheels[0].name,
//         currentImages: data.images.baseVersion,
//       }));
//     },

//     changeCurrentCapsule() {
//       set(state => ({
//         currentCapsule:
//           state.currentCapsule === "potentialSavings"
//             ? "purchasePrice"
//             : "potentialSavings",
//       }));
//     },

//     changeModelVersion(type) {
//       set(() => ({ currentModelVersion: type }));
//     },

//     changeCurrentPaint(paintColor) {
//       set((state): any => {
//         const result = state.modelData?.images.paintImages.find(
//           item => item.paintColor === paintColor
//         );

//         const stateResult = { currentPaint: paintColor };

//         return result
//           ? { ...stateResult, currentImages: result.images }
//           : stateResult;
//       });
//     },

//     changeCurrentImage(val) {
//       set(() => ({ currentImages: val }));
//     },

//     changeCurrentWheel(val) {
//       set(({ modelData, currentPaint }): any => {
//         const wheelNameMatches = modelData?.images.wheelImages.name === val;

//         let result = {};

//         if (wheelNameMatches) {
//           modelData.images.wheelImages.images.forEach(item => {
//             if (item?.paintColor === currentPaint) {
//               const copyItem = { ...item };
//               delete copyItem.paintColor;
//               result = copyItem;
//             }
//           });
//         } else {
//           modelData?.images.paintImages.forEach(item => {
//             if (item.paintColor === currentPaint) {
//               result = item.images;
//             }
//           });
//         }

//         console.log("RESULT", result);

//         const stateResult = { currentWheel: val };

//         return { ...stateResult, currentImages: result };
//       });
//     },

//     changeCurrentInterior(val) {
//       set(() => ({ currentInterior: val }));
//     },
//   }))
// );

// export default useStore;

export {};
