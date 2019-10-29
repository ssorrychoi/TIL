import React from "react";
import ProductRow from "./ProductRow";
import ProductCategoryRow from "./ProductCategoryRow";

const ProductTable = ({ data, keyword, checked }) => {
  if (data === null) return <h2>Loading...</h2>;
  let prevCategory = "";

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ category, price, stocked, name }) => {
          const products = { name, price, stocked };
          function categoryFilter(category) {
            if (prevCategory !== category) {
              return <ProductCategoryRow category={category} />;
            } else return null;
          }
          prevCategory = category;
          return (
            <>
              {categoryFilter(category)}
              <ProductRow {...products} keyword={keyword} checked={checked} />
            </>
          );
        })}
      </tbody>
    </table>
  );
};

export default ProductTable;
