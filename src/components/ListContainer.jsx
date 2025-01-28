  // ListContainer.jsx
  import { Suspense, useState } from 'react';
  import ShoppingList from './ShoppingList';
  import ToDoList from './ToDoList';
  import useAsyncAwait from '../customhooks/useAsyncAwait';
  import Accordion from './Accordion';
  
  const ListContainer = () => {
    const userId = 3;
    const url = `${import.meta.env.VITE_SERVER_DOMAIN}/lists/${userId}`;
  
    const { loading, error, apiData } = useAsyncAwait(url);
  
    const shoppingListData = apiData?.shopping_lists || [];
    const toDoListData = apiData?.todo_lists || [];
  
    const [openAccordion, setOpenAccordion] = useState(null);
  
    if (loading) {
      return <div>Loading...</div>;
    }
    if (error) {
      return <div>Error: {error}</div>;
    }
  
    const toggleAccordion = (accordionName) => {
      setOpenAccordion(openAccordion === accordionName ? null : accordionName);
    };
  
    const handleDoubleClick = () => {
      // No-op for ListContainer as we only want one accordion open at a time
    };
  
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <div className="accordion-container">
          <Accordion
            title="Shopping List"
            isOpen={openAccordion === 'shopping'}
            onToggle={() => toggleAccordion('shopping')}
            onDoubleClick={handleDoubleClick}
            level={0}
          >
            <ShoppingList shoppingListData={shoppingListData} />
          </Accordion>
  
          <Accordion
            title="To Do"
            isOpen={openAccordion === 'todo'}
            onToggle={() => toggleAccordion('todo')}
            onDoubleClick={handleDoubleClick}
            level={0}
          >
            <ToDoList toDoListData={toDoListData} />
          </Accordion>
        </div>
      </Suspense>
    );
  };
  
  export default ListContainer;
  