import { productsTypes } from "./types";
import modelXImg from "@/assets/images/home-page/model-x.jpg";
import carousel1img from "@/assets/images/modelx-page/MX-Interior-Carousel-A-Desktop.jpg";
import carousel2img from "@/assets/images/modelx-page/MX-Interior-Carousel-B-Desktop.jpg";
import carousel3img from "@/assets/images/modelx-page/MX-Interior-Carousel-C-Desktop.jpg";
import carousel4img from "@/assets/images/modelx-page/MX-Interior-Carousel-D-Desktop.jpg";
import interiorGrid1Img from "@/assets/images/modelx-page/MX-Interior-Grid-A-Desktop.jpg";
import interiorGrid2Img from "@/assets/images/modelx-page/MX-Interior-Grid-B-Desktop.jpg";
import interiorGrid3Img from "@/assets/images/modelx-page/MX-Interior-Grid-C-Desktop.jpg";

export const modelXDetails: productsTypes = {
  generalInfo: {
    id: "modelx",
    name: "Model X",
    productType: "car",
    img: modelXImg,
  },

  allNewInterior: {
    carousel: [
      {
        media: carousel1img,
        title: "Cinematic Experience",
        subtitle: `A 17” touchscreen offers 2200 x 1300 resolution, true colors and exceptional responsiveness for gaming, movies and more.`,
        mediaType: "img",
      },

      {
        media: carousel2img,
        title: "Yoke Steering",
        subtitle: `A bold new approach gives you a true connection to Model S, offering better steering feel and unobstructed views of your dash and the road ahead. Tap the brake and Model S automatically selects the correct direction to start your trip.`,
        mediaType: "img",
      },

      {
        media: carousel3img,
        title: "Perfect Environment",
        subtitle: `Air vents are hidden throughout the cabin, while tri-zone temperature controls, ventilated seats and HEPA filtration deliver the perfect environment.`,
        mediaType: "img",
      },

      {
        media: carousel4img,
        title: "Spacious Cabin",
        subtitle: `Model X offers a spacious cabin with the world's largest panoramic windshield and seating for up to seven.`,
        mediaType: "img",
      },
    ],

    specs: [
      {
        title: "Wireless Gaming",
        subtitle: `Up to 10 teraflops of processing power enables in-car gaming on-par with today’s newest consoles. Wireless controller compatibility lets you game from any seat.`,
        mediaType: "img",
        img: interiorGrid1Img,
      },
      {
        title: "Stay Connected",
        subtitle: `Multi-device Bluetooth, wireless and USB-C charging for every passenger, with enough power to fast-charge your tablets and laptop.`,
        mediaType: "img",
        img: interiorGrid2Img,
      },
      {
        title: "Your Best Audio System",
        subtitle:
          "A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers the best listening experience wherever you are.",
        mediaType: "img",
        img: interiorGrid3Img,
      },
    ],
  },

  modelVersion: {
    version1: {
      name: "Model X Plaid",
      specifications: [
        { specName: "Range (EPA est.)", specValue: "333 mi" },
        { specName: "1/4 Mile", specValue: "9.9" },
        { specName: "Peak Power", specValue: "1,020 hp" },
        { specName: "Wheels", specValue: `20" or 22"` },
        { specName: "Towing", specValue: "5,000 lbs" },
        { specName: "Seating", specValue: "Up to 5" },
        {
          specName: "Acceleration",
          specValue: "2.5 s 0-60 mph* </br> *with rollout subtracted",
        },
        { specName: "Top Speed", specValue: "163 mph" },
        { specName: "Drag coefficient", specValue: "0.24 Cd" },
        { specName: "Weight", specValue: "5,390 lbs" },
        { specName: "Powertrain", specValue: "Tri Motor" },
        { specName: "SuperCharging Max", specValue: "250 KW" },
      ],
    },

    version2: {
      name: "Model X",
      specifications: [
        { specName: "Range (EPA est.)", specValue: "348 mi" },
        { specName: "Peak Power", specValue: "670 hp" },
        { specName: "Wheels", specValue: `20" or 22"` },
        { specName: "Towing", specValue: "5,000 lbs" },
        { specName: "Seating", specValue: "Up to 5" },
        { specName: "Acceleration", specValue: "3.8 s 0-60 mph" },
        { specName: "Top Speed", specValue: "165 mph" },
        { specName: "Drag coefficient", specValue: "0.24 Cd" },
        { specName: "Weight", specValue: "5,185 lbs" },
        { specName: "Powertrain", specValue: "Dual Motor" },
        { specName: "SuperCharging Max", specValue: "250 KW" },
      ],
    },
  },
};
