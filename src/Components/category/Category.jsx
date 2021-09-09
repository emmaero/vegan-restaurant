import React from "react";
import categories from "../../contents/categories.json";
import ProductCard from "./ProductCard";
export default function Category({ match }) {
  const id = match.params.id;
  const category = categories.find((item) => item.id === id);
  const products = category.products.map((product) => (
    <ProductCard key={product.id} product={product} categoryId={id} />
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
