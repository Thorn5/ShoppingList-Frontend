// ShoppingList.jsx
import { useState } from 'react';
import Accordion from './Accordion';

const ShoppingList = ({ shoppingListData }) => {
  const [openShops, setOpenShops] = useState({});
  const [openAisles, setOpenAisles] = useState({});

  // Toggle individual accordions
  const toggleAccordion = (level, id) => {
    const setterMap = {
      0: setOpenShops,
      1: setOpenAisles,
    };
    setterMap[level]((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="list">
      {shoppingListData.map((shop) => (
        <Accordion
          key={shop.list_shop_id}
          title={shop.shop_name}
          isOpen={openShops[shop.list_shop_id]}
          onToggle={() => toggleAccordion(0, shop.list_shop_id)}
          level={0}
        >
          {shop.aisles.map((aisle) => (
            <Accordion
              key={aisle.aisle_id}
              title={aisle.name}
              isOpen={openAisles[aisle.aisle_id]}
              onToggle={() => toggleAccordion(1, aisle.aisle_id)}
              level={1}
            >
              {aisle.products.map((product) => (
                <div key={product.product_id}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>{`${product.quantity} ${product.name}`}</span>
                    <div style={{
                      border: '1px solid #ccc',
                      padding: '5px',
                      borderRadius: '5px',
                      marginLeft: '10px',
                      fontSize: '0.9em'
                    }}>
                      Notes: {product.notes}
                    </div>
                  </div>
                </div>
              ))}
            </Accordion>
          ))}
        </Accordion>
      ))}
    </div>
  );
  
};
export default ShoppingList;