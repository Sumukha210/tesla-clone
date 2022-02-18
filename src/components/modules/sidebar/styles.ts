import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 0%;
  left: 0%;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8px);
  z-index: 1000;
  visibility: hidden;
  opacity: 0;

  transition: all 0.3s ease-in-out;

  &.active {
    visibility: visible;
    opacity: 1;
  }
`;

export const CloseIcon = styled.div`
  text-align: end;
  margin: 1.5rem 3rem 0 0;

  svg {
    backdrop-filter: blur(16px);
    border-radius: 50%;
    background: transparent;
    padding: 0.5rem;
    height: 36px;
    width: 36px;
    cursor: pointer;
    transition: background-color 0.1s ease-in-out;

    &:hover {
      background-color: rgba(58, 58, 59, 0.1);
    }
  }
`;

export const SideNav = styled.div`
  background: white;
  width: 295px;
  position: absolute;
  top: 0;
  right: -395px;
  height: 100%;
  transition: right 0.7s ease-in-out;
  z-index: 10001;

  &.active {
    right: 0%;
  }

  .content {
    padding: 2rem 1.5rem;

    h6 {
      padding: 10px 1rem;
      margin-bottom: 0.5rem;
      backdrop-filter: blur(16px);
      border-radius: 16px;
      background: transparent;
      transition: background-color 0.1s ease-in-out;

      &:hover {
        background-color: rgba(58, 58, 59, 0.1);
      }

      a {
        color: var(--dark-300);
        text-decoration: none;
      }
    }
  }
`;
