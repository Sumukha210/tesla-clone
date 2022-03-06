import { BgImg } from "@/module/heroTemplate/styles";
import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 3rem;

  h2 {
    text-align: center;
    margin-bottom: 1.5rem;
  }
`;

export const PalletContainer = styled.div`
  @media (max-width: 1199.98px) {
    padding-left: 3rem;
    padding-right: 3rem;
    max-width: 768px;
    margin: auto;
  }

  .palletImages {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .palletDetails {
    margin-top: 1rem;

    h4 {
      display: flex;
      align-items: center;
      justify-content: center;

      span {
        &:last-child {
          margin-left: 1rem;
          color: #5c5e62;
        }
      }
    }
  }
`;

export const Pallet = styled.div`
  cursor: pointer;
  padding: 4px;
  width: 40px;
  height: 40px;
  border-radius: 50%;

  &:not(:first-child) {
    margin-left: 8px;
  }

  &.active {
    outline: 3px solid blue;
  }
`;

export const HeroImageContainer = styled(BgImg)``;
