// ToDoList.jsx
import React from 'react';

const ToDoList = ({ toDoListData }) => {
  return (
    <div className="todo-list">
      {toDoListData.map((list) => (
        <div key={list.list_id} className="list-item">
          <h3>{list.name}</h3>
          <p>{list.description}</p>
          {list.entries && list.entries.length > 0 ? (
            <ul>
              {list.entries.map((entry) => (
                <li key={entry.entry_id}>
                  <strong>{entry.name}</strong>
                  <p>{entry.description}</p>
                  <p>Due: {entry.due_date}</p>
                  <p>Status: {entry.status}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No entries in this list.</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default ToDoList;
