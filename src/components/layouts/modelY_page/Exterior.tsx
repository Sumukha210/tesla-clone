import React from "react";
import styled from "styled-components";
import ExteriorTemplate from "@/module/exteriorTemplate";
import gridAImg from "@/assets/images/models-page/MS-Exterior-Grid-A-Desktop.jpg";
import gridBImg from "@/assets/images/models-page/MS-Exterior-Grid-B-Desktop.jpg";
import gridCImg from "@/assets/images/models-page/MS-Exterior-Grid-C-Desktop.jpg";
import heroImg from "@/assets/images/models-page/MS-Exterior-Hero-Desktop.jpg";
import { exteriorTemplateProps } from "@/module/exteriorTemplate/types";

const Exterior = () => {
  const data: exteriorTemplateProps = {
    header: {
      description: `With a drag coefficient of just .208 Cd, the lowest on the planet, Model S is built for speed, endurance and range. Improved aerodynamics and a wider chassis offer more responsive performance so you can take corners quicker and with more confidence.`,
      img: heroImg,
      orderNowBtnPath: "/models/design",
    },

    headerBgColor: "light",

    specs: [
      {
        img: gridAImg,
        title: "Relentless Performance",
        description: `Staggered, performance wheels and tires keep the car planted and help transfer maximum power down to the road.`,
      },
      {
        img: gridBImg,
        title: "Optimized Aerodynamics",
        description: `Attention to detail on all exterior surfaces makes Model S the most aerodynamic production car on Earth.`,
      },
      {
        img: gridCImg,
        title: "Refined Styling",
        description: `An iconic silhouette meets refreshed, elegant proportions.`,
      },
    ],
  };

  return (
    <Wrapper>
      <ExteriorTemplate {...data} />
    </Wrapper>
  );
};

export default Exterior;

const Wrapper = styled.div``;
