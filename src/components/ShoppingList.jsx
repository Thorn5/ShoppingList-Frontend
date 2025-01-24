// ShoppingList.jsx
import React from "react";

const ShoppingList = ({ shoppingListData }) => {
  return (
    <div className="shopping-list">
      {shoppingListData.map((shop) => (
        <div key={shop.list_shop_id} className="shop-item">
          <h3>{shop.shop_name}</h3>
          {shop.aisles.map((aisle) => (
            <div key={aisle.aisle_id} className="aisle-item">
              <h4>{aisle.name}</h4>
              <ul>
                {aisle.products.map((product) => (
                  <li key={product.product_id}>
                    <strong>{product.name}</strong>
                    <p>Notes: {product.notes}</p>
                    <p>Quantity: {product.quantity}</p>
                    <p>Price: ${product.price.toFixed(2)}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ShoppingList
