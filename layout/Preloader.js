"use client";
import { portfolioUtilits } from "@/utility";
import { useEffect } from "react";

const Preloader = () => {
  useEffect(() => {
    portfolioUtilits.preloader();
  }, []);

  return <div className="preloader" />;
};
export default Preloader;
