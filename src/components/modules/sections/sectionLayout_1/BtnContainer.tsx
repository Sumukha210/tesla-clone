import React from "react";
import Button from "@/element/button";
import { useRouter } from "next/router";
import { btnContainerProps } from "./types";

const BtnContainer: React.FC<btnContainerProps> = ({
  btn1Path,
  btn1Text,
  btn2Path,
  btn2Text,
}) => {
  const router = useRouter();

  return (
    <>
      <>
        {btn1Text && btn1Path && (
          <Button
            name={btn1Text}
            outlineBtn
            secondaryBtn
            smBtn
            onClick={() => router.push(`${btn1Path}`)}
          />
        )}

        {btn2Path && btn2Text && (
          <Button
            name={btn2Text}
            outlineBtn
            secondaryBtn
            smBtn
            onClick={() => router.push(`${btn2Path}`)}
          />
        )}
      </>
    </>
  );
};

export default BtnContainer;
