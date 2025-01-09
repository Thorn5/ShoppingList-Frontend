// ShoppingList.jsx
import { React, useState } from "react";
import useAsyncAwait from "../customHooks/useAsyncAwait";
import "../styles/ShoppingList.css";

const ShoppingList = () => {

    // State to manage the open/close state of each card
    const [userOpen, setUserOpen] = useState({});
    const [shopOpen, setShopOpen] = useState({});
    const [aisleOpen, setAisleOpen] = useState({});

    // Function to toggle user card
    const toggleUser = (userId) => {
        setUserOpen(prevState => ({
            ...prevState,
            [userId]: !prevState[userId]
        }));
    };

    // Function to toggle shop card
    const toggleShop = (userId, shopId) => {
        setShopOpen(prevState => ({
            ...prevState,
            [`${userId}-${shopId}`]: !prevState[`${userId}-${shopId}`]
        }));
    };

    // Function to toggle aisle card
    const toggleAisle = (userId, shopId, aisleId) => {
        setAisleOpen(prevState => ({
            ...prevState,
            [`${userId}-${shopId}-${aisleId}`]: !prevState[`${userId}-${shopId}-${aisleId}`]
        }));
    };


    const url = `${import.meta.env.VITE_SERVER_DOMAIN}/lists`;
    const { loading, error, apiData, moduleCalled } = useAsyncAwait(url);

    return (
        <div>
            <>
                {loading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p>{error}</p>
                ) : (
                    <div>
                        {apiData.map((user) => (
                            <div key={user.user_id} className="user-card">
                                <h2>
                                    User: {user.first_name} {user.last_name}
                                    <button onClick={() => toggleUser(user.user_id)}>
                                        {userOpen[user.user_id] ? 'Collapse' : 'Expand'}
                                    </button>
                                </h2>
                                {userOpen[user.user_id] && (
                                    <div>
                                        {user.shopping_lists.map((shop) => (
                                            <div key={shop.list_shop_id} className="shop-card">
                                                <h3>
                                                    Shop: {shop.shop_name}
                                                    <button onClick={() => toggleShop(user.user_id, shop.list_shop_id)}>
                                                        {shopOpen[`${user.user_id}-${shop.list_shop_id}`] ? 'Collapse' : 'Expand'}
                                                    </button>
                                                </h3>
                                                {shopOpen[`${user.user_id}-${shop.list_shop_id}`] && (
                                                    <div>
                                                        <p>Address: {shop.address}</p>
                                                        <p>Contact: {shop.contact_number}</p>
                                                        <p>Website: {shop.website}</p>
                                                        <div>
                                                            {shop.aisles.map((aisle) => (
                                                                <div key={aisle.aisle_id} className="aisle-card">
                                                                    <h4>
                                                                        Aisle: {aisle.name}
                                                                        <button onClick={() => toggleAisle(user.user_id, shop.list_shop_id, aisle.aisle_id)}>
                                                                            {aisleOpen[`${user.user_id}-${shop.list_shop_id}-${aisle.aisle_id}`] ? 'Collapse' : 'Expand'}
                                                                        </button>
                                                                    </h4>
                                                                    {aisleOpen[`${user.user_id}-${shop.list_shop_id}-${aisle.aisle_id}`] && (
                                                                        <div>
                                                                            <p>Description: {aisle.description}</p>
                                                                            <div>
                                                                                {aisle.products.map((product) => (
                                                                                    <div key={product.product_id} className="product-card">
                                                                                        <p><strong>Product:</strong> {product.name}</p>
                                                                                        <p><strong>Notes:</strong> {product.notes}</p>
                                                                                        <p><strong>Quantity:</strong> {product.quantity}</p>
                                                                                        <p><strong>Price:</strong> ${product.price}</p>
                                                                                    </div>
                                                                                ))}
                                                                            </div>
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </>
        </div>
    )
}

export default ShoppingList