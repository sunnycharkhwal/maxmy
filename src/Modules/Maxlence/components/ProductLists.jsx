import React, { useEffect, useState } from "react";
import ENDPOINT from "../config/ENDPOINT.jsx";

export const ProductLists = ({ catId, itemsLimit }) => {
  const [products, setProducts] = useState([]);

  async function getProductsByCatId() {
    let res = await fetch(ENDPOINT + `product?limit=${itemsLimit}&cat_id=${catId}`);
    const data = await res.json();
    setProducts(data);
  }

  useEffect(() => {
    getProductsByCatId();
  }, [itemsLimit]);

  const ProductCard = (props) => {
    return (
      <div className="productCards col-6 col-md-3">
        <div className="productImageContainer">
          <img
            className="productimg w-100"
            alt={props.alt}
            src={ENDPOINT + "uploads/" + props.img}
          />
        </div>
        <div className="productDetailsContainer my-3">
          <p className="productTitle mb-1">{props.title}</p>
          <h5 className="productPrice">$ &nbsp;{props.price}</h5>
        </div>
      </div>
    );
  };

  return (
    <>
      {products.map((val, i) => {
        return <ProductCard key={i} {...val} />;
      })}
    </>
  );
};
