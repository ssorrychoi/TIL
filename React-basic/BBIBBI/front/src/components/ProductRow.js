import React from "react";
import "./ProductRow.css";

const ProductRow = ({ keyword, num, msg }) => {
  if (num !== keyword) return null;
  return (
    <tr className="font">
      <td>{num}</td>
      <td>:</td>
      <td>{msg}</td>
    </tr>
  );
};

export default ProductRow;
