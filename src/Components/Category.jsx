import React from "react";
import categories from "./../contents/categories.json";
import { Link } from "react-router-dom";
export default function Category({ match }) {
  const id = match.params.id;
  const category = categories.find((item) => item.id === id);
  const products = category.products.map((product) => (
    <Link to={`/product/${id}/${product.id}`}>
      <li>
        <div className="product-card">
          <img
            src={require("../assets/images" + product.imageUrl).default}
            alt=""
          />
          <div className="">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        </div>
      </li>
    </Link>
  ));
  return (
    <div className="container">
      <div className="category-header">
        <h2>{category.name}</h2>
      </div>
      <div className="category-page-detail row">
        <p>{category.description}</p>
        <ul className="product-list row">{products}</ul>
      </div>
    </div>
  );
}
