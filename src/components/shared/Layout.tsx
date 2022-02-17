import React from "react";
import Navbar from "./navbar";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
