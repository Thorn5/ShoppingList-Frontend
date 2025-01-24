// ListContainer.jsx
import React, { Suspense, useState } from 'react'
import ShoppingList from './ShoppingList'
import ToDoList from './ToDoList'
import useAsyncAwait from '../customhooks/useAsyncAwait';

const ListContainer = () => {
  const userId = 2;
  const url = `${import.meta.env.VITE_SERVER_DOMAIN}/lists/${userId}`

  const { loading, error, apiData } = useAsyncAwait(url);

  // Ensure apiData is defined before accessing properties
  const shoppingListData = apiData?.shopping_lists || [];
  const toDoListData = apiData?.todo_lists || [];

  // State to manage which parent accordion is open
  const [openAccordion, setOpenAccordion] = useState(null);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Function to toggle parent accordions
  const toggleAccordion = (accordionName) => {
    setOpenAccordion(openAccordion === accordionName ? null : accordionName);
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="accordion-container">
        {/* Shopping List Accordion */}
        <div className="accordion-item">
          <button
            className="accordion-header"
            onClick={() => toggleAccordion('shopping')}
            aria-expanded={openAccordion === 'shopping'}
          >
            Shopping List
          </button>
          {openAccordion === 'shopping' && (
            <div className="accordion-body">
              <ShoppingList shoppingListData={shoppingListData} />
            </div>
          )}
        </div>

        {/* To Do List Accordion */}
        <div className="accordion-item">
          <button
            className="accordion-header"
            onClick={() => toggleAccordion('todo')}
            aria-expanded={openAccordion === 'todo'}
          >
            To Do
          </button>
          {openAccordion === 'todo' && (
            <div className="accordion-body">
              <ToDoList toDoListData={toDoListData} />
            </div>
          )}
        </div>
      </div>
    </Suspense>
  );
}

export default ListContainer
