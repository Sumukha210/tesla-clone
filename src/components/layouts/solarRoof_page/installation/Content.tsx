import Button from "@/element/button";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import { Content } from "../design/style";

const ContentSection = () => {
  const router = useRouter();

  return (
    <Wrapper>
      <Content>
        <div className="left">
          <p className="caption-text">installation</p>
          <h2 className="heading-2">Trusted Expertise</h2>
          <Button
            name="order now"
            outlineBtn
            secondaryBtn
            smBtn
            onClick={() => router.push(`/solarroof/design`)}
          />
        </div>

        <div className="right">
          <p className="subtitle-1">
            Our in-house team of energy professionals has installed more than
            3.6 GW of clean solar energy across 400,000 roofs—the equivalent of
            10 million traditional solar panels. From design to power on, we
            take care of everything. Chat with an energy advisor to ask any
            questions about Tesla Solar Roof.
          </p>
        </div>
      </Content>
    </Wrapper>
  );
};

export default ContentSection;

const Wrapper = styled.div``;
