import React from "react";
import { useProducts } from "../context/ProductProvider";

const TopRated = () => {
  const { state: { products, loading, error } } = useProducts();
  console.log(products);
  let content;

  if (loading) {
    content = <p>loading now</p>
  }

  if (error) {
    content = <p>error now</p>
  }
  if (!loading && !error && products.length === 0) {
    content = <p>no data is showing</p>
  }
  if (!loading && !error && products.length) {
    content =
      products.map((product) => {
        return (
          <h3 key={product.id}>{product.username}</h3>
        )
      })

  }
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      {content}
    </div>
  );
};

export default TopRated;
