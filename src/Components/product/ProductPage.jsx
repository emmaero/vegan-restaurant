import React from "react";
import categories from "../../contents/categories.json";
import { useHistory } from "react-router";

export default function Product({ match }) {
  let history = useHistory();
  const { categoryId, id } = match.params;
  const category = categories.find((item) => item.id === categoryId);
  const products = category.products;
  const product = products.find((item) => item.id === id);
  function goToPreviousPath() {
    history.goBack();
  }
  return (
    <div className="container">
      <div className="page-image">
        <img
          src={require("../../assets/images" + product.imageUrl).default}
          alt="vegan"
        />
      </div>
      <div className="page-details">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <h2>Ingredients</h2>
        <h2>Nutritional fact</h2>
        <button className="button-main" onClick={goToPreviousPath}>
          Go back
        </button>
      </div>
    </div>
  );
}
