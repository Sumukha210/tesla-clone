import styled from "styled-components";
import { specificationsTypes } from "@/utils/productDetails/types";

interface specificationProps {
  specifications: specificationsTypes[];
}

const Specifications: React.FC<specificationProps> = ({ specifications }) => {
  return (
    <Wrapper>
      {specifications?.map(({ specName, specValue }) => (
        <Spec key={specName}>
          <h2 className="heading-2">{specValue}</h2>
          <h5 className="subtitle-3">{specName}</h5>
        </Spec>
      ))}
    </Wrapper>
  );
};

export default Specifications;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Spec = styled.div`
  color: #fff;

  h2 {
    font-weight: 600;
  }

  h5 {
    font-weight: 400;
    margin-top: 8px;
  }

  &:not(:last-child) {
    margin-right: 3rem;
  }
`;
