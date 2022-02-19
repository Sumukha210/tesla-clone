import React from "react";
import Navbar from "./navbar";
import { layoutProps } from "./types";

const Layout: React.FC<layoutProps> = ({ children, lightColorNav }) => {
  return (
    <>
      <Navbar lightColorNav={lightColorNav} />
      {children}
    </>
  );
};

export default Layout;
