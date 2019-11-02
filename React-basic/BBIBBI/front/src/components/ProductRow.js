import React from "react";

const ProductRow = ({ keyword, num, msg }) => {
  if (num !== keyword) return null;
  return (
    <tr>
      <td>{num}</td>
      <td>{msg}</td>
    </tr>
  );
};

export default ProductRow;
