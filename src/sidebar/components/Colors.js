import React from "react";

const Colors = ({handleChange}) => {
  return (
    <div>
      {" "}
      <h2 className="sidebar-title color-title">Colors</h2>
      <div className="row">
        <label className="">
          <input type="radio" onChange={handleChange} value="" name="test1" />
          <span className=""></span>
          All
        </label>
        <label className="" style={{ backgroundColor: "black" }}>
          <input type="radio" onChange={handleChange} value="black" title="Black" name="test1" />
          <span className=""></span>
          Black
        </label>

        <label className="" style={{ backgroundColor: "blue" }}>
          <input type="radio" onChange={handleChange} value="Blue" title="blue" name="test1" />
          <span className=""></span>
          Blue
        </label>

        <label className="" style={{ backgroundColor: "red" }}>
          <input type="radio" onChange={handleChange} value="red" title="Red" name="test1" />
          <span className=""></span>
          Red
        </label>

        <label className="" style={{ backgroundColor: "green" }}>
          <input type="radio" onChange={handleChange} value="green" title="Green" name="test1" />
          <span className=""></span>
          Green
        </label>

        <label className="" style={{ backgroundColor: "white" }}>
          <input type="radio" onChange={handleChange} value="white" title="White" name="test1" />
          <span className=""></span>
          White
        </label>

        
      </div>
    </div>
  );
};

export default Colors;
