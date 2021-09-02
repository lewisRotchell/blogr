import React from "react";
import { Footer } from "./Footer";
import { Nav } from "./Nav";

interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Nav />
      <>{children}</>
      <Footer />
    </>
  );
};
