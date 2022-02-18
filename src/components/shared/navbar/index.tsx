import React, { useState } from "react";
import { products } from "@/utils/productDetails";
import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "./Logo";
import { Nav, NavContainer } from "./styles";
import Sidebar from "@/module/sidebar";

const Navbar = () => {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleCloseMenu = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      <Sidebar isSidebarOpen={sidebarOpen} handleCloseMenu={handleCloseMenu} />

      <Nav>
        <div className="container">
          <NavContainer className="flex justify-between">
            <div className="firstPart">
              <span onClick={() => router.push("/")}>
                <Logo />
              </span>
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
                <span onClick={() => setSidebarOpen(true)}>Menu</span>
              </span>
            </div>
          </NavContainer>
        </div>
      </Nav>
    </>
  );
};

export default Navbar;
