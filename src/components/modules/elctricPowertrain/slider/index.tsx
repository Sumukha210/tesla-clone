import React, { useState } from "react";
import { sliderProps } from "./types";
import NextImage from "next/image";
import {
  Box,
  Content,
  ImageContainer,
  SpecContainer,
  Wrapper,
  Spec,
} from "./style";

interface sliderType {
  data: sliderProps[];
}

const Slider: React.FC<sliderType> = ({ data }) => {
  const [currentEleNum, setCurrentEleNum] = useState(0);

  return (
    <Wrapper>
      <ImageContainer>
        <NextImage
          src={data[currentEleNum].img}
          objectFit="cover"
          placeholder="blur"
        />
      </ImageContainer>

      <Content>
        {data.map(({ specs, name, description }, index) => (
          <Box
            key={index}
            className={`${currentEleNum === index ? "active" : ""}`}
            onClick={() => setCurrentEleNum(index)}>
            <h3 className="heading-3">{name}</h3>
            <p className="subtitle-2">{description}</p>

            <SpecContainer>
              {specs.length &&
                specs.map(({ specName, specValue }, index) => {
                  const split = specValue.split(" ");

                  return (
                    <Spec key={specName}>
                      <h2 className="specValue">
                        <span className="heading-2">{split[0]}</span>
                        <span className="heading-3"> {split[1]}</span>
                      </h2>
                      <h5 className="subtitle-3 specName">{specName}</h5>
                    </Spec>
                  );
                })}
            </SpecContainer>
          </Box>
        ))}
      </Content>
    </Wrapper>
  );
};

export default Slider;
