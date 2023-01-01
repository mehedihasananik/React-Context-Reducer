import { useReducer } from "react";
import { useContext } from "react";
import { createContext, useEffect, useState } from "react";
import { actionTypes } from "../state/actionTypes";
import { initialState, productReducer } from "../state/ProductReducer";

const PRODUCT_CONTEXT = createContext()

const ProductProvider = ({ children }) => {
  const [data, setData] = useState([])

  const [state, dispatch] = useReducer(productReducer, initialState)



  useEffect(() => {
    dispatch({ type: actionTypes.FETCH_START })
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => dispatch({ type: actionTypes.FETCH_SUCCESS, payload: data })).catch(() => {
        dispatch({ type: actionTypes.FETCH_ERROR })
      })
  }, []);

  const value = {
    state, dispatch
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