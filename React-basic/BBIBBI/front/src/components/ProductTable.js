import React from "react";
import ProductRow from "./ProductRow";

const ProductTable = ({ data, keyword }) => {
  if (data === null) return <h2>로딩중입니다...</h2>;
  return (
    <table>
      <thead>
        <tr>
          <th>Num</th>
          <th>Msg</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ num, msg }) => {
          const contents = { num, msg };
          return (
            <>
              <ProductRow {...contents} keyword={keyword} />
            </>
          );
        })}
      </tbody>
    </table>
  );
};

export default ProductTable;
