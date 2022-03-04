import DOMPurify from "isomorphic-dompurify";
import React from "react";
import { Spec } from "./styles";
import { versionType } from "./types";

interface specificationContainerProps {
  currentModelVersion: versionType | null;
}

const SpecificationContainer: React.FC<specificationContainerProps> = ({
  currentModelVersion,
}) => {
  return (
    <>
      {currentModelVersion?.specifications.map(
        ({ specName, specValue }, index) => (
          <Spec key={index}>
            <h4
              className="subtitle-2"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(specName),
              }}></h4>

            <h5
              className="subtitle-2"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(specValue),
              }}></h5>
          </Spec>
        )
      )}
    </>
  );
};

export default SpecificationContainer;
