import React, { createContext, useEffect, useState } from "react";
import axios from "./Axios";
export const ProductContext = createContext();

const Contex = (props) => {
  const [products, setproducts] = useState(
    JSON.parse(localStorage.getItem("products")) || null
  );
  // const getproducts = async () => {
  //   try {
  //     const { data } = await axios("products");
  //     setproducts(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getproducts();
  // }, []);

  return (
    <ProductContext.Provider value={[products, setproducts]}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default Contex;
