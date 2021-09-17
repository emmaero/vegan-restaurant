import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product, categoryId }) {
  const { id, imageUrl, name, highlight } = product;
  return (
    <li>
      <div className="product-card">
        <img src={require("../../assets/images" + imageUrl).default} alt="" />
        <div>
          <div className="product-card-info">
            <h3>{name}</h3>
            <p>{highlight}</p>
          </div>
          <div className="view-page">
            <Link to={`/product/${categoryId}/${id}`}>
              <button className="button-link">View page</button>
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
}
