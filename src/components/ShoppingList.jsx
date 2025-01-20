// ShoppingList.jsx
import { React, useState } from "react";

const ShoppingList = ({ shoppingListData }) => {

  console.log('shoppingListData',shoppingListData);

  // State to manage which shops are open
  const [openShops, setOpenShops] = useState([]);

  // Function to toggle a shop's open state
  const toggleShop = (shopId) => {
    setOpenShops((prev) =>
      prev.includes(shopId)
        ? prev.filter((id) => id !== shopId)
        : [...prev, shopId]
    );
  };

  return (
    <div className="shopping-list">
      {/* Loop through each shop in the data */}
      {shoppingListData.map((shop) => (
        <div
          key={shop.list_shop_id}
          className="accordion-item"
          style={{
            border: "1px solid #ccc",
            margin: "10px 0",
            padding: "10px",
          }}
        >
          {/* Shop Header */}
          <button
            className="accordion-header"
            onClick={() => toggleShop(shop.list_shop_id)}
            aria-expanded={openShops.includes(shop.list_shop_id)}
            style={{
              backgroundColor: "#f9f9f9",
              padding: "10px",
              width: "100%",
              textAlign: "left",
              cursor: "pointer",
              border: "none",
              outline: "none",
            }}
          >
            {shop.shop_name}
          </button>

          {/* Shop Body */}
          {openShops.includes(shop.list_shop_id) && (
            <div className="accordion-body">
              {/* Loop through aisles */}
              {shop.aisles.map((aisle) => (
                <div key={aisle.aisle_id} style={{ marginBottom: "15px" }}>
                  <h4 style={{ marginBottom: "5px" }}>{aisle.name}</h4>
                  <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                    {/* Loop through products */}
                    {aisle.products.map((product) => (
                      <li
                        key={product.product_id}
                        style={{
                          marginBottom: "10px",
                          padding: "10px",
                          border: "1px solid #ddd",
                          borderRadius: "5px",
                        }}
                      >
                        <strong>{product.name}</strong>
                        <p style={{ margin: "5px 0" }}>
                          <em>Notes:</em> {product.notes}
                        </p>
                        <p style={{ margin: "5px 0" }}>
                          <em>Quantity:</em> {product.quantity}
                        </p>
                        <p style={{ margin: "5px 0" }}>
                          <em>Price:</em> ${product.price.toFixed(2)}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};


export default ShoppingList