import React from "react";
import ElectricPowertrainComponent, {
  electricPowertrainProps,
} from "@/module/elctricPowertrain";
import img1 from "@/assets/images/models-page/Model-S-Performance-Dual-Motor-Desktop.jpg";
import img2 from "@/assets/images/models-page/Model-S-Performance-Tri-Motor-Desktop.jpg";

const ElectricPowertrain = () => {
  const data: electricPowertrainProps = {
    modelName: "Model S",
    models: [
      {
        name: "Model s",
        description:
          "Dual Motor All-Wheel Drive unlocks more range than any other vehicle in our current lineup, with insane power and maximum control.",
        specs: [
          { specName: "0.60 mph", specValue: "3.1 s" },
          { specName: "Range (EPA est.)", specValue: "405 mi" },
          { specName: "Peak Power", specValue: "670 hp" },
        ],
        img: img1,
      },
      {
        name: "Model S Plaid",
        description: `Maintain 1,000+ horsepower all the way to 200 mph with Tri-Motor All-Wheel Drive, featuring torque vectoring and three independent carbon-sleeved rotors.
    `,
        specs: [
          { specName: "0.60 mph", specValue: "1.99 s*" },
          { specName: "Range (EPA est.)", specValue: "396 mi" },
          { specName: "Peak Power", specValue: "1,020 hp" },
        ],
        img: img2,
      },
    ],
  };

  return (
    <>
      <ElectricPowertrainComponent {...data} />
    </>
  );
};

export default ElectricPowertrain;
