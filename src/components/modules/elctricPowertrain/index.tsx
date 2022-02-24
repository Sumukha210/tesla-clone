import styled from "styled-components";
import Header from "./Header";
import Slider from "./slider";
import { sliderProps } from "./slider/types";

export interface electricPowertrainProps {
  modelName: string;
  models: sliderProps[];
}

const ElectricPowertrain: React.FC<electricPowertrainProps> = ({
  modelName,
  models,
}) => {
  return (
    <Wrapper className="component-inner-gap">
      <Content>
        <Header modelName={modelName} />
        <Slider data={models} />
      </Content>
    </Wrapper>
  );
};

export default ElectricPowertrain;

const Wrapper = styled.div`
  background: #f4f4f4;
`;

const Content = styled.div`
  margin: auto;
  @media (min-width: 1200px) {
    width: 90%;
  }

  @media (min-width: 1400px) {
    width: 75%;
  }

  @media (min-width: 992px) and (max-width: 1199.98px) {
    width: 80%;
  }
`;
