import styled from "styled-components";
import { specificationsTypes } from "@/utils/productDetails/types";
import { useRouter } from "next/router";
import Button from "@/element/button";

interface specificationProps {
  specifications: specificationsTypes[];
  id: string;
}

const Specifications: React.FC<specificationProps> = ({
  specifications,
  id,
}) => {
  const router = useRouter();

  return (
    <Wrapper>
      <div>
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
        <div>
          <Button
            name="Order now"
            onClick={() => router.push(`${id}/design`)}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Specifications;

const Wrapper = styled.div`
  & > div {
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: center;
  }

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
