import { useState } from 'react';
import Accordion from './Accordion';

const ShoppingList = ({ shoppingListData }) => {
  const [openShops, setOpenShops] = useState({});
  const [openAisles, setOpenAisles] = useState({});
  const [openProducts, setOpenProducts] = useState({});

  // Toggle individual accordions
  const toggleAccordion = (level, id) => {
    const setterMap = {
      0: setOpenShops,
      1: setOpenAisles,
      2: setOpenProducts,
    };
    setterMap[level]((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Expand/Collapse all accordions at a specific level for all shops
  const toggleExpandAllAtLevelForAllShops = (level) => {
    const setterMap = {
      1: setOpenAisles,
      2: setOpenProducts,
    };

    setterMap[level]((prev) => {
      const allExpanded = Object.values(prev).every(Boolean);
      const newState = {};
      shoppingListData.forEach((shop) => {
        if (level === 1) {
          shop.aisles.forEach((aisle) => {
            newState[aisle.aisle_id] = !allExpanded;
          });
        } else if (level === 2) {
          shop.aisles.forEach((aisle) => {
            aisle.products.forEach((product) => {
              newState[product.product_id] = !allExpanded;
            });
          });
        }
      });
      return newState;
    });
  };

  // Expand/Collapse all accordions at a specific level for a single shop
  const toggleExpandAllAtLevel = (level, parentId, items) => {
    const setterMap = {
      0: setOpenShops,
      1: setOpenAisles,
      2: setOpenProducts,
    };

    setterMap[level]((prev) => {
      const allExpanded = items.every((item) => prev[item.id]);
      const newState = { ...prev };
      items.forEach((item) => {
        newState[item.id] = !allExpanded;
      });
      return newState;
    });
  };

  return (
    <div className="shopping-list">
      {/* Top-level Expand/Collapse All for Shops */}
      <button
        onClick={() =>
          toggleExpandAllAtLevel(
            0,
            null,
            shoppingListData.map((shop) => ({ id: shop.list_shop_id }))
          )
        }
      >
        {Object.values(openShops).every(Boolean) ? 'Collapse All Shops' : 'Expand All Shops'}
      </button>

      {/* New buttons for expanding/collapsing all aisles and products across all shops */}
      <button onClick={() => toggleExpandAllAtLevelForAllShops(1)}>
        {Object.values(openAisles).every(Boolean) ? 'Collapse All Aisles (All Shops)' : 'Expand All Aisles (All Shops)'}
      </button>
      <button onClick={() => toggleExpandAllAtLevelForAllShops(2)}>
        {Object.values(openProducts).every(Boolean) ? 'Collapse All Products (All Shops)' : 'Expand All Products (All Shops)'}
      </button>

      {shoppingListData.map((shop) => (
        <Accordion
          key={shop.list_shop_id}
          title={shop.shop_name}
          isOpen={openShops[shop.list_shop_id]}
          onToggle={() => toggleAccordion(0, shop.list_shop_id)}
          level={0}
        >
          {/* Expand/Collapse All Aisles within a Shop */}
          <button
            onClick={() =>
              toggleExpandAllAtLevel(
                1,
                shop.list_shop_id,
                shop.aisles.map((aisle) => ({ id: aisle.aisle_id }))
              )
            }
          >
            {shop.aisles.every((aisle) => openAisles[aisle.aisle_id])
              ? 'Collapse All Aisles'
              : 'Expand All Aisles'}
          </button>

          {shop.aisles.map((aisle) => (
            <Accordion
              key={aisle.aisle_id}
              title={aisle.name}
              isOpen={openAisles[aisle.aisle_id]}
              onToggle={() => toggleAccordion(1, aisle.aisle_id)}
              level={1}
            >
              {/* Expand/Collapse All Products within an Aisle */}
              <button
                onClick={() =>
                  toggleExpandAllAtLevel(
                    2,
                    aisle.aisle_id,
                    aisle.products.map((product) => ({ id: product.product_id }))
                  )
                }
              >
                {aisle.products.every((product) => openProducts[product.product_id])
                  ? 'Collapse All Products'
                  : 'Expand All Products'}
              </button>

              {aisle.products.map((product) => (
                <Accordion
                  key={product.product_id}
                  title={`${product.name} (Quantity: ${product.quantity})`}
                  isOpen={openProducts[product.product_id]}
                  onToggle={() => toggleAccordion(2, product.product_id)}
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
