import { interiorSpecsTypes } from "@/utils/productDetails/types";
import NextImg from "next/image";
import { Spec, Wrapper } from "./style";

interface specsProps {
  specs: interiorSpecsTypes[];
}

const Specs: React.FC<specsProps> = ({ specs }) => {
  return (
    <Wrapper>
      <div className="container">
        <div className="inner-container">
          {specs.map(({ img, title, subtitle }, index) => (
            <Spec key={index}>
              <div className="left">
                <div className="imgContainer">
                  {typeof img === "string" ? (
                    <video src={img} autoPlay loop muted />
                  ) : (
                    <NextImg src={img} objectFit="cover" placeholder="blur" />
                  )}
                </div>
              </div>

              <div className="right">
                <div className="content">
                  <h2 className="heading-4">{title}</h2>
                  <h5 className="subtitle-2">{subtitle}</h5>
                </div>
              </div>
            </Spec>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Specs;
