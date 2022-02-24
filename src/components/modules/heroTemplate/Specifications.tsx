import { specificationsTypes } from "@/utils/productDetails/types";
import { useRouter } from "next/router";
import Button from "@/element/button";
import {
  Spec,
  Wrapper,
  SpecContainer,
  BtnContainer,
} from "./specificationStyles";

export interface SpecProps {
  textColor?: string;
}

export interface WrapperProps {
  showOverlay?: boolean;
}

interface specificationProps extends SpecProps, WrapperProps {
  specifications: specificationsTypes[];
  id: string;
}

const Specifications: React.FC<specificationProps> = ({
  specifications,
  id,
  showOverlay,
  textColor,
}) => {
  const router = useRouter();

  return (
    <Wrapper showOverlay={showOverlay}>
      <SpecContainer className="speccontainer">
        {specifications?.map(({ specName, specValue }, index) => {
          const split = specValue.split(" ");

          return (
            <Spec textColor={textColor} key={index}>
              <h2>
                <span className="heading-2">{split[0]}</span>
                <span className="heading-3"> {split[1]}</span>
              </h2>
              <h5 className="subtitle-3">{specName}</h5>
            </Spec>
          );
        })}
      </SpecContainer>

      <BtnContainer>
        <Button name="Order now" onClick={() => router.push(`${id}/design`)} />
      </BtnContainer>
    </Wrapper>
  );
};

export default Specifications;
