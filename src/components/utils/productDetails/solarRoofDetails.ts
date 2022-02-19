import solarRoofImg from "@/assets/images/home-page/solar-roof.jpg";
import { productsTypes } from "./types";

export const solarRoofDetails: productsTypes = {
  generalInfo: {
    id: "solarroof",
    name: "Solar Roof",
    productType: "solar roof",
    img: solarRoofImg,
  },
  specifications: [
    { specName: "Tile and Power Warranty", specValue: "25 years" },
    { specName: "Wind Rating", specValue: "ASTM D3161 Class F" },
    { specName: "Fire Rating", specValue: "Class A (highest rating)" },
    { specName: "Hail Rating", specValue: "ANSI FM 4473 Class 3" },
    { specName: "Roof Pitch", specValue: "2:12 to 24:12" },
    {
      specName: "Inverter Power",
      specValue: "3.8kW / 7.6kW</br>97.5% efficiency",
    },
  ],
};
