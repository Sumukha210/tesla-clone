import { useOnScreen } from "@/customHook/useOnScreen";
import LoadingSpinner from "@/element/loadingSpinner";
import dynamic from "next/dynamic";
import React, { useRef } from "react";
import { featureType } from "./types";

const DynamicGridSection = dynamic(() => import("./gridSection"), {
  loading: () => <LoadingSpinner />,
});

const Durability = () => {
  const wrapperRef = useRef(null);
  const isIntersecting = useOnScreen(wrapperRef, "200px");

  const data: featureType = {
    img: "/videos/solarroof-page/Durability.webm",
    title: "Build to Last",
    caption: "durability",
    description:
      "Solar Roof tiles are durable, strong and engineered for all-weather protection. With a 25-year warranty, Solar Roof tiles will continue to produce clean energy for your home for decades to come.",
  };

  return (
    <div ref={wrapperRef}>
      {isIntersecting && (
        <DynamicGridSection imgFirst data={data} orderNowBtnPath="solarroof" />
      )}
    </div>
  );
};

export default Durability;
