import styled from "styled-components";

export const CustomHero = styled.div`
  .subtitle-2 {
    font-weight: 500;
    margin-top: 8px;
  }
`;

export const Wrapper = styled.div`
  color: white;
  text-align: center;

  @media (min-width: 992px) {
    display: flex;
    justify-content: center;
  }
`;

export const SpecificationContent = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 991.98px) {
    margin-bottom: 2rem;
  }

  @media (max-width: 575.98px) {
    justify-content: space-between;
  }

  & > div {
    svg {
      height: 25px;
      width: 25px;
    }

    @media (min-width: 576px) {
      margin-right: 4rem;
    }

    h6 {
      margin-top: 8px;
      font-weight: 500;
      color: #e2e3e3;
      letter-spacing: 0.5px;
    }
  }
`;
