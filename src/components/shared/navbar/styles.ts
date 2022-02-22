import styled from "styled-components";
import { layoutProps } from "../types";

export const Nav = styled.nav`
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  z-index: 999;
`;

export const NavContainer = styled.div<layoutProps>`
  align-items: center;
  padding: 10px 0;

  .firstPart {
    svg {
      height: 24px;
      width: 120px;
      cursor: pointer;
      color: ${({ lightColorNav }) => (lightColorNav ? "white" : "black")};
    }
  }

  .secondPart,
  .thirdPart {
    span {
      &:not(:last-child) {
        margin-right: 8px;
      }

      a {
        padding: 6px 12px;
        color: var(
          ${({ lightColorNav }) =>
            lightColorNav ? "--light-color" : "--dark-100"}
        );
        text-decoration: none;
        font-weight: 500;
        backdrop-filter: blur(16px);
        border-radius: 16px;
        background: transparent;
        transition: background-color 0.1s ease-in-out;

        &:hover {
          background-color: rgba(23, 26, 32, 0.1);
        }
      }
    }
  }

  .secondPart {
    @media (max-width: 1199.98px) {
      display: none;
    }
  }

  .thirdPart {
    @media (max-width: 575.98px) {
      span {
        &:not(:last-child) {
          display: none;
        }
      }
    }

    .menu {
      margin-left: 8px;
      cursor: pointer;
      color: var(
        ${({ lightColorNav }) =>
          lightColorNav ? "--light-color" : "--dark-100"}
      );
    }
  }
`;
