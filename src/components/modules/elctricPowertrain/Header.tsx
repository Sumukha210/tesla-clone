import React from "react";
import styled from "styled-components";

interface headerProps {
  modelName: string;
}

const Header: React.FC<headerProps> = ({ modelName }) => {
  return (
    <Wrapper>
      <Content>
        <h2 className="heading-2">Electric Powertrain</h2>
        <p className="subtitle-2">
          {modelName} platforms unite powertrain and battery technologies for
          unrivaled performance, range and efficiency. New module and pack
          thermal architecture allows faster charging and gives you more power
          and endurance in all conditions.
        </p>
      </Content>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  margin-bottom: 2rem;

  h2 {
    margin-bottom: 1rem;
  }
`;

const Content = styled.div`
  margin: auto;

  @media (min-width: 1200px) {
    width: 80%;
  }

  @media (max-width: 991.98px) {
    width: 70%;
  }

  @media (max-width: 575.98px) {
    width: 90%;
  }
`;
