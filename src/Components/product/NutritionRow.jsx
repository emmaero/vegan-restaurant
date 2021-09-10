import React from "react";

export default function NutritionRow({ item }) {
  const { nutrient, amount, moreNutrients } = item;
  return (
    <>
      <tr>
        <th colSpan="2">
          <b>{nutrient}</b>
        </th>
        <td>
          <b>{amount}</b>
        </td>
      </tr>
      {moreNutrients.map((moreNutrient, index) => (
        <tr key={index}>
          <td className="blank-cell"></td>
          <th>{moreNutrient.nutrient}</th>
          <td>
            <b>{moreNutrient.amount}</b>
          </td>
        </tr>
      ))}
    </>
  );
}
