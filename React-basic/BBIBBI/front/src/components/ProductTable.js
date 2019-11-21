import React from "react";
import ProductRow from "./ProductRow";
import "./ProductTable.css";

const ProductTable = ({ data, keyword }) => {
  if (data === null) return <h2>로딩중입니다...</h2>;
  return (
    <div>
      <table className="table">
        <tbody className="center">
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
    </div>
  );
};

export default ProductTable;
