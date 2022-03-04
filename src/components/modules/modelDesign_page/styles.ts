import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 320px;
  height: 100vh;
  overflow: hidden;
  width: 100vw;

  position: relative;
`;

export const LeftSection = styled.div`
  background: rebeccapurple;
`;

export const RightSection = styled.div`
  background-color: aliceblue;
  overflow-y: auto;
  padding: 5rem 1.2rem;

  &::-webkit-scrollbar {
    width: 0px;
  }
`;
