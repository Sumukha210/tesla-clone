import styled from "styled-components";
import { specificationsTypes } from "@/utils/productDetails/types";

interface specificationProps {
  specifications: specificationsTypes[];
}

const Specifications: React.FC<specificationProps> = ({ specifications }) => {
  return (
    <Wrapper>
      {specifications?.map(({ specName, specValue }) => {
        const split = specValue.split(" ");

        return (
          <Spec key={specName}>
            <h2>
              <span className="heading-2">{split[0]}</span>
              <span className="heading-3"> {split[1]}</span>
            </h2>
            <h5 className="subtitle-3">{specName}</h5>
          </Spec>
        );
      })}
    </Wrapper>
  );
};

export default Specifications;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  &::after {
    content: "";
    position: absolute;
    bottom: 0%;
    left: 0%;
    width: 100%;
    background: linear-gradient(1deg, rgba(0, 0, 0, 0.7), transparent);
    backdrop-filter: blur(4px);
    height: 20%;
  }
`;

const Spec = styled.div`
  color: #fff;
  position: relative;
  z-index: 2;

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
