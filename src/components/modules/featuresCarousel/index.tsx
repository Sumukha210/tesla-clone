import React, { useState } from "react";
import {
  Content,
  MediaContainer,
  GridContainer,
  Box,
  Wrapper,
  Header,
} from "./styles";
import { data } from "./util";

const FeatureCarousel = () => {
  const [currentEleNum, setCurrentEleNum] = useState(0);

  return (
    <Wrapper>
      <div className="container">
        <Content>
          <Header>
            <h2 className="heading-2">Features</h2>
            <p className="subtitle-1">
              Full Self-Driving capability introduces additional features and
              improves existing functionality to make your car more capable over
              time including:
            </p>
          </Header>

          <MediaContainer>
            <video
              src={data[currentEleNum].media}
              autoPlay
              loop
              muted
              placeholder={data[currentEleNum].title}></video>
          </MediaContainer>

          <GridContainer>
            {data.map(({ title, description }, index) => (
              <Box
                onClick={() => setCurrentEleNum(index)}
                className={`${currentEleNum === index ? "active" : ""}`}
                key={index}>
                <h3 className="heading-4">{title}</h3>
                <p className="subtitle-2">{description}</p>
              </Box>
            ))}
          </GridContainer>
        </Content>
      </div>
    </Wrapper>
  );
};

export default FeatureCarousel;
