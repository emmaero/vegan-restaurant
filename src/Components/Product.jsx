import React from "react";
import categories from "./../contents/categories.json";

export default function Product({ match }) {
    const { categoryId, id } = match.params;
    const category = categories.find((item) => item.id === id);
    const products = category.products;
     const product = products.find((item) => item.id === id);
    return <div>
        <h2>{product.name}</h2>
  </div>;
}
