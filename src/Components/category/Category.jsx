import React from "react";
import drinks from "../../data/drinks.json";
import dishes from "../../data/dishes.json";
import deserts from "../../data/deserts.json";
import ProductCard from "./ProductCard";
export default function Category({ match }) {
  const id = match.params.id;
  const categories = [dishes, deserts, drinks];
  const category = categories.find((item) => item.id === id);
  const products = category.products.map((product) => (
    <ProductCard key={product.id} product={product} categoryId={id} />
  ));
  return (
    <div className="container">
      <div className="category-header">
        <h1>{category.name}</h1>
        <div className="overlay"></div>
          <img
            src={
              require("../../assets/images/category" + category.categoryImage)
                .default
            }
            alt="vegan"
          />   
      </div>
      <div className="category-page-detail row">
        <p>{category.description}</p>
        <ul className="product-list row">{products}</ul>
      </div>
    </div>
  );
}
