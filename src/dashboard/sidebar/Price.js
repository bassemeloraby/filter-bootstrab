import React from "react";

const Price = ({handleChange}) => {
  return (
    <div>
      <h2 className="">Price</h2>
      <div className="row">
        <label className="sidebar-label-container">
          <input type="radio" onChange={handleChange} value="" name="test2" />
          <span className="checkmark"></span>All
        </label>
        <label className="sidebar-label-container">
          <input type="radio" onChange={handleChange} value={50} title="$0 - 50" name="test2" />
          <span className="checkmark"></span>$0 - 50
        </label>
        <label className="sidebar-label-container">
          <input type="radio" onChange={handleChange} value={100} title="$50 - $100" name="test2" />
          <span className="checkmark"></span>$50 - $100
        </label>
        <label className="sidebar-label-container">
          <input type="radio" onChange={handleChange} value={150} title="$100 - $150" name="test2" />
          <span className="checkmark"></span>$100 - $150
        </label>
        <label className="sidebar-label-container">
          <input type="radio" onChange={handleChange} value={200} title="Over $150" name="test2" />
          <span className="checkmark"></span>Over $150
        </label>
      </div>
    </div>
  );
};

export default Price;
