import DOMPurify from "isomorphic-dompurify";
import React from "react";
import styled from "styled-components";
import useStore from "../store";

const SpecBlock = () => {
  const data = useStore(state => state.modelData);
  const modelVersion = useStore(s => s.currentModelVersion);

  const specs = data
    ? [
        ...(modelVersion === "base"
          ? data.baseVersion.specs
          : data.plaidVersion.specs),
      ]
    : [];

  console.log("specs", specs);

  return (
    <Wrapper>
      {specs.length &&
        specs.map(({ key, value }, index) => (
          <Spec key={index}>
            <h3
              className="heading-3"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(value),
              }}></h3>

            <h5
              className="subtitle-3"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(key),
              }}></h5>
          </Spec>
        ))}
    </Wrapper>
  );
};

export default SpecBlock;

const Wrapper = styled.div`
  display: grid;
  text-align: center;
  margin-top: 3rem !important;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 1199.98px) {
    padding-left: 3rem;
    padding-right: 3rem;
    max-width: 768px;
    margin: auto;
  }
`;

const Spec = styled.div`
  h3 {
    font-weight: bold;

    span {
      font-weight: 400;
      font-size: 14px;
      margin-left: 2px;
    }
  }

  h5 {
    color: #7b7d81;
    font-weight: 500;
  }
`;
