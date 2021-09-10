import React from "react";

export default function CaloriesRow() {
  return (
    <>
      <tr>
        <th colSpan="2">
          <b>Calories</b>
          200
        </th>
        <td>Calories from Fat 130</td>
      </tr>
      <tr className="thick-row">
        <td colSpan="3" className="small-info">
          <b>% Daily Value*</b>
        </td>
      </tr>
    </>
  );
}
