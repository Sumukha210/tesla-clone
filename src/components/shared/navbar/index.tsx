import { products } from "@/utils/productDetails";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { Nav, NavContainer } from "./styles";

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
                  <span key={id} className="subtitle-2">
                    <Link href={id}>{name}</Link>
                  </span>
                )
            )}
          </div>

          <div className="thirdPart">
            <span className="subtitle-2">
              <Link href="/shop">Shop</Link>
            </span>
            <span className="subtitle-2">
              <Link href="/account">Account</Link>
            </span>
            <span className="subtitle-2 menu">
              <span>Menu</span>
            </span>
          </div>
        </NavContainer>
      </div>
    </Nav>
  );
};

export default Navbar;
