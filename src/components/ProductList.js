import React from "react";
import Product from "./Product";
function ProductList(props) {
  return (
    <div className="product-list">
      {props.product.map((product, index) => {
        return <Product product={product} />;
      })}
    </div>
  );
}

export default ProductList;
