import React, { createContext, useState, useEffect } from "react";
import Axios from "axios";
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  // products state
  const [products, setProducts] = useState([]);
  // fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      const baseURL = "https://fakestoreapi.com/products";
      // const response = await fetch("https://fakestoreapi.com/products");
      await Axios.get(baseURL).then((response) => {
        setProducts(response.data);
      });
      // const data = await response.json();
      // setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
