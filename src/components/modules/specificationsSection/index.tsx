import React, { useState } from "react";
import { Grid, LeftCol, RightCol, SpecContainer, Wrapper } from "./styles";
import NextImg from "next/image";
import {
  compareSpecButtonsProps,
  specificationSectionProps,
  versionType,
} from "./types";
import CompareSpecButtons from "./CompareSpecBtns";
import SpecificationContainer from "./SpecificationContainer";

const SpecificationSection: React.FC<specificationSectionProps> = ({
  title,
  img,
  ...restProps
}) => {
  const [currentModelVersion, setCurrentModelVersion] =
    useState<versionType | null>(() =>
      restProps.compareSpecs ? restProps.modelDetails.version1 : null
    );

  const handleCurrentModelVersion = (val: versionType) => {
    restProps.compareSpecs && setCurrentModelVersion(val);
  };

  const compareButtonsProps: compareSpecButtonsProps = {
    handleCurrentModelVersion,
    currentModelVersion,
    restProps,
  };

  return (
    <Wrapper>
      <div className="container">
        <Grid>
          <LeftCol>
            <NextImg src={img} objectFit="cover" placeholder="blur" />
          </LeftCol>

          <RightCol>
            <div className="header">
              <h2 className="heading-2">{title} Specs</h2>
              <CompareSpecButtons {...compareButtonsProps} />
            </div>

            <SpecContainer>
              <SpecificationContainer
                currentModelVersion={currentModelVersion}
              />
            </SpecContainer>
          </RightCol>
        </Grid>
      </div>
    </Wrapper>
  );
};

export default SpecificationSection;
