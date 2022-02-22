import React from "react";
import SectionLayout1 from "@/module/sections/sectionLayout_2";
import { gridSectionProps } from "@/module/sections/sectionLayout_2/types";

const Savings = () => {
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
    <>
      <SectionLayout1 {...data} />
    </>
  );
};

export default Savings;
