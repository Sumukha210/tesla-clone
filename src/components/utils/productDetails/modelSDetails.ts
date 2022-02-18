import modelSImg from "@/assets/images/home-page/model-s.jpg";
import { productsTypes } from "./types";
import spec1img from "@/assets/images/models-page/spec/MS-Interior-Grid-D-Desktop.jpg";
import spec3img from "@/assets/images/models-page/spec/interior.jpg";

export const modelSDetails: productsTypes = {
  generalInfo: {
    id: "models",
    name: "Model S",
    productType: "car",
    img: modelSImg,
  },

  modelVersion: {
    version1: {
      name: "Model S Plaid",
      specifications: [
        { specName: "Range (EPA est.)", specValue: "396 mi" },
        { specName: "1/4 Mile", specValue: "9.23@155 mph trap speed" },
        { specName: "Peak Power", specValue: "1,020 hp" },
        { specName: "Wheels", specValue: `19" or 21"` },
        { specName: "Cargo", specValue: "28 cu ft" },
        { specName: "Weight", specValue: "4,766 lbs" },
        {
          specName: "Acceleration",
          specValue: "1.99 s 0-60 mph* </br> *with rollout subtracted",
        },
        {
          specName: "Top Speed",
          specValue:
            "200 mph* </br> *when equipped with paid hardware upgrades",
        },
        { specName: "Drag coefficient", specValue: "0.208 Cd" },
        { specName: "Powertrain", specValue: "Tri Motor" },
        { specName: "SuperCharging Max", specValue: "250 KW" },
      ],
    },

    version2: {
      name: "Model S",
      specifications: [
        { specName: "Range (EPA est.)", specValue: "405 mi" },
        { specName: "Peak Power", specValue: "670 hp" },
        { specName: "Wheels", specValue: `19" or 21"` },
        { specName: "Cargo", specValue: "28 cu ft" },
        {
          specName: "Acceleration",
          specValue: "3.1 s 0-60 mph",
        },
        {
          specName: "Top Speed",
          specValue: "155 mph",
        },
        { specName: "Drag coefficient", specValue: "0.208 Cd" },
        { specName: "Weight", specValue: "4,561 lbs" },
        { specName: "Powertrain", specValue: "Dual Motor" },
        { specName: "SuperCharging Max", specValue: "250 KW" },
      ],
    },
  },

  allNewInterior: {
    carousel: [
      {
        media: "/videos/interiorCarousel/cinematic-experiance.webm",
        title: "Cinematic Experience",
        subtitle: `A 17” touchscreen offers 2200 x 1300 resolution, true colors and exceptional responsiveness for gaming, movies and more.`,
        mediaType: "video",
      },

      {
        media: "/videos/interiorCarousel/yoke-steering.webm",
        title: "Yoke Steering",
        subtitle: `A bold new approach gives you a true connection to Model S, offering better steering feel and unobstructed views of your dash and the road ahead. Tap the brake and Model S automatically selects the correct direction to start your trip.`,
        mediaType: "video",
      },

      {
        media: "/videos/interiorCarousel/perfect-environment.webm",
        title: "Perfect Environment",
        subtitle: `Air vents are hidden throughout the cabin, while tri-zone temperature controls, ventilated seats and HEPA filtration deliver the perfect environment.`,
        mediaType: "video",
      },

      {
        media: "/videos/interiorCarousel/redesigned.webm",
        title: "Redesigned Second Row",
        subtitle: `Seating for three adults, with extra legroom, headroom and a stowable armrest with integrated storage and wireless charging.`,
        mediaType: "video",
      },

      {
        media: "/videos/interiorCarousel/console-grade.webm",
        title: "Console-Grade Gaming",
        subtitle: `Up to 10 teraflops of processing power unlock in-car gaming on-par with today’s newest consoles. Play from any seat with wireless controller and headset compatibility.`,
        mediaType: "video",
      },
    ],

    specs: [
      {
        title: "Stay Connected",
        subtitle:
          "Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.",
        mediaType: "img",
        img: spec1img,
      },
      {
        title: "Immersive Sound",
        subtitle:
          "A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers immersive listening and studio-grade sound quality.",
        mediaType: "video",
        img: "spec2.webm",
      },
      {
        title: "Room for Everything",
        subtitle:
          "With front and rear trunks and fold-flat seats you can fit your bike without taking the wheel off—and your luggage too.",
        mediaType: "img",
        img: spec3img,
      },
    ],
  },
};
