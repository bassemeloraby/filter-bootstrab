import React from "react";

const Category = ({ handleChange }) => {
  return (
    <div>
      {" "}
      <h2 className="sidebar-title">Category</h2>
      <div className="row">
        <label className="">
          <input type="radio" onChange={handleChange} value="" name="test" />
          <span className=""></span>All
        </label>
        <label className="">
          <input type="radio" onChange={handleChange} value="sneakers" name="test" />
          <span className=""></span>Sneakers
        </label>
        <label className="">
          <input type="radio" onChange={handleChange} value="flats"
          title="Flats"
          name="test" />
          <span className=""></span>Flats
        </label>
        <label className="">
          <input type="radio" onChange={handleChange} value="sandals"
          title="Sandals"
          name="test" />
          <span className=""></span>Sandals
        </label>
        <label className="">
          <input type="radio" onChange={handleChange} value="heels"
          title="Heels"
          name="test" />
          <span className=""></span>Heels
        </label>
      </div>
    </div>
  );
};

export default Category;
