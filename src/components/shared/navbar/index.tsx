import React, { useEffect, useState } from "react";
import { products } from "@/utils/productDetails";
import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "./Logo";
import { Nav, NavContainer } from "./styles";
import Sidebar from "@/module/sidebar";
import { layoutProps } from "../types";

const Navbar: React.FC<layoutProps> = ({ lightColorNav = false, fixedNav }) => {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showProductsNamesOnSidebar, setShowProductsNamesOnSidebar] =
    useState(false);

  const handleCloseMenu = () => {
    setSidebarOpen(false);
  };

  useEffect(() => {
    if (window.innerWidth < 1199.98) {
      setShowProductsNamesOnSidebar(true);
    } else {
      setShowProductsNamesOnSidebar(false);
    }

    if (sidebarOpen) {
      document.body.style.overflowY = "hidden";
      document.body.style.maxHeight = "100vh";
    } else {
      document.body.style.overflowY = "initial";
      document.body.style.maxHeight = "initial";
    }
  }, [sidebarOpen]);

  return (
    <>
      <Sidebar
        showProductsNamesOnSidebar={showProductsNamesOnSidebar}
        isSidebarOpen={sidebarOpen}
        handleCloseMenu={handleCloseMenu}
      />

      <Nav>
        <div className="container">
          <NavContainer
            className="flex justify-between"
            lightColorNav={lightColorNav}>
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
