import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext({});

export const CartContextProvider = ({ children }) => {
  const [nameFilter, setNameFilter] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://innovationbrindes-dev.com.br/api/innova-dinamica/produtos/listar",
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function onChangeNameFilter(event) {
    setNameFilter(event.target.value);
  }

  return (
    <CartContext.Provider
      value={{
        nameFilter,
        products,
        setProducts,
        onChangeNameFilter,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
