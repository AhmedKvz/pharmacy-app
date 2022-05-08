import React, { useState, useEffect } from "react";
import "../styles/CreateProductPage.css";
import { nanoid } from "nanoid";
import { isFieldEmpty } from "../services/Validate";
import { useNavigate } from "react-router-dom";

function CreateProductPage(props) {
  const navigate = useNavigate();
  const [sendCheck, setSendCheck] = useState(false);
  const [credentials, setCredentials] = useState({
    name: "",
    manufacturer: "",
    price: 0,
    expiry: 0,
  });

  console.log(credentials);

  const handleCredentialsChange = (event) => {
    event.preventDefault();
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };

  const handleCreateProduct = () => {
    if (
      isFieldEmpty(credentials.name) === false &&
      isFieldEmpty(credentials.manufacturer) === false &&
      credentials.price !== 0 &&
      credentials.expiry !== 0
    ) {
      const product = {
        _id: nanoid(),
        name: credentials.name,
        manufacturer: credentials.manufacturer,
        price: credentials.price,
        expiry: credentials.expiry,
      };
      const products = JSON.parse(localStorage.getItem("products") || "[]");
      products.push(product);
      localStorage.setItem("products", JSON.stringify(products));
      setSendCheck(true);
    } else {
      console.log("NO RESULT");
    }
  };

  useEffect(() => {
    if (sendCheck) {
      navigate("/");
    }
  }, [navigate, sendCheck]);

  return (
    <div className="product-app">
      <div className="create-product">
        <input
          type="text"
          className="product-name"
          name="name"
          placeholder="...product name"
          onChange={handleCredentialsChange}
        />
        <input
          type="text"
          className="manufacturer-name"
          name="manufacturer"
          placeholder="...product manufacturer"
          onChange={handleCredentialsChange}
        />
        <div className="product-price-wrapper">
          <input
            type="number"
            className="product-price"
            name="price"
            placeholder="...product price €"
            onChange={handleCredentialsChange}
          />
        </div>
        <div className="product-expiry-wrapper">
          <label className="expiry-label" htmlFor="expiry">
            ...enter expiry date
          </label>
          <input
            type="date"
            className="product-expiry-date"
            name="expiry"
            id="expiry"
            placeholder="...expiry date"
            onChange={handleCredentialsChange}
          />
        </div>
        <button className="btn-create" onClick={() => handleCreateProduct()}>
          Create Product
        </button>
      </div>
    </div>
  );
}

export default CreateProductPage;
