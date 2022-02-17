import { products } from "@/utils/productDetails";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <Nav>
      <div className="container">
        <NavContainer className="flex justify-between">
          <div className="firstPart">
            <Logo />
          </div>

          <div className="secondPart">
            {products.map(
              ({ generalInfo: { name, id, productType } }) =>
                productType != "accessories" && (
                  <span key={id} className="subtitle-1">
                    <Link href={id}>{name}</Link>
                  </span>
                )
            )}
          </div>

          <div className="thirdPart">
            <span className="subtitle-1">
              <Link href="/shop">Shop</Link>
            </span>
            <span className="subtitle-1">
              <Link href="/account">Account</Link>
            </span>
            <span className="subtitle-1 menu">
              <span>Menu</span>
            </span>
          </div>
        </NavContainer>
      </div>
    </Nav>
  );
};

export default Navbar;

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
