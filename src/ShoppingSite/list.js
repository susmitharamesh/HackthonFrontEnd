
import React, { useState, useEffect } from "react";
import axios from "axios";

const api = "https://fakestoreapi.com/products";
const List = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(api);
        const data = response.data;
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    const filterData = products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredProducts(filterData);
  }, [search, products]);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="listSearch">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="products">
      {filteredProducts.length === 0 ? (
         <small className="err">No matching products found.</small>
      ) :(
filteredProducts.map((product) => (
          <div key={product.id}
            className={`unique ${selectedProduct === product ? "selected" : ""}`}
            onClick={() => handleProductClick(product)}
          >
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} id="img" />
            <h2>Rs.{product.price}</h2>
          </div>
        )))}
      </div>

      {selectedProduct && (
        <div className="selected-product">
          <h2>{selectedProduct.title}</h2>
          <img src={selectedProduct.image} alt={selectedProduct.title} />
          <h2>Rs.{selectedProduct.price}</h2>
          <p>{selectedProduct.description}</p>
         
        </div>
      )}
    </div>
  );
};

export default List;
