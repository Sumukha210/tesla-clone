import DOMPurify from "isomorphic-dompurify";
import React from "react";
import { Wrapper, VideoContainer, InfoBoxWrapper, InfoBox } from "./styles";
import { info } from "./utils";

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
