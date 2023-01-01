import { useReducer } from "react";
import { useContext } from "react";
import { createContext, useEffect, useState } from "react";

const PRODUCT_CONTEXT = createContext()

const ProductProvider = ({ children }) => {
  const [data, setData] = useState([])

  const [] = useReducer(reduce, initialState)



  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setData(data.slice(0, 10)))
  }, []);

  const value = {
    data,
  }

  return (
    <PRODUCT_CONTEXT.Provider value={value}>
      {children}
    </PRODUCT_CONTEXT.Provider>
  );
}
export const useProducts = () => {
  const context = useContext(PRODUCT_CONTEXT);
  return context;
}

export default ProductProvider;