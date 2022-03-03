import React from "react";
import { compareModelTypes } from "@/utils/compareModelDetails";
import NextImg from "next/image";
import { Wrapper, ImageContainer } from "./styles";
import ContentSection from "./Content";
import SelectMenuSection from "./SelectMenu";

export interface gridColProps {
  menuValues: compareModelTypes | undefined;
  handleUpdate: (val: compareModelTypes) => void;
  showSpecLabel?: boolean;
}

const GridCol: React.FC<gridColProps> = ({
  menuValues,
  handleUpdate,
  showSpecLabel = false,
}) => {
  return (
    <Wrapper>
      {menuValues && (
        <>
          <ImageContainer>
            <NextImg src={menuValues.img} objectFit="cover" />
          </ImageContainer>

          <SelectMenuSection
            handleUpdate={handleUpdate}
            menuValues={menuValues}
          />

          <ContentSection
            menuValues={menuValues}
            showSpecLabel={showSpecLabel}
          />
        </>
      )}
    </Wrapper>
  );
};

export default GridCol;
