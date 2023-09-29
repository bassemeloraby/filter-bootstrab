import React from "react";
import Navigation from "./navigation/Navigation";
import Recommended from "./recommended/Recommended";
import Products from "./products/Products";

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
