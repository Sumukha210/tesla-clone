import Link from "next/link";
import React, { useRef } from "react";
import { links } from "./util";
import { AiOutlineClose } from "react-icons/ai";
import { SideNav, CloseIcon, Wrapper, SideNavContent } from "./styles";
import { products } from "@/utils/productDetails";

interface sidebarProps {
  handleCloseMenu: () => void;
  isSidebarOpen: boolean;
  showProductsNamesOnSidebar: boolean;
}

const Sidebar: React.FC<sidebarProps> = ({
  handleCloseMenu,
  isSidebarOpen,
  showProductsNamesOnSidebar,
}) => {
  const sideNavRef = useRef(null);
  const contentRef = useRef(null);
  const closeIconRef = useRef(null);

  return (
    <Wrapper
      onClick={e => {
        if (
          e.target !== sideNavRef.current &&
          e.target !== contentRef.current &&
          e.target !== closeIconRef.current
        ) {
          handleCloseMenu();
        }
      }}
      className={`${isSidebarOpen && "active"}`}>
      <SideNav
        ref={sideNavRef}
        className={`${isSidebarOpen && "active"} sideNav`}>
        <SideNavContent>
          <CloseIcon ref={closeIconRef}>
            <AiOutlineClose onClick={handleCloseMenu} />
          </CloseIcon>

          <div ref={contentRef} className="content">
            {showProductsNamesOnSidebar &&
              products.map(({ generalInfo: { name, id } }, index) => (
                <h6 className="subtitle-2" key={index}>
                  <Link href={id}>{name}</Link>
                </h6>
              ))}

            {links.map(({ name, href }, index) => (
              <h6 className="subtitle-2" key={index}>
                <Link href={href}>{name}</Link>
              </h6>
            ))}
          </div>
        </SideNavContent>
      </SideNav>
    </Wrapper>
  );
};

export default Sidebar;
