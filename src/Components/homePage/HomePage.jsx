import React from "react";
import Hero from "./Hero";
import CategorySection from "./CategorySection";
import categories from "../../contents/categories.json";
import logo from "../../assets/images/category/dish.jpeg";
import { Link } from "react-router-dom";
export default function HomePage() {
  const list = categories.map((item) => (
    <CategorySection key={item.id}>
      <img
        src={require("../../assets/images/category"+item.categoryImage).default}
        alt="vegan halmstad"
      />
      <div className="section-description">
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <button className="link-button">
          <Link to={`/category/${item.id}`}>View menu</Link>
        </button>
      </div>
    </CategorySection>
  ));
  return (
    <>
      <Hero />
      <div className="home-category">{list}</div>
    </>
  );
}
