import React from "react";
import drinks from "../../data/drinks.json";
import dishes from "../../data/dishes.json";
import deserts from "../../data/deserts.json";
import NutritionFact from "./NutritionFact";
import { useHistory } from "react-router";

export default function Product({ match }) {
  let history = useHistory();
  const { categoryId, id } = match.params;
   const categories = [dishes, deserts, drinks];
  const category = categories.find((item) => item.id === categoryId);
  const products = category.products;
  const product = products.find((item) => item.id === id);
  const { nutrients, imageUrl, name, description, ingredients } = product;
 
  function goToPreviousPath() {
    history.goBack();
  }
  return (
    <div className="container">
      <div className="page-image">
        <img
          src={require("../../assets/images" + imageUrl).default}
          alt="vegan"
        />
      </div>
      <div className="page-details">
        <h2>{name}</h2>
        <p>{description}</p>
        <h2>Ingredients</h2>
        {ingredients.map((item, index) => (
          <span>{item}</span>
        ))}
        <h2>Nutrition facts</h2>
        <NutritionFact nutrients={nutrients} />
        <button className="button-main" onClick={goToPreviousPath}>
          Go back
        </button>
      </div>
    </div>
  );
}
