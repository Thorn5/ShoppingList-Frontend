// Test.jsx

import React from 'react'
import "../styles/Test.css";

const mockData = [
    {
        "user_id": 2,
        "first_name": "Bob",
        "last_name": "Johnson",
        "email": "bob@example.com",
        "shopping_lists": [
            {
                "list_shop_id": 4,
                "shop_name": "QuickStop",
                "website": "www.quickstop.com",
                "aisles": [
                    {
                        "aisle_id": 1,
                        "name": "Produce",
                        "description": "Fresh fruits and vegetables, including organic options",
                        "products": [
                            {
                                "product_id": 1,
                                "name": "Bananas",
                                "notes": "Organic",
                                "quantity": 3,
                                "price": 2.49
                            },
                            {
                                "product_id": 2,
                                "name": "Tomatoes",
                                "notes": "Cherry",
                                "quantity": 2,
                                "price": 3.99
                            },
                            {
                                "product_id": 5,
                                "name": "Avocados",
                                "notes": "Ripe",
                                "quantity": 2,
                                "price": 5.49
                            }
                        ]
                    },
                    {
                        "aisle_id": 2,
                        "name": "Dairy",
                        "description": "Milk, cheese, yogurt, and other dairy products",
                        "products": [
                            {
                                "product_id": 6,
                                "name": "Whole Milk",
                                "notes": "Skim",
                                "quantity": 1,
                                "price": 3.29
                            },
                            {
                                "product_id": 7,
                                "name": "Greek Yogurt",
                                "notes": "Vanilla",
                                "quantity": 2,
                                "price": 4.79
                            },
                            {
                                "product_id": 8,
                                "name": "Cheese",
                                "notes": "Swiss",
                                "quantity": 1,
                                "price": 4.99
                            }
                        ]
                    },
                    {
                        "aisle_id": 8,
                        "name": "Snacks",
                        "description": "Chips, cookies, crackers, and other packaged snack foods",
                        "products": [
                            {
                                "product_id": 29,
                                "name": "Potato Chips",
                                "notes": "BBQ",
                                "quantity": 1,
                                "price": 3.49
                            },
                            {
                                "product_id": 30,
                                "name": "Pretzels",
                                "notes": "Whole Wheat",
                                "quantity": 1,
                                "price": 2.99
                            },
                            {
                                "product_id": 32,
                                "name": "Popcorn",
                                "notes": "Kettle Corn",
                                "quantity": 2,
                                "price": 3.79
                            }
                        ]
                    }
                ]
            },
            {
                "list_shop_id": 5,
                "shop_name": "CornerShop",
                "website": "www.cornershop.com",
                "aisles": [
                    {
                        "aisle_id": 4,
                        "name": "Meat",
                        "description": "Fresh and packaged meats, including beef, pork, and poultry",
                        "products": [
                            {
                                "product_id": 14,
                                "name": "Beef",
                                "notes": "Sirloin",
                                "quantity": 1,
                                "price": 9.99
                            },
                            {
                                "product_id": 15,
                                "name": "Chicken",
                                "notes": "Thighs",
                                "quantity": 2,
                                "price": 6.99
                            },
                            {
                                "product_id": 16,
                                "name": "Bacon",
                                "notes": "Thick Cut",
                                "quantity": 1,
                                "price": 5.99
                            }
                        ]
                    },
                    {
                        "aisle_id": 5,
                        "name": "Seafood",
                        "description": "Fresh and frozen fish, shellfish, and other seafood items",
                        "products": [
                            {
                                "product_id": 18,
                                "name": "Salmon",
                                "notes": "Wild Caught",
                                "quantity": 1,
                                "price": 13.99
                            },
                            {
                                "product_id": 20,
                                "name": "Tuna",
                                "notes": "Canned",
                                "quantity": 3,
                                "price": 1.99
                            }
                        ]
                    },
                    {
                        "aisle_id": 6,
                        "name": "Frozen Foods",
                        "description": "Frozen meals, vegetables, fruits, and desserts",
                        "products": [
                            {
                                "product_id": 21,
                                "name": "Vegetables",
                                "notes": "Stir Fry Mix",
                                "quantity": 2,
                                "price": 3.49
                            },
                            {
                                "product_id": 23,
                                "name": "Pizza",
                                "notes": "Supreme",
                                "quantity": 1,
                                "price": 7.99
                            }
                        ]
                    },
                    {
                        "aisle_id": 9,
                        "name": "Beverages",
                        "description": "Soft drinks, juices, water, and other non-alcoholic drinks",
                        "products": [
                            {
                                "product_id": 33,
                                "name": "Juice",
                                "notes": "Apple",
                                "quantity": 1,
                                "price": 3.79
                            },
                            {
                                "product_id": 34,
                                "name": "Water",
                                "notes": "Sparkling",
                                "quantity": 2,
                                "price": 1.99
                            },
                            {
                                "product_id": 36,
                                "name": "Coffee",
                                "notes": "Ground",
                                "quantity": 1,
                                "price": 8.99
                            }
                        ]
                    }
                ]
            },
            {
                "list_shop_id": 6,
                "shop_name": "ValueMart",
                "website": "www.valuemart.com",
                "aisles": [
                    {
                        "aisle_id": 7,
                        "name": "Pantry",
                        "description": "Canned goods, pasta, rice, and other shelf-stable items",
                        "products": [
                            {
                                "product_id": 25,
                                "name": "Pasta Sauce",
                                "notes": "Alfredo",
                                "quantity": 1,
                                "price": 3.99
                            },
                            {
                                "product_id": 26,
                                "name": "Beans",
                                "notes": "Kidney",
                                "quantity": 2,
                                "price": 1.49
                            },
                            {
                                "product_id": 27,
                                "name": "#Rice",
                                "notes": "Basmati",
                                "quantity": 1,
                                "price": 5.99
                            },
                            {
                                "product_id": 28,
                                "name": "Chicken Broth",
                                "notes": "Vegetable",
                                "quantity": 2,
                                "price": 2.79
                            }
                        ]
                    },
                    {
                        "aisle_id": 10,
                        "name": "Cleaning Supplies",
                        "description": "Household cleaners, laundry detergents, and paper products",
                        "products": [
                            {
                                "product_id": 37,
                                "name": "All-Purpose Cleaner",
                                "notes": "Multi-Surface",
                                "quantity": 1,
                                "price": 5.49
                            },
                            {
                                "product_id": 38,
                                "name": "Laundry Detergent",
                                "notes": "Pods",
                                "quantity": 1,
                                "price": 11.99
                            },
                            {
                                "product_id": 39,
                                "name": "Paper Towels",
                                "notes": "Select-A-Size",
                                "quantity": 1,
                                "price": 4.49
                            }
                        ]
                    },
                    {
                        "aisle_id": 11,
                        "name": "Personal Care",
                        "description": "Toiletries, hygiene products, and cosmetics",
                        "products": [
                            {
                                "product_id": 40,
                                "name": "Shampoo",
                                "notes": "Dandruff Control",
                                "quantity": 1,
                                "price": 6.99
                            },
                            {
                                "product_id": 41,
                                "name": "Toothpaste",
                                "notes": "Sensitive",
                                "quantity": 1,
                                "price": 3.79
                            },
                            {
                                "product_id": 42,
                                "name": "Deodorant",
                                "notes": "Antiperspirant",
                                "quantity": 1,
                                "price": 4.29
                            }
                        ]
                    },
                    {
                        "aisle_id": 12,
                        "name": "Baby Care",
                        "description": "Diapers, baby food, formula, and other infant necessities",
                        "products": [
                            {
                                "product_id": 44,
                                "name": "Diapers",
                                "notes": "Size 3",
                                "quantity": 1,
                                "price": 24.99
                            },
                            {
                                "product_id": 45,
                                "name": "Baby Wipes",
                                "notes": "Fragrance-Free",
                                "quantity": 2,
                                "price": 3.49
                            }
                        ]
                    },
                    {
                        "aisle_id": 13,
                        "name": "Pet Supplies",
                        "description": "Pet food, treats, toys, and other pet care items",
                        "products": [
                            {
                                "product_id": 47,
                                "name": "Dog Food",
                                "notes": "Adult Indoor",
                                "quantity": 1,
                                "price": 15.99
                            },
                            {
                                "product_id": 48,
                                "name": "Cat Litter",
                                "notes": "Dental Chews",
                                "quantity": 1,
                                "price": 7.99
                            }
                        ]
                    }
                ]
            }
        ]
    }
]

const Test = () => {
  return (
    <div className="shopping-list">
      <h1>Shopping List Accordion</h1>
      {mockData.map((user) => (
        <details key={user.user_id} className="user-details">
          <summary>{user.first_name} {user.last_name}</summary>
          {user.shopping_lists.map((list) => (
            <details key={list.list_shop_id} className="shop-details">
              <summary>{list.shop_name}</summary>
              <p className="shop-website">Website: {list.website}</p>
              {list.aisles.map((aisle) => (
                <details key={aisle.aisle_id} className="aisle-details">
                  <summary>{aisle.name}</summary>
                  <p className="aisle-description">{aisle.description}</p>
                  <ul className="product-list">
                    {aisle.products.map((product) => (
                      <li key={product.product_id} className="product">
                        <span className="product-name">{product.name}</span>
                        <span className="product-notes">({product.notes})</span>
                        <span className="product-quantity">Qty: {product.quantity}</span>
                        <span className="product-price">${product.price.toFixed(2)}</span>
                      </li>
                    ))}
                  </ul>
                </details>
              ))}
            </details>
          ))}
        </details>
      ))}
    </div>
  );
}

export default Test