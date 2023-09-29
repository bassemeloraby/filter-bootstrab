import React from "react";
import Navigation from "./mainboard/Navigation";
import Recommended from "./mainboard/Recommended";
import Products from "./mainboard/Products";

const Dashboard = ({ handleInputChange, query,handleClick,result }) => {
  return (
    <div style={{ backgroundColor: "lightblue", width: "80%" }}>
    <Navigation handleInputChange={handleInputChange} query={query}/>
    <Recommended handleClick={handleClick}/>
    <Products result={result}/>
    </div>
  );
};

export default Dashboard;
