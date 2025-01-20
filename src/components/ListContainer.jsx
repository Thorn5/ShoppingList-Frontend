// ListContainer.jsx
import React, { Suspense, useState, useEffect } from 'react'
import ShoppingList from './ShoppingList'
import ToDoList from './ToDoList'
import useAsyncAwait from '../customhooks/useAsyncAwait';

const ListContainer = () => {
  const userId = 2;
  const url = `${import.meta.env.VITE_SERVER_DOMAIN}/lists/${userId}`

  const { loading, error, apiData }= useAsyncAwait(url);

  // Ensure apiData is defined before accessing properties
  const shoppingListData = apiData?.shopping_lists || [];
  const toDoListData = apiData?.todo_lists || [];

    // State to manage which component is currently active
    const [activeComponent, setActiveComponent] = useState('ListContainer');

      // Handlers to switch between components
  const showShoppingList = () => setActiveComponent('ShoppingList');
  const showToDoList = () => setActiveComponent('ToDoList');
  const showListContainer = () => setActiveComponent('ListContainer');

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  // return (
  //   <Suspense fallback={<div>Loading...</div>}>
  //     <ShoppingList shoppingListData={shoppingListData} />
  //     <ToDoList toDoListData={toDoListData} />
  //   </Suspense>
  // );

  // Conditional rendering based on activeComponent state
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {activeComponent === 'ListContainer' && (
        <div>
          <h1>Welcome to the List Container</h1>
          <button onClick={showShoppingList}>Show Shopping List</button>
          <button onClick={showToDoList}>Show To-Do List</button>
        </div>
      )}
      {activeComponent === 'ShoppingList' && (
        <div>
          <ShoppingList shoppingListData={shoppingListData} />
          <button onClick={showListContainer}>Back to List Container</button>
        </div>
      )}
      {activeComponent === 'ToDoList' && (
        <div>
          <ToDoList toDoListData={toDoListData} />
          <button onClick={showListContainer}>Back to List Container</button>
        </div>
      )}
    </Suspense>
  );

}

export default ListContainer
