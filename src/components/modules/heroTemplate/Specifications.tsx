import styled from "styled-components";
import { specificationsTypes } from "@/utils/productDetails/types";
import { useRouter } from "next/router";
import Button from "@/element/button";
import { Spec, Wrapper } from "./specificationStyles";

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
        {specifications?.map(({ specName, specValue }, index) => {
          const split = specValue.split(" ");

          return (
            <Spec key={index}>
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
