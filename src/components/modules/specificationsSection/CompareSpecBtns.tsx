import Button from "@/element/button";
import React from "react";
import { compareSpecButtonsProps } from "./types";

const CompareSpecButtons: React.FC<compareSpecButtonsProps> = ({
  currentModelVersion,
  handleCurrentModelVersion,
  restProps,
}) => {
  return (
    <>
      {restProps.compareSpecs && (
        <div className="btnContainer">
          <Button
            name={restProps.modelDetails.version1.name}
            variant="outline"
            color={
              currentModelVersion?.name === restProps.modelDetails.version1.name
                ? "light"
                : "dimColor"
            }
            size="flexible"
            onClick={() =>
              handleCurrentModelVersion(restProps.modelDetails.version2)
            }
          />

          <Button
            name={restProps.modelDetails.version2.name}
            variant="outline"
            color="light"
            size="flexible"
            onClick={() =>
              handleCurrentModelVersion(restProps.modelDetails.version2)
            }
          />
        </div>
      )}
    </>
  );
};

export default CompareSpecButtons;
