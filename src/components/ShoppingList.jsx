// ShoppingList.jsx
import { React, useState } from "react";
import useAsyncAwait from "../customHooks/useAsyncAwait";
import Test from "./Test";
import "../styles/ShoppingList.css";


const ShoppingList = () => {
  // const userId = 2;

  // const url = `${import.meta.env.VITE_SERVER_DOMAIN}/list/${userId}` // insert captured user ID here`;
  // const { loading, error, apiData, moduleCalled } = useAsyncAwait(url);

  return (
    <>
      <div>ShoppingList</div>
      <Test />
    </>
  )
}

export default ShoppingList