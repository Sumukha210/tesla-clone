import DOMPurify from "isomorphic-dompurify";
import React from "react";
import styled from "styled-components";

interface infoType {
  name: string;
  value: string;
}

const info: infoType[] = [
  { name: "Acceleration 0-60 mph with 80k lb", value: "20 sec" },
  { name: "Speed up a 5% Grade", value: "60 mph" },
  { name: "Mile Range", value: "300 or 500 miles" },
  {
    name: "Powertrain",
    value: "4 Independent Motors on Rear <span>Axles</span>",
  },
  { name: "Energy Consumption", value: "Less than 2 KWh per mile" },
  { name: "Fuel Savings", value: "$200,000+" },
  {
    name: "Expected Base Price <span>(300 mile range)</span>",
    value: "$150,000",
  },
  {
    name: "Expected Base Price <span>(500 mile range)</span>",
    value: "$180,000",
  },
  { name: "Base Reservation", value: "$20,000" },
];

const SemiInfo = () => {
  return (
    <Wrapper className="component-inner-gap">
      <div className="container">
        <VideoContainer>
          <video src="/videos/loop.mp4" autoPlay muted loop></video>
        </VideoContainer>

        <InfoBoxWrapper className="component-inner-gap">
          {info.map(({ name, value }, index) => (
            <InfoBox key={index}>
              <h3
                className="subtitle-1"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(name),
                }}></h3>

              <h3
                className="subtitle-1"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(value),
                }}></h3>
            </InfoBox>
          ))}
        </InfoBoxWrapper>
      </div>
    </Wrapper>
  );
};

export default SemiInfo;

const Wrapper = styled.div`
  background-color: #000000;
`;

const VideoContainer = styled.div`
  height: 349px;

  video {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;

const InfoBoxWrapper = styled.div`
  width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1199.98px) {
    width: 478px;
  }

  @media (max-width: 575.98px) {
    padding-left: 25px;
    padding-right: 25px;
    width: 100%;
  }
`;

const InfoBox = styled.div`
  color: #fff;
  display: flex;
  justify-content: space-between;

  &:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  }

  h3 {
    font-weight: 500;
    padding: 1rem;
  }
`;
