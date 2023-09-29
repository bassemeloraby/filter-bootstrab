import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./dashboard/Dashboard";
import Sidebar from "./dashboard/sidebar/Sidebar";
import products from "./db/data";
import { useState } from "react";
import Card from "./dashboard/mainboard/Card";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
    console.log(query);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );
  console.log(filteredItems);
  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
    console.log(selectedCategory);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  // main func
  function filteredData(products, selected, query) {
    // declare the first one state of products
    let filteredProducts = products;
    // Filtering Input Items -second state of products
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter -third state of products
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }
    // display the filtered products list with card component
    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);
  console.log(result, "result");
  return (
    <div className="d-flex">
      <Sidebar handleChange={handleChange} />
      <Dashboard
        query={query}
        handleInputChange={handleInputChange}
        handleClick={handleClick}
        result={result}
      />
    </div>
  );
}

export default App;
