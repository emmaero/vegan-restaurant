import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product, categoryId }) {
  const { id, imageUrl, name, highlight } = product;
  return (
    <Link to={`/product/${categoryId}/${id}`}>
      <li>
        <div className="product-card">
          <img src={require("../../assets/images" + imageUrl).default} alt="" />
          <div className="">
            <h3>{name}</h3>
            <p>{highlight}</p>
          </div>
        </div>
      </li>
    </Link>
  );
}
