import React, { useRef } from "react";
import { useOnScreen } from "@/customHook/useOnScreen";
import Button from "@/element/button";
import LoadingSpinner from "@/element/loadingSpinner";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { Wrapper, VideoWrapper, Content, Line, BtnContainer } from "./styles";

const DynamicVideoComponent = dynamic(() => import("./Video"), {
  loading: () => <LoadingSpinner />,
});

const ReserveNow = () => {
  const videoWrapperRef = useRef(null);
  const isIntersecting = useOnScreen(videoWrapperRef);
  const router = useRouter();

  return (
    <Wrapper className="margin-top">
      <div className="container">
        <VideoWrapper ref={videoWrapperRef}>
          {isIntersecting && <DynamicVideoComponent />}
          <h3 className="subtitle-1">
            Watch the Tesla Semi & Roadster Unveil · November 16, 2017
          </h3>
        </VideoWrapper>

        <Content>
          <Line></Line>
          <BtnContainer>
            <Button
              name="Reserve now"
              variant="outline"
              color="light"
              size="sm"
              onClick={() => router.push("/semi/reserve")}
            />
          </BtnContainer>
        </Content>
      </div>
    </Wrapper>
  );
};

export default ReserveNow;
