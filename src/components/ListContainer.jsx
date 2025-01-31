// ListContainer.jsx
import { Suspense, useState } from 'react';
import ShoppingList from './ShoppingList';
import ToDoList from './ToDoList';
import useAsyncAwait from '../customhooks/useAsyncAwait';

const ListContainer = () => {
  const [activeTab, setActiveTab] = useState('shopping');
  const userId = 3;
  const url = `${import.meta.env.VITE_SERVER_DOMAIN}/lists/${userId}`;
  const { loading, error, apiData } = useAsyncAwait(url);
  const shoppingListData = apiData?.shopping_lists || [];
  const toDoListData = apiData?.todo_lists || [];

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="container">
        <div className="tab-container">
          <button
            onClick={() => setActiveTab('shopping')}
            className={`tab ${activeTab === 'shopping' ? 'active' : ''}`}
          >
            Shopping List
          </button>
          <button
            onClick={() => setActiveTab('todo')}
            className={`tab ${activeTab === 'todo' ? 'active' : ''}`}
          >
            To-Do List
          </button>
        </div>

        <div>
          {activeTab === 'shopping' ? (
            <ShoppingList shoppingListData={shoppingListData} />
          ) : (
            <ToDoList toDoListData={toDoListData} />
          )}
        </div>
      </div>
    </Suspense>
  );
};
export default ListContainer;