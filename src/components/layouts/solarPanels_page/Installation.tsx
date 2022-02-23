import { useOnScreen } from "@/customHook/useOnScreen";
import LoadingSpinner from "@/element/loadingSpinner";
import dynamic from "next/dynamic";
import React, { useRef } from "react";
import { featureType } from "@/types/featureType";

const DynamicComponent = dynamic(
  () => import("@/module/sections/sectionLayout_1"),
  { loading: () => <LoadingSpinner /> }
);

const Installation = () => {
  const WrapperRef = useRef(null);
  const isIntersecting = useOnScreen(WrapperRef, "50px");

  const data: featureType = {
    caption: "power on",
    title: "Order and Installation",
    description:
      "From permitting to powering on, we’ll take care of everything. After you order, we’ll gather remote aerial imagery of your home, design your system, take care of any necessary permits and schedule your installation.",
    img: "/videos/solarpanels/installation.mp4",
  };
  return (
    <div ref={WrapperRef}>
      {isIntersecting && (
        <DynamicComponent {...data} btn1Path="/energy/design" />
      )}
    </div>
  );
};

export default Installation;
