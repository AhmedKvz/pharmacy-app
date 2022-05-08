import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/ViewProductPage.css";
function ViewProductPage() {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products") || "[]")
  );
  console.log(products);

  const handleProductDelete = (value) => {
    const newProducts = products.filter((product) => product._id !== value);
    localStorage.setItem("products", JSON.stringify(newProducts));
    setProducts(JSON.parse(localStorage.getItem("products")));
  };

  return (
    <div className="view-product-page">
      <Link to={"/create"}>
        <button className="btn-create">Create New Product</button>
      </Link>
      <div className="product-grid">
        {products.map((product) => {
          const expiryDate = new Date(product.expiry);
          console.log(expiryDate.getDay());
          console.log(expiryDate.toLocaleString("default", { month: "long" }));
          console.log(expiryDate.getFullYear());
          return (
            <div key={product._id} className="product-view">
              <p>
                <span>name: </span>
                {product.name}
              </p>
              <p>
                <span>company: </span>
                {product.manufacturer}
              </p>
              <p>
                <span>price: </span>
                {product.price} €
              </p>
              <p>
                <span>exp. date: </span>
                {expiryDate.toLocaleString("en-US", {
                  day: "2-digit",
                }) +
                  "." +
                  expiryDate.toLocaleString("en-US", {
                    month: "2-digit",
                  }) +
                  "." +
                  expiryDate.getFullYear()}
              </p>
              <div className="product-btn">
                <Link to={`/editProduct/${product._id}`}>
                  <button className="btn-edit">EDIT</button>
                </Link>
                <button
                  className="btn-del"
                  onClick={() => handleProductDelete(product._id)}
                >
                  DELETE
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ViewProductPage;
