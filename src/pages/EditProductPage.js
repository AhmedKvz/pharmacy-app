import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/CreateProductPage.css";
import { isFieldEmpty } from "../services/Validate";
import { nanoid } from "nanoid";

function EditPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [sendCheck, setSendCheck] = useState(false);
  console.log();

  const [product, setProduct] = useState(
    JSON.parse(localStorage.getItem("products")).filter(
      (product) => product._id === location.pathname.split("/")[2]
    )
  );
  const [credentials, setCredentials] = useState({
    id: nanoid(),
    name: product[0].name,
    manufacturer: product[0].manufacturer,
    price: product[0].price,
    expiry: product[0].expiry,
  });

  console.log(product);
  console.log(credentials);
  console.log(setProduct);

  const handleCredentialsChange = (event) => {
    event.preventDefault();
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };

  const handleEditProduct = () => {
    if (
      isFieldEmpty(credentials.name) === false &&
      isFieldEmpty(credentials.manufacturer) === false &&
      credentials.price !== 0 &&
      credentials.expiry !== 0
    ) {
      const products = JSON.parse(localStorage.getItem("products"));
      products.splice(
        products.findIndex(
          (product) => product._id === location.pathname.split("/")[2]
        ),
        1,
        {
          _id: location.pathname.split("/")[2],
          name: credentials.name,
          manufacturer: credentials.manufacturer,
          price: credentials.price,
          expiry: credentials.expiry,
        }
      );
      localStorage.setItem("products", JSON.stringify(products));
      setSendCheck(true);
      console.log(products);
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
          value={credentials.name}
          placeholder="...product name"
          onChange={handleCredentialsChange}
        />
        <input
          type="text"
          className="manufacturer-name"
          name="manufacturer"
          value={credentials.manufacturer}
          placeholder="...product manufacturer"
          onChange={handleCredentialsChange}
        />
        <div className="product-price-wrapper">
          <input
            type="number"
            className="product-price"
            name="price"
            value={credentials.price}
            placeholder="...product price €"
            onChange={handleCredentialsChange}
          />
        </div>
        <input
          type="date"
          className="product-expiry-date"
          name="expiry"
          id="expiry"
          value={credentials.expiry}
          placeholder="...expiry date"
          onChange={handleCredentialsChange}
        />
        <button className="btn-create" onClick={() => handleEditProduct()}>
          Edit Product
        </button>
      </div>
    </div>
  );
}

export default EditPage;
