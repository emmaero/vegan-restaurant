import React from "react";
import logo from "../../assets/images/category/dish.jpeg";
import { Link } from "react-router-dom";

export default function CategorySection({ item }) {
  return (
    <div className="category-section">
      <img
        src={
          require("../../assets/images/category" + item.categoryImage).default
        }
        alt="vegan halmstad"
      />
      <div className="section-description">
        <h2>{item.name}</h2>
        <p>{item.description}</p>

        <Link to={`/category/${item.id}`}>
          <button className="button-main">View menu</button>
        </Link>
      </div>
    </div>
  );
}
