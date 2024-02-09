"use client";
import { portfolioUtilits } from "@/utility";
import { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import SideBar from "./SideBar";

const MainLayout = ({ children, header, footer, noFooter, onePageMenu }) => {
  useEffect(() => {
    portfolioUtilits.animaiton();
  }, []);

  return (
    <div className="page-wrapper">
      <Header header={header} onePageMenu={onePageMenu} />
      <SideBar />
      {children}
      {!noFooter && <Footer footer={footer} />}
    </div>
  );
};
export default MainLayout;
