// ShoppingList.jsx

import { useState } from 'react';
import Accordion from './Accordion';

const ShoppingList = ({ shoppingListData }) => {
  const [openShops, setOpenShops] = useState({});
  const [openAisles, setOpenAisles] = useState({});
  const [openProducts, setOpenProducts] = useState({});

  const toggleAccordion = (level, id) => {
    const setterMap = {
      0: setOpenShops,
      1: setOpenAisles,
      2: setOpenProducts,
    };
    setterMap[level]((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleDoubleClick = (level) => {
    const setterMap = {
      0: setOpenShops,
      1: setOpenAisles,
      2: setOpenProducts,
    };
    setterMap[level]((prev) => {
      const allOpen = Object.values(prev).every(Boolean);
      const newState = {};
      Object.keys(prev).forEach((key) => {
        newState[key] = !allOpen;
      });
      return newState;
    });
  };

  return (
    <div className="shopping-list">
      {shoppingListData.map((shop) => (
        <Accordion
          key={shop.list_shop_id}
          title={shop.shop_name}
          isOpen={openShops[shop.list_shop_id]}
          onToggle={() => toggleAccordion(0, shop.list_shop_id)}
          onDoubleClick={handleDoubleClick}
          level={0}
        >
          {shop.aisles.map((aisle) => (
            <Accordion
              key={aisle.aisle_id}
              title={aisle.name}
              isOpen={openAisles[aisle.aisle_id]}
              onToggle={() => toggleAccordion(1, aisle.aisle_id)}
              onDoubleClick={handleDoubleClick}
              level={1}
            >
              {aisle.products.map((product) => (
                <Accordion
                  key={product.product_id}
                  title={`${product.name} (Quantity: ${product.quantity})`}
                  isOpen={openProducts[product.product_id]}
                  onToggle={() => toggleAccordion(2, product.product_id)}
                  onDoubleClick={handleDoubleClick}
                  level={2}
                >
                  <p>Notes: {product.notes}</p>
                </Accordion>
              ))}
            </Accordion>
          ))}
        </Accordion>
      ))}
    </div>
  );
};

export default ShoppingList;
