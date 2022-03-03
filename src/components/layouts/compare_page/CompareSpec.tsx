import { compareModelTypes } from "@/utils/compareModelDetails";
import DOMPurify from "isomorphic-dompurify";
import React from "react";
import styled from "styled-components";

interface compareSpecProps {
  menuValues: compareModelTypes;
  showSpecLabel?: boolean;
}

const CompareSpec: React.FC<compareSpecProps> = ({
  menuValues,
  showSpecLabel = false,
}) => {
  return (
    <>
      {Object.keys(menuValues.specs).map((key, index) => {
        return (
          <Spec>
            {showSpecLabel && <span className="subtitle-2">{key}</span>}
            <span
              className="heading-2"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(menuValues.specs[key]),
              }}></span>
          </Spec>
        );
      })}
    </>
  );
};

export default CompareSpec;

const Spec = styled.div`
  .subtitle-2,
  .heading-2 {
    display: block;
  }
`;
