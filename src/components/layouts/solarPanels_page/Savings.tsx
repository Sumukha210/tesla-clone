import React, { useRef } from "react";
import { gridSectionProps } from "@/module/sections/sectionLayout_2/types";
import { useOnScreen } from "@/customHook/useOnScreen";
import dynamic from "next/dynamic";
import LoadingSpinner from "@/element/loadingSpinner";

const DynamicComponent = dynamic(
  () => import("@/module/sections/sectionLayout_2"),
  { loading: () => <LoadingSpinner /> }
);

const Savings = () => {
  const WrapperRef = useRef(null);
  const isIntersecting = useOnScreen(WrapperRef, "-100px");

  const data: gridSectionProps = {
    data: {
      caption: "savings",
      title: "Electricity For Less",
      description: `
  Use solar energy to power your home and reduce your dependence on the grid. Purchase solar at the lowest price of any national provider with Tesla's price match guarantee and take control of your monthly electricity bill. Learn more about your potential savings in our Design Studio.
  `,
      img: "/videos/solarpanels/savings.mp4",
    },
    orderNowBtnPath: "energy",
    orderNowBtnText: "see your savings",
  };

  return (
    <div ref={WrapperRef}>
      {isIntersecting && <DynamicComponent {...data} />}
    </div>
  );
};

export default Savings;
