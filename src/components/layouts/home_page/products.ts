import model3Img from "@/assets/images/home-page/model-s.jpg";
import modelSImg from "@/assets/images/home-page/model-s.jpg";
import modelXImg from "@/assets/images/home-page/model-x.jpg";
import modelYImg from "@/assets/images/home-page/model-y.jpg";
import solarPanelsImg from "@/assets/images/home-page/solar-panels.jpg";
import solarRoofImg from "@/assets/images/home-page/solar-roof.jpg";

interface productsTypes {
  id: string;
  name: string;
  productType: "car" | "solar panel" | "solar roof" | "accessories";
  img: StaticImageData;
}

export const products: productsTypes[] = [
  { id: "model3", name: "Model 3", productType: "car", img: model3Img },
  { id: "modely", name: "Model Y", productType: "car", img: modelYImg },
  { id: "models", name: "Model S", productType: "car", img: modelSImg },
  { id: "modelx", name: "Model X", productType: "car", img: modelXImg },
  {
    id: "energy",
    name: "Solar Panels",
    productType: "solar panel",
    img: solarPanelsImg,
  },
  {
    id: "solarroof",
    name: "Solar Roof",
    productType: "solar roof",
    img: solarRoofImg,
  },
];
