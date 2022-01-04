import React from "react";
import { useSelector } from "react-redux";
const BoughtPackage = () => {
  const { packages } = useSelector((state) => state.packages);
  console.log(packages);
  return <></>;
};

export default BoughtPackage;
