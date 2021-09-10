import React from "react";
import NutritionRow from "./NutritionRow";
import CaloriesRow from "./CaloriesRow";
export default function NutritionFact({ nutrients }) {
  return (
    <div className="nutrition-facts">
      <div className="nutrition-facts__header">
        <h1 className="nutrition-facts__title">Nutrition Facts</h1>
      </div>
      <table className="nutrition-facts__table">
        <thead>
          <tr>
            <th colSpan="3" className="small-info">
              Amount Per Serving
            </th>
          </tr>
        </thead>
        <tbody>
            <CaloriesRow/>
          {nutrients.map((item, index) => (
            <NutritionRow key={index} item={item} />
          ))}
          <tr className="thick-end">
            <th colSpan="2">
              <b>Protein</b>
              3g
            </th>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
