import styled from "styled-components";
import { BgImg } from "@/module/heroTemplate/styles";

export const Wrapper = styled.div`
  position: relative;
`;

export const SelectMenu = styled.div`
  position: sticky;
  top: 0px;
  width: 100%;
  left: 0;

  margin-bottom: 2rem;
  display: grid;
  justify-content: center;

  select {
    padding: 0.5rem 0 0 0;
    border: none;
    outline: none;
  }

  .categoryName {
    display: block;
    font-size: 20px;
    text-transform: capitalize;
    font-weight: 600;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-rows: repeat(9, 100px);
  align-items: center;
  justify-content: center;
`;

export const Spec = styled.div`
  h6 {
    color: #5c5e62;
    font-weight: 400;
    text-transform: capitalize;
    margin-bottom: 4px;
  }

  h2 {
    span {
      color: #5c5e62;
      font-weight: 500;
      font-size: 17px;
    }
  }
`;

export const ImageContainer = styled(BgImg)`
  height: 400px;

  @media (max-width: 1199.98px) {
    height: 250px;
  }
`;
