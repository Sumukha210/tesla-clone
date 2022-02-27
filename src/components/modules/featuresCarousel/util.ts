interface featureCarouselProps {
  title: string;
  description: string;
  media: string;
}

export const data: featureCarouselProps[] = [
  {
    title: "Navigate on Autopilot",
    description: "Active guidance from on-ramp to off-ramp",
    media: "/videos/models/navigate.webm",
  },
  {
    title: "Auto Lane Change",
    description: "Automatically change lanes while driving on the highway",
    media: "/videos/models/autolane.webm",
  },
  {
    title: "Summon",
    description: `Automatically retrieve your car`,
    media: "/videos/models/summon.webm",
  },
  {
    title: "Autopark",
    description: `Parallel and perpendicular parking with a single touch`,
    media: "/videos/models/autopark.webm",
  },
];
