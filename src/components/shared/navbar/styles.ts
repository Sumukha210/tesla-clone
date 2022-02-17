import styled from "styled-components";

export const Nav = styled.nav`
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  z-index: 999;
`;

export const NavContainer = styled.div`
  align-items: center;
  padding: 10px 0;

  .firstPart {
    svg {
      height: 24px;
      width: 120px;
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
        color: var(--dark-100);
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

  .thirdPart {
    .menu {
      margin-left: 8px;
    }
  }
`;
