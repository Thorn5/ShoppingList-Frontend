import React from "react";
import Accordion from "./Accordion";

const ShoppingList = ({ shoppingListData }) => {
  return (
    <Accordion title="Shopping List">
      {shoppingListData.map((shop) => (
        <Accordion key={shop.list_shop_id} title={shop.shop_name}>
          {shop.aisles.map((aisle) => (
            <Accordion
              key={aisle.aisle_id}
              title={aisle.name.toLowerCase().includes("aisle") ? aisle.name : `${aisle.name} Aisle`}
            >
              {aisle.products.map((product) => (
                <Accordion
                  key={product.product_id}
                  title={`${product.name} - Quantity: ${product.quantity}`}
                >
                  <p>Notes: {product.notes}</p>
                  <p>Price: ${product.price.toFixed(2)}</p>
                </Accordion>
              ))}
            </Accordion>
          ))}
        </Accordion>
      ))}
    </Accordion>
  );
};

export default ShoppingList;
